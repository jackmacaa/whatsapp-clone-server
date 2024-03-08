import { importSchema } from 'graphql-import';
import resolvers from './resolvers';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';

const typeDefs = loadSchemaSync("schema/typeDefs.graphql", {
    loaders: [new GraphQLFileLoader()],
  });

export default makeExecutableSchema({ resolvers, typeDefs });
