'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class CommentsSchema extends Schema {
  up () {
    this.create('comments', (table) => {
      table.increments('id').primary();
      table.integer('posts_id').notNullable();
      table.string('content').notNullable();
      this.raw(`INSERT INTO comments(posts_id, content) VALUES (1, 'Comment content 1')`);
      this.raw(`INSERT INTO comments(posts_id, content) VALUES (1, 'Comment content 2')`);
    })
  }

  down () {
    this.drop('comments');
  }
}

module.exports = CommentsSchema
