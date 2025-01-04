<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Booking\BookingController;
use App\Http\Controllers\CommentController;
use App\Models\Barber;
use App\Models\Service;

Route::get('/booking', [BookingController::class, 'index'])->name('booking.index')->middleware('auth');
Route::get('/booking/service', [BookingController::class, 'service'])->name('booking.service');
Route::get('/booking/barber', [BookingController::class, 'barbers'])->name('booking.barbers');
Route::get('/booking/date', [BookingController::class, 'dates'])->name('booking.dates');
Route::get('/booking/available-time', [BookingController::class, 'getAvailableTimes']);
Route::get('/booking/available-service', [BookingController::class, 'getAvailableServices']);
Route::post('/booking', [BookingController::class, 'store'])->name('booking.store');
Route::get('/barber/{id}', [BookingController::class, 'info'])->name('barber.info');
Route::post('/barber/add', [BookingController::class, 'add'])->name('barbers.add');
Route::get('/barbers/bookings/',[BookingController::class, 'bookings'])->name('barbers.bookings');
Route::delete('/barber/{id}', [BookingController::class, 'destroy'])->name('booking.destroy');

Route::post('/user/addcomment', [CommentController::class, 'addComment'])->name('user.addcomment');
?>