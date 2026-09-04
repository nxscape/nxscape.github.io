// App Store URL を一箇所で差し替えできるようにする
// TODO: 正しい App Store リンクに差し替えてください
const APP_STORE_URL = "https://apps.apple.com/jp/app/lifescene/id0000000000";

for (const a of document.querySelectorAll("[data-appstore-link]")) {
  a.href = APP_STORE_URL;
}

