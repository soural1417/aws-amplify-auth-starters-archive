import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Category {
  COMEDY = "comedy",
  NEWS = "news"
}

export enum Status {
  COMPLETE = "complete",
  INCOMPLETE = "incomplete"
}

export declare class MetaData {
  readonly category?: Category | keyof typeof Category;
  constructor(init: ModelInit<MetaData>);
}

export declare class Blog {
  readonly id: string;
  readonly name: string;
  readonly posts?: Post[];
  readonly follow?: Blog[];
  readonly people?: User;
  readonly blogFollowId?: string;
  readonly owner?: String;
  constructor(init: ModelInit<Blog>);
  static copyOf(source: Blog, mutator: (draft: MutableModel<Blog>) => MutableModel<Blog> | void): Blog;
}

export declare class Post {
  readonly id: string;
  readonly title: string;
  readonly blog?: Blog;
  readonly comments?: Comment[];
  readonly tags: string[];
  readonly createdOn: string;
  readonly updatedOn: string;
  readonly metadata?: MetaData;
  readonly status?: Status | keyof typeof Status;
  readonly owner?: String;
  constructor(init: ModelInit<Post>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

export declare class Comment {
  readonly id: string;
  readonly post?: Post;
  readonly content: string;
  constructor(init: ModelInit<Comment>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}

export declare class User {
  readonly id: string;
  readonly username?: string;
  readonly friends?: User[];
  readonly follow?: Blog[];
  readonly message?: Message[];
  readonly userFriendsId?: string;
  readonly messageUserId?: string;
  readonly owner?: String;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Message {
  readonly id: string;
  readonly user?: User[];
  readonly text?: string;
  readonly userMessageId?: string;
  readonly owner?: String;
  constructor(init: ModelInit<Message>);
  static copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}