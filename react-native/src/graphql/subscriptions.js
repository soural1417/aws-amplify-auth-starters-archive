/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
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
export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog {
    onCreateBlog {
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
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog {
    onUpdateBlog {
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
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog {
    onDeleteBlog {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
