'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.on('/').render('welcome');
Route.get('/users', 'UserController.getUsersList'); // BBDD no relacional
Route.get('/users/:user_id', 'UserController.getUser'); // BBDD no relacional
Route.post('/users', 'UserController.postUser'); // BBDD no relacional
Route.put('/users/:user_id', 'UserController.putUser'); // BBDD no relacional
Route.get('/posts', 'PostController.getPosts'); // BBDD relacional
Route.get('/posts/:post_id', 'PostController.getPostDetail'); // BBDD relacional
