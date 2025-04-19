<?php

use App\Http\Controllers\FeatureController;
// use App\Http\Controllers\HandleFeatureController;
use App\Http\Controllers\Features\HandleFeatureController;
use App\Http\Controllers\Features\AmenityController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SensorController;
use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect()->route('guest.index');
});


//handle default redirect
Route::get('/dashboard', function () {
    if (auth()->check() && auth()->user()->hasRole('admin')) {
        return redirect()->route('admin.index');
    }
    return redirect()->route('guest.index');
})->middleware(['auth', 'verified'])->name('dashboard');

// Route::get('/dashboard', function () {
//     if (auth()->check() && auth()->user()->hasRole('admin')) {
//         return redirect()->route('admin.index');
//     }
//     return view('dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');



///------------THIS IS FOR ADMIN ROUTES---------------
Route::get('/admin', function () {
    if (auth()->check() && auth()->user()->hasRole('admin')) {
        return view('admin.index');
    }else{
        return redirect()->route('guest.index');
    }
})->middleware(['auth', 'verified'])->name('admin.index');

Route::get('/guestview', function () {
    return view('admin.guestview');
})->middleware(['auth', 'role:admin'])->name('admin.guestview');
// Route::get('/sensors', function () {
//     return view('admin.sensors');
// })->middleware(['auth', 'verified'])->name('admin.sensors');
Route::get('/sensors', [SensorController::class, 'index'])->middleware(['auth', 'role:admin'])->name('admin.sensors');
Route::get('/features', [FeatureController::class, 'index'])->middleware(['auth', 'role:admin'])->name('admin.sensors');
Route::post('/features/anchors', [FeatureController::class, 'addAnchor'])->middleware(['auth', 'role:admin'])->name('addAnchor');
Route::get('/handlefeature', [HandleFeatureController::class, 'index'])->middleware(['auth', 'role:admin'])->name('addAnchor');
Route::get('/getform/{theForm}',[HandleFeatureController::class, 'getFeatureForm']);
// ->middleware(['auth', 'role:admin']);

///------------THIS IS FOR GUEST ROUTES---------------
Route::get('/guest', function () {
    if (auth()->check() && auth()->user()->hasRole('admin')) {
        return redirect()->route('admin.index');
    }
    return view('guest.index');
})->name('guest.index');

Route::get('/guest/sensors', [SensorController::class, 'indexGuest'])->middleware(['auth', 'verified'])->name('guest.sensor');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});






Route::get('/sensorids', [SensorController::class, 'getSensors']);
Route::get('/sensorids/{anchor_id}', [SensorController::class, 'getSensorID']);




require __DIR__ . '/auth.php';
