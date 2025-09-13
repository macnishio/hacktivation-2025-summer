FROM node:18-alpine

# グローバルに create-next-appとgit をインストール
RUN npm install -g create-next-app
RUN apk update
RUN apk add git
RUN curl -L https://foundry.paradigm.xyz | bash
RUN foundryup

# 作業ディレクトリの設定
WORKDIR /app

# コンテナ起動時はシェルを起動(インタラクティブモード用)
CMD ["sh"]