import { mongooseAdapter } from "@payloadcms/db-mongodb"
import { slateEditor } from "@payloadcms/richtext-slate"
import { viteBundler } from "@payloadcms/bundler-vite"
import { buildConfig } from "payload/config"
import path from 'path'
import Users from './collections/Users'


export default buildConfig({
	serverURL: process.env.PAYLOAD_SERVER_URL,
	collections: [
		Users,
	],
	admin: {
		user: Users.slug,
		buildPath: path.resolve(process.cwd(), '.build/payload-client'),
		bundler: viteBundler(),
	},
	editor: slateEditor({}),
	db: mongooseAdapter({
		url: process.env.MONGODB_URI
	}),
	typescript: {
		outputFile: path.resolve(process.cwd(), 'cms/generated-types.ts'),
	},
	graphQL: {
		schemaOutputFile: path.resolve(process.cwd(), 'cms/generated-schema.graphql'),
	}
})