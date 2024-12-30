<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Generator as Faker;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Service>
 */
class ServiceFactory extends Factory
{
    protected $model = \App\Models\Service::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $faker = \Faker\Factory::create('uk_UA'); // Create a Faker instance with the 'uk_UA' locale
        $serviceTypes = [
            'Стрижка',
            'Оформлення бороди',
            'Гоління',
            'Фарбування волосся',
            'Догляд за обличчям',
            'Укладання волосся',
            'Масаж голови',
            'Лікування шкіри голови',
            'Корекція брів',
            'Кератинове відновлення',
        ];
        
        return [
            'name' => $faker->randomElement($serviceTypes),
            'price' => $faker->randomElement(range(200, 500, 50)),
            'duration' => 30,
            'description' => $faker->sentence,
            'type' => $faker->randomElement(['haircut', 'shave', 'color', 'other']),

            //
        ];
    }
}
