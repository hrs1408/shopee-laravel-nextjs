<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'thumbnail',
        'price',
        'sale',
        'desc',
        'quantity',
        'sold',
        'slug',
        'status',
        'category_id',
        'created_at',
        'updated_at',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public static function relations(): array
    {
        return [
            'category'
        ];
    }
}
