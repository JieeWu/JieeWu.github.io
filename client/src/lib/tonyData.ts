// ============================================================
// TONY-OS · Profile Data
// Source: 吳佳杰（TONY）104 履歷（使用者提供）
// 集中所有顯示資料，方便往後維護。
// ============================================================

export const TONY_PROFILE = {
  name: "吳佳杰",
  nameEn: "Tony Wu",
  alias: "TONY",
  role: "Fullstack Engineer",
  roleZh: "全端工程師",
  location: "Taiwan",
  status: "ONLINE — open to fullstack roles",
  intro:
    "從前端切版到後端 API、資料庫到部署維運，把問題追到底再交付的人。",
  email: "wujia51819@gmail.com",
  github: "github.com/JieeWu",
  line: "wujia0227",
  certs: ["TQC ／ EEC", "TQC-OA ／ 中文輸入"],
  langs: [
    { name: "中文", level: "聽 / 說 / 讀 / 寫 — 精通", percent: 100 },
    { name: "台語", level: "中等", percent: 60 },
    { name: "English", level: "Reading / Documentation", percent: 55 },
  ],
} as const;

// ------------------------------------------------------------
// 自傳（多段，以 boot 終端機方式逐段排版）
// ------------------------------------------------------------
export const TONY_ABOUT_PARAGRAPHS: string[] = [
  "我是吳佳杰，畢業於南臺科技大學資訊工程系，目前擔任前端工程師。大學期間建立了程式設計與資訊工程基礎，後續透過資展國際前端工程師養成班補強前端框架、後端 API、資料庫與專題開發能力，並在正式工作中累積前端開發、系統整合與跨部門協作經驗。",
  "工作經驗橫跨 Angular、React、Vue 3、ASP.NET Core 與資料庫整合。在創創數位任職期間，負責 React 前端切版、API 串接與 SignalR 即時通訊功能，學習如何在產品節奏中與設計、後端、QA 協作。在采義科技任職期間，進一步參與 Vue 3 SPA、Leaflet 地圖整合、ASP.NET Core API、JWT/SSO、資料庫正規化與 IIS 部署，逐步建立從前端到後端、資料庫與部署維運的完整視角。",
  "現職則透過 Azure DevOps PBI/Task 追蹤需求與工作項目，參與 ESHClouds 平台的 Action Tracking、Legal、Risk 等模組開發，除了完成前端實作，也會參與後端 API、資料流與需求可行性的討論。",
  "除了工作專案，也持續透過個人與組織專案累積實作能力。BadmintonReserved 是一套羽球場次管理與 LINE 小幫手系統，包含 Vue 3 前端、Spring Boot API、LINE LIFF、Webhook Bot、CronJob 與 GitHub Actions CI/CD，讓我更熟悉多服務系統整合、第三方平台串接與部署流程。Bicker-ui 則是以 React Native/Expo、NestJS、Prisma、PostgreSQL 建立的社群 App 雛形，練習從產品流程、資料模型、API 模組到前端頁面架構的完整設計。",
  "我認為自己最大的優勢是願意把問題追到底，除了完成畫面，也會主動理解資料流、API 設計、權限驗證與部署環境，讓前後端整合更順暢。未來希望在前端或全端工程職位中，持續深化 TypeScript、Vue/React、後端 API 與雲端部署能力，成為能穩定交付功能、也能協助團隊改善架構與開發效率的工程師。",
];

// ------------------------------------------------------------
// 工作經歷（樹狀檢視 / 詳細條列）
// ------------------------------------------------------------
export type ExperienceItem = {
  id: string;
  company: string;
  companyEn?: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
  stack: string[];
  current?: boolean;
};

