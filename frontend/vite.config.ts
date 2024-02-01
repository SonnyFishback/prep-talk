import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		proxy: {
		  "/api": {
			target: "https://licf9v0cx2.execute-api.us-east-1.amazonaws.com",
			changeOrigin: true,
			secure: false,
			rewrite: (path) => path.replace(/^\/api/, ""),
		  },
		},
	  },
});
