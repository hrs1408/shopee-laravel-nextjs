<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Product\ProductCollection;
use App\Models\Product;
use App\Repositories\ProductRepository\IProductRepository;
use App\Traits\ResponseWithHttpStatus;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    use ResponseWithHttpStatus;

    private IProductRepository $productRepository;

    public function __construct(IProductRepository $productRepository)
    {
        $this->productRepository = $productRepository;
    }

    /**
     * @OA\Get(
     *     path="/api/products",
     *     tags={"Product"},
     *     @OA\Parameter (
     *      name="limit",
     *      in="query",
     *      required=false,
     *          @OA\Schema (
     *              type="string",
     *            )
     *     ),
     *     @OA\Parameter (
     *      name="page",
     *      in="query",
     *      required=false,
     *          @OA\Schema (
     *              type="string"
     *          )
     *      ),
     *     @OA\Response(response="200", description="Get Products Success")
     * )
     */

    public function index(Request $request): JsonResponse
    {
        try {
            $products = $this->productRepository->paginate($request->input('limit') ?? 10, Product::relations());
            return $this->success(new ProductCollection($products), 'success');
        } catch (\Exception $exception) {
            return $this->error($exception->getMessage(), 500);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
