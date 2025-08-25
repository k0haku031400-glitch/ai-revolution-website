# AI Revolution ウェブサイト

株式会社AI Revolutionの公式ウェブサイトです。AIを誰でも使える簡単なツールにし、AIをより身近なものにすることを目指しています。

## 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **UI コンポーネント**: shadcn/ui
- **アイコン**: lucide-react
- **アニメーション**: Framer Motion
- **フォーム**: React Hook Form + Zod
- **フォント**: Noto Sans JP (Google Fonts)

## 機能

- **レスポンシブデザイン**: モバイルからデスクトップまで最適化
- **SEO対応**: メタタグ、OGP、Twitter Cards対応
- **アクセシビリティ**: セマンティックHTML、ARIA属性対応
- **お問い合わせフォーム**: バリデーション付きフォーム
- **アニメーション**: スムーズなページ遷移とインタラクション

## ページ構成

- **メインページ** (`/`): ヒーローセクション、事業内容紹介
- **企業情報** (`/company`): 会社概要、経営理念
- **事業内容** (`/services`): 詳細なサービス紹介
- **お問い合わせ** (`/contact`): お問い合わせフォーム

## セットアップ

### 前提条件

- Node.js 18.0.0以上
- npm または yarn

### インストール

```bash
# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

### ビルド

```bash
# 本番用ビルド
npm run build

# 本番サーバーを起動
npm start
```

### リンター

```bash
# ESLintを実行
npm run lint
```

## プロジェクト構造

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API ルート
│   ├── company/           # 企業情報ページ
│   ├── contact/           # お問い合わせページ
│   ├── services/          # 事業内容ページ
│   ├── globals.css        # グローバルスタイル
│   ├── layout.tsx         # ルートレイアウト
│   └── page.tsx           # メインページ
├── components/            # 再利用可能なコンポーネント
│   ├── ui/               # shadcn/ui コンポーネント
│   ├── hero.tsx          # ヒーローセクション
│   ├── section-heading.tsx # セクション見出し
│   ├── service-card.tsx  # サービスカード
│   ├── site-footer.tsx   # サイトフッター
│   └── site-header.tsx   # サイトヘッダー
├── hooks/                # カスタムフック
│   └── use-toast.ts      # トースト通知フック
└── lib/                  # ユーティリティ
    ├── siteConfig.ts     # サイト設定
    └── utils.ts          # 共通ユーティリティ
```

## カスタマイズ

### サイト設定

`src/lib/siteConfig.ts` で以下の設定を変更できます：

- 会社名、住所、連絡先情報
- ナビゲーションリンク
- SNSリンク
- メタ情報

### スタイル

`src/app/globals.css` でカスタムCSS変数を定義し、デザインシステムをカスタマイズできます。

## デプロイ

### Vercel (推奨)

1. GitHubリポジトリをVercelに接続
2. 自動デプロイが設定されます

### その他のプラットフォーム

```bash
# 静的エクスポート
npm run build
npm run export
```

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## お問い合わせ

ご質問やご相談がございましたら、お気軽にお問い合わせください。

- メール: nakatani@ai-revo.co.jp
- 住所: 〒530-0001 大阪府大阪市北区梅田1丁目2番2号 大阪駅前第2ビル12-12
# ai-revolution-website
