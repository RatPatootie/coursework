<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Generator as Faker;
use App\Models\Barber;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\WorkDay>
 */
class WorkDayFactory extends Factory
{
    protected $model = \App\Models\WorkDay::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $faker = \Faker\Factory::create('uk_UA'); // Create a Faker instance with the 'uk_UA' locale
       
        return [
            'barber_id' => Barber::inRandomOrder()->first()->id,
            'day' => $faker->dateTimeBetween($startDate = 'now', $endDate = '+1 week')->format('Y-m-d'),
            // ...existing code...
        ];
    }
}
