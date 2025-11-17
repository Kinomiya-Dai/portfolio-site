FROM node:22-slim

# pnpm をグローバルインストール
RUN npm install -g pnpm

# ワーキングディレクトリの指定
WORKDIR /usr/src/app


#パッケージをコピー
COPY package.json pnpm-lock.yaml ./

#nodeモジュールのインストール
RUN pnpm install

COPY . .

# コンテナがリッスンするポートを明示的に公開
EXPOSE 3000

# コンテナ起動時に開発サーバーを実行
CMD ["pnpm" , "run" , "dev"]