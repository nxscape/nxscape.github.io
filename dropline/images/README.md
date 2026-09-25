# 画像差し替えガイド

`dropline_logo.png` は提供された正式ロゴです
`screen-recording.png`、`screen-hero.png`、`screen-planned.png`、`screen-lines.png`、`screen-detail.png`、`screen-replay.png`、`screen-offline.png` は提供されたアプリ画面です
`style-satellite.png` と `style-dropline.png` も提供された実画面です
その他は仮素材です
写真2枚はこのLPのためのAI生成画像、SVGは表示位置を確認するための仮ロゴ・UIです
実アプリや実際の地形を正確に再現したものではありません
SVG内の写真は埋め込み済みで、外部画像通信はありません

| ファイル | 掲載場所・役割 | 現在の比率 / 差し替え方 |
|---|---|---|
| `dropline_logo.png` | ヘッダー / Final CTA | 2172:724、提供された透明背景PNGを無加工で使用 |
| `logo.svg` | 未使用の旧仮ロゴ | 参照なし |
| `favicon.svg` | ブラウザアイコン | 1:1 |
| `mountain.jpg` | Hero / Mountain / Final CTA | 2:3、主役の雪山写真 |
| `cabin.jpg` | Before | 4:3、暖炉と地図の写真 |
| `screen-hero.png` | Hero | 852:1846、提供された3D Replay画面、端末枠付き |
| `screen-offline.png` | Support / Offline Maps | 852:1846、提供された保存範囲選択画面、CSSでiPhone風の枠を付与 |
| `screen-planned.png` | Before | 852:1846、提供されたPlanned Line画面を無加工で使用、CSSでiPhone風の枠を付与 |
| `screen-recording.png` | Mountain | 852:1846、提供されたRecording画面を無加工で使用、CSSでiPhone風の枠を付与 |
| `screen-lines.png` | Lineの上段 | 852:1846、提供画像を無加工で使用、CSSでiPhone風の枠を付与 |
| `screen-detail.png` | Lineの下段 | 852:1846、提供された詳細画面を無加工で使用、CSSでiPhone風の枠を付与 |
| `screen-replay.png` | Replay | 1125:2436、提供された3D Replay画面を無加工で使用、端末枠なし |
| `style-satellite.png` | Proの上段 | IMG_1730.PNG、緑の山、地図部分のみ表示 |
| `style-dropline.png` | Proの中段 | IMG_1729.PNG、雪山、地図部分のみ表示 |

## 実アプリ画面を入れるとき

1. `images/` にPNG/WebP/JPEGの画面を置く
2. `index.html` の該当 `img src` を新しい名前へ変更
3. `width` と `height` を画像の実寸に変更
4. `alt` を実際に写っている内容へ変更

端末の外枠はCSSの `.phone` が描画します
スクリーンショットには外枠を付けず、画面のみを入れると二重になりません
端末枠込みの画像を使う場合は `.phone` のborder・background・border-radiusを調整してください
HeroとReplayには異なる画像を用意し、Proには端末画面を再掲しない構成です

写真をセクションごとに分ける場合は、Mountainの `.stage-landscape` とFinal CTAの `.final-landscape` の `src` を個別に変更できます
現在のMountainは共通の雪山仮写真です
正式素材ではハイクアップ中の写真に差し替える想定です

## 推奨解像度

- 写真: 長辺1600〜2400px程度、JPEG/WebP
- 画面: 実機スクリーンショットを使用、幅780px以上を目安
- ロゴ: SVG推奨、PNGの場合は表示サイズの2〜3倍

このページは仮素材でも単独で表示でき、外部画像サービスには依存しません

Lines画面と詳細画面は元画像の縦横比を保持し、画面上にノッチやボタンを重ねず表示しています

本文のReplayは画像全体を枠なしで表示します
Heroは提供された別の3D Replay画面を使用し、本文と同じ画像の再掲はしていません

Proの2枚は元画像（1125×2436）を保存し、CSSの `.pro-replay-crop` で地図領域（左0・上321・幅1125・高さ1000px）のみ表示しています
タイトル・再生パネル・標高グラフは表示範囲外です
地図内のLine・操作ボタン・Mapbox表記は保持しています
差し替え画像の配置が異なる場合はこの切り出し範囲も調整してください

オフライン地図の保存画面はトリミングせず、国土地理院の表記も保持しています

Planned Line画面はトリミングせず、予定ラインと国土地理院の表記を保持しています

Recording画面はトリミングせず、記録情報・Finishボタン・Mapbox表記を保持しています

## 予定ライン逸脱通知

`screen-route-alert.png` は提供された実画面（852×1846）です
元画像を保持し、CSSの `.route-alert-crop` で通知と周辺の地図・記録情報（左0・上105・幅852・高さ520px）表示しています
ROUTE OFF・予定ラインからの距離・戻る方向に加え、周辺の地図と標高・記録情報、右側の地図操作ボタンを表示します
ステータスバーは表示範囲から外しています
