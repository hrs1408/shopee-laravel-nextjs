<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Category\CategoryCollection;
use App\Repositories\CategoryRepository\ICategoryRepository;
use App\Traits\ResponseWithHttpStatus;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    use ResponseWithHttpStatus;
    private ICategoryRepository $categoryRepository;

    public function __construct(ICategoryRepository $categoryRepository)
    {
        $this->categoryRepository = $categoryRepository;
    }

    /**
     * @OA\Get(
     *     path="/api/categories",
     *     tags={"Category"},
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
            $categories = $this->categoryRepository->paginate($request->input('limit') ?? 10);
            return $this->success(new CategoryCollection($categories), 'success');
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
