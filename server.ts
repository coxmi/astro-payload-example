import 'dotenv/config'
import payload from 'payload'
import express from 'express'
import { astro } from 'astro-payload-plugin'

const port = process.env.PORT || 4321
const app = express()

export async function getPayload() {
	await payload.init({
	    secret: process.env.PAYLOAD_SECRET,
	    mongoURL: process.env.MONGODB_URI,
	    express: app,
	})
	return payload
}

async function serve() {
	await getPayload()
	await astro({
		express: app,
		serverEntry: `${process.cwd()}/.build/astro/server/entry.mjs`,
		clientDir: `${process.cwd()}/.build/astro/client`,
	})

	app.listen(port)
	console.log(`Serving on http://localhost:${port}`)
}

if (process.argv[2] === '--serve') serve()