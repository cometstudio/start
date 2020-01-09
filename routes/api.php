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

// All ids must follow this pattern
Route::pattern('id', '[0-9]+');

// User
Route::prefix('user')->name('user.')->group(function () {
    Route::post('/signup', 'UserController@signup')->name('signup');
    Route::post('/login', 'UserController@login')->name('login');
    Route::post('/logout', 'UserController@logout')->name('logout');
});

// Ping
Route::prefix('ping')->name('ping')->group(function () {
    Route::get('/', 'Api\PingController@index');
    // Auth is required
    Route::middleware('auth:api')->group(function(){
        Route::get('/auth', 'Api\PingController@auth');
    });
});

// Auth is required
Route::middleware('auth:api')->group(function(){

});