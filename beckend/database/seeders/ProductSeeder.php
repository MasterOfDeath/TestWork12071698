<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert(
            [
            'name' => 'Computer IBM',
            'description' => 'Some text 1',
            'created_at' => now(),
            'updated_at' => now(),
            ]
        );

        DB::table('products')->insert(
            [
            'name' => 'Motherboard ASUS',
            'description' => 'Some text 2',
            'created_at' => now(),
            'updated_at' => now(),
            ]
        );
    }
}
