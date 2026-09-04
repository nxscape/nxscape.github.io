// App Store URL を一箇所で差し替えできるようにする
const APP_STORE_URL = "https://apps.apple.com/jp/app/lifescene/id6797363961";

for (const a of document.querySelectorAll("[data-appstore-link]")) {
  a.href = APP_STORE_URL;
}

