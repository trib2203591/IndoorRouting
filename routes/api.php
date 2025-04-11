<?php

use App\Http\Controllers\TaskController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SensorController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/sensor-data', [SensorController::class, 'getSensorData']);
Route::post('/sensor-data', [SensorController::class, 'insertSensorData']);


// For tasking
Route::post('/tasks', [TaskController::class, 'postTask']);
Route::get('/tasks/{actuator_id}', [TaskController::class, 'getTask']);
