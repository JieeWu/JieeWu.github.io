# Workshop Portfolio · 全端化 + 檔案存儲整合 TODO

## 階段 1：升級為全端
- [ ] 執行 `webdev_add_feature feature=web-db-user`
- [ ] 確認後端 server、資料庫、S3 檔案存儲已可用
- [ ] 閱讀新增的範例與 README，確定 S3 API 用法

## 階段 2：檔案存儲後端 API
- [ ] 設計檔案上傳 API（multipart）
- [ ] 列出檔案 API（含 metadata：檔名、大小、上傳時間、類型）
- [ ] 刪除檔案 API
- [ ] 下載／預覽（透過 S3 URL 直接交付）

## 階段 3：前端檔案管理 UI
- [ ] 設計檔案管理頁的視覺（雙風格：藍圖工坊／TONY-OS）
- [ ] 實作上傳元件（拖放 + 點擊）
- [ ] 實作檔案列表 + 預覽 + 下載按鈕
- [ ] 加入路由 `/files` 與 `/tonyos/files`，並從首頁加入入口

## 階段 4：驗證與交付
- [ ] 測試上傳／列出／下載／刪除流程
- [ ] webdev_save_checkpoint
- [ ] 交付網址與後續建議

## 緊急修復：TONY-OS RWD 跑版

- [ ] TONY-OS 頁面加 overflow-x hidden 保險絲
- [ ] 側欄（FileExplorer）在 < lg 改為頂部抽屜 / 摺疊
- [ ] 終端機 title bar 與內容區水平 overflow 處理
- [ ] SkillBar 在小螢幕改為換行（label 自動換行、bar 自動縮短）
- [ ] Sections 的 grid 改為 mobile-first：cols-1 → md:cols-2 → xl:cols-3
- [ ] Whoami hero 的 12-col grid 在小螢幕改為 stack
- [ ] Projects 表格列改為 mobile 卡片堆疊
- [ ] Contact grid mobile 單欄
- [ ] 多 breakpoints 驗證（375 / 414 / 768 / 1024 / 1280）

## TONY-OS RWD 全面修補（準備匯出網站）

- [ ] 重讀 TonyOS / Whoami / Sections / primitives / FileExplorer 確認當前結構
- [ ] BootSplash 在 < sm 與 < lg 縮放正常、可點擊跳過
- [ ] TonyOS layout：sidebar 在 < lg 改為頂部 Drawer，main padding 隨寬度縮放
- [ ] Whoami hero：avatar 卡片 + 12 欄 grid 在 < md 改為 stack、文字不溢出
- [ ] Skills SkillBar：< md 時 label 與 bar 換行、bar 寬度自適應
- [ ] Experience：FIG 標頭列 / 標籤雲在 < md 不溢出
- [ ] Projects 卡片：表格 grid 在 < md 改 stack、PID/CMD/STATUS/PERIOD 直排
- [ ] Certs / Languages / Contact：grid 在 < md 改 1 欄
- [ ] 全頁 overflow-x: hidden 保險
- [ ] 多斷點截圖驗證並 checkpoint
