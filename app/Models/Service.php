<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    /** @use HasFactory<\Database\Factories\ServiceFactory> */
    use HasFactory;
    protected $guarded = [];
    public $timestamps = false;
    public function barbers()
    {
        return $this->belongsToMany(Barber::class, 'service_of_barber', 'service_id', 'barber_id');
    }

    public function attachBarbers(array $barberIds)
    {
        $this->barbers()->attach($barberIds);
    }
}
