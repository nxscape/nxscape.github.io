# DropLine 公式LP

ビルド不要の静的サイトです
`index.html` をブラウザで開いて確認できます
GitHub Pagesには、このフォルダの中身をそのまま配置してください

## 構成

```text
dropline/
├── index.html
├── css/style.css
├── js/main.js
├── images/
│   ├── README.md
│   ├── dropline_logo.png
│   ├── favicon.svg
│   ├── mountain.jpg
│   ├── cabin.jpg
│   ├── screen-hero.png
│   ├── screen-planned.png
│   ├── screen-offline.png
│   ├── screen-route-alert.png
│   ├── screen-recording.png
│   ├── screen-lines.png
│   ├── screen-detail.png
│   ├── screen-replay.png
│   ├── style-satellite.png
│   └── style-dropline.png
├── QA.md
└── .nojekyll
```

Hero → Before → Mountain → Support → Line → Replay → Protect → Pro → Final CTA → Footer

画面幅にかかわらず物語を1カラムで表示します
320pxでは左右24pxの余白、画像はコンテナ以内に収める設計です
横方向のはみ出しを `overflow-x: hidden` で隠す実装はしていません
写真はローカルファイル、フォントはシステムフォントです
外部ライブラリ・CDN・アクセス解析・ビルド作業は不要です

## 公開時のリンク設定

`js/main.js` 冒頭の `SITE_CONFIG` のみ編集してください

```js
const SITE_CONFIG = Object.freeze({
  appStoreUrl: 'https://apps.apple.com/jp/app/id6797385335', // 正式なApp StoreのHTTPS URL
  privacyUrl: 'https://nxscape.github.io/dropline/privacy.html',
  termsUrl: 'https://nxscape.github.io/dropline/terms.html',
  supportUrl: 'https://nxscape.github.io/dropline/support.html'
});
```

App StoreのCTAは2か所あり、同じ設定を使用します
空欄・不正URL・HTTPS以外の値は採用せず、準備中の案内へ移動します
正式URL設定後は同じタブでリンク先へ移動します
JavaScriptを無効にしても本文・画像・ページ内ナビゲーションを読めますが、設定URLの適用にはJavaScriptが必要です

## ロゴ・実画面の差し替え

[images/README.md](images/README.md) に掲載場所と推奨サイズをまとめています
提供された正式ロゴ `dropline_logo.png` をヘッダーと最後のCTAに使用しています
画像は元データのまま保持し、縦横比3:1で表示します
ロゴ内にタグラインがあるため、Final CTAの独立したタグラインは取り除いています
実画面をPNG/WebPへ変更する場合は、HTMLの該当する `img` の `src`・`width`・`height`・`alt` を変更してください
画面の実際の縦横比を指定すると、その比率に追従して表示します

## 色・コピー

DropLine Blueは `css/style.css` 冒頭の `--blue: #2686b8` に集約しています
参照資料のHEXと併記RGBには差があるため、今回は明記されたHEXを採用しています
見出しと主要コピーは「LP企画設計」のスマホ版構成に準拠しています
追加の短い補助コピーは実装用の仮案です
句点は使わず、確定ブランド表記 `Record the day.` / `Replay the day.` のピリオドは残しています

Proの価格・機能は引継ぎ会話に基づいています
Freeの3D Replay回数については、会話内でSatelliteとDropLine Styleのゲート仕様に留保があるため掲載していません
公開時は現行アプリの料金・仕様と照合してください

## GitHub Pagesへの配置

1. 公開対象リポジトリのルート、またはPages用の `docs/` へこのフォルダの中身を配置
2. GitHub Pagesの公開対象をその配置先に設定
3. 公開URLで画像・リンク・iPhone表示を確認

すべて相対パスなので、`https://example.github.io/repository/` のようなサブパスでも使えます
`.nojekyll` を含めて配置してください
この成果物ではGitHubへのアップロードや公開は行っていません

## 現在の状態

- 雪山・山小屋写真はAI生成の仮素材で、実在地を示していません
- ロゴは提供されたPNGに差し替え済みです
- Planned Line画面・Lines画面・Line詳細画面・オフライン地図保存画面は提供画像に差し替え済みで、共通のCSSによるiPhone風フレームに収めています
- 本文の3D Replayは提供画像に差し替え済みで、端末枠なし・トリミングなしで表示しています
- ProのSatelliteとDropLine Styleは提供された画面の地図領域のみをCSSで切り出して表示しています
- Heroは提供された3D Replay画面に差し替え済みで、端末枠と傾きを保持しています
- Recording画面も提供画像に差し替え済みで、共通のiPhone風フレームに収めています
- 掲載しているアプリのスクリーンショットはすべて提供画像への差し替えが完了しています
- HeroとReplay本文は別画像で、Proでは端末付きReplay画面を繰り返していません
- Privacy / Terms / Supportは提供された正式URLを設定済みです
- App Store URLは提供されたApple IDから設定済みです: https://apps.apple.com/jp/app/id6797385335
- ストアでの公開状態は未確認です
- ローカルページへのブラウザアクセスが環境の制限で拒否されたため、実ブラウザの320px表示検証は未完了です
- 検証範囲は [QA.md](QA.md) を参照してください

予定ライン逸脱通知も提供された実画面に差し替え済みです
通知パネルと周辺の地図・記録情報をCSSで切り出し、元画像は `images/screen-route-alert.png` に保持しています

Proの写真・動画保存上限は、ユーザー指定に基づき「1つのLineにつき写真50枚・動画10本」と掲載しています
