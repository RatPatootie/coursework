<?php

namespace App\Http\Controllers\Booking;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;


class BookingController extends Controller
{
    public function index()
    {
        return Inertia::render('Booking/Index',[]);
    }
    public function service()
    {
        return Inertia::render('Booking/Service');
    }
    public function barbers()
    {
        return Inertia::render('Booking/Barbers');
    }
    public function dates()
    {
        return Inertia::render('Booking/Dates');
    }
}
