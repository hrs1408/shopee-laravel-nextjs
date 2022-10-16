<?php

namespace App\Repositories\ProductRepository;

use App\Models\Product;
use App\Repositories\BaseRepository;

class ProductRepository extends BaseRepository implements IProductRepository
{

    public function getModel(): string
    {
        return Product::class;
    }
}
