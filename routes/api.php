<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Booking\BookingController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Models\Booking;
use App\Models\Service;
use Inertia\Inertia;
use App\Models\Barber;
use App\Http\Controllers\BarberController;
use App\Models\WorkDay;
use App\Http\Controllers\WorkDayController;


// Маршрут для отримання всіх барберів
Route::get('/api/barber', function () {
    return Barber::all();
});

// Маршрут для отримання всіх сервісів
Route::get('/api/services', function () {
    return Service::all();
});
Route::get('api/barbers/{barberId}/available-services', function ($barberId) {
    // Logic to fetch available services for the barber
    $barber = Barber::find($barberId);
    return $barber->services;
});

Route::get('api/barbers/{barberId}/addable-services', function ($barberId) {
    // Logic to fetch addable services for the barber
    $barber = Barber::find($barberId);
    $allServices = Service::all();
    $addableServices = $allServices->diff($barber->services);
    return $addableServices;
});

Route::post('api/barbers/{barberId}/update-services', [BarberController::class, 'saveBarberServices']);

// Маршрут для видалення конкретного барбера за ID
Route::delete('/api/barbers/{id}', function ($id) {
    $barber = Barber::find($id);
    if ($barber) {
        $barber->delete();
        return response()->json(['message' => 'Barber deleted successfully']);
    } else {
        return response()->json(['message' => 'Barber not found'], 404);
    }
});
Route::get('/api/barbers/{barberId}/selected-dates', function ($barberId) {
    $today = now();
    return WorkDay::where('barber_id', $barberId)->where('day', '>', $today)->select('day')->get();
    
});

Route::post('/api/barbers/{barberId}/save-dates', [BarberController::class, 'saveDates']);

  
?>