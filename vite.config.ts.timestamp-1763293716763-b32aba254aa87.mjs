// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import vueJsx from "file:///D:/Source/vtocph-ui/vtocph23-ui/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import vueDevTools from "file:///D:/Source/vtocph-ui/vtocph23-ui/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import vue from "file:///D:/Source/vtocph-ui/vtocph23-ui/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { defineConfig } from "file:///D:/Source/vtocph-ui/vtocph23-ui/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
var __vite_injected_original_dirname = "D:\\Source\\vtocph-ui\\vtocph23-ui";
var __vite_injected_original_import_meta_url = "file:///D:/Source/vtocph-ui/vtocph23-ui/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  // resolve: {
  //   alias: {
  //     '@': resolve(__dirname, './src'),
  //   },
  //   dedupe: ['vue'],
  // },
  build: {
    cssCodeSplit: true,
    target: "esnext",
    lib: {
      entry: resolve(__vite_injected_original_dirname, "./src/index.ts"),
      name: "@ocph23/vtocph23"
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxTb3VyY2VcXFxcdnRvY3BoLXVpXFxcXHZ0b2NwaDIzLXVpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxTb3VyY2VcXFxcdnRvY3BoLXVpXFxcXHZ0b2NwaDIzLXVpXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Tb3VyY2UvdnRvY3BoLXVpL3Z0b2NwaDIzLXVpL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5pbXBvcnQgdnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnXG5pbXBvcnQgdnVlRGV2VG9vbHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgdnVlSnN4KCksXG4gICAgdnVlRGV2VG9vbHMoKSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgIH1cbiAgfSxcbiAgLy8gcmVzb2x2ZToge1xuICAvLyAgIGFsaWFzOiB7XG4gIC8vICAgICAnQCc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKSxcbiAgLy8gICB9LFxuICAvLyAgIGRlZHVwZTogWyd2dWUnXSxcbiAgLy8gfSxcbiAgYnVpbGQ6IHtcbiAgICBjc3NDb2RlU3BsaXQ6IHRydWUsXG4gICAgdGFyZ2V0OiAnZXNuZXh0JyxcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2luZGV4LnRzJyksXG4gICAgICBuYW1lOiAnQG9jcGgyMy92dG9jcGgyMycsXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAvLyBtYWtlIHN1cmUgdG8gZXh0ZXJuYWxpemUgZGVwcyB0aGF0IHNob3VsZG4ndCBiZSBidW5kbGVkXG4gICAgICAvLyBpbnRvIHlvdXIgbGlicmFyeVxuICAgICAgZXh0ZXJuYWw6IFsndnVlJ10sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgLy8gUHJvdmlkZSBnbG9iYWwgdmFyaWFibGVzIHRvIHVzZSBpbiB0aGUgVU1EIGJ1aWxkXG4gICAgICAgIC8vIGZvciBleHRlcm5hbGl6ZWQgZGVwc1xuICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgdnVlOiAnVnVlJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1UixTQUFTLGVBQWUsV0FBVztBQUMxVCxPQUFPLFlBQVk7QUFDbkIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsZUFBZTtBQUx4QixJQUFNLG1DQUFtQztBQUFvSSxJQUFNLDJDQUEyQztBQVE5TixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxZQUFZO0FBQUEsRUFDZDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9BLE9BQU87QUFBQSxJQUNMLGNBQWM7QUFBQSxJQUNkLFFBQVE7QUFBQSxJQUNSLEtBQUs7QUFBQSxNQUNILE9BQU8sUUFBUSxrQ0FBVyxnQkFBZ0I7QUFBQSxNQUMxQyxNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0EsZUFBZTtBQUFBO0FBQUE7QUFBQSxNQUdiLFVBQVUsQ0FBQyxLQUFLO0FBQUEsTUFDaEIsUUFBUTtBQUFBO0FBQUE7QUFBQSxRQUdOLFNBQVM7QUFBQSxVQUNQLEtBQUs7QUFBQSxRQUNQO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
