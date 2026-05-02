import { Prompt, Section, AsciiRule, Chip } from "./primitives";
import { TONY_PROFILE } from "@/lib/tonyData";
import { useI18n } from "@/lib/i18n";

const HERO_BG = "/images/tonyos_hero.webp";
const AVATAR = "/images/messageImage_1777625932542.jpg";

/**
 * `$ whoami` — Hero
 * Big mono name + role + status + key tags, with CRT background image.
 */
export default function Whoami() {
  const { t } = useI18n();
  return (
    <Section id="whoami" className="relative">
      {/* CRT background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover opacity-50"
        />
        <div className="tos-vignette" />
      </div>

      <div className="relative px-4 sm:px-8 lg:px-16 pt-8 sm:pt-10 lg:pt-12 pb-16 sm:pb-20">
        <Prompt cmd="whoami --verbose" cursor className="mb-6 sm:mb-8" />

        <div className="grid grid-cols-12 gap-6 sm:gap-8 items-start lg:items-end">
          <div className="col-span-12 lg:col-span-8 min-w-0">
            <div className="tos-muted text-[12px] tracking-[0.22em] mb-3">
              # OUTPUT — uid=1001(tony) gid=1001(engineer)
            </div>

            <h1 className="tos-h1 tos-flicker leading-[1.05] break-words">
              <span className="tos-glitch" data-text="TONY">TONY</span>
              <span className="tos-cursor align-baseline" />
            </h1>

            <div className="mt-3 flex flex-wrap items-baseline gap-x-3 sm:gap-x-4 gap-y-1">
              <span className="font-mono text-lg sm:text-xl tos-amber">
                {TONY_PROFILE.name}
              </span>
              <span className="tos-muted text-[12px] sm:text-base">// {TONY_PROFILE.nameEn}</span>
              <span className="tos-muted text-[12px] sm:text-base">// {TONY_PROFILE.roleZh}</span>
            </div>

            <p className="mt-5 sm:mt-6 max-w-xl text-[14px] sm:text-[15px] leading-7 text-[var(--tos-text)]/90">
              <span className="tos-phosphor">&gt;</span>{" "}
              {t(
                TONY_PROFILE.intro,
                "From frontend layouts to backend APIs, databases to deployment — I chase every problem to its root before delivering."
              )}
              <br />
              <span className="tos-muted">
                #&nbsp;Frontend → Fullstack · Vue / React · NestJS / Spring Boot
              </span>
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              <Chip>Frontend</Chip>
              <Chip tone="amber">Fullstack-curious</Chip>
              <Chip tone="cyan">Vue 3</Chip>
              <Chip tone="cyan">React</Chip>
              <Chip tone="cyan">React Native</Chip>
              <Chip tone="cyan">NestJS</Chip>
              <Chip tone="cyan">Spring Boot</Chip>
              <Chip tone="cyan">PostgreSQL</Chip>
              <Chip tone="mag">CI/CD</Chip>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <a className="tos-btn" href="#projects">
                ./projects --list
              </a>
              <a className="tos-btn tos-btn-ghost" href="#about">
                cat about.md
              </a>
              <a className="tos-btn tos-btn-ghost" href="#contact">
                ssh tony@workshop
              </a>
            </div>
          </div>

          {/* avatar terminal card */}
          <div className="col-span-12 lg:col-span-4 min-w-0 max-w-md mx-auto lg:mx-0 w-full">
            <div className="tos-window">
              <div className="tos-window-bar">
                <span className="tos-traffic">
                  <span className="r" />
                  <span className="y" />
                  <span className="g" />
                </span>
                <span className="tos-phosphor text-[10px] tracking-[0.18em]">
                  ./avatar.png
                </span>
              </div>
              <div className="p-4">
                <div className="aspect-square w-full overflow-hidden border border-[var(--tos-border)] bg-black">
                  <img
                    src={AVATAR}
                    alt="TONY pixel avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4 font-mono text-[12px] space-y-1">
                  <div>
                    <span className="tos-amber">name</span>
                    <span className="tos-muted">:</span> "{TONY_PROFILE.alias}"
                  </div>
                  <div>
                    <span className="tos-amber">role</span>
                    <span className="tos-muted">:</span>{" "}
                    "{TONY_PROFILE.role}"
                  </div>
                  <div>
                    <span className="tos-amber">loc</span>
                    <span className="tos-muted">:</span>{" "}
                    "{TONY_PROFILE.location}"
                  </div>
                  <div>
                    <span className="tos-amber">status</span>
                    <span className="tos-muted">:</span>{" "}
                    <span className="tos-phosphor">"OPEN_TO_WORK"</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AsciiRule className="mt-12 opacity-40" />
      </div>
    </Section>
  );
}
