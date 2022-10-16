<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $name = $this->faker->name;
        return [
            'name' => $name,
            'thumbnail' => 'https://source.unsplash.com/random/640x480',
            'price' => $this->faker->numberBetween(500000, 1000000),
            'sale' => $this->faker->numberBetween(0, 100),
            'desc' => $this->faker->text,
            'quantity' => $this->faker->numberBetween(0, 100),
            'sold' => $this->faker->numberBetween(0, 100),
            'slug' => Str::slug($name),
            'category_id' => $this->faker->numberBetween(1, 50)
        ];
    }
}
