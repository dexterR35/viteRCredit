import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // assetFileNames: ({ name }) => {
  //   // Move files which end with gif, jpeg, jpg, png or svg to assets/images.
  //   // If you don't need hash, you can use the [name] placeholder like this:
  //   // 'assets/images/[name][extname]'
  //   if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
  //     return "dist/Icon/[name]-[hash][extname]";
  //   }

  //   // Move files which end with css to assets/css
  //   if (/\.css$/.test(name ?? "")) {
  //     return "dist/css/[name]-[hash][extname]";
  //   }

  //   // Default value
  //   // ref: https://rollupjs.org/guide/en/#outputassetfilenames
  //   return "assets/[name]-[hash][extname]";
  // },
});
