import {defineConfig} from 'vite'

export default defineConfig({
	plugins: [],
	server: {
		static: "Assets",
	},	
	build: {
		assetsDir: 'public',
	},
})