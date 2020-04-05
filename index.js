const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
	type Query {
		users: [User!]
	}
	type User {
		id: String!
		username: String!
	}
`

const resolvers = {
	Query: {
		users: async () => await users,
	},
	User: {
		id: async rootUser => await rootUser.id,
		username: async rootUser => await rootUser.username,
	},
}

const users = [
	{ id: '9f3f6c88-35df-42e6-855f-f463625a7b54', username: 'muhammad', },
	{ id: '0ec49f8b-dcb6-4db6-a3c4-ee5c6ba9b707', username: 'donishmand', },
]

;(async () => {
	const server = new ApolloServer({
		typeDefs, resolvers,
	})
	const { url } = await server.listen({ port: process.env.PORT || 4000, })
	console.log(`Server ready at ${ url }`)
})()