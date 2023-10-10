import { defineConfig } from 'astro/config'
import node from '@astrojs/node'
import { payload } from 'astro-payload-plugin'
import { getPayload } from './../server'

export default defineConfig({
	integrations: [
		payload({
			builtConfigPath: process.cwd() + `/.build/cms/payload.config.cjs`,
			init: getPayload
		})
	],
	srcDir: '.',
	publicDir: './public',
	outDir: '../.build/astro',
	trailingSlash: 'always',
	output: 'hybrid',
	build: {
		client: '../.build/astro/client',
		server: '../.build/astro/server',
		assets: 'assets',
	},
	adapter: node({
		mode: "middleware"
	}),
	vite: {
		cacheDir: '../node_modules/.vite',
	},
})
