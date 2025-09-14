# クイックスタートガイド - Hacktivation 2025 Summer

## 🚀 5分で起動！

### 1. リポジトリをクローン
```bash
git clone https://github.com/macnishio/hacktivation-2025-summer.git
cd hacktivation-2025-summer
```

### 2. 依存関係をインストール
```bash
pnpm install
```

### 3. スマートコントラクトをセットアップ
```bash
cd packages/contract
forge build
```

### 4. ローカルブロックチェーンを起動（別ターミナル）
```bash
anvil
```

### 5. コントラクトをデプロイ（新しいターミナル）
```bash
cd packages/contract
forge script script/Counter.s.sol:CounterScript --broadcast --rpc-url http://127.0.0.1:8545 --private-key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
```

### 6. フロントエンドを起動
```bash
cd packages/frontend
pnpm dev
```

### 7. ブラウザでアクセス
http://localhost:3000 を開く

## ✅ 動作確認チェックリスト

- [ ] ページが読み込まれる
- [ ] ウォレット接続ボタンが表示される
- [ ] ウォレット接続が成功する
- [ ] Counterの数値が表示される
- [ ] インクリメントボタンが動作する
- [ ] 数値設定が動作する

## 🆘 よくある問題

### ポートが使用中
```bash
# プロセスを確認
lsof -i :3000
lsof -i :8545

# プロセスを終了
kill -9 <PID>
```

### 依存関係エラー
```bash
# キャッシュをクリア
rm -rf node_modules .next pnpm-lock.yaml
pnpm install
```

### コントラクトが動作しない
```bash
# コントラクト状態を確認
cast call 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0 "number()(uint256)" --rpc-url http://127.0.0.1:8545
```

## 📚 詳細ドキュメント

- [完全引き継ぎ書](HANDOVER.md) - プロジェクト全体の詳細
- [技術詳細書](TECHNICAL_DETAILS.md) - 技術仕様の詳細
- [ローカルセットアップ](SETUP_LOCAL.md) - 詳細なセットアップ手順

---

**所要時間**: 約5分  
**難易度**: 初級  
**前提条件**: Node.js, pnpm, Git
