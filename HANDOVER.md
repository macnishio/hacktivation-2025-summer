# Hacktivation 2025 Summer - 完全引き継ぎ書

## 🎯 プロジェクト概要

**プロジェクト名**: Hacktivation 2025 Summer  
**リポジトリ**: https://github.com/macnishio/hacktivation-2025-summer  
**技術スタック**: Next.js 15 + React 18 + TypeScript + Web3 + Solidity + Foundry  
**完成日**: 2025年1月

## ✅ 完成した機能

### フロントエンド機能
- ✅ Next.js 15 + React 18 + TypeScript
- ✅ 日本語UI対応
- ✅ ウォレット接続（MetaMask、Rainbow、Coinbase Wallet、WalletConnect）
- ✅ Counterスマートコントラクトとの相互作用
- ✅ 数値の読み取り、設定、インクリメント機能
- ✅ レスポンシブデザイン

### スマートコントラクト機能
- ✅ Solidity Counterコントラクト
- ✅ 数値の設定・取得・インクリメント機能
- ✅ Foundryフレームワーク
- ✅ ローカルブロックチェーン（Anvil）対応

### Web3統合
- ✅ RainbowKit v1.3.0（ウォレット接続）
- ✅ Wagmi v1.4.0（Web3フック）
- ✅ Viem v1.21.0（Ethereumライブラリ）
- ✅ ローカルチェーン対応

## 🏗️ プロジェクト構造

```
hacktivation-2025-summer/
├── packages/
│   ├── frontend/                 # Next.js フロントエンド
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   └── CounterContract.tsx  # メインコンポーネント
│   │   │   ├── pages/
│   │   │   │   ├── _app.tsx            # Web3プロバイダー設定
│   │   │   │   └── index.tsx           # メインページ
│   │   │   └── wagmi.ts               # Wagmi設定
│   │   ├── package.json               # 依存関係
│   │   └── next.config.js
│   └── contract/                 # Solidity スマートコントラクト
│       ├── src/
│       │   └── Counter.sol       # Counterコントラクト
│       ├── script/
│       │   └── Counter.s.sol     # デプロイスクリプト
│       └── foundry.toml
├── SETUP_LOCAL.md               # セットアップ手順
├── HANDOVER.md                  # この引き継ぎ書
└── README.md
```

## 🔧 技術仕様

### フロントエンド
- **フレームワーク**: Next.js 15.5.3
- **UI**: React 18.2.0
- **言語**: TypeScript 5.5.4
- **Web3**: RainbowKit 1.3.0, Wagmi 1.4.0, Viem 1.21.0
- **状態管理**: @tanstack/react-query 4.36.0

### スマートコントラクト
- **言語**: Solidity ^0.8.13
- **フレームワーク**: Foundry
- **ローカルチェーン**: Anvil (localhost:8545)
- **コントラクトアドレス**: `0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0`

## 🚀 ローカル環境セットアップ

### 前提条件
- Node.js (v18以上)
- pnpm
- Git
- Foundry

### セットアップ手順

1. **リポジトリのクローン**
```bash
git clone https://github.com/macnishio/hacktivation-2025-summer.git
cd hacktivation-2025-summer
```

2. **依存関係のインストール**
```bash
pnpm install
```

3. **Foundryのインストール（初回のみ）**
```bash
curl -L https://foundry.paradigm.xyz | bash
source ~/.bashrc
foundryup
```

4. **スマートコントラクトのセットアップ**
```bash
cd packages/contract
forge build
```

5. **ローカルブロックチェーンの起動（別ターミナル）**
```bash
anvil
```

6. **コントラクトのデプロイ（新しいターミナル）**
```bash
cd packages/contract
forge script script/Counter.s.sol:CounterScript --broadcast --rpc-url http://127.0.0.1:8545 --private-key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
```

7. **フロントエンドの起動**
```bash
cd packages/frontend
pnpm dev
```

8. **アクセス**
ブラウザで http://localhost:3000 にアクセス

## 🔍 動作確認

### フロントエンド確認
- [ ] ページが正常に読み込まれる
- [ ] ウォレット接続ボタンが表示される
- [ ] ウォレット接続モーダルが開く
- [ ] ウォレット接続が成功する
- [ ] Counterコントラクトの数値が表示される
- [ ] インクリメントボタンが動作する
- [ ] 数値設定機能が動作する

### スマートコントラクト確認
```bash
# 現在の数値を確認
cast call 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0 "number()(uint256)" --rpc-url http://127.0.0.1:8545

# 数値を設定
cast send 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0 "setNumber(uint256)" 42 --rpc-url http://127.0.0.1:8545 --private-key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
```

## 🐛 トラブルシューティング

### よくある問題と解決方法

1. **ポートが使用中**
```bash
# プロセスを確認
lsof -i :3000
lsof -i :8545

# プロセスを終了
kill -9 <PID>
```

2. **依存関係の問題**
```bash
# キャッシュをクリア
rm -rf node_modules .next pnpm-lock.yaml
pnpm install
```

3. **スマートコントラクトの再デプロイ**
```bash
# コントラクトアドレスを確認
cast call 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0 "number()(uint256)" --rpc-url http://127.0.0.1:8545
```

4. **Web3接続エラー**
- ウォレットがインストールされているか確認
- ローカルネットワークが起動しているか確認
- ブラウザのキャッシュをクリア

## 📝 開発メモ

### 重要なファイル
- `packages/frontend/src/pages/_app.tsx`: Web3プロバイダー設定
- `packages/frontend/src/components/CounterContract.tsx`: メインコンポーネント
- `packages/contract/src/Counter.sol`: スマートコントラクト
- `packages/contract/script/Counter.s.sol`: デプロイスクリプト

### 設定値
- **コントラクトアドレス**: `0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0`
- **ローカルRPC**: `http://127.0.0.1:8545`
- **フロントエンドポート**: `3000`
- **WalletConnect Project ID**: `demo-project-id-for-hacktivation-2025`

## 🎉 完成状態

このプロジェクトは完全に動作するWeb3アプリケーションとして完成しています。

- ✅ フロントエンド: 美しい日本語UI
- ✅ スマートコントラクト: 完全にデプロイ済み
- ✅ Web3統合: 完全に動作
- ✅ ドキュメント: 完全に整備済み

## 📞 サポート

問題が発生した場合は、以下の順序で確認してください：

1. この引き継ぎ書のトラブルシューティングセクション
2. `SETUP_LOCAL.md`の詳細手順
3. GitHubリポジトリのIssues

---

**作成日**: 2025年1月  
**作成者**: AI Assistant  
**バージョン**: 1.0
