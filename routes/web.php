<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Booking\BookingController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Models\Booking;
use App\Models\Service;
use App\Models\Comment;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'services' => Service::all(['name', 'price']),
        'comments' => Comment::with('user', 'barber')->latest()->take(6)->get(),
    ]);
});

Route::get('/dashboard', [BookingController::class, 'show'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
require __DIR__.'/api.php';
require __DIR__.'/booking.php';
require __DIR__.'/auth.php';
