<?php

namespace App\Providers;

use App\Repositories\CategoryRepository\CategoryRepository;
use App\Repositories\CategoryRepository\ICategoryRepository;
use App\Repositories\ProductRepository\IProductRepository;
use App\Repositories\ProductRepository\ProductRepository;
use Illuminate\Support\ServiceProvider;

class BindingServiceProvider extends ServiceProvider
{
    private array $repositories = [
        ICategoryRepository::class => CategoryRepository::class,
        IProductRepository::class => ProductRepository::class,
    ];
    /**
     * Register services.
     *
     * @return void
     */
    public function register(): void
    {
        foreach ($this->repositories as $key => $value) {
            $this->app->singleton($key, $value);
        }
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
