// @ts-check

import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://yassrobotics.com",

	prefetch: true,

	// Posts that were renamed after they were published.
	redirects: {
		"/blog/yams-a301-and-more": "/blog/yams-a301-wrapper",
	},

	vite: {
		plugins: [tailwindcss()],
	},

	integrations: [sitemap()],
});
