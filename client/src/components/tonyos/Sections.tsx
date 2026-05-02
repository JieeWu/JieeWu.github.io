import { useEffect, useRef, useState } from "react";
import { Prompt, Section, AsciiRule, Chip, SkillBar, TerminalWindow } from "./primitives";
import {
  TONY_ABOUT_PARAGRAPHS,
  TONY_EXPERIENCE,
  TONY_PROJECTS,
  TONY_PROFILE,
  TONY_SKILLS,
} from "@/lib/tonyData";
import { useI18n } from "@/lib/i18n";

const PANEL_BG = "/images/tonyos_panel.webp";

/* ===========================================================
   ABOUT — `cat about.md`
   =========================================================== */
export function About() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          for (let i = 1; i <= TONY_ABOUT_PARAGRAPHS.length + 2; i++) {
            setTimeout(() => setVisible(i), 180 * i);
          }
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Section id="about" className="px-4 sm:px-8 lg:px-16 py-14 sm:py-16 lg:py-20">
      <Prompt cmd="cat about.md" cursor className="mb-6" />

      <div className="grid grid-cols-12 gap-6 lg:gap-8" ref={ref}>
        <div className="col-span-12 lg:col-span-8 min-w-0">
          <TerminalWindow
            tabs={["about.md", "intro.txt", "manifesto.md"]}
            activeTab="about.md"
            meta={
              <span className="tos-muted text-[10px] tracking-[0.16em]">
                UTF-8 · MARKDOWN · LF
              </span>
            }
          >
            <div className="p-4 sm:p-6 lg:p-8 space-y-5 font-[450]">
              <div
                className="tos-display-vt text-2xl sm:text-3xl lg:text-4xl tos-phosphor break-words transition-all duration-500"
                style={{ opacity: visible >= 1 ? 1 : 0, transform: visible >= 1 ? "translateY(0)" : "translateY(12px)" }}
              >
                # {t("關於我 / TONY", "About / TONY")}
              </div>
              <AsciiRule className="opacity-40" />
              {TONY_ABOUT_PARAGRAPHS.map((p, i) => (
                <p
                  key={i}
                  className="text-[14px] sm:text-[15px] leading-[1.95] text-[var(--tos-text)] break-words transition-all duration-500"
                  style={{
                    fontFamily: "'Noto Sans TC', 'JetBrains Mono', monospace",
                    opacity: visible >= i + 2 ? 1 : 0,
                    transform: visible >= i + 2 ? "translateY(0)" : "translateY(12px)",
                  }}
                >
                  <span className="tos-phosphor mr-2">¶{String(i + 1).padStart(2, "0")}</span>
                  {p}
                </p>
              ))}
              <AsciiRule className="opacity-40 mt-2" />
              <div
                className="font-mono text-[12px] tos-muted transition-all duration-500"
                style={{
                  opacity: visible >= TONY_ABOUT_PARAGRAPHS.length + 2 ? 1 : 0,
                  transform: visible >= TONY_ABOUT_PARAGRAPHS.length + 2 ? "translateY(0)" : "translateY(12px)",
                }}
              >
                — END OF FILE — &nbsp;·&nbsp; bytes: {TONY_ABOUT_PARAGRAPHS.join("").length}
              </div>
            </div>
          </TerminalWindow>
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-4 min-w-0">
          <TerminalWindow title="vital_signs.json">
            <div className="p-4 sm:p-5 font-mono text-[12px] sm:text-[12.5px] leading-[1.8] space-y-1 break-words">
              <div>
                <span className="tos-amber">"problem_solver"</span>
                <span className="tos-muted">:</span> <span className="tos-phosphor">true</span>,
              </div>
              <div>
                <span className="tos-amber">"chase_to_root_cause"</span>
                <span className="tos-muted">:</span> <span className="tos-phosphor">true</span>,
              </div>
              <div>
                <span className="tos-amber">"fullstack_curious"</span>
                <span className="tos-muted">:</span> <span className="tos-phosphor">true</span>,
              </div>
              <div>
                <span className="tos-amber">"team_player"</span>
                <span className="tos-muted">:</span> <span className="tos-phosphor">true</span>,
              </div>
              <div>
                <span className="tos-amber">"docs_writer"</span>
                <span className="tos-muted">:</span>{" "}
                <span className="tos-amber">"learning"</span>,
              </div>
              <div>
                <span className="tos-amber">"current_focus"</span>
                <span className="tos-muted">:</span>{" "}
                <span className="tos-cyan">"TypeScript / Vue / 雲端部署"</span>
              </div>
            </div>
          </TerminalWindow>

          <TerminalWindow title="todo.next">
            <div className="p-5 font-mono text-[12.5px] leading-[1.9]">
              <div>
                <span className="tos-phosphor">[x]</span> 出社會、第一份工作 ✔
              </div>
              <div>
                <span className="tos-phosphor">[x]</span> Vue 3 / React / RN 三線並行 ✔
              </div>
              <div>
                <span className="tos-phosphor">[x]</span> Spring Boot / NestJS 後端實戰 ✔
              </div>
              <div>
                <span className="tos-amber">[ ]</span> 把 Bicker-ui 推到 v1.0
              </div>
              <div>
                <span className="tos-amber">[ ]</span> BadmintonReserved 上線
              </div>
              <div>
                <span className="tos-amber">[ ]</span> 寫一篇深度技術部落格
              </div>
            </div>
          </TerminalWindow>
        </div>
      </div>
    </Section>
  );
}

