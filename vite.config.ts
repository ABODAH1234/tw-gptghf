import { defineConfig } from "vite";
import { sallaBuildPlugin, sallaDemoPlugin, sallaTransformPlugin } from "@salla.sa/twilight-bundles/vite-plugins";

export default defineConfig({
  plugins: [
    sallaTransformPlugin(),
    sallaBuildPlugin(),
    sallaDemoPlugin({
      components: ["pmp-storefront"],
      grid: { columns: "1fr", gap: "0", minWidth: "0" },
      css: "body{margin:0;background:#080808}.component-card{padding:0!important;border:0!important;background:transparent!important;box-shadow:none!important}",
    }),
  ],
});
