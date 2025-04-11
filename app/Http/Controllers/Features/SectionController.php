<?php

namespace App\Http\Controllers\Features;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SectionController extends Controller
{

    public function getParents(){
        $sections = [
            "88888888-9876-8888-8888-888888888888"=>"Khu vực 1",
            "88888888-9876-9876-8888-888888888888"=>"Khu vực 2"
        ];
        return $sections;
    }
    public function getCat(){
        $sectionCategories = config('section.sectionCategories');
        return $sectionCategories;
    }
  
}
