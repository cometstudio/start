<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/** Vue App if no match */

Route::get('/{any?}', function () {
    return \File::get(public_path() . '/index.html');
})->where('any', '.*')->name('vue');