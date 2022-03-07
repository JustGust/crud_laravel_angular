<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bill extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'seller_id',
        'buyer_id',
        'value_before_iva',
        'iva',
        'total_pay'
    ];
}
