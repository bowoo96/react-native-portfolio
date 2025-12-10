# 📝 モバイルクロスプラットフォームアプリケーション（iOS ＋ Android）


## 📌 プロジェクト紹介
このアプリは React Native をベースに、iOS / Android の両方に対応するモバイルアプリケーションとして開発しました。<br>
地図機能、位置情報サービス、ページ間データ連携、ナビゲーション設計など、実サービスに近い構成を経験しています。<br>


## 🛠 使用技術
### 🔷　クロスプラットフォーム / コア
- **React Native**
- **Recoil（グローバル状態管理）**
- **React Navigation（Stack / Bottom Tabs）**

### 🔷　地図機能
- **mapbox**
- **react-native-geolocation-service（高精度の現在地取得）**
- **react-native-permissions（位置情報権限）**

### 🔷　Firebase
- **Firebase Dynamic Links（ディープリンク）**
  
### 🔷　画像やUI/UX
- **react-native-image-crop-picker**
- **react-native-fast-image**
- **react-native-svg**
- **react-native-modal**
- **react-native-splash-screen**

### 🔷　その他
- **axios**
- **AsyncStorage**

## ⭐ 主な機能
### 🔸 地図ベースの機能（Mapbox）
- GeoJSON を利用したポリゴン境界データの表示。
- ズームレベルに応じた動的ポリゴンの切り替え。
- 現在地ボタンを押すと、ユーザーの位置へフォーカス移動。

### 🔸 Firebase Dynamic Links
- アプリ外のリンクからアプリ内の特定ページへ直接遷移。

### 🔸 詳細ページ
- React Navigation を使った画面遷移。
- Route Params によるデータ受け渡し。
- 共通の詳細画面と UI 構造を設計。
- カメラ／アルバム連携による写真アップロード。

### 🔸 UI / UX
- 共通スタイルシステムの構築。
- SVG アイコンや再利用可能なコンポーネントの作成。


## 🚀 セットアップ
git clone https://github.com/bowoo96/react-native-portfolio.git<br>
cd react-native-portfolio<br>
npm install<br>

iOSの場合<br>
cd ios<br>
pod install<br>
cd ..<br>
npm run ios<br>

Androidの場合<br>
npm run android


## 🚨 注意事項
- 公開版では API 利用や外部サービス(Mapbox / Firebase)は含まれていません。
- 一部の画面は UI デモとして構成されています。<br>

