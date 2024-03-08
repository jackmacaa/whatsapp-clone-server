import express from 'express';
import cors from 'cors';
import schema from './schema';
import { createYoga } from 'graphql-yoga';
import { createServer } from 'http';
// import { ApolloServer, gql } from 'apollo-server-express';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/_ping', (_req, res) => {
  res.send('pong');
});

// Implementation from tut, not working
// const server = new ApolloServer({ schema });
 
// server.applyMiddleware({
//   app,
//   path: '/graphql',
// });

const yoga = createYoga({ schema });
const server = createServer(yoga);

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/graphql`);
});
