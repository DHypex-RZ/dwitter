<?php

use App\Http\Controllers\DwitterController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get("/", [DwitterController::class, "vistaInicial"])->name("inicio");
Route::post("/dwitt/nuevo", [DwitterController::class, "insertarDwitt"])->name("nuevo.dwitt");
Route::delete("dwitt/eliminar/{id}", [DwitterController::class, "eliminarDwitt"])->name("eliminar.dwitt");
