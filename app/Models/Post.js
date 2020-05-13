'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Post extends Model {
  static get table() {
    return 'posts';
  }
  static get primaryKey() {
    return 'id';
  }
  comments() {
    return this.hasMany('App/Models/Comment', 'id', 'posts_id');
  }
}

module.exports = Post;