export const TONY_EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-eshclouds",
    company: "現職 ／ ESHClouds 平台",
    companyEn: "Current Role",
    role: "Frontend Engineer",
    period: "現職",
    bullets: [
      "於 ESHClouds 平台參與 Action Tracking、Legal、Risk 等模組開發",
      "透過 Azure DevOps PBI/Task 追蹤需求與工作項目",
      "除前端實作外，也參與後端 API、資料流與需求可行性的討論",
    ],
    stack: ["Vue 3", "TypeScript", "ASP.NET Core", "Azure DevOps"],
    current: true,
  },
  {
    id: "exp-tsaiyi",
    company: "采義科技",
    companyEn: "Tsai-Yi Tech",
    role: "Frontend / Fullstack Engineer",
    period: "前一份工作",
    bullets: [
      "Vue 3 SPA 與 Leaflet 地圖整合",
      "ASP.NET Core API、JWT / SSO、資料庫正規化",
      "IIS 部署與營運維護，建立前端到後端／部署的完整視角",
    ],
    stack: ["Vue 3", "ASP.NET Core", "JWT", "SSO", "Leaflet", "IIS"],
  },
  {
    id: "exp-cdigital",
    company: "創創數位",
    companyEn: "Creative Digital",
    role: "Frontend Engineer",
    period: "再前一份",
    bullets: [
      "React 前端切版與 API 串接",
      "整合 SignalR 提供即時通訊功能",
      "在產品節奏中與設計、後端、QA 跨部門協作",
    ],
    stack: ["React", "SignalR", "TypeScript"],
  },
  {
    id: "exp-edu",
    company: "資展國際 ／ 前端工程師養成班",
    companyEn: "ITRI ITI · Frontend Bootcamp",
    role: "Bootcamp Trainee",
    period: "進修經歷",
    bullets: [
      "補強前端框架、後端 API、資料庫與專題開發能力",
      "完整一條龍專題實作經驗",
    ],
    stack: ["JavaScript", "React", "Node.js", "SQL"],
  },
  {
    id: "exp-school",
    company: "南臺科技大學 ／ 資訊工程系",
    companyEn: "STUST · CSIE",
    role: "Bachelor",
    period: "學歷",
    bullets: ["奠定程式設計與資訊工程基礎"],
    stack: ["C/C++", "Java", "OS", "Data Structures"],
  },
];

// ------------------------------------------------------------
// 專案
// ------------------------------------------------------------
export type ProjectItem = {
  pid: string;
  cmd: string;
  name: string;
  nameEn: string;
  status: "RUNNING" | "WIP" | "STABLE" | "PROTOTYPE";
  period: string;
  role: string;
  bullets: string[];
  stack: string[];
};

