import { defineConfig, loadEnv } from 'vite'

import AutoImport from 'unplugin-auto-import/vite'
import AutoImportComponents from 'unplugin-vue-components/vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      presetOverriding: true,
      imports: [
        {
          '@vue/runtime-dom': [
            'computed',
            'defineComponent',
            'inject',
            'onMounted',
            'onUpdated',
            'provide',
            'reactive',
            'ref',
            'toRef',
            'toRefs',
            'watch',
            'watchEffect'
          ]
        }
      ]
    }),
    AutoImportComponents({
      dirs: ['src/components']
    }),
    // tsconfigPaths(),
    vue()
  ],
  build: {
    commonjsOptions: {
      include: [/lib-cjs/, /node_modules/]
    },
    outDir: 'dist'
  }
})
