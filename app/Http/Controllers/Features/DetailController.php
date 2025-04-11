<?php

namespace App\Http\Controllers\Features;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DetailController extends Controller
{
  public function getLevels(){
    $levels = [
        "id1"=>"Tầng Một",
        "id2"=>"Tầng Hai"
    ];
    return $levels;
  }
}