export const TONY_PROJECTS: ProjectItem[] = [
  {
    pid: "0001",
    cmd: "./bicker-ui --serve --watch",
    name: "Bicker-ui ｜ 吵架擂台社群 App",
    nameEn: "Bicker-ui · Social Arena App",
    status: "WIP",
    period: "2026/04 — 進行中",
    role: "全端雛形 ／ 架構設計",
    bullets: [
      "規劃 React Native / Expo App，建立 60+ 個 route 與核心頁面流程（登入、發起擂台、邀請對手、投票結果、留言、好友、私訊、排行榜、獎勵商城、設定等）",
      "以 React + TypeScript + Tailwind / Radix UI 建立 Web 互動設計稿與元件庫",
      "NestJS 模組化 REST API，包含 Auth、Users、Arenas、Votes、Comments、Messages、Friends、Notifications、Reports、Rewards 等 17 個 Controller 模組",
      "Prisma 設計 PostgreSQL 資料模型，建立 19 個 Model（User、Arena、Vote、Comment、Friendship、Message、Reward、Coupon、Badge、PointsHistory…）",
      "實作 JWT / OAuth 認證、投票唯一限制、留言／最佳解答、積分獎勵、通知偏好、檢舉回報等社群常見功能",
    ],
    stack: [
      "React Native",
      "Expo",
      "React",
      "TypeScript",
      "Tailwind",
      "Radix UI",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "OAuth",
    ],
  },
  {
    pid: "0002",
    cmd: "./badminton-reserved --bot --cron",
    name: "BadmintonReserved ｜ 羽球場次預約 + LINE 小幫手",
    nameEn: "BadmintonReserved · Court Booking System",
    status: "WIP",
    period: "2026/04 — 進行中",
    role: "全端 ／ 系統整合",
    bullets: [
      "Vue 3 + TypeScript + Vite + Vue Router 建立前端管理介面與 LIFF 頁面，規劃 30+ 個頁面路由（場次、球隊、球館、報名、個人資料、後台管理）",
      "Spring Boot 3 + Java 17 + Spring Security + JPA + PostgreSQL 開發後端 API（球隊、球館、行事曆、場次、會員、付款、驗證、檔案）",
      "整合 LINE LIFF 與 Webhook，支援透過 LINE 私訊／群組查詢場次、快速報名、取消報名、建立行事曆、建立臨時場次",
      "Webhook API 採 Command Pattern 拆分多種訊息指令（建立球隊、建立行事曆、建立臨時場次、查詢場次、搜尋球隊／球館），便於擴充與維護",
      "建立 CronJob 服務自動處理場次建立／關閉、資料爬取與排程呼叫，降低人工維運成本",
      "Docker + GitHub Actions 多服務 CI/CD：前端、後端、Webhook、CronJob 各自建置映像檔並推送至 DockerHub 後更新部署",
    ],
    stack: [
      "Vue 3",
      "TypeScript",
      "Vite",
      "Spring Boot 3",
      "Java 17",
      "Spring Security",
      "JPA",
      "PostgreSQL",
      "LINE LIFF",
      "Webhook",
      "Docker",
      "GitHub Actions",
    ],
  },
  {
    pid: "0003",
    cmd: "./study-camp --discuss --realtime",
    name: "書營 ｜ 線上討論區",
    nameEn: "ShuYing · Discussion Board",
    status: "STABLE",
    period: "2023/04 — 2023/09",
    role: "討論區模組",
    bullets: [
      "負責討論區功能，完成基本 CRUD",
      "透過 NGROK 將本地伺服器公開、搭配 socket.io 廣播事件",
      "達成所有使用者線上即時聊天的功能",
    ],
    stack: ["Node.js", "socket.io", "NGROK", "REST API"],
  },
  {
    pid: "0004",
    cmd: "./hao-chi-ning-lai --crud --rwd",
    name: "好吃檸來 ｜ 產品 + 訂位",
    nameEn: "Hao-Chi · Product & Reservation",
    status: "STABLE",
    period: "2024/01 — 2024/03",
    role: "產品頁 + 訂位頁",
    bullets: [
      "產品頁面：CRUD + RWD",
      "訂位頁面：CRUD + RWD",
    ],
    stack: ["Vue", "RWD", "REST API"],
  },
];

// ------------------------------------------------------------
// 技能
// ------------------------------------------------------------
export type SkillCategory = {
  id: string;
  group: string;
  groupEn: string;
  items: { name: string; level: number; tag?: string }[];
};

export const TONY_SKILLS: SkillCategory[] = [
  {
    id: "skill-fe",
    group: "前端 / Frontend",
    groupEn: "FRONTEND",
    items: [
      { name: "Vue 3", level: 92, tag: "main" },
      { name: "React", level: 88, tag: "main" },
      { name: "React Native / Expo", level: 72 },
      { name: "TypeScript", level: 86, tag: "main" },
      { name: "JavaScript (ES2023)", level: 92 },
      { name: "Tailwind / Radix UI", level: 80 },
      { name: "Angular", level: 60 },
      { name: "Leaflet", level: 70 },
    ],
  },
  {
    id: "skill-be",
    group: "後端 / Backend",
    groupEn: "BACKEND",
    items: [
      { name: "NestJS", level: 78 },
      { name: "Spring Boot 3 / Java 17", level: 72 },
      { name: "ASP.NET Core", level: 76 },
      { name: "Node.js / Express", level: 78 },
      { name: "REST API 設計", level: 86, tag: "main" },
      { name: "JWT / OAuth / SSO", level: 80 },
      { name: "SignalR / socket.io", level: 74 },
    ],
  },
  {
    id: "skill-db",
    group: "資料庫 / Database",
    groupEn: "DATABASE",
    items: [
      { name: "PostgreSQL", level: 80, tag: "main" },
      { name: "Prisma ORM", level: 76 },
      { name: "JPA", level: 70 },
      { name: "MS SQL Server", level: 72 },
      { name: "資料庫正規化", level: 78 },
    ],
  },
  {
    id: "skill-ops",
    group: "DevOps / 部署",
    groupEn: "DEVOPS",
    items: [
      { name: "Docker", level: 78, tag: "main" },
      { name: "GitHub Actions CI/CD", level: 80, tag: "main" },
      { name: "DockerHub", level: 74 },
      { name: "IIS 部署", level: 72 },
      { name: "Azure DevOps PBI/Task", level: 76 },
      { name: "CronJob 排程", level: 76 },
    ],
  },
  {
    id: "skill-int",
    group: "整合 / 第三方",
    groupEn: "INTEGRATION",
    items: [
      { name: "LINE LIFF", level: 80 },
      { name: "LINE Webhook / Messaging API", level: 78 },
      { name: "Command Pattern", level: 72 },
      { name: "NGROK", level: 80 },
    ],
  },
];

