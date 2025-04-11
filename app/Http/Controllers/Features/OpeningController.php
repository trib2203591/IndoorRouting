<?php

namespace App\Http\Controllers\Features;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class OpeningController extends Controller
{
    public function getCat()
    {
        $openingCategories = config('opening.openingCategories');
        return $openingCategories;
    }

    public function getAccessControl()
    {
        $accesscontrolCategories = config('opening.accesscontrolCategories');
        return $accesscontrolCategories;
    }

    public function getDoorTypes()
    {
        $doorTypes = config('opening.doorTypes');
        return $doorTypes;
    }

    public function getMaterial(){
        $materials = config('opening.materials');
        return $materials;
    }
}
