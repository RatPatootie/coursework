<?php

namespace App\Http\Controllers;

use App\Models\Barber;
use App\Http\Requests\StoreBarberRequest;
use App\Http\Requests\UpdateBarberRequest;
use Illuminate\Http\Request;
use App\Models\WorkDay;

class BarberController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBarberRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Barber $barber)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Barber $barber)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBarberRequest $request, Barber $barber)
    {
        //
    }

    /**
     * Save the barber's services.
     */
    public function saveBarberServices($barberId)
    {
        $barber = Barber::find($barberId);
        $availableServices = request('availableServices');
        $addableServices = request('addableServices');

        // Add available services to the barber
        $barber->services()->syncWithoutDetaching(array_column($availableServices, 'id'));

        // Remove services from addable if they are currently assigned to the barber
        $currentServiceIds = $barber->services->pluck('id')->toArray();
        $servicesToRemove = array_filter($addableServices, function ($service) use ($currentServiceIds) {
            return in_array($service['id'], $currentServiceIds);
        });

        $barber->services()->detach(array_column($servicesToRemove, 'id'));

        return response()->json(['message' => 'Services updated successfully']);
    }

    /**
     * Save the barber's work dates.
     */
    public function saveDates($barberId, Request $request)
    {
        $dates = $request->input('dates');
        foreach ($dates as $date) {
            WorkDay::updateOrCreate(
                ['barber_id' => $barberId, 'day' => $date],
                ['barber_id' => $barberId, 'day' => $date]
            );
        }
        return response()->json(['message' => 'Dates saved successfully']);
    }
}
