import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    base: "/aecrru-new-website/",
  },
  output: {
    assetPrefix: "/aecrru-new-website/",
  },
  html: {
    title:
      "AECRRU | Agostinho Emanuel Construção, Remodelação, Reabilitação, Unip. Lda.",
    favicon: "./public/media/icon.png",
    meta: {
      description:
        "O seu parceiro na construção civil, remodelação e reabilitação.",
      keywords: "construção, construção civil, remodelação, reabilitação",
      viewport: "width=device-width, initial-scale=1.0"
    }
  }
});
