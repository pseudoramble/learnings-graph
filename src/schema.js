import fs from 'fs';
import { makeExecutableSchema } from 'graphql-tools';
import { getLearner, searchLearners, signup } from './models/learners';
import { getBook } from './models/books';

const schemaDef = fs.readFileSync(`${__dirname}/schema.gql`, 'utf-8');
const resolvers = {
  Query: {
    learner: (root, { lid }) => getLearner(lid),
    learners: (root, { criteria }) => searchLearners(criteria),
    book: (root, { bid }) => getBook(bid)
  },

  Mutation: {
    signup: (root, { info }) => signup(info)
  }
};

export const schema = makeExecutableSchema({
  typeDefs: [schemaDef],
  resolvers
});