/* ===========================================================
   SKILLS — `ls --skills`
   =========================================================== */
export function Skills() {
  const { t } = useI18n();
  return (
    <Section id="skills" className="relative px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-24">
      <div
        className="absolute inset-0 -z-10 opacity-50 pointer-events-none"
        style={{
          backgroundImage: `url(${PANEL_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(180deg, rgba(7,8,10,0.92), rgba(7,8,10,0.7))" }} />

      <Prompt cmd="ls --skills --human" cursor className="mb-6" />
      <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
        <div>
          <div className="tos-h2">
            {t("技能組", "Skills")} <span className="tos-amber">/</span>{" "}
            <span className="tos-display-vt text-3xl">SKILL ATLAS</span>
          </div>
          <div className="tos-muted text-[12px] mt-2 tracking-[0.14em]">
            // legend: <span className="tos-phosphor">main = 主用</span> · 進度條代表熟練度，非絕對值
          </div>
        </div>
        <div className="flex gap-2">
          <Chip tone="muted">total: {TONY_SKILLS.reduce((a, c) => a + c.items.length, 0)}</Chip>
          <Chip tone="amber">main: {TONY_SKILLS.reduce((a, c) => a + c.items.filter(i => i.tag === "main").length, 0)}</Chip>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-5 sm:gap-6">
        {TONY_SKILLS.map((cat) => (
          <div key={cat.id} className="col-span-12 xl:col-span-6 min-w-0">
            <TerminalWindow
              title={`./skills/${cat.groupEn.toLowerCase()}.cfg`}
              meta={
                <span className="tos-muted text-[10px]">
                  {cat.items.length} pcs
                </span>
              }
            >
              <div className="p-4">
                <div className="font-mono text-[12px] tos-amber tracking-[0.18em] mb-2">
                  [{cat.groupEn}] {cat.group}
                </div>
                <div>
                  {cat.items.map((s) => (
                    <SkillBar key={s.name} label={s.name} level={s.level} tag={s.tag} />
                  ))}
                </div>
              </div>
            </TerminalWindow>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ===========================================================
   EXPERIENCE — `tree experience/`
   =========================================================== */
export function Experience() {
  const { t } = useI18n();
  return (
    <Section id="experience" className="px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-24">
      <Prompt cmd="tree experience/ --depth=2" cursor className="mb-6" />
      <div className="tos-h2 mb-2">
        {t("工作經歷", "Experience")} <span className="tos-amber">/</span>{" "}
        <span className="tos-display-vt text-3xl">CAREER LOG</span>
      </div>
      <div className="tos-muted text-[12px] mb-10 tracking-[0.14em]">
        // {t("由近到遠列出每段任務、實際 stack 與成果", "Recent-first — tasks, tech stack & outcomes")}
      </div>

      <TerminalWindow
        title="~/tony/experience"
        meta={<span className="tos-muted text-[10px]">{TONY_EXPERIENCE.length} entries</span>}
      >
        <div className="p-3 sm:p-5 lg:p-6 space-y-4">
          {TONY_EXPERIENCE.map((exp, i) => (
            <div
              key={exp.id}
              className="border border-[var(--tos-border)] rounded-md p-3 sm:p-4 lg:p-5 hover:border-[var(--tos-phosphor-dim)] transition-colors min-w-0"
            >
              <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-[12px]">
                <span className="tos-amber">FIG.{String(i + 1).padStart(2, "0")}</span>
                <span className="tos-muted">·</span>
                <span className="tos-cyan">{exp.period}</span>
                {exp.current && <Chip tone="mag">CURRENT</Chip>}
              </div>
              <div className="flex flex-wrap items-baseline gap-x-2 sm:gap-x-3 break-words">
                <div className="font-mono text-[16px] sm:text-[18px] tos-phosphor break-all">{exp.role}</div>
                <div className="tos-muted">@</div>
                <div className="font-mono text-[14px] sm:text-[16px] text-[var(--tos-text)] break-all">
                  {exp.company}
                </div>
                {exp.companyEn && (
                  <div className="tos-muted text-[11px] sm:text-[12px] break-all">/ {exp.companyEn}</div>
                )}
              </div>
              <ul
                className="mt-3 space-y-1.5 text-[13px] sm:text-[14px] leading-[1.85]"
                style={{ fontFamily: "'Noto Sans TC', 'JetBrains Mono', monospace" }}
              >
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="tos-phosphor flex-shrink-0">›</span>
                    <span className="text-[var(--tos-text)]/95 break-words min-w-0">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {exp.stack.map((s) => (
                  <Chip key={s} tone="cyan">
                    {s}
                  </Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </TerminalWindow>
    </Section>
  );
}

/* ===========================================================
   PROJECTS — `./projects --list`
   =========================================================== */
export function Projects() {
  const { t } = useI18n();
  return (
    <Section id="projects" className="relative px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-24">
      <Prompt cmd="./projects --list --json" cursor className="mb-6" />
      <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
        <div>
          <div className="tos-h2">
            {t("專案作品", "Projects")} <span className="tos-amber">/</span>{" "}
            <span className="tos-display-vt text-3xl">RUNNING PROCESSES</span>
          </div>
          <div className="tos-muted text-[12px] mt-2 tracking-[0.14em]">
            // {t("每個專案都是一支正在跑的 process — PID / cmd / status / stack", "Each project is a running process — PID / cmd / status / stack")}
          </div>
        </div>
        <div className="flex gap-2">
          <Chip tone="amber">{TONY_PROJECTS.length} processes</Chip>
          <Chip tone="mag">2 wip</Chip>
          <Chip tone="cyan">2 stable</Chip>
        </div>
      </div>

      {/* ps -aux table-like header */}
      <div className="hidden md:grid grid-cols-[80px_1fr_120px_140px] px-4 py-2 font-mono text-[11px] tos-muted tracking-[0.18em] border-y border-[var(--tos-border)]">
        <div>PID</div>
        <div>CMD / NAME</div>
        <div>STATUS</div>
        <div>PERIOD</div>
      </div>

      <div className="space-y-5 mt-5">
        {TONY_PROJECTS.map((p) => (
          <div key={p.pid} className="tos-process min-w-0">
            {/* header row — desktop: table-like grid; mobile: stacked */}
            <div className="flex flex-wrap md:grid md:grid-cols-[80px_1fr_120px_140px] gap-x-3 gap-y-2 px-3 sm:px-4 py-3 border-b border-[var(--tos-border)] md:items-center min-w-0">
              <div className="font-mono text-[12px] tos-amber flex-shrink-0">PID {p.pid}</div>
              <div className="order-3 md:order-none basis-full md:basis-auto min-w-0">
                <div className="font-mono text-[11px] sm:text-[12px] tos-cyan break-all">
                  {p.cmd}
                </div>
                <div className="font-mono tos-phosphor text-[15px] sm:text-[16px] mt-0.5 break-words">
                  {p.name}
                </div>
                <div className="tos-muted text-[11px] break-words">{p.nameEn}</div>
              </div>
              <div className="flex-shrink-0">
                <Chip
                  tone={
                    p.status === "RUNNING" || p.status === "WIP"
                      ? "mag"
                      : p.status === "STABLE"
                      ? "default"
                      : "amber"
                  }
                >
                  ● {p.status}
                </Chip>
              </div>
              <div className="font-mono text-[11px] sm:text-[12px] tos-muted flex-shrink-0">{p.period}</div>
            </div>

            {/* body */}
            <div className="grid md:grid-cols-[1fr_280px] gap-5 sm:gap-6 p-3 sm:p-5 min-w-0">
              <div className="min-w-0">
                <div className="font-mono text-[11px] tos-amber tracking-[0.18em] mb-2">
                  ROLE: {p.role}
                </div>
                <ul
                  className="space-y-1.5 text-[13px] sm:text-[14px] leading-[1.85]"
                  style={{ fontFamily: "'Noto Sans TC', 'JetBrains Mono', monospace" }}
                >
                  {p.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="tos-phosphor flex-shrink-0">▸</span>
                      <span className="text-[var(--tos-text)]/95 break-words min-w-0">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-[var(--tos-border)] rounded p-3 self-start min-w-0">
                <div className="font-mono text-[10px] tos-muted tracking-[0.2em] mb-2">
                  TECH STACK
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <Chip key={s} tone="cyan">
                      {s}
                    </Chip>
                  ))}
                </div>
                <div className="tos-dashline my-3" />
                {p.repo && (
                  <>
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 font-mono text-[11px] tos-phosphor hover:text-[var(--tos-amber)] transition-colors mb-2"
                    >
                      <span>$ git clone</span>
                      <span className="tos-cyan truncate">{p.repo.replace("https://github.com/", "")}</span>
                    </a>
                    <div className="tos-dashline my-3" />
                  </>
                )}
                <div className="font-mono text-[10px] tos-muted">
                  $ ps -p {p.pid} -o status
                </div>
                <div className="font-mono text-[12px] tos-phosphor">{p.status}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ===========================================================
   CERTS + LANGS — `certs && langs`
   =========================================================== */
export function CertsAndLangs() {
  return (
    <Section id="certs" className="px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-24">
      <Prompt cmd="certs && cat languages.json" cursor className="mb-6" />
      <div className="grid grid-cols-12 gap-5 sm:gap-6">
        <div className="col-span-12 md:col-span-6 min-w-0">
          <TerminalWindow title="certs.txt">
            <div className="p-5 font-mono text-[14px] space-y-2">
              <div className="tos-amber text-[11px] tracking-[0.18em]">
                # CERTIFICATES
              </div>
              {TONY_PROFILE.certs.map((c, i) => (
                <div key={c} className="flex items-center gap-3">
                  <span className="tos-phosphor">[{String(i + 1).padStart(2, "0")}]</span>
                  <span className="text-[var(--tos-text)]">{c}</span>
                </div>
              ))}
              <div className="tos-dashline my-3" />
              <div className="tos-muted text-[11px]">
                # 證照僅佐證；真正的證明放在 ./projects
              </div>
            </div>
          </TerminalWindow>
        </div>

        <div className="col-span-12 md:col-span-6 min-w-0">
          <TerminalWindow title="languages.json">
            <div className="p-5 font-mono text-[14px] space-y-3">
              {TONY_PROFILE.langs.map((l) => (
                <div key={l.name}>
                  <div className="flex items-baseline justify-between">
                    <div className="text-[var(--tos-text)]">
                      <span className="tos-amber mr-2">●</span>
                      {l.name}
                    </div>
                    <div className="tos-muted text-[12px]">{l.level}</div>
                  </div>
                  <SkillBar label="" level={l.percent} width={26} />
                </div>
              ))}
            </div>
          </TerminalWindow>
        </div>
      </div>
    </Section>
  );
}

/* ===========================================================
   CONTACT — `ssh tony@workshop`
   =========================================================== */
export function Contact() {
  const { t } = useI18n();
  return (
    <Section id="contact" className="px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-24">
      <Prompt cmd="ssh tony@workshop -p 22" cursor className="mb-6" />

      <TerminalWindow title="connection.log">
        <div className="p-4 sm:p-6 lg:p-10 min-w-0">
          <div className="tos-display-vt text-2xl sm:text-4xl lg:text-5xl tos-phosphor break-words">
            $ Welcome to TONY-OS.
          </div>
          <div className="font-mono text-[14px] tos-muted mt-2">
            // {t(
              "連線成功 · 接受合作邀請、技術交流、咖啡",
              "Connected · Open to collaboration, tech talks & coffee"
            )} ☕
          </div>

          <AsciiRule className="my-6 opacity-40" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ContactRow
              label="EMAIL"
              cmd="mailto"
              value={TONY_PROFILE.email}
              href={`mailto:${TONY_PROFILE.email}`}
            />
            <ContactRow
              label="GITHUB"
              cmd="git remote -v"
              value={TONY_PROFILE.github}
              href={`https://${TONY_PROFILE.github}`}
            />
            <ContactRow
              label="LINE"
              cmd="line://"
              value={TONY_PROFILE.line}
            />
          </div>

          {/* Resume download */}
          <div className="mt-6">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="tos-btn inline-flex items-center gap-2"
            >
              <span>$ wget resume.pdf</span>
            </a>
            <span className="font-mono text-[11px] tos-muted ml-3">
              // {t("下載我的履歷", "Download my resume")}
            </span>
          </div>

          <AsciiRule className="my-8 opacity-40" />

          <div className="grid md:grid-cols-3 gap-6 font-mono text-[13px]">
            <div>
              <div className="tos-amber text-[11px] tracking-[0.18em]">
                {t("承接類型", "Service Type")}
              </div>
              <div className="text-[var(--tos-text)] mt-1">
                {t("前端 / 全端 / 系統整合", "Frontend / Fullstack / Integration")}
              </div>
            </div>
            <div>
              <div className="tos-amber text-[11px] tracking-[0.18em]">
                {t("工作模式", "Work Mode")}
              </div>
              <div className="text-[var(--tos-text)] mt-1">
                {t("遠距 / 駐點皆可", "Remote / On-site")}
              </div>
            </div>
            <div>
              <div className="tos-amber text-[11px] tracking-[0.18em]">
                {t("回覆時間", "Response Time")}
              </div>
              <div className="text-[var(--tos-text)] mt-1">
                {t("24hr 內", "Within 24hr")}
              </div>
            </div>
          </div>

          <div className="mt-8 font-mono text-[12px] tos-muted">
            <span className="tos-phosphor">[OK]</span> Connection established. Press{" "}
            <span className="tos-amber">[ENTER]</span> to begin.
          </div>
        </div>
      </TerminalWindow>
    </Section>
  );
}

function ContactRow({
  label,
  cmd,
  value,
  href,
}: {
  label: string;
  cmd: string;
  value: string;
  href?: string;
}) {
  const Tag = href ? "a" : "div";
  return (
    <Tag
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="block border border-[var(--tos-border)] hover:border-[var(--tos-phosphor-dim)] rounded p-4 transition-colors group"
    >
      <div className="font-mono text-[10px] tos-amber tracking-[0.22em]">{label}</div>
      <div className="font-mono text-[11px] tos-muted mt-1">$ {cmd}</div>
      <div className="font-mono text-[15px] tos-phosphor mt-2 group-hover:text-[var(--tos-amber)] transition-colors">
        {value}
      </div>
    </Tag>
  );
}
