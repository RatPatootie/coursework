<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\User;
use App\Models\Barber;
use App\Models\Service;
use App\Models\DayTime;

class Booking extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function barber()
    {
        return $this->belongsTo(Barber::class);
    }
    public function service()
    {
        return $this->belongsTo(Service::class);
    }
    public function dayTime()
    {
        return $this->belongsTo(DayTime::class, 'start_time', 'id');
    }
    //
}
