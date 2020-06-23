'use strict'

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
const Route = use('Route')

Route.on('/').render('welcome')

Route.group(() => {
  Route.post('login', 'UserController.login')
  Route.get('logout', 'UserController.logout').middleware('auth')
}).prefix('user');

Route.post('users', 'UserController.register').validator('User')
Route.put('users/:cpf', 'UserController.update').validator('UserUpdate').middleware('auth')

Route.post('events', 'EventController.create').validator('Event').middleware('auth')
Route.put('events/:id', 'EventController.update').validator('Event').middleware('auth')
Route.delete('events/:id', 'EventController.delete').middleware('auth')
Route.get('events', 'EventController.get').middleware('auth')

Route.post('activities', 'ActivityController.create').validator('Activity').middleware('auth')
