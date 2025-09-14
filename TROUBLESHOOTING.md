# トラブルシューティングガイド - Hacktivation 2025 Summer

## 🚨 よくある問題と解決方法

### 1. ポート関連の問題

#### 問題: ポート3000が使用中
```bash
# エラーメッセージ
⚠ Port 3000 is in use by an unknown process, using available port 3001 instead.
```

**解決方法:**
```bash
# プロセスを確認
lsof -i :3000

# プロセスを終了
kill -9 <PID>

# または、別のポートを使用
pnpm dev --port 3001
```

#### 問題: ポート8545が使用中
```bash
# エラーメッセージ
Error: bind: address already in use
```

**解決方法:**
```bash
# プロセスを確認
lsof -i :8545

# プロセスを終了
kill -9 <PID>

# または、別のポートでAnvilを起動
anvil --port 8546
```

### 2. 依存関係の問題

#### 問題: pnpm install エラー
```bash
# エラーメッセージ
Error: Cannot find module
```

**解決方法:**
```bash
# キャッシュをクリア
rm -rf node_modules .next pnpm-lock.yaml

# 再インストール
pnpm install
```

#### 問題: バージョン競合
```bash
# エラーメッセージ
peer dependency warnings
```

**解決方法:**
```bash
# 強制的にインストール
pnpm install --force

# または、特定のバージョンを指定
pnpm add package@version
```

### 3. スマートコントラクトの問題

#### 問題: コントラクトがデプロイできない
```bash
# エラーメッセージ
Error: contract source info format must be <path>:<contractname>
```

**解決方法:**
```bash
# 正しいコマンド形式
forge script script/Counter.s.sol:CounterScript --broadcast --rpc-url http://127.0.0.1:8545 --private-key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
```

#### 問題: コントラクトが動作しない
```bash
# エラーメッセージ
Error: execution reverted
```

**解決方法:**
```bash
# コントラクト状態を確認
cast call 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0 "number()(uint256)" --rpc-url http://127.0.0.1:8545

# 再デプロイ
forge script script/Counter.s.sol:CounterScript --broadcast --rpc-url http://127.0.0.1:8545 --private-key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
```

### 4. Web3接続の問題

#### 問題: ウォレット接続できない
```bash
# エラーメッセージ
Error: User rejected the request
```

**解決方法:**
1. ウォレットがインストールされているか確認
2. ウォレットがロックされていないか確認
3. 正しいネットワークに接続されているか確認
4. ブラウザのキャッシュをクリア

#### 問題: useConfig must be used within WagmiConfig
```bash
# エラーメッセージ
Error: useConfig must be used within WagmiConfig
```

**解決方法:**
1. `_app.tsx`でWagmiConfigが正しく設定されているか確認
2. コンポーネントがWagmiConfig内で使用されているか確認

### 5. ビルド・コンパイルの問題

#### 問題: TypeScriptエラー
```bash
# エラーメッセージ
Type error: Cannot find module
```

**解決方法:**
```bash
# 型定義を再インストール
pnpm add -D @types/node @types/react @types/react-dom

# TypeScript設定を確認
npx tsc --noEmit
```

#### 問題: Next.jsビルドエラー
```bash
# エラーメッセージ
Module not found
```

**解決方法:**
```bash
# キャッシュをクリア
rm -rf .next

# 再ビルド
pnpm build
```

### 6. ネットワーク関連の問題

#### 問題: RPC接続エラー
```bash
# エラーメッセージ
Error: could not detect network
```

**解決方法:**
1. Anvilが起動しているか確認
2. RPC URLが正しいか確認
3. ファイアウォール設定を確認

#### 問題: トランザクションが失敗する
```bash
# エラーメッセージ
Error: transaction failed
```

**解決方法:**
1. ガス代が十分か確認
2. アカウントの残高を確認
3. ネットワーク設定を確認

## 🔍 デバッグ手順

### 1. ログの確認
```bash
# フロントエンドログ
cd packages/frontend
pnpm dev

# スマートコントラクトログ
cd packages/contract
forge test -vvv
```

### 2. ネットワーク状態の確認
```bash
# ブロック番号を確認
cast block-number --rpc-url http://127.0.0.1:8545

# アカウント残高を確認
cast balance 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 --rpc-url http://127.0.0.1:8545
```

### 3. コントラクト状態の確認
```bash
# コントラクトの数値を確認
cast call 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0 "number()(uint256)" --rpc-url http://127.0.0.1:8545

# コントラクトのコードを確認
cast code 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0 --rpc-url http://127.0.0.1:8545
```

## 🆘 緊急時の対応

### 完全リセット
```bash
# すべてのプロセスを終了
pkill -f "anvil"
pkill -f "next"

# キャッシュをクリア
rm -rf node_modules .next pnpm-lock.yaml

# 再インストール
pnpm install

# 再起動
anvil &
cd packages/contract && forge script script/Counter.s.sol:CounterScript --broadcast --rpc-url http://127.0.0.1:8545 --private-key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 &
cd packages/frontend && pnpm dev
```

### ログファイルの確認
```bash
# フロントエンドログ
tail -f packages/frontend/dev.log

# システムログ
journalctl -f
```

## 📞 サポート

問題が解決しない場合は、以下の情報を収集してください：

1. エラーメッセージの全文
2. 実行したコマンド
3. 環境情報（OS、Node.jsバージョンなど）
4. ログファイル

---

**作成日**: 2025年1月  
**バージョン**: 1.0
