# 第二版設計：吳佳杰 / TONY 的個人作品集（全新風格）

## 一、整理使用者 104 履歷重點

- 姓名：吳佳杰，綽號 TONY
- 學歷：南臺科技大學 資訊工程系；資展國際前端工程師養成班
- 現職：前端工程師
- 過往：創創數位（React 切版、API 串接、SignalR）、采義科技（Vue 3 SPA、Leaflet、ASP.NET Core API、JWT/SSO、IIS 部署）
- 現職任務：ESHClouds 平台 Action Tracking、Legal、Risk 模組；以 Azure DevOps PBI/Task 追蹤需求
- 證照：TQC／EEC、TQC-OA-中文輸入
- 語文：中文（聽說讀寫精通）、台語（中等）

### 專案
1. **書營**（2023/4–2023/9）：負責討論區，CRUD + NGROK + socket.io 即時聊天
2. **好吃檸來**（2024/1–2024/3）：產品頁與訂位頁的 CRUD & RWD
3. **Bicker-ui｜吵架擂台社群 App 全端雛形**（2026/4–仍在進行）：
   - React Native/Expo App，60+ routes
   - React + TypeScript + Tailwind/Radix UI 設計稿與元件庫
   - NestJS 17 個 Controller 模組（Auth、Users、Arenas、Votes、Comments、Messages、Friends、Notifications、Reports、Rewards…）
   - Prisma + PostgreSQL，19 個 Model
   - JWT/OAuth、投票限制、最佳解答、積分獎勵、通知偏好、檢舉
4. **BadmintonReserved｜羽球場次預約與 LINE 小幫手**（2026/4–仍在進行）：
   - Vue 3 + TypeScript + Vite + Vue Router，30+ routes
   - Spring Boot 3、Java 17、Spring Security、JPA、PostgreSQL
   - LINE LIFF + Webhook（Command Pattern 拆指令）
   - CronJob、Docker、GitHub Actions CI/CD（前端、後端、Webhook、CronJob）

### 自傳關鍵詞
- 願意把問題追到底
- 從前端到後端、資料庫、部署的完整視角
- 想成為能穩定交付、也能改善架構的工程師
- 跨技術棧：Angular / React / Vue 3 / ASP.NET Core / NestJS / Spring Boot

---

## 二、風格腦力激盪（避免重複「藍圖工坊」）

<response>
<text>
**A. Terminal OS · 終端機作業系統（CLI Cyberpunk）**
- 設計運動：Cyberpunk + Brutalist Terminal + 80s CRT 螢光螢幕
- 核心原則：把整個個人作品集做成一台可操作的「TONY-OS」終端機；以 ASCII border、blinking cursor、命令列輸入、$ 提示字元呈現履歷
- 色彩：純黑底 #050608、磷光綠 #5BFE8F（主資料）、CRT 琥珀 #FFB454（次要）、警示桃紅 #FF4F8B（高亮）、雜訊灰 #2A2C30
- 版面：左欄為虛擬終端機主畫面、右側欄為「systeminfo」與 mini-map；專案以 `$ ls projects/` 列出，hover 像在 tab 補全；履歷像 `cat resume.md` 輸出
- 簽名元素：CRT 掃描線、文字打字機效果、ASCII 分隔線（═══、────）、boot log 動畫
- 互動：常駐 cursor、滑鼠 hover 變方塊游標、Konami code 彩蛋
- 動畫：boot 開機動畫、文字逐字輸出、scanline 滾動、glitch 微抖動
- 字型：JetBrains Mono / IBM Plex Mono 為主；偶爾用 VT323 老式像素字
</text>
<probability>0.05</probability>
</response>

<response>
<text>
**B. Editorial Magazine · 法式編輯設計刊物**
- 設計運動：Swiss Typography + Editorial Magazine（如《Apartamento》《Kinfolk》）+ 高級時裝品牌書
- 核心原則：把作品集當成一本 A4 季刊雜誌；強調大量留白、超大標題、嚴謹的縱橫網格、義式書頁分欄
- 色彩：象牙白 #F4EFE6 紙底、深墨黑 #14110F、勃艮地酒紅 #6B1F1F、橄欖綠 #4A5A2B、金箔 #C9A24B
- 版面：12-column grid 但極不對稱，左頁是名字題目右頁是內文，章節以 Roman numeral I·II·III 編號
- 簽名元素：頁碼、書脊、撕邊紙、首字下沉（drop cap）、欄線、雜誌目錄頁
- 互動：游標變古典指標、翻頁動畫、章節間的扉頁過渡
- 動畫：標題 stagger fade、文字 reveal、頁碼跑動、scroll-driven progress 標尺
- 字型：Playfair Display + Cormorant Garamond + Noto Serif TC + DM Mono（小註）
</text>
<probability>0.07</probability>
</response>

