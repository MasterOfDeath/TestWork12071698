<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductCollection;
use App\Http\Resources\Product as ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    /**
     * Display a listing products.
     *
     * @return App\Http\Resources\ProductCollection
     */
    public function index()
    {
        return new ProductCollection(Product::all());
    }

    /**
     * Display the specified product.
     *
     * @param  \App\Models\Product  $product
     * @return App\Http\Resources\Product
     */
    public function show(Product $product)
    {
        return new ProductResource($product);
    }

    /**
     * Store a newly created product in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return App\Http\Resources\Product
     */
    public function store(Request $request)
    {
        $validator = $this->validateStoreRequest($request);
        if ($validator->fails()) {
            return response(['error' => $validator->errors()]);
        }

        $product = Product::create($request->all(['name', 'description']));

        return (new ProductResource($product))
            ->response()
            ->setStatusCode(201);
    }

    /**
     * Update the specified product in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return App\Http\Resources\Product
     */
    public function update(Product $product, Request $request)
    {
        $validator = $this->validateStoreRequest($request);
        if ($validator->fails()) {
            return response(['error' => $validator->errors()]);
        }

        $product->update($request->all(['name', 'description']));

        return new ProductResource($product);
    }

    /**
     * Remove the specified product from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        $product->delete();

        return response()->json(null, 204);
    }

    /**
     * Get validator for store actions.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Validation\Validator
     */
    private function validateStoreRequest(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'description' => 'required',
        ]);

        return $validator;
    }
}
