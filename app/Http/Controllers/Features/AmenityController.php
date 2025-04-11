<?php

namespace App\Http\Controllers\Features;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AmenityController extends Controller
{
    //
    public function getCat(){
        $amenityCategories = config('amenity.amenityCategories');
        // dd($amenityCategories);
        return $amenityCategories;
    }
    public function getCorAmenity(){
        $amenities = [
            "correlation-amenity-id1"=>"Tiện ích 1",
            "correlation-amenity-id2"=>"Tiện ích 2"
        ];
        return $amenities;
    }
}
