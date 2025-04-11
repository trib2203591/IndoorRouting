<?php

namespace App\Http\Controllers\Features;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BuildingController extends Controller
{
    public function getCat()
    {
        $buildingCategories = config('building.buildingCategories');
        return $buildingCategories;
    }

}
