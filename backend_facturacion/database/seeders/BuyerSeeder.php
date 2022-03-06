<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BuyerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('buyers')->insert([
            [
                'name' => 'Pablo La Merced Herrera',
                'nit' => '11223445'
            ],
            [
                'name' => 'Daniel La Roche Zuluaga',
                'nit' => '77765255'
            ],
            [
                'name' => 'Atonio Garcia',
                'nit' => '22272214' 
            ],
            [
                'name' => 'Francisco Lopez',
                'nit' => '89743267' 
            ],
            [
                'name' => 'Manuel Gonzalez',
                'nit' => '11167893' 
            ],
            [
                'name' => 'Maria Dolores Gomez',
                'nit' => '55543278' 
            ],
            [
                'name' => 'Jose Antonio Rodriguez',
                'nit' => '89543213' 
            ]
        ]);
    }
}
