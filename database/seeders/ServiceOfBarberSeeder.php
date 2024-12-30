<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Barber;
use App\Models\Service;

class ServiceOfBarberSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run():void
    {
        $services = Service::pluck('id')->toArray();
        $barbers = Barber::all();

        foreach ($barbers as $barber) {
            $assignedServices = array_rand(array_flip($services), rand(4, 5));
            $barber->attachServices($assignedServices);
        }
    }
}
