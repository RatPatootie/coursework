<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Barber;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(10)->create();
        $this->call(BarberSeeder::class); // Call the BarberSeeder
        $this->call(ServiceSeeder::class); // Call the ServiceSeeder
        $this->call(WorkDaySeeder::class); // Call the WorkDaySeeder
        $this->call(ServiceOfBarberSeeder::class); // Call the ServiceOfBarberSeeder
        $this->call(DayTimeSeeder::class); // Call the DayTimeSeeder
        User::factory()->create([
            'name' => 'Admin User',
            'role'=> 'admin',
            'email' => 'test@example.com',
        ]);
        
    }
}
