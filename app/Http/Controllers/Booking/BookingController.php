<?php

namespace App\Http\Controllers\Booking;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Barber;
use App\Models\Service;
use App\Models\Booking;
use Illuminate\Support\Facades\Log;
use App\Models\DayTime;
use App\Models\User;
use App\Mail\NewBookingMail;
use Illuminate\Support\Facades\Mail;

class BookingController extends Controller
{
    public function index()
    {
        try {
            $barbers = Barber::all();
            $availableDays = $barbers->flatMap(function ($barber) {
                return $barber->workDays->pluck('day');
            })->unique()->values();

            return Inertia::render('Booking/Index', [
                'barbers' => $barbers,
                'services' => Service::all(),
                'days' => $availableDays,
            ]);
        } catch (\Exception $e) {
            Log::error('Error in index method: ' . $e->getMessage());
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }
    
    public function getAvailableTimes(Request $request)
    {
        try {
            $date = $request->input('date');
            $fdate = date('Y-m-d', strtotime($date . ' +1 day'));
            $barberId = $request->input('barber_id');

            if ($barberId === null) {
                $bookedTimeSlots = Booking::where('day', $fdate)->pluck('start_time')->toArray();
            } else {
                $bookedTimeSlots = Booking::where('day', $fdate)->where('barber_id', $barberId)->pluck('start_time')->toArray();
            }

            $availableTimesQuery = DayTime::whereNotIn('id', $bookedTimeSlots);

            if ($date === date('Y-m-d')) {
                $currentTime = date('H:i');
                $availableTimesQuery->where('start_time', '>', $currentTime);
            }

            $availableTimes = $availableTimesQuery->get(['id', 'start_time']);

            if ($availableTimes->isEmpty()) {
                return response()->json([]);
            }

            return response()->json($availableTimes);
        } catch (\Exception $e) {
            Log::error('Error fetching available times: ' . $e->getMessage());
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }
    public function getAvailableServices(Request $request)
    {
        try {
            $barberId = $request->input('barber_id');
            $services = Barber::find($barberId)->services;
            return response()->json($services);
        } catch (\Exception $e) {
            Log::error('Error fetching available services: ' . $e->getMessage());
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }
    public function store(Request $request): RedirectResponse
    {
        try {
            $validatedData = $request->validate([
                'barber' => 'required|exists:barbers,id',
                'services' => 'required|exists:services,id',
                'date' => 'required|date',
                'time' => 'required|exists:day_times,id',
            ]);
            
            $formattedDate = date('Y-m-d', strtotime($validatedData['date'] . ' +1 day'));
            
            $booking = new Booking();
            $booking->user_id = auth()->id();
            $booking->barber_id = $validatedData['barber'];
            $booking->service_id = $validatedData['services'];
            $booking->day = $formattedDate;
            $booking->start_time = $validatedData['time'];
            $booking->end_time = $validatedData['time'];
            $booking->status = 0;
            $booking->save();

            
            // Send email notification
            Mail::to(auth()->user()->email)->queue(new NewBookingMail($booking));

            return redirect()->route('dashboard')->with('success', 'Booking created successfully'); 
        } catch (\Exception $e) {
            Log::error('Error storing booking: ' . $e->getMessage());
            return redirect()->back()->withErrors(['error' => 'Internal Server Error']);
        }
        
    }
    public function info($id)
    {
        
            $barber = Barber::with('services')->findOrFail($id);
            $comments = $barber->comments()->with('user')->get();
            return Inertia::render('Booking/BarberInfo', [
                'barber' => $barber,
                'comments' => $comments,
            ]);
        
    }
    public function show()
    {
        try {
            $bookings = Booking::with([
                'barber:id,name', 
                'service:id,name', 
                'dayTime:id,start_time'
            ])
            ->where('user_id', auth()->id())
            ->orderBy('day', 'desc')
            ->get([ "id",'barber_id', 'service_id','start_time', 'day' ]);

            $isAdmin = auth()->user()->role === 'admin';
            $isBarber = auth()->user()->role === 'barber';

            return Inertia::render('Dashboard', [
                'bookings' => $bookings,
                'isAdmin' => $isAdmin,
                'isBarber' => $isBarber,
            ]);
        } catch (\Exception $e) {
            Log::error('Error fetching bookings: ' . $e->getMessage());
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }
    public function add(Request $request){
        
            $validatedDataBarber = $request->validate([
                'name' => 'required|string',
                'surname' => 'required|string',
                'img_url' => 'required|string',
                'type' => 'required|string|in:Барбер,Топ барбер',
            
            ]);
            $validatedDataUser = $request->validate([
                'name' => 'required|string',
          
                'email' => 'required|email|unique:users,email',
                'password' => 'required|string|min:8',
            ]);
            $validatedDataUser['password'] = bcrypt($validatedDataUser['password']);
            $validatedDataUser['role'] = 'barber';
            
            $barber = new Barber();
            $barber->name = $validatedDataBarber['name'];
            $barber->surname = $validatedDataBarber['surname'];
            $barber->img_url = $validatedDataBarber['img_url'];
            $barber->user_id = User::create($validatedDataUser)->id;
            $barber->type = $validatedDataBarber['type'];
            $barber->rate = 0;
            $barber->save();
            
            return redirect()->route('dashboard')->with('success', 'Barber added successfully');
        

    }
    public function bookings(Request $request)
    {
        try {
            $date = $request->input('date');
            $formattedDate = date('Y-m-d', strtotime($date. '+1 day'));
           
            $bookings = Booking::with([
                'user:id,name,email', 
                'service:id,name', 
                'dayTime:id,start_time'
            ])
            ->where('day', $formattedDate)
            ->where('barber_id', auth()->user()->barber->id)
            ->orderBy('start_time', 'asc')
            ->get([ "id",'user_id', 'service_id','start_time' ]);
            
            if ($bookings->isEmpty()) {
                Log::info('No bookings found for date: ' . $date);
                return response()->json([]);
            }
            
            return response()->json($bookings);
        } catch (\Exception $e) {
            Log::error('Error fetching available times: ' . $e->getMessage());
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }
    public function destroy($id): RedirectResponse
    {
        try {
            $booking = Booking::findOrFail($id);
            $booking->delete();
            return redirect()->route('dashboard')->with('success', 'Booking deleted successfully');
        } catch (\Exception $e) {
            Log::error('Error deleting booking: ' . $e->getMessage());
            return redirect()->back()->withErrors(['error' => 'Internal Server Error']);
        }
    }
    
}
