// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     rollupOptions: {
//       external: ['framer-motion'], // Exclude Framer Motion from the build if necessary
//     },
//   },
// });
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000, // زيادة الحد الافتراضي إذا كان الحجم كبيرًا
  },
});
