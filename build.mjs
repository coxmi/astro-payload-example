import esbuild from 'esbuild'

let watch = process.argv[2] === '--watch'

const ctx = await esbuild.context({
	entryPoints: [
		'server.ts',
		'cms/payload.config.ts',
	],
	outdir: '.build',
	bundle: true,
	minify: false,
	sourcemap: true,
	platform: 'node',
  	packages: 'external',
  	outExtension: { '.js': '.cjs' },
  	external: [
  		'./.build/*'
  	]
})

watch 
	? await ctx.watch() 
	: await ctx.rebuild() && await ctx.dispose()