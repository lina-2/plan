<?php

use Illuminate\Support\Facades\Route;

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


Route::get('/', function () {
    return view('home.home');
});
Route::get('/calend', function () {
    return view('home.calend');
});
Route::get('/recipes', function () {
    return view('home.recipes');
});
Route::get('/home', function () {
    return view('home.home');
});
