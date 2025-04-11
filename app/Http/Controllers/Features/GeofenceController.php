<?php

namespace App\Http\Controllers\Features;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class GeofenceController extends Controller
{
  public function getCat(){
    $geofenceCategories = config('geofence.geofenceCategories');
    return $geofenceCategories;
  }
  public function getCorrelations(){
    $correlationsIds = ["id1","id2"];
    return $correlationsIds;
  }

  public function getParents(){
    $parents = [
        "12345678-9876-8888-8888-888888888888"=>"Geofence Name A",
        "87654321-9876-8888-8888-888888888888"=>"Geofence Name B"
    ];
    return $parents;
  }
}
