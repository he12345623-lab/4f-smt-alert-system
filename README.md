# 4F SMT 異常通報 | 4F SMT Abnormality Report

這是 GitHub Pages 可上傳的前端預覽專案。畫面包含站點中英對照、機台選擇、通報預覽，以及工程師「訂閱全部／取消訂閱」彈出視窗。

## 專案檔案

- `index.html`：單頁網站、樣式與前端操作程式。
- `manifest.webmanifest`：加入手機主畫面的基本設定。
- `icon.svg`：網站圖示。
- `OneSignalSDKWorker.js`：推播工作者檔案佔位版，尚未完成 OneSignal 設定。

## 上傳 GitHub

1. 將本資料夾內的所有檔案上傳到 Repository 根目錄（不要再多包一層資料夾）。
2. 到 Repository 的 **Settings → Pages**。
3. 在 Build and deployment 選擇 **Deploy from a branch**。
4. Branch 選 `main`，資料夾選 `/(root)`，按 Save。
5. 等待 GitHub Pages 發布完成後，用顯示的網址開啟網站。

## 重要限制

- 目前是前端介面測試版；通報按鈕不會發送真實推播。
- 訂閱／取消訂閱目前只儲存在使用者目前瀏覽器的本機設定中，不代表已向推播服務註冊。
- iOS Web Push 通常需 iOS/iPadOS 16.4 或更新版本，使用 Safari 將網站加入主畫面後，從主畫面開啟並允許通知。
- Android 需使用支援 Web Push 的瀏覽器並允許通知。
- 真正啟用推播前，仍需建立 OneSignal 專案、設定正確的 GitHub Pages 網址與 App ID，並依 OneSignal 提供的最新步驟設定 Service Worker。請勿將 REST API 私密金鑰放在公開 HTML 或 JavaScript 中。
