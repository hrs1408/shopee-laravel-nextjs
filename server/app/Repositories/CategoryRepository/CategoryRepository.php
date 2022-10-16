<?php

namespace App\Repositories\CategoryRepository;

use App\Models\Category;
use App\Repositories\BaseRepository;

class CategoryRepository extends BaseRepository implements ICategoryRepository
{

    public function getModel(): string
    {
        return Category::class;
    }
}
