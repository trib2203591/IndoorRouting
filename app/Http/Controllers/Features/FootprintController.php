<?php

namespace App\Http\Controllers\Features;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FootprintController extends Controller
{
  public function getCat(){
    $footprintCategories = config('footprint.footprintCategories');
    return $footprintCategories;
  }
}
