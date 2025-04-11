<?php

namespace App\Http\Controllers\Features;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LevelController extends Controller
{
    public function getCat()
    {
        $levelCategories = config('level.levelCategories');
        return $levelCategories;
    }
}
