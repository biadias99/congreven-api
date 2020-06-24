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
Route.put('activities/:id', 'ActivityController.update').validator('ActivityUpdate').middleware('auth')
Route.delete('activities/:id', 'ActivityController.delete').middleware('auth')

Route.post('organizers', 'OrganizerController.create').validator('Organizer').middleware('auth')
Route.put('organizers/:cnpj', 'OrganizerController.update').validator('OrganizerUpdate').middleware('auth')

Route.post('guestspeakers', 'GuestSpeakerController.create').validator('GuestSpeaker').middleware('auth')
Route.put('guestspeakers/:rg', 'GuestSpeakerController.update').validator('GuestSpeakerUpdate').middleware('auth')

Route.post('news', 'NewsController.create').validator('News').middleware('auth')
// Route.put('news', 'NewsController.update').validator('News').middleware('auth')
Route.delete('news', 'NewsController.delete').validator('News').middleware('auth')

Route.post('supports', 'SupportController.create').validator('Support').middleware('auth')
Route.delete('supports', 'SupportController.delete').validator('Support').middleware('auth')
