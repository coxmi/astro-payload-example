import { CollectionConfig } from 'payload/types'

const Users: CollectionConfig = {
	slug: 'users',
	auth: true,
	admin: {
		useAsTitle: 'email',
	},
	fields: [
		{
			type: 'text',
			name: 'firstName',
			required: false,
		},
		{
			type: 'text',
			name: 'familyName',
			required: false,
		}
	],
};

export default Users