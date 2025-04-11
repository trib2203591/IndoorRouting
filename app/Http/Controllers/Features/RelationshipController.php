<?php

namespace App\Http\Controllers\Features;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RelationshipController extends Controller
{
  public function getCat(){
    $relationshipCategories = config('relationship.relationshipCategories'); 
    return $relationshipCategories;
  }
}
