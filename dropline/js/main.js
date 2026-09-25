'use strict';
/* 公開時の差し替えはここだけ
 * 空欄の場合は架空URLへ遷移せず、準備中の案内を表示します
 * App Store の正式URL例: https://apps.apple.com/jp/app/id1234567890
 */
const SITE_CONFIG = Object.freeze({
  appStoreUrl: 'https://apps.apple.com/jp/app/id6797385335',
  privacyUrl: 'https://nxscape.github.io/dropline/privacy.html',
  termsUrl: 'https://nxscape.github.io/dropline/terms.html',
  supportUrl: 'https://nxscape.github.io/dropline/support.html'
});

function externalUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' ? url.href : null;
  } catch { return null; }
}

const appStoreUrl = externalUrl(SITE_CONFIG.appStoreUrl);
const storeStatus = document.getElementById('store-status');
document.querySelectorAll('[data-app-store]').forEach(link => {
  if (appStoreUrl) {
    link.href = appStoreUrl;
  } else {
    link.addEventListener('click', () => {
      storeStatus.textContent = 'App Storeリンクは公開準備中です';
    });
  }
});
if (appStoreUrl) {
  storeStatus.textContent = '';
  storeStatus.hidden = true;
}

const footerStatus = document.getElementById('footer-status');
let readyLinks = 0;
document.querySelectorAll('[data-footer]').forEach(link => {
  const url = externalUrl(SITE_CONFIG[`${link.dataset.footer}Url`]);
  if (url) { link.href = url; readyLinks += 1; }
  else link.addEventListener('click', () => {
    footerStatus.textContent = `${link.textContent}は公開準備中です`;
  });
});
if (readyLinks === 3) footerStatus.hidden = true;
document.getElementById('year').textContent = String(new Date().getFullYear());
