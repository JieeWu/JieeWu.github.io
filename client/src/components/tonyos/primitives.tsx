/**
 * TONY-OS · Terminal Cyberpunk
 * Reusable primitives: TerminalWindow, Prompt, AsciiRule,
 * SkillBar, FileTreeItem, ChipMono, BootLine.
 *
 * Style namespace: .tonyos / .tos-*
 * Palette: pure black + phosphor green + amber + magenta
 */
import { ReactNode } from "react";

/* ------------------------------------------------------------
 * TerminalWindow — a Mac-like terminal pane with traffic lights
 * ------------------------------------------------------------ */
export function TerminalWindow({
  title,
  tabs,
  activeTab,
  meta,
  children,
  className = "",
  bodyClassName = "",
}: {
  title?: string;
  tabs?: string[];
  activeTab?: string;
  meta?: ReactNode;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <div className={`tos-window min-w-0 ${className}`}>
      <div className="tos-window-bar flex flex-wrap items-center gap-x-2 gap-y-1 min-w-0">
        <span className="tos-traffic flex-shrink-0">
          <span className="r" />
          <span className="y" />
          <span className="g" />
        </span>
        {tabs ? (
          <div className="tos-tabs ml-2 flex flex-wrap min-w-0">
            {tabs.map((t) => (
              <span
                key={t}
                className="tos-tab"
                data-active={activeTab === t}
              >
                {t}
              </span>
            ))}
          </div>
        ) : (
          <span className="tos-phosphor text-[11px] tracking-[0.16em] truncate min-w-0 max-w-[60%] sm:max-w-none">
            {title ?? "tony@workshop"}
          </span>
        )}
        <span className="ml-auto flex items-center gap-2 sm:gap-3 flex-shrink-0">{meta}</span>
      </div>
      <div className={`min-w-0 ${bodyClassName}`}>{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------
 * Prompt — `tony@workshop:~$ <cmd>`
 * ------------------------------------------------------------ */
export function Prompt({
  user = "tony",
  host = "workshop",
  path = "~",
  cmd,
  cursor = false,
  className = "",
}: {
  user?: string;
  host?: string;
  path?: string;
  cmd: string;
  cursor?: boolean;
  className?: string;
}) {
  return (
    <div className={`tos-prompt ${className}`}>
      <span>
        <span className="who">{user}</span>
        <span className="tos-muted">@</span>
        <span className="who">{host}</span>
        <span className="tos-muted">:</span>
        <span className="where">{path}</span>
        <span className="dollar"> $</span>
      </span>
      <span className="cmd">
        {cmd}
        {cursor && <span className="tos-cursor" />}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------
 * AsciiRule — repeating box-drawing horizontal rule
 * ------------------------------------------------------------ */
export function AsciiRule({ char = "─", className = "" }: { char?: string; className?: string }) {
  // 200 chars is enough to fill any sensible viewport
  const s = char.repeat(220);
  return (
    <div className={`tos-ascii-rule ${className}`} aria-hidden>
      {s}
    </div>
  );
}

/* ------------------------------------------------------------
 * SkillBar — `[████████░░] 84%` style line
 * ------------------------------------------------------------ */
export function SkillBar({
  label,
  level,
  width = 16,
  tag,
}: {
  label: string;
  level: number;
  width?: number;
  tag?: string;
}) {
  const filled = Math.round((level / 100) * width);
  const empty = width - filled;
  return (
    <div className="skill-row flex flex-wrap items-center gap-x-2 sm:gap-x-3 gap-y-1 text-[12px] sm:text-[13px] py-[3px] min-w-0">
      {label && (
        <span className="skill-label flex-1 min-w-0 basis-full sm:basis-auto sm:w-[150px] md:w-[170px] sm:flex-none break-all text-[var(--tos-text)] font-mono">
          {label}
        </span>
      )}
      <span className="tos-bar flex items-center min-w-0 flex-1 overflow-hidden whitespace-nowrap">
        <span className="bracket">[</span>
        <span className="truncate">{"▰".repeat(filled)}</span>
        <span className="dim truncate">{"▱".repeat(empty)}</span>
        <span className="bracket">]</span>
      </span>
      <span className="tos-muted text-[11px] min-w-[36px] text-right tabular-nums">{level}%</span>
      {tag && <span className="tos-chip amber">{tag}</span>}
    </div>
  );
}

/* ------------------------------------------------------------
 * ChipMono — small monospace pill
 * ------------------------------------------------------------ */
export function Chip({
  children,
  tone = "default",
  className = "",
}: {
  children: ReactNode;
  tone?: "default" | "amber" | "mag" | "cyan" | "muted";
  className?: string;
}) {
  const cls =
    tone === "amber"
      ? "tos-chip amber"
      : tone === "mag"
      ? "tos-chip mag"
      : tone === "cyan"
      ? "tos-chip cyan"
      : tone === "muted"
      ? "tos-chip muted"
      : "tos-chip";
  return <span className={`${cls} ${className}`}>{children}</span>;
}

/* ------------------------------------------------------------
 * Section anchor wrapper
 * ------------------------------------------------------------ */
export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-[88px] ${className}`}>
      {children}
    </section>
  );
}

/* ------------------------------------------------------------
 * Tree node line (file system style)
 * ------------------------------------------------------------ */
export function TreeNode({
  depth = 0,
  type = "file",
  name,
  active = false,
  onClick,
}: {
  depth?: number;
  type?: "file" | "dir";
  name: string;
  active?: boolean;
  onClick?: () => void;
}) {
  const indent = "│   ".repeat(Math.max(0, depth - 1));
  const branch = depth > 0 ? "├── " : "";
  const icon = type === "dir" ? "" : "";
  return (
    <button
      type="button"
      onClick={onClick}
      className={`block w-full text-left tos-tree hover:opacity-100 ${
        active ? "" : "opacity-90"
      }`}
    >
      <span className="branch">{indent}{branch}</span>
      <span className={type === "dir" ? "dir" : active ? "active" : "file"}>
        {icon}{name}
        {type === "dir" ? "" : ""}
      </span>
    </button>
  );
}
