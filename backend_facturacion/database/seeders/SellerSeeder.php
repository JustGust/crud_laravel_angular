<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SellerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('sellers')->insert([
            [
                'name' => 'Alex Rodriguez',
                'nit' => '11223412'
            ],
            [
                'name' => 'Cristian Ruiz',
                'nit' => '77765289'
            ],
            [
                'name' => 'Juan Fernando Pérez del Corral',
                'nit' => '22277777' 
            ],
            [
                'name' => 'Valentina Laverde de la Rosa',
                'nit' => '77432234' 
            ]
        ]);
    }
}
