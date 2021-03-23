import { GraphQLServer } from 'graphql-yoga';
import resolver from './graphql/resolver'

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers: resolver

})


server.start(() => console.log('GraphQL Server is running'))