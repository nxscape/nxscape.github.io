// App Store URL を一箇所で差し替えできるようにする
const path = window.location.pathname;
const isFrenchPage = /\/lifescene\/fr(\/|$)/.test(path);
const isEnglishPage = /\/lifescene\/en(\/|$)/.test(path);

const APP_STORE_URL = isFrenchPage
  ? "https://apps.apple.com/fr/app/lifescene/id6797363961"
  : isEnglishPage
    ? "https://apps.apple.com/us/app/lifescene/id6797363961"
    : "https://apps.apple.com/jp/app/lifescene/id6797363961";

const localeTag = isFrenchPage ? "fr" : isEnglishPage ? "en" : "ja";

for (const a of document.querySelectorAll("[data-appstore-link]")) {
  a.href = APP_STORE_URL;

  a.addEventListener("click", () => {
    const location = a.getAttribute("data-appstore-location") || "unknown";
    if (typeof gtag === "function") {
      gtag("event", "app_store_click", {
        location: location,
        locale: localeTag,
      });
    }
  });
}
