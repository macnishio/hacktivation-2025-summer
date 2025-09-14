# 技術詳細書 - Hacktivation 2025 Summer

## 🔧 技術スタック詳細

### フロントエンド技術
- **Next.js**: 15.5.3 (App Router対応)
- **React**: 18.2.0 (Hooks対応)
- **TypeScript**: 5.5.4 (型安全性)
- **CSS**: CSS Modules + インラインスタイル

### Web3技術
- **RainbowKit**: 1.3.0 (ウォレット接続UI)
- **Wagmi**: 1.4.0 (React Hooks for Ethereum)
- **Viem**: 1.21.0 (TypeScript Ethereumライブラリ)
- **@tanstack/react-query**: 4.36.0 (データフェッチング)

### スマートコントラクト技術
- **Solidity**: ^0.8.13
- **Foundry**: Forge, Cast, Anvil, Chisel
- **ローカルチェーン**: Anvil (localhost:8545)

## 📁 ファイル構成詳細

### フロントエンド (`packages/frontend/`)

#### `src/pages/_app.tsx`
```typescript
// Web3プロバイダーの設定
- WagmiConfig: Web3設定
- QueryClientProvider: データフェッチング
- RainbowKitProvider: ウォレット接続UI
- チェーン設定: mainnet, sepolia, localhost
```

#### `src/pages/index.tsx`
```typescript
// メインページ
- ConnectButton: ウォレット接続ボタン
- CounterContract: メインコンポーネント
- 日本語UI対応
```

#### `src/components/CounterContract.tsx`
```typescript
// メインコンポーネント
- useAccount: ウォレット接続状態
- useContractRead: コントラクト読み取り
- useContractWrite: コントラクト書き込み
- useWaitForTransaction: トランザクション待機
```

#### `src/wagmi.ts`
```typescript
// Wagmi設定
- configureChains: チェーン設定
- getDefaultWallets: ウォレット設定
- createConfig: 設定作成
```

### スマートコントラクト (`packages/contract/`)

#### `src/Counter.sol`
```solidity
// Counterコントラクト
contract Counter {
    uint256 public number;
    
    function setNumber(uint256 newNumber) public
    function increment() public
}
```

#### `script/Counter.s.sol`
```solidity
// デプロイスクリプト
contract CounterScript is Script {
    function run() external {
        Counter counter = new Counter();
        console.log("Counter deployed at:", address(counter));
    }
}
```

## 🔗 重要な設定値

### ネットワーク設定
```typescript
const localhostChain = {
  ...localhost,
  rpcUrls: {
    default: { http: ['http://127.0.0.1:8545'] },
    public: { http: ['http://127.0.0.1:8545'] },
  },
};
```

### コントラクト設定
```typescript
const COUNTER_ADDRESS = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';
const COUNTER_ABI = [
  // ABI定義
];
```

### WalletConnect設定
```typescript
const { connectors } = getDefaultWallets({
  appName: 'Hacktivation 2025 Summer',
  projectId: 'demo-project-id-for-hacktivation-2025',
  chains,
});
```

## 🚀 デプロイメント詳細

### ローカルブロックチェーン
```bash
# Anvil起動
anvil
# デフォルト設定:
# - RPC URL: http://127.0.0.1:8545
# - Chain ID: 31337
# - アカウント: 10個のテストアカウント
```

### スマートコントラクトデプロイ
```bash
# デプロイコマンド
forge script script/Counter.s.sol:CounterScript \
  --broadcast \
  --rpc-url http://127.0.0.1:8545 \
  --private-key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80

# 結果
# Counter deployed at: 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0
```

### フロントエンド起動
```bash
# 開発サーバー起動
pnpm dev
# アクセス: http://localhost:3000
```

## 🔍 デバッグ情報

### ログ確認
```bash
# フロントエンドログ
cd packages/frontend
pnpm dev

# スマートコントラクトログ
cd packages/contract
forge test -vvv
```

### ネットワーク確認
```bash
# ローカルチェーン状態確認
cast block-number --rpc-url http://127.0.0.1:8545

# コントラクト状態確認
cast call 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0 "number()(uint256)" --rpc-url http://127.0.0.1:8545
```

## 🛠️ 開発環境設定

### VS Code推奨拡張機能
- Solidity
- TypeScript Importer
- ES7+ React/Redux/React-Native snippets
- Prettier
- ESLint

### 環境変数（必要に応じて）
```bash
# .env.local
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id
NEXT_PUBLIC_RPC_URL=http://127.0.0.1:8545
```

## 📊 パフォーマンス情報

### ビルド時間
- フロントエンド: ~3-5秒
- スマートコントラクト: ~1-2秒

### バンドルサイズ
- フロントエンド: ~2.5MB
- スマートコントラクト: ~1KB

## 🔒 セキュリティ考慮事項

### スマートコントラクト
- アクセス制御なし（学習用）
- 本番環境では適切な権限管理が必要

### フロントエンド
- プライベートキーは使用していない
- ウォレット接続は安全な方法を使用

## 📈 今後の拡張可能性

### 追加可能な機能
- 複数のスマートコントラクト
- トークン機能
- NFT機能
- マルチチェーン対応
- ダークモード
- 多言語対応

### 技術的改善点
- エラーハンドリングの強化
- ローディング状態の改善
- レスポンシブデザインの最適化
- テストカバレッジの向上

---

**作成日**: 2025年1月  
**バージョン**: 1.0
