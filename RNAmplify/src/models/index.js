// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Category = {
  "COMEDY": "comedy",
  "NEWS": "news"
};

const Status = {
  "COMPLETE": "complete",
  "INCOMPLETE": "incomplete"
};

const { Blog, Post, Comment, User, Message, MetaData } = initSchema(schema);

export {
  Blog,
  Post,
  Comment,
  User,
  Message,
  Category,
  Status,
  MetaData
};