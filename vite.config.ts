import react            from "@vitejs/plugin-react-swc";
import { resolve }      from "path";
import svgr             from "vite-plugin-svgr";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr({
    // svgr options: https://react-svgr.com/docs/options/
    svgrOptions: {
      exportType: "default", ref: true, svgo: false, titleProp: true,
    },
    include: "**/*.svg",
  })],
  resolve: {
    alias: {
      "@"      : resolve(__dirname, "./src"),
      "@public": resolve(__dirname, "./public"),
    },
  },
});