// ------------------------------------------------------------
// Boot log（開機畫面用）
// ------------------------------------------------------------
export const BOOT_LOG: { text: string; tone?: "ok" | "warn" | "err" }[] = [
  { text: "[ BIOS ] TONY-OS v3.0.4 — Power On Self-Test ........... OK", tone: "ok" },
  { text: "[ MEM  ] Allocating 16 GB RAM .......................... OK", tone: "ok" },
  { text: "[ NET  ] Bringing up eth0 ............................... OK", tone: "ok" },
  { text: "[ AUTH ] Loading credentials for user `tony` ............ OK", tone: "ok" },
  { text: "[ MOD  ] Mounting /vue3 /react /nest /spring-boot ...... OK", tone: "ok" },
  { text: "[ DB   ] Connecting PostgreSQL @ prisma+jpa ............ OK", tone: "ok" },
  { text: "[ BOT  ] Spawning LINE webhook listener ................. OK", tone: "ok" },
  { text: "[ CRON ] 4 scheduled jobs registered .................... OK", tone: "ok" },
  { text: "[ CI   ] GitHub Actions runner attached ................. OK", tone: "ok" },
  { text: "[ WARN ] Coffee level low — refill recommended .......... !!", tone: "warn" },
  { text: "[ INIT ] Launching workspace ............................ OK", tone: "ok" },
  { text: "Welcome, TONY. Type `help` to begin.", tone: "ok" },
];

// ------------------------------------------------------------
// 終端機檔案樹
// ------------------------------------------------------------
export const FILE_TREE = [
  { type: "dir", name: "~/tony", depth: 0 },
  { type: "file", name: "whoami", depth: 1, target: "whoami" },
  { type: "file", name: "about.md", depth: 1, target: "about" },
  { type: "dir", name: "skills/", depth: 1, target: "skills" },
  { type: "dir", name: "experience/", depth: 1, target: "experience" },
  { type: "dir", name: "projects/", depth: 1, target: "projects" },
  { type: "file", name: "certs.txt", depth: 1, target: "certs" },
  { type: "file", name: "languages.json", depth: 1, target: "certs" },
  { type: "file", name: "contact.sh", depth: 1, target: "contact" },
] as const;

export const NAV_SECTIONS = [
  { id: "whoami", cmd: "$ whoami", title: "WHOAMI" },
  { id: "about", cmd: "$ cat about.md", title: "ABOUT" },
  { id: "skills", cmd: "$ ls --skills", title: "SKILLS" },
  { id: "experience", cmd: "$ tree experience/", title: "EXPERIENCE" },
  { id: "projects", cmd: "$ ./projects --list", title: "PROJECTS" },
  { id: "certs", cmd: "$ certs && langs", title: "CERTS / LANGS" },
  { id: "contact", cmd: "$ ssh tony@workshop", title: "CONTACT" },
];
