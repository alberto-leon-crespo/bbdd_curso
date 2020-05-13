'use strict';

const Post = use('App/Models/Post');

class PostController {
  async getPosts({request, response}) {
    const postList = await Post
      .query()
      .with('comments')
      .fetch();
    return response.ok(postList);
  }
}

module.exports = PostController;
