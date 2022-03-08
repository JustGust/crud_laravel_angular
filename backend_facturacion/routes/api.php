<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BillController;
use App\Http\Controllers\SellerController;
use App\Http\Controllers\BuyerController;
use App\Http\Controllers\ItemController;
use App\Models\Buyer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

/* --------- route for auth -------- */

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('register', [AuthController::class, 'register']);//route register user
    Route::post('login', [AuthController::class, 'login']); //route login
    Route::post('logout', [AuthController::class, 'logout']);//route logout
  //  Route::post('refresh', 'AuthController@refresh');
   // Route::post('me', 'AuthController@me');

});

/* --------- route for bill -------- */

Route::get('bill', [BillController::class, 'index']); //route show all bill
Route::post('bill', [BillController::class, 'store']); //route register bill
Route::get('bill/delete/{id}', [BillController::class, 'destroy']); //route delete bill
Route::get('bill/{id}',[ BillController::class, 'show']); // route show Item by id


/* --------- route for seller -------- */

Route::get('seller', [SellerController::class, 'index']); //route show all seller

/* --------- route for buyer -------- */

Route::get('buyer', [BuyerController::class, 'index']); //route show all seller

/* --------- route for item -------- */

Route::post('item', [ItemController::class, 'store']); //route register item
Route::get('item/{id}',[ ItemController::class, 'show']); // route show Item by id
Route::get('item/total/{id}',[ ItemController::class, 'totalPay']); // route show total pay
Route::get('item/delete/{id}',[ ItemController::class, 'destroy']); ////route delete item