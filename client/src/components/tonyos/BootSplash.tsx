import { useEffect, useState } from "react";
import { BOOT_LOG } from "@/lib/tonyData";

/**
 * Full-screen boot animation that streams the BOOT_LOG lines
 * line-by-line, then fades out after a short pause.
 * Click anywhere or press a key to skip.
 */
export default function BootSplash({ onDone }: { onDone: () => void }) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (hide) return;
    if (visibleCount >= BOOT_LOG.length) {
      const t = setTimeout(() => setHide(true), 700);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setVisibleCount((v) => v + 1), 110);
    return () => clearTimeout(t);
  }, [visibleCount, hide]);

  useEffect(() => {
    if (!hide) return;
    const t = setTimeout(onDone, 480);
    return () => clearTimeout(t);
  }, [hide, onDone]);

  useEffect(() => {
    const skip = () => setHide(true);
    window.addEventListener("keydown", skip);
    window.addEventListener("click", skip);
    return () => {
      window.removeEventListener("keydown", skip);
      window.removeEventListener("click", skip);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[80] flex items-start justify-start p-3 sm:p-8 lg:p-12 transition-opacity duration-500 overflow-y-auto ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ background: "#04060A" }}
    >
      <div className="font-mono text-[11px] sm:text-[13px] lg:text-[14px] leading-[1.7] sm:leading-7 max-w-3xl w-full break-words">
        <div className="tos-display-vt text-[var(--tos-phosphor)] text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4">
          TONY-OS&nbsp;v3.0.4
        </div>
        {BOOT_LOG.slice(0, visibleCount).map((line, i) => (
          <div
            key={i}
            className={`tos-bootline ${
              line.tone === "warn"
                ? "tos-warn"
                : line.tone === "err"
                ? "tos-err"
                : "tos-ok"
            }`}
          >
            {line.text}
          </div>
        ))}
        {visibleCount < BOOT_LOG.length && (
          <span className="tos-cursor" />
        )}
        <div className="tos-muted mt-6 text-[11px] tracking-[0.18em]">
          PRESS ANY KEY OR CLICK TO SKIP
        </div>
      </div>
    </div>
  );
}
