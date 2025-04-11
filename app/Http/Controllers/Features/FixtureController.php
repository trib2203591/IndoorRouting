<?php

namespace App\Http\Controllers\Features;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FixtureController extends Controller
{
    public function getCat()
    {
        $fixtureCategories = config('fixture.fixtureCategories');
        return $fixtureCategories;
    }
}
