<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('/grant', [
  'uses' => 'GrantController@postGrant'
]);

Route::get('/grants', [
  'uses' => 'GrantController@getGrants'
]);

Route::put('/grant/{id}', [
  'uses' => 'GrantController@putGrant'
]);

Route::delete('/grant/{id}', [
  'uses' => 'GrantController@deleteGrant'
]);

Route::post('/user', [
  'uses' => 'UserController@signup'
]);

Route::post('/authenticate', [
  'uses' => 'AuthenticationController@authenticate'
]);
