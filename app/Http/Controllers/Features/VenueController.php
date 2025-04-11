<?php

namespace App\Http\Controllers\Features;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class VenueController extends Controller
{
    public function getCat()
    {
        $venueCategories = config('venue.venueCategories');
        return $venueCategories;
    }
}
