<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

use app\Models\Booking;
class DayTime extends Model
{
    use HasFactory;
    protected $guarded = [];
    public $timestamps = false;
    public function Booking(): hasMany
    {
        return $this->hasMany(Booking::class);
    }


    //
}
