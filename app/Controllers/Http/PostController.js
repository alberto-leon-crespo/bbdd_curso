'use strict';

const Post = use('App/Models/Post');

class PostController {
  /**
   * Devuelve el listado de post disponibles
   * Los listados no son tan detallados. Por eso no
   * se han incluido los comentarios
   * @param request
   * @param response
   * @returns {Promise<*>}
   */
  async getPosts({request, response}) {
    const postList = await Post
      .query()
      .fetch();
    return response.ok(postList);
  }

  /**
   * Devuelve el detalle de un post. En este caso
   * si se incluyen los comentarios, por ser una
   * información mas ampliada que el listado
   * @returns {Promise<*>}
   */
  async getPostDetail({request, response}) {
    const postId = request.params.post_id || undefined;
    if (!postId) {
      throw new Error("Es obligatorio indicar el id del post en la url");
    }
    const postDetail = await Post
      .query()
      .with('comments')
      .first();
    return response.ok(postDetail);
  }
}

module.exports = PostController;
