import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// VitePWA をインポート
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: './',
  plugins: [
    react(),
    VitePWA({
      manifest: {
        // ユーザーに通常表示されるアプリ名
        name: 'Todo App (PWA)',
        // name を表示するのに十分なスペースがない場合に表示されるアプリ名
        short_name: 'Todo',
        // アプリの詳細な説明
        description: 'Todo プログレッシブ・ウェブアプリ',
        /**
         * アプリの開始 URL:
         * 通常はサーブするディレクトリそのもの
         */
        start_url: '.',
        /**
         * 表示モード:
         * fullscreen: フルスクリーン
         * standalone: 単独のアプリのようになる
         * minimal-ui: 最小限のブラウザ UI は残る
         * browser: 通常のブラウザ
         */
        display: "standalone",
        /**
         * アプリの向き:
         * portrait: 縦向き
         * landscape: 横向き
         * any: 向きを強制しない
         */
        orientation: "portrait",
        // 既定のテーマカラー
        theme_color: '#3f51b2',
        // スタイルシートが読み込まれる前に表示するアプリページの背景色
        background_color: "#efeff4",
        /**
         * favicon やアプリアイコンの配列:
         * 最低でも 192x192ビクセルと512x512ビクセルの 2 つのアプリアイコンが必要
         */
        icons: [
          {
            src: 'icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'icon-512x512-mask.png',
            sizes: '512x512',
            type: 'image/png',
            // 用途をマスカブルアイコンとする
            purpose: 'maskable',
          },
        ],
        id: '/todo_app_ts/',
      },
    }),
  ],
});
