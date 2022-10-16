<?php

namespace App\Http\Resources\Product;

use App\Http\Resources\Category\CategoryResource;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'name' => $this->name,
            'thumbnail' => $this->thumbnail,
            'price' => $this->price,
            'sale' => $this->sale,
            'desc' => $this->desc,
            'quantity' => $this->quantity,
            'sold' => $this->sold,
            'slug' => $this->slug,
            'status' => $this->status,
            'category' => new CategoryResource($this->whenLoaded('category')),

            // format date
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
        ];
    }
}
