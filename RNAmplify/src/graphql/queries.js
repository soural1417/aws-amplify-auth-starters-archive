/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncMessages = /* GraphQL */ `
  query SyncMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        text
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        user {
          items {
            id
            username
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      text
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      user {
        items {
          id
          username
          message {
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          follow {
            nextToken
            startedAt
          }
          friends {
            nextToken
            startedAt
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        user {
          items {
            id
            username
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      follow {
        items {
          id
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          follow {
            nextToken
            startedAt
          }
          posts {
            nextToken
            startedAt
          }
          people {
            id
            username
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
        nextToken
        startedAt
      }
      posts {
        items {
          id
          title
          blogID
          tags
          createdOn
          updatedOn
          metadata {
            category
          }
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          blog {
            id
            name
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          comments {
            nextToken
            startedAt
          }
        }
        nextToken
        startedAt
      }
      people {
        id
        username
        message {
          items {
            id
            text
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        follow {
          items {
            id
            name
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        friends {
          items {
            id
            username
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        follow {
          items {
            id
            name
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        posts {
          items {
            id
            title
            blogID
            tags
            createdOn
            updatedOn
            status
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        people {
          id
          username
          message {
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          follow {
            nextToken
            startedAt
          }
          friends {
            nextToken
            startedAt
          }
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBlogs = /* GraphQL */ `
  query SyncBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBlogs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        follow {
          items {
            id
            name
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        posts {
          items {
            id
            title
            blogID
            tags
            createdOn
            updatedOn
            status
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        people {
          id
          username
          message {
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          follow {
            nextToken
            startedAt
          }
          friends {
            nextToken
            startedAt
          }
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        blogID
        tags
        createdOn
        updatedOn
        metadata {
          category
        }
        status
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        blog {
          id
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          follow {
            nextToken
            startedAt
          }
          posts {
            nextToken
            startedAt
          }
          people {
            id
            username
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
        comments {
          items {
            id
            postID
            content
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      blogID
      tags
      createdOn
      updatedOn
      metadata {
        category
      }
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      blog {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        follow {
          items {
            id
            name
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        posts {
          items {
            id
            title
            blogID
            tags
            createdOn
            updatedOn
            status
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        people {
          id
          username
          message {
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          follow {
            nextToken
            startedAt
          }
          friends {
            nextToken
            startedAt
          }
        }
      }
      comments {
        items {
          id
          postID
          content
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          post {
            id
            title
            blogID
            tags
            createdOn
            updatedOn
            status
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const syncPosts = /* GraphQL */ `
  query SyncPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        blogID
        tags
        createdOn
        updatedOn
        metadata {
          category
        }
        status
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        blog {
          id
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          follow {
            nextToken
            startedAt
          }
          posts {
            nextToken
            startedAt
          }
          people {
            id
            username
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
        comments {
          items {
            id
            postID
            content
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      postID
      content
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      post {
        id
        title
        blogID
        tags
        createdOn
        updatedOn
        metadata {
          category
        }
        status
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        blog {
          id
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          follow {
            nextToken
            startedAt
          }
          posts {
            nextToken
            startedAt
          }
          people {
            id
            username
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
        comments {
          items {
            id
            postID
            content
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        content
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        post {
          id
          title
          blogID
          tags
          createdOn
          updatedOn
          metadata {
            category
          }
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          blog {
            id
            name
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          comments {
            nextToken
            startedAt
          }
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncComments = /* GraphQL */ `
  query SyncComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        postID
        content
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        post {
          id
          title
          blogID
          tags
          createdOn
          updatedOn
          metadata {
            category
          }
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          blog {
            id
            name
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          comments {
            nextToken
            startedAt
          }
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      message {
        items {
          id
          text
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          user {
            nextToken
            startedAt
          }
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      follow {
        items {
          id
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          follow {
            nextToken
            startedAt
          }
          posts {
            nextToken
            startedAt
          }
          people {
            id
            username
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
        nextToken
        startedAt
      }
      friends {
        items {
          id
          username
          message {
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          follow {
            nextToken
            startedAt
          }
          friends {
            nextToken
            startedAt
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        message {
          items {
            id
            text
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        follow {
          items {
            id
            name
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        friends {
          items {
            id
            username
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        username
        message {
          items {
            id
            text
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        follow {
          items {
            id
            name
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        friends {
          items {
            id
            username
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
