# 4F SMT 異常通報系統（GitHub Pages 起始版）

這是依照提供的 `index.html` 架構整理的全新 GitHub 專案起始版。畫面包含機台選擇、異常狀態、通報預覽，以及工程師訂閱彈出視窗。

## 檔案

- `index.html`：單一使用者網頁與訂閱彈出視窗
- `style.css`：版面與手機/桌機樣式
- `app.js`：機台選擇、測試通報與訂閱介面互動
- `config.js`：機台清單與公開設定（可依後續對應資料調整）
- `manifest.webmanifest`、`icon.svg`：加入手機主畫面的基本設定

## 目前狀態

**這是可操作的前端起始版，尚未連接真正的 Web Push。**

- 點選機台可更新通報預覽。
- 訂閱視窗預設全選，可全選、全部取消及儲存測試設定。
- 訂閱設定只保存在目前瀏覽器的 `localStorage`，不是跨裝置或跨工程師同步的正式訂閱。
- 送出通報只顯示測試提示，不會向任何人發送真實推播，也不保存通報紀錄。
- 尚未加入 Service Worker 推播接收程式，也未設定 OneSignal/其他推播服務。
- 請勿把私密 API 金鑰、密碼或機密資訊放在 `config.js` 或任何公開檔案。

## 上傳至新的 GitHub Repository

1. 在 GitHub 建立新的 Repository，例如 `4f-smt-alert-system`。
2. 將 ZIP 解壓縮，將裡面的所有檔案上傳至 Repository 根目錄（不要再多包一層資料夾）。
3. 到 Repository 的 **Settings → Pages**。
4. 在 **Build and deployment** 選擇 **Deploy from a branch**，分支選 `main`、資料夾選 `/(root)`，按 Save。
5. 等 GitHub Pages 顯示網站網址後再開啟測試。

## 後續開發順序

1. 確認機台清單、機台與負責工程師對應。
2. 選定推播服務並完成一台測試裝置的訂閱/收訊。
3. 加入安全的通知發送流程，再測試完整通報。
4. 最後才加入通報紀錄。

為降低除錯成本，建議每完成一階段就先測試，再進入下一階段。
