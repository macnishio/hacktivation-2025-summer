# Hacktivation 2025 Summer

![Hacktivation 2025 Summer](https://img.shields.io/badge/Hacktivation-2025%20Summer-blue)
![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Solidity](https://img.shields.io/badge/Solidity-^0.8.13-orange)
![Web3](https://img.shields.io/badge/Web3-Enabled-green)

## 🎯 プロジェクト概要

Hacktivation 2025 Summerは、Next.jsとSolidityを使用した完全なWeb3アプリケーションです。ウォレット接続機能とスマートコントラクトとの相互作用を実装しています。

## ✨ 主な機能

- 🔗 **ウォレット接続**: MetaMask、Rainbow、Coinbase Wallet、WalletConnect対応
- 📊 **Counterスマートコントラクト**: 数値の読み取り、設定、インクリメント
- 🌐 **日本語UI**: 完全に日本語化されたユーザーインターフェース
- 📱 **レスポンシブデザイン**: モバイル・デスクトップ対応
- ⚡ **高速開発**: Next.js 15 + React 18 + TypeScript

## 🚀 クイックスタート

### 5分で起動！

```bash
# 1. リポジトリをクローン
git clone https://github.com/macnishio/hacktivation-2025-summer.git
cd hacktivation-2025-summer

# 2. 依存関係をインストール
pnpm install

# 3. スマートコントラクトをセットアップ
cd packages/contract
forge build

# 4. ローカルブロックチェーンを起動（別ターミナル）
anvil

# 5. コントラクトをデプロイ（新しいターミナル）
forge script script/Counter.s.sol:CounterScript --broadcast --rpc-url http://127.0.0.1:8545 --private-key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80

# 6. フロントエンドを起動
cd packages/frontend
pnpm dev
```

### アクセス

ブラウザで http://localhost:3000 にアクセス

## 🏗️ 技術スタック

### フロントエンド
- **Next.js** 15.5.3 - Reactフレームワーク
- **React** 18.2.0 - UIライブラリ
- **TypeScript** 5.5.4 - 型安全性
- **RainbowKit** 1.3.0 - ウォレット接続UI
- **Wagmi** 1.4.0 - Web3 React Hooks
- **Viem** 1.21.0 - Ethereumライブラリ

### スマートコントラクト
- **Solidity** ^0.8.13 - スマートコントラクト言語
- **Foundry** - 開発フレームワーク
- **Anvil** - ローカルブロックチェーン

## 📁 プロジェクト構造

```
hacktivation-2025-summer/
├── packages/
│   ├── frontend/                 # Next.js フロントエンド
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   └── CounterContract.tsx
│   │   │   ├── pages/
│   │   │   │   ├── _app.tsx
│   │   │   │   └── index.tsx
│   │   │   └── wagmi.ts
│   │   └── package.json
│   └── contract/                 # Solidity スマートコントラクト
│       ├── src/
│       │   └── Counter.sol
│       ├── script/
│       │   └── Counter.s.sol
│       └── foundry.toml
├── QUICK_START.md               # クイックスタートガイド
├── HANDOVER.md                  # 完全引き継ぎ書
├── TECHNICAL_DETAILS.md         # 技術詳細書
├── TROUBLESHOOTING.md           # トラブルシューティング
└── SETUP_LOCAL.md              # 詳細セットアップ手順
```

## 📚 ドキュメント

- [🚀 クイックスタートガイド](QUICK_START.md) - 5分で起動
- [📋 完全引き継ぎ書](HANDOVER.md) - プロジェクト全体の詳細
- [🔧 技術詳細書](TECHNICAL_DETAILS.md) - 技術仕様の詳細
- [🛠️ トラブルシューティング](TROUBLESHOOTING.md) - 問題解決ガイド
- [⚙️ ローカルセットアップ](SETUP_LOCAL.md) - 詳細なセットアップ手順

## 🔧 前提条件

- Node.js (v18以上)
- pnpm
- Git
- Foundry

## 🎮 使用方法

1. **ウォレット接続**: 右上の「ウォレットを接続」ボタンをクリック
2. **数値確認**: 現在のCounterの数値が表示されます
3. **インクリメント**: 「Increment」ボタンで数値を1増加
4. **数値設定**: 入力フィールドに数値を入力して「Set Number」ボタンで設定

## 🐛 トラブルシューティング

よくある問題と解決方法は [トラブルシューティングガイド](TROUBLESHOOTING.md) を参照してください。

### よくある問題
- ポートが使用中
- 依存関係エラー
- ウォレット接続エラー
- スマートコントラクトエラー

## 🤝 貢献

1. このリポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。詳細は [LICENSE](LICENSE) ファイルを参照してください。

## 🙏 謝辞

- [Next.js](https://nextjs.org/) - Reactフレームワーク
- [RainbowKit](https://www.rainbowkit.com/) - ウォレット接続UI
- [Wagmi](https://wagmi.sh/) - Web3 React Hooks
- [Foundry](https://book.getfoundry.sh/) - スマートコントラクト開発フレームワーク

## 📞 サポート

問題が発生した場合は、以下の順序で確認してください：

1. [トラブルシューティングガイド](TROUBLESHOOTING.md)
2. [完全引き継ぎ書](HANDOVER.md)
3. [GitHub Issues](https://github.com/macnishio/hacktivation-2025-summer/issues)

---

**Hacktivation 2025 Summer** - Web3アプリケーション開発の学習プロジェクト

![Made with ❤️](https://img.shields.io/badge/Made%20with-❤️-red)