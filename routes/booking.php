<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Booking\BookingController;

Route::get('/booking', [BookingController::class, 'index'])->name('booking.index');
Route::get('/booking/service', [BookingController::class, 'service'])->name('booking.service');
Route::get('/booking/barber', [BookingController::class, 'barbers'])->name('booking.barbers');
Route::get('/booking/date', [BookingController::class, 'dates'])->name('booking.dates');

?>