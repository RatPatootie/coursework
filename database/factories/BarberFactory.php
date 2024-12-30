<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Generator as Faker;

use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Barber>
 */
class BarberFactory extends Factory
{
    protected $model = \App\Models\Barber::class;

    private static $imgIndex = 0;
    private static $imgArray = [67, 68, 60, 57, 56, 12, 11];

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $faker = \Faker\Factory::create('uk_UA'); // Create a Faker instance with the 'uk_UA' locale
        $imgUrl = 'https://i.pravatar.cc/400?img=' . self::$imgArray[self::$imgIndex];
        self::$imgIndex = (self::$imgIndex + 1) % count(self::$imgArray);

        return [
            'name' => $faker->firstName('male'),
            'surname'=>$faker->lastName(),
            'rate' => $faker->randomFloat(2, 3.5, 5),
            'img_url' => $imgUrl,
            'user_id' => User::inRandomOrder()->first()->id,
            'type' => $faker->randomElement(['Барбер', 'Топ барбер']),
            // ...existing code...
        ];
    }
}
