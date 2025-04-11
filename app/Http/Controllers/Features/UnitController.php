<?php

namespace App\Http\Controllers\Features;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UnitController extends Controller
{
    //
    public function getCat()
    {
        $unitCategories = config('unit.unitCategories');
        // dd($unitCategories);
        return $unitCategories;
    }
    public function getAccess()
    {
        $unitAccessibilities = config('unit.unitAccessibilities');
        return $unitAccessibilities;
    }
}
