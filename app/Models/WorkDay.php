<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkDay extends Model
{
    use HasFactory;

    protected $table = 'work_days';
    protected $guarded = [];
    public $timestamps = false;

    public function barber()
    {
        return $this->belongsTo(Barber::class);
    }
    
}
