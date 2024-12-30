<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\DayTime;

class DayTimeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Generate 17 time intervals starting from 10:00
        $intervals = [];
        $startTime = new \DateTime('10:00');
        for ($i = 0; $i < 16; $i++) {
            $endTime = clone $startTime;
            $endTime->modify('+30 minutes');
            $intervals[] = [
                'start_time' => $startTime->format('H:i'),
                'end_time' => $endTime->format('H:i'),
            ];
            $startTime->modify('+30 minutes');
        }

        foreach ($intervals as $interval) {
            DayTime::create($interval);
        }
    }
}
