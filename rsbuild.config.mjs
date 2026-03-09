import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title:
      "AECRRU | Agostinho Emanuel Construção, Remodelação, Reabilitação, Unip. Lda.",
    meta: {
      description:
        "Jovem empresa de construção. O seu parceiro na construção civil, remodelação e reabilitação.",
      keywords: "construção, construção civil, remodelação, reabilitação",
      viewport: "width=device-width, initial-scale=1.0"
    }
  }
});
