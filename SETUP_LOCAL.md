# ローカル環境セットアップ手順

## 前提条件

- Node.js (v18以上)
- pnpm
- Git

## 1. リポジトリのクローン

```bash
git clone https://github.com/macnishio/hacktivation-2025-summer.git
cd hacktivation-2025-summer
```

## 2. 依存関係のインストール

```bash
# pnpmのインストール（まだの場合）
npm install -g pnpm

# 依存関係のインストール
pnpm install
```

## 3. スマートコントラクトのセットアップ

```bash
cd packages/contract

# Foundryのインストール（まだの場合）
curl -L https://foundry.paradigm.xyz | bash
source ~/.bashrc
foundryup

# コントラクトのコンパイル
forge build

# ローカルブロックチェーンの起動（別ターミナル）
anvil

# コントラクトのデプロイ（新しいターミナル）
forge script script/Counter.s.sol:CounterScript --broadcast --rpc-url http://127.0.0.1:8545 --private-key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
```

## 4. フロントエンドの起動

```bash
cd packages/frontend
pnpm dev
```

## 5. アクセス

ブラウザで http://localhost:3000 にアクセス

## 機能

- ウォレット接続（MetaMask、Rainbow、Coinbase Wallet、WalletConnect）
- Counterスマートコントラクトとの相互作用
- 数値の読み取り、設定、インクリメント
- 日本語UI対応

## トラブルシューティング

### ポートが使用中の場合
```bash
# プロセスを確認
lsof -i :3000
lsof -i :8545

# プロセスを終了
kill -9 <PID>
```

### 依存関係の問題
```bash
# キャッシュをクリア
rm -rf node_modules .next pnpm-lock.yaml
pnpm install
```

### スマートコントラクトの再デプロイ
```bash
# コントラクトアドレスを確認
cast call 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0 "number()(uint256)" --rpc-url http://127.0.0.1:8545
```

## 開発環境

- **フロントエンド**: Next.js 15 + React 18 + TypeScript
- **Web3**: RainbowKit v1.3.0 + Wagmi v1.4.0 + Viem v1.21.0
- **スマートコントラクト**: Solidity + Foundry
- **ローカルブロックチェーン**: Anvil (localhost:8545)