<response>
<text>
**C. Risograph Sticker Pop · 印刷海報拼貼**
- 設計運動：Risograph 印刷 + Y2K Pop + Sticker Bombing + 90s zine
- 核心原則：把履歷做成一本 DIY 同人誌／貼紙書，色彩鮮豔、顆粒滿滿，元素傾斜、彩色色塊堆疊、便利貼貼紙感
- 色彩：奶油黃 #F8E16C、莓粉 #FF6F91、湖水藍 #4FB6CA、檸檬綠 #B7E04C、深紫 #2D1A4D
- 版面：拼貼式自由佈局，有膠帶、貼紙、印章、簽字筆塗鴉，章節像 zine 的不同「跨頁」
- 簽名元素：Riso 顆粒、補色錯位印刷、印章、便利貼、剪刀剪邊
- 互動：hover 元素抖動 / 旋轉、可以「拿起貼紙」、shake 動畫
- 動畫：Spring 物理彈跳、便利貼飄落、貼紙 peel 翻起
- 字型：Anton + Caveat + Noto Sans TC + Bagel Fat One（display）
</text>
<probability>0.06</probability>
</response>

---

## 三、最終選擇

採用 **A. Terminal OS · 終端機作業系統**

理由：
1. 與第一版「藍圖工坊」（米白紙質 + 工程藍 + 紅筆批註）形成最強烈反差。
2. TONY 是工程師、又跨多技術棧（NestJS / Spring Boot / Vue / React Native / Docker / CI），把作品集做成可操作的 TONY-OS 終端機，是最貼合工程師身份、又最有記憶點的方向。
3. 全黑底 + 磷光綠 + 命令列敘事，視覺與互動都極具個性，且能藉由 `$ cat about.md`、`$ ls projects/`、`$ whoami` 等命令把履歷各區塊「演」出來。

---

## 四、TONY-OS 終端機 — 區塊設計

採用「上方 OS 視窗框 + 內部分頁終端機」概念，主畫面為一台帶有 traffic-light 視窗按鈕的終端機，左側是檔案系統樹（履歷導覽），右側是 system info／時鐘／scanline。

1. **BOOT** — 開機 boot log（出現「TONY-OS v3.0 booting…」「Loading frontend modules…」逐行 log）後，淡入主畫面
2. **`$ whoami`** — Hero 區：大字 TONY · 吳佳杰 · Frontend Engineer，旁邊跑著閃爍 cursor 與「STATUS: ONLINE」
3. **`$ cat about.md`** — 自傳逐字打出（完整自傳文）
4. **`$ ls --skills`** — 技能像終端機表格：FRONTEND / BACKEND / DEVOPS / DB / TOOLS，每行有 progress bar `[████████░░] 80%`
5. **`$ tree experience/`** — 工作經歷以樹狀檔案列出（創創數位、采義科技、現職）
6. **`$ ./projects --list`** — 4 個專案以「視窗 process」呈現：每個專案是一個小 terminal window，有 PID、status、tech stack、年份；含 Bicker-ui、BadmintonReserved、書營、好吃檸來
7. **`$ certs && langs`** — 證照與語文能力（TQC、TQC-OA-中文輸入；中文精通、台語中等）
8. **`$ ssh tony@workshop`** — 聯絡方式：email、github、line（命令列風格 form 樣式）
9. **STATUSBAR** — 底部固定狀態列（左：版本／右：時鐘／中：「READY」）

### 互動細節
- 主終端機支援 hover focus 高亮
- 左側 sidebar 是檔案樹 `~/tony/`，可點選跳到對應 anchor
- 命令列前的 `$` 提示字元有閃爍 cursor
- scanline 全頁覆蓋（低透明度）
- 滑鼠 hover button 時，按鈕底部顯示 `→ press [ENTER]`
- 開場 800ms boot log 動畫，可按任意鍵 / 點擊跳過

### 字型
- Display / 介面：JetBrains Mono 700
- 內文：JetBrains Mono 400 / IBM Plex Mono 400
- 中文：Noto Sans TC 400 / 700（保持與 mono 視覺一致的橫平豎直）
- 偶爾用 VT323（boot log）

### 顏色 token
- `--bg`: #07080A（純黑帶藍）
- `--bg-soft`: #0E1014
- `--panel`: #11141A
- `--panel-border`: #1E232C
- `--phosphor`: #5BFE8F（主前景）
- `--phosphor-dim`: #2F8C58
- `--amber`: #FFB454
- `--magenta`: #FF4F8B
- `--text`: #C8D3D5
- `--muted`: #6A7783
