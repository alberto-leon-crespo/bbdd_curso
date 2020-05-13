'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Comment extends Model {
  static get table() {
    return 'comments';
  }
  static get primaryKey() {
    return 'id';
  }
}

module.exports = Comment;
