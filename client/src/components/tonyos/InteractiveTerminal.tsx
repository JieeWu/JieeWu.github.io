import { useState, useRef, useEffect, type KeyboardEvent } from "react";
import { NAV_SECTIONS } from "@/lib/tonyData";

type Line = { type: "cmd" | "out" | "err"; text: string };

const HELP = [
  "Available commands:",
  "  help            Show this message",
  "  whoami          Jump to profile",
  "  cat about.md    Jump to about",
  "  ls skills       Jump to skills",
  "  tree exp        Jump to experience",
  "  ./projects      Jump to projects",
  "  certs           Jump to certs & langs",
  "  ssh contact     Jump to contact",
  "  clear           Clear terminal",
  "  1-7             Quick jump by section number",
];

const SECTION_MAP: Record<string, string> = {
  whoami: "whoami",
  "cat about.md": "about",
  "cat about": "about",
  about: "about",
  "ls skills": "skills",
  skills: "skills",
  "tree exp": "experience",
  "tree experience": "experience",
  experience: "experience",
  "./projects": "projects",
  projects: "projects",
  "./projects --list": "projects",
  certs: "certs",
  langs: "certs",
  "ssh contact": "contact",
  contact: "contact",
};

export default function InteractiveTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Line[]>([
    { type: "out", text: "TONY-OS v3.0.4 — Interactive Shell" },
    { type: "out", text: 'Type "help" for available commands.' },
  ]);
  const [cmds, setCmds] = useState<string[]>([]);
  const [cmdIdx, setCmdIdx] = useState(-1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [history]);

  function exec(raw: string) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    setCmds((h) => [...h, raw]);
    setCmdIdx(-1);

    const lines: Line[] = [{ type: "cmd", text: `$ ${raw}` }];

    if (cmd === "help") {
      lines.push(...HELP.map((t) => ({ type: "out" as const, text: t })));
    } else if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    } else if (SECTION_MAP[cmd]) {
      const id = SECTION_MAP[cmd];
      const sec = NAV_SECTIONS.find((s) => s.id === id);
      lines.push({ type: "out", text: `Jumping to ${sec?.title ?? id}...` });
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 200);
    } else if (/^[1-7]$/.test(cmd)) {
      const sec = NAV_SECTIONS[parseInt(cmd) - 1];
      lines.push({ type: "out", text: `Jumping to ${sec.title}...` });
      setTimeout(() => document.getElementById(sec.id)?.scrollIntoView({ behavior: "smooth" }), 200);
    } else {
      lines.push({ type: "err", text: `zsh: command not found: ${raw}` });
      lines.push({ type: "out", text: 'Type "help" for available commands.' });
    }

    setHistory((h) => [...h, ...lines]);
    setInput("");
  }

  function onKey(e: KeyboardEvent) {
    if (e.key === "Enter") {
      exec(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmds.length > 0) {
        const i = cmdIdx === -1 ? cmds.length - 1 : Math.max(0, cmdIdx - 1);
        setCmdIdx(i);
        setInput(cmds[i]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (cmdIdx >= 0) {
        const i = cmdIdx + 1;
        if (i >= cmds.length) {
          setCmdIdx(-1);
          setInput("");
        } else {
          setCmdIdx(i);
          setInput(cmds[i]);
        }
      }
    }
  }

  return (
    <div className="tos-window">
      <div className="tos-window-bar">
        <span className="tos-traffic">
          <span className="r" />
          <span className="y" />
          <span className="g" />
        </span>
        <span className="tos-phosphor text-[11px] tracking-[0.16em]">
          interactive-shell
        </span>
        <span className="ml-auto tos-muted text-[10px]">try: help</span>
      </div>
      <div
        ref={scrollRef}
        className="p-4 font-mono text-[12px] sm:text-[13px] max-h-[200px] overflow-y-auto space-y-0.5 cursor-text"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((line, i) => (
          <div
            key={i}
            className={
              line.type === "cmd"
                ? "tos-cyan"
                : line.type === "err"
                  ? "text-red-400"
                  : "text-[var(--tos-text)]/80"
            }
          >
            {line.text}
          </div>
        ))}
        <div className="flex items-center gap-2">
          <span className="tos-phosphor flex-shrink-0">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKey}
            className="flex-1 bg-transparent border-none outline-none text-[var(--tos-text)] font-mono caret-[var(--tos-phosphor)] p-0 m-0 min-w-0"
            autoComplete="off"
            spellCheck={false}
            aria-label="Terminal input"
          />
        </div>
      </div>
    </div>
  );
}
