import { useEffect, useState } from "react";
import { FILE_TREE, NAV_SECTIONS, TONY_PROFILE } from "@/lib/tonyData";

/**
 * Left-rail file explorer (the "OS sidebar").
 * - Top: ASCII identity card
 * - Middle: file tree, click jumps to anchor
 * - Bottom: command shortcuts
 *
 * Active item is computed by IntersectionObserver scroll-spy.
 */
export default function FileExplorer({
  onJump,
}: {
  onJump?: (id: string) => void;
}) {
  const [active, setActive] = useState<string>("whoami");

  useEffect(() => {
    const els = NAV_SECTIONS.map((s) => document.getElementById(s.id)).filter(
      Boolean
    ) as HTMLElement[];

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.05, 0.25, 0.5, 0.75] }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  function go(id?: string) {
    if (!id) return;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      onJump?.(id);
    }
  }

  return (
    <aside className="tos-side h-full p-4 sm:p-5 flex flex-col gap-5 overflow-y-auto">
      {/* ASCII identity card */}
      <div className="tos-window">
        <div className="tos-window-bar">
          <span className="tos-traffic">
            <span className="r" />
            <span className="y" />
            <span className="g" />
          </span>
          <span className="tos-phosphor text-[10px] tracking-[0.18em]">
            id_rsa.pub
          </span>
        </div>
        <div className="p-3 font-mono text-[12px] leading-5">
          <div className="tos-amber">USER</div>
          <div className="text-[var(--tos-text)]">
            {TONY_PROFILE.name}{" "}
            <span className="tos-muted">/ {TONY_PROFILE.alias}</span>
          </div>
          <div className="tos-amber mt-2">ROLE</div>
          <div className="text-[var(--tos-text)]">{TONY_PROFILE.role}</div>
          <div className="tos-amber mt-2">STATUS</div>
          <div className="tos-phosphor flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[var(--tos-phosphor)] shadow-[0_0_8px_rgba(91,254,143,0.7)] animate-pulse" />
            ONLINE
          </div>
        </div>
      </div>

      {/* File tree */}
      <div>
        <div className="tos-muted text-[10px] tracking-[0.22em] mb-2">
          ── FILE TREE ──
        </div>
        <div className="tos-tree text-[13px] leading-6">
          <div>
            <span className="dir">~/tony</span>
          </div>
          {FILE_TREE.slice(1).map((node, i) => {
            const isLast = i === FILE_TREE.length - 2;
            const isActive = active === (node as { target?: string }).target;
            return (
              <button
                key={node.name}
                type="button"
                onClick={() => go((node as { target?: string }).target)}
                className="block w-full text-left hover:bg-[rgba(91,254,143,0.04)] rounded px-1 -mx-1 transition-colors"
              >
                <span className="branch">{isLast ? "└── " : "├── "}</span>
                <span
                  className={
                    node.type === "dir"
                      ? "dir"
                      : isActive
                      ? "active"
                      : "file"
                  }
                >
                  {node.name}
                </span>
                {isActive && (
                  <span className="ml-2 tos-amber text-[10px]">◀ here</span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Quick commands */}
      <div className="mt-2">
        <div className="tos-muted text-[10px] tracking-[0.22em] mb-2">
          ── QUICK CMD ──
        </div>
        <div className="space-y-1.5">
          {NAV_SECTIONS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => go(s.id)}
              className={`block w-full text-left font-mono text-[12px] py-1 px-2 rounded border transition-colors ${
                active === s.id
                  ? "border-[var(--tos-phosphor-dim)] bg-[rgba(91,254,143,0.06)] tos-phosphor"
                  : "border-transparent text-[var(--tos-muted)] hover:text-[var(--tos-text)] hover:border-[var(--tos-border)]"
              }`}
            >
              {s.cmd}
            </button>
          ))}
        </div>
      </div>

      {/* Footer hint */}
      <div className="mt-auto pt-4 border-t border-[var(--tos-border)]">
        <div className="tos-muted text-[10px] tracking-[0.18em]">
          UPTIME: ∞ &nbsp;·&nbsp; SHELL: zsh
        </div>
        <div className="tos-muted text-[10px] mt-1">
          press <span className="tos-amber">[?]</span> for help
        </div>
      </div>
    </aside>
  );
}
