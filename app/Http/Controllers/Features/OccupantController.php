<?php

namespace App\Http\Controllers\Features;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class OccupantController extends Controller
{
    public function getCat()
    {
        $occupantCategories = config('occupant.occupantCategories');
        return $occupantCategories;
    }
}
