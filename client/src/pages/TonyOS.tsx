import { useEffect, useState, useCallback } from "react";
import BootSplash from "@/components/tonyos/BootSplash";
import FileExplorer from "@/components/tonyos/FileExplorer";
import Whoami from "@/components/tonyos/Whoami";
import {
  About,
  Skills,
  Experience,
  Projects,
  CertsAndLangs,
  Contact,
} from "@/components/tonyos/Sections";
import InteractiveTerminal from "@/components/tonyos/InteractiveTerminal";
import { I18nProvider, useI18n } from "@/lib/i18n";
import { NAV_SECTIONS } from "@/lib/tonyData";
import { Wifi, BatteryFull, Menu, X, Globe } from "lucide-react";

export default function TonyOS() {
  return (
    <I18nProvider>
      <TonyOSInner />
    </I18nProvider>
  );
}

function TonyOSInner() {
  const [booted, setBooted] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [clock, setClock] = useState<string>(() => formatClock(new Date()));
  const { locale, toggle: toggleLang } = useI18n();

  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.body.classList.add("tonyos-body");
    document.body.style.background = "#07080A";
    document.body.style.overflowX = "hidden";
    return () => {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("tonyos-body");
      document.body.style.background = "";
      document.body.style.overflowX = "";
    };
  }, []);

  useEffect(() => {
    const t = setInterval(() => setClock(formatClock(new Date())), 1000);
    return () => clearInterval(t);
  }, []);

  // Close drawer when route hash changes (user clicked a section link)
  useEffect(() => {
    const onHash = () => setDrawerOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Keyboard shortcuts: 1-7 jump to sections
  const onKeyNav = useCallback((e: KeyboardEvent) => {
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
    const n = parseInt(e.key);
    if (n >= 1 && n <= NAV_SECTIONS.length) {
      e.preventDefault();
      document.getElementById(NAV_SECTIONS[n - 1].id)?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", onKeyNav);
    return () => window.removeEventListener("keydown", onKeyNav);
  }, [onKeyNav]);

  return (
    <div className="tonyos relative min-h-screen tonyos-bg-grid">
      {/* CRT scanline overlay */}
      <div className="tonyos-scanlines" />

      {/* Top bar (window chrome) */}
      <header
        className="sticky top-0 z-40 flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-2 border-b"
        style={{
          background: "linear-gradient(180deg, #0F141B 0%, #090c12 100%)",
          borderColor: "var(--tos-border)",
        }}
      >
        {/* Mobile drawer toggle */}
        <button
          type="button"
          aria-label="Toggle file tree"
          className="lg:hidden tos-phosphor border border-[var(--tos-border)] rounded-sm p-1 hover:bg-white/5"
          onClick={() => setDrawerOpen((v) => !v)}
        >
          {drawerOpen ? <X size={14} /> : <Menu size={14} />}
        </button>

        <span className="tos-traffic">
          <span className="r" />
          <span className="y" />
          <span className="g" />
        </span>
        <span className="font-mono text-[11px] sm:text-[12px] tos-phosphor tracking-[0.18em] truncate">
          tony@workshop · ~ — zsh
        </span>
        <span className="hidden md:inline ml-3 font-mono text-[11px] tos-muted">
          80×24 · UTF-8 · NO MOUSE NEEDED
        </span>
        <div className="ml-auto flex items-center gap-2 sm:gap-3 font-mono text-[11px] tos-muted">
          <button
            type="button"
            onClick={toggleLang}
            className="flex items-center gap-1 whitespace-nowrap text-[var(--tos-amber)] hover:text-[var(--tos-phosphor)] transition-colors"
            title="Switch language"
          >
            <Globe size={12} />
            <span>{locale === "zh" ? "EN" : "中文"}</span>
          </button>
          <span className="hidden md:inline tos-muted">|</span>
          <span className="hidden md:inline-flex items-center gap-1">
            <Wifi size={12} className="tos-phosphor" /> linked
          </span>
          <span className="hidden md:inline-flex items-center gap-1">
            <BatteryFull size={14} className="tos-phosphor" /> 100%
          </span>
          <span className="tos-phosphor whitespace-nowrap">{clock}</span>
        </div>
      </header>

      {/* Boot splash */}
      {!booted && <BootSplash onDone={() => setBooted(true)} />}

      {/* Mobile drawer (only < lg) */}
      <div
        className="tonyos-drawer-backdrop lg:hidden"
        data-open={drawerOpen}
        onClick={() => setDrawerOpen(false)}
      />
      <aside
        className="tonyos-drawer lg:hidden"
        data-open={drawerOpen}
        aria-hidden={!drawerOpen}
      >
        <FileExplorer />
      </aside>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] min-h-[calc(100vh-44px-32px)]">
        {/* Sidebar (desktop only) */}
        <div className="hidden lg:block border-b lg:border-b-0 border-[var(--tos-border)] sticky top-[44px] h-[calc(100vh-44px-32px)] overflow-y-auto">
          <FileExplorer />
        </div>

        {/* Content */}
        <main className="relative min-w-0">
          <Whoami />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <CertsAndLangs />
          <Contact />

          {/* Interactive Terminal */}
          <section className="px-4 sm:px-8 lg:px-16 py-10">
            <InteractiveTerminal />
          </section>

          {/* Footer terminal */}
          <footer className="px-4 sm:px-8 lg:px-16 pb-16 pt-10">
            <div
              className="border-t pt-6 grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-[12px] tos-muted"
              style={{ borderColor: "var(--tos-border)" }}
            >
              <div>
                <div className="tos-phosphor">TONY-OS v3.0.4</div>
                <div>compiled: 2026 · powered by ☕ + ssh</div>
              </div>
              <div>
                <div>$ man tony</div>
                <div>請參閱 ./about.md / ./projects --list</div>
              </div>
              <div className="md:text-right">
                <div>© 2026 Tony Wu — All systems nominal.</div>
                <div className="tos-amber">// stay curious. ship things.</div>
              </div>
            </div>
          </footer>
        </main>
      </div>

      {/* Statusbar */}
      <div className="tos-statusbar sticky bottom-0 z-40 flex items-center gap-2 sm:gap-3 px-3 sm:px-6 h-8 overflow-x-auto whitespace-nowrap">
        <span className="pill live tos-phosphor">READY</span>
        <span>tonyos@v3.0.4</span>
        <span className="tos-muted hidden sm:inline">|</span>
        <span className="hidden sm:inline">UTF-8</span>
        <span className="tos-muted hidden sm:inline">|</span>
        <span className="hidden sm:inline">LF</span>
        <span className="tos-muted hidden md:inline">|</span>
        <span className="hidden md:inline">scroll-spy: ON</span>
        <span className="ml-auto hidden lg:inline">
          mem 6.3 / 16 GB · cpu 12% · {clock}
        </span>
      </div>
    </div>
  );
}

function formatClock(d: Date) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}
