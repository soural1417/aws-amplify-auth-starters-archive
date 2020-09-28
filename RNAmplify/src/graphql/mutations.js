/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
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
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
