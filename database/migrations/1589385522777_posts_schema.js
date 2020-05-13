'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PostsSchema extends Schema {
  up () {
    this.create('posts', (table) => {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.string('content').notNullable();
    });
    this.raw(`INSERT INTO posts(title, content) VALUES ('Post title', 'Post content')`);
  }

  down () {
    this.drop('posts');
  }
}

module.exports = PostsSchema;
