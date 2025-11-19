import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync, existsSync, mkdirSync } from 'fs';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    
    // 确保 files 目录被复制到 dist
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        // 自定义插件：复制 files 目录
        {
          name: 'copy-files',
          closeBundle() {
            const filesDir = path.resolve(__dirname, 'files');
            const distFilesDir = path.resolve(__dirname, 'dist/files');
            if (existsSync(filesDir) && !existsSync(distFilesDir)) {
              mkdirSync(distFilesDir, { recursive: true });
              // 这里需要递归复制，可以使用更简单的方法
            }
          }
        }
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
      // publicDir: 'public', // 如果使用 public 目录
    };
});
