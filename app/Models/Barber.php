<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Barber extends Model
{
    /** @use HasFactory<\Database\Factories\BarberFactory> */
    use HasFactory;
    protected $guarded = [];

    public function comments(): hasMany
    {
        return $this->hasMany(Comment::class);
    }

    public function workDays(): hasMany
    {
        return $this->hasMany(WorkDay::class);
    }
    public function bookings(): hasMany
    {
        return $this->hasMany(Booking::class);
    }

    public function services(): belongsToMany
    {
        return $this->belongsToMany(Service::class, 'service_of_barber', 'barber_id', 'service_id');
    }

    public function attachServices(array $serviceIds)
    {
        $this->services()->attach($serviceIds);
    }
}