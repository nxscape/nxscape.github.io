// App Store URL を一箇所で差し替えできるようにする
const APP_STORE_URL = "https://apps.apple.com/jp/app/lifescene/id6797363961";

for (const a of document.querySelectorAll("[data-appstore-link]")) {
  a.href = APP_STORE_URL;

  a.addEventListener("click", () => {
    const location = a.getAttribute("data-appstore-location") || "unknown";
    if (typeof gtag === "function") {
      gtag("event", "app_store_click", {
        location: location,
      });
    }
  });
}
