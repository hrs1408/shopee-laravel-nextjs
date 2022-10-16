<?php

namespace App\Traits;

use Illuminate\Http\JsonResponse;

trait ResponseWithHttpStatus
{
    protected function success($data = [], $message = null, $status = 200): JsonResponse
    {
        return response()->json([
            'success' => true,
            'message' => $message,
            'data' => $data
        ], $status);
    }

    protected function error($message = null, $status = 422): JsonResponse
    {
        return response()->json([
            'success' => false,
            'message' => $message
        ], $status);
    }
}
