<?php

namespace App\Http\Controllers\Features;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ForAllController extends Controller
{
    public function getRestriction()
    {
        $restrictionCategories = config('forall.restrictionCategories');
        return $restrictionCategories;
    }

    public function getAccessibility()
    {
        $accessibilityCategories = config('forall.accessibilityCategories');
        return $accessibilityCategories;
    }

    public function getAddress()
    {
        $addresses = [
            "22222222-2222-2222-2222-222222222222" => "Sample address 1",
            "33333333-3333-3333-3333-333333333333" => "Sample address 2"
        ];
        return $addresses;
    }
    public function getLevels()
    {
        $levels = [
            "c8c333cd-764b-49c8-aae0-34628489b209" => "Tầng Một",
            "4bb6f304-932b-4eee-bbc5-2ab7a30af10e" => "Tầng Hai"
        ];
        return $levels;
    }

    public function getAnchor()
    {
        $anchors = [
            "99999999-9999-9999-9999-999999999999" => "Anchor 1",
            "99999999-8888-9999-9999-999999999999" => "Anchor 2"
        ];
        return $anchors;
    }

    public function getBuilding()
    {
        $buildings = [
            "44444444-4444-4444-4444-444444444444" => "Building 1",
            "44444444-4444-4444-4444-444444444443" => "Building 2"
        ];
        return $buildings;
    }

    public function getUnits(){
        $units = [
            "88888888-8888-8888-8888-888888888888"=>"Unit 1",
            "id2"=>"Unit 2"
        ];
        return $units;
    }
}
