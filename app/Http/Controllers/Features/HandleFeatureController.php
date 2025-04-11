<?php

namespace App\Http\Controllers\Features;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Features\AmenityController;
use App\Http\Controllers\Features\UnitController;
use App\Http\Controllers\Features\ForAllController;
use App\Http\Controllers\Features\DetailController;
use App\Http\Controllers\Features\FixtureController;
use App\Http\Controllers\Features\FootprintController;
use App\Http\Controllers\Features\GeofenceController;
use App\Http\Controllers\Features\LevelController;
use App\Http\Controllers\Features\OccupantController;
use App\Http\Controllers\Features\OpeningController;
use App\Http\Controllers\Features\RelationshipController;
use App\Http\Controllers\Features\SectionController;
use App\Http\Controllers\Features\VenueController;


use Illuminate\Http\Request;

class HandleFeatureController extends Controller
{

    public function getFeatureForm($theForm)
    {
        try {
            $fileName = 'admin.featureForms.' . $theForm;

            // $amenityCategories = $amenityAccessibilities = $unitCategories = null;
            switch ($theForm) {
                case 'Amenity':
                    $amenityCategories = app(AmenityController::class)->getCat()['amenityCategories'];
                    $accessibilityCategories = app(ForAllController::class)->getAccessibility()['accessibilityCategories'];
                    $units = app(ForAllController::class)->getUnits();
                    // $amenities = app(AmenityController::class)->getCorAmenity();
                    $addresses = app(ForAllController::class)->getAddress();
                    $html = view($fileName, compact('amenityCategories', 'accessibilityCategories', 'units','addresses'))->render();
                    return response()->json([
                        'html' => $html,
                    ]);

                case 'Unit':
                    $accessibilityCategories = app(ForAllController::class)->getAccessibility()['accessibilityCategories'];
                    $unitCategories = app(UnitController::class)->getCat()['unitCategories'];
                    $levels = app(ForAllController::class)->getLevels();
                    $restrictionCategories = app(ForAllController::class)->getRestriction()['restrictionCategories'];
                    $html = view($fileName, compact('unitCategories', 'accessibilityCategories', 'levels','restrictionCategories'))->render();
                    return response()->json([
                        'html' => $html,
                    ]);

                case 'Address':
                    $html = view($fileName)->render();
                    return response()->json([
                        'html' => $html
                    ]);
                case 'Anchor':
                    $addresses = app(ForAllController::class)->getAddress();
                    $units = app(ForAllController::class)->getUnits();
                    $html = view($fileName, compact('addresses','units'))->render();
                    return response()->json([
                        'html' => $html
                    ]);
                case 'Building':
                    $buildingCategories = app(BuildingController::class)->getCat()['buildingCategories'];
                    $restrictionCategories = app(ForAllController::class)->getRestriction()['restrictionCategories'];
                    $addresses = app(ForAllController::class)->getAddress();
                    $html = view($fileName, compact('buildingCategories', 'restrictionCategories', 'addresses'))->render();
                    return response()->json([
                        'html' => $html
                    ]);
                case 'Detail':
                    $levels = app(ForAllController::class)->getLevels();
                    $html = view($fileName, compact('levels'))->render();
                    return response()->json([
                        'html' => $html
                    ]);
                case 'Fixture':
                    $fixtureCategories = app(FixtureController::class)->getCat()['fixtureCategories'];
                    $anchors = app(ForAllController::class)->getAnchor();
                    $levels = app(ForAllController::class)->getLevels();
                    $html = view($fileName, compact('fixtureCategories', 'anchors', 'levels'))->render();
                    return response()->json([
                        'html' => $html
                    ]);
                case 'Footprint':
                    $footprintCategories = app(FootprintController::class)->getCat()['footprintCategories'];
                    $buildings = app(ForAllController::class)->getBuilding();
                    $html = view($fileName, compact('footprintCategories', 'buildings'))->render();
                    return response()->json([
                        'html' => $html
                    ]);
                case 'Geofence':
                    $geofenceCategories = app(GeofenceController::class)->getCat()['geofenceCategories'];
                    $restrictionCategories = app(ForAllController::class)->getRestriction()['restrictionCategories'];
                    $buildings = app(ForAllController::class)->getBuilding();
                    $levels = app(ForAllController::class)->getLevels();
                    $parents = app(GeofenceController::class)->getParents();
                    $html = view($fileName, compact(
                        'geofenceCategories',
                        'restrictionCategories',
                        'buildings',
                        'levels',
                        'parents'
                    ))->render();
                    return response()->json([
                        'html' => $html
                    ]);
                case 'Kiosk':
                    $anchors = app(ForAllController::class)->getAnchor();
                    $levels = app(ForAllController::class)->getLevels();
                    $html = view($fileName, compact('anchors', 'levels'))->render();
                    return response()->json([
                        'html' => $html
                    ]);
                case 'Level':
                    $levelCategories = app(LevelController::class)->getCat()['levelCategories'];
                    $buildings = app(ForAllController::class)->getBuilding();
                    $addresses = app(ForAllController::class)->getAddress();
                    $restrictionCategories = app(ForAllController::class)->getRestriction()['restrictionCategories'];
                    $html = view($fileName, compact('levelCategories', 'buildings', 'addresses', 'restrictionCategories'))->render();
                    return response()->json([
                        'html' => $html
                    ]);
                case 'Occupant':
                    $occupantCategories = app(OccupantController::class)->getCat()['occupantCategories'];
                    $anchors = app(ForAllController::class)->getAnchor();
                    $html = view($fileName, compact('occupantCategories', 'anchors'))->render();
                    return response()->json([
                        'html' => $html
                    ]);
                case 'Opening':
                    $openingCategories = app(OpeningController::class)->getCat()['openingCategories'];
                    $accessibilityCategories = app(ForAllController::class)->getAccessibility()['accessibilityCategories'];
                    $accesscontrolCategories = app(OpeningController::class)->getAccessControl()['accesscontrolCategories'];
                    $doorTypes = app(OpeningController::class)->getDoorTypes()['doorTypes'];
                    $materials = app(OpeningController::class)->getMaterial()['materials'];
                    $levels = app(ForAllController::class)->getLevels();
                    $html = view($fileName, compact('openingCategories', 'levels', 'accessibilityCategories', 'accesscontrolCategories', 'doorTypes', 'materials'))->render();
                    return response()->json([
                        'html' => $html
                    ]);
                case 'Relationship':
                    $relationshipCategories = app(RelationshipController::class)->getCat()['relationshipCategories'];
                    $html = view($fileName, compact('relationshipCategories'))->render();
                    return response()->json([
                        'html' => $html
                    ]);
                case 'Section':
                    $sectionCategories = app(SectionController::class)->getCat()['sectionCategories'];
                    $restrictionCategories = app(ForAllController::class)->getRestriction()['restrictionCategories'];
                    $accessibilityCategories = app(ForAllController::class)->getAccessibility()['accessibilityCategories'];
                    $levels = app(ForAllController::class)->getLevels();
                    $addresses = app(ForAllController::class)->getAddress();
                    $sections = app(SectionController::class)->getParents();
                    $html = view($fileName, compact('sectionCategories', 'restrictionCategories', 'accessibilityCategories', 'levels', 'addresses', 'sections'))->render();
                    return response()->json([
                        'html' => $html
                    ]);
                case 'Venue':
                    $venueCategories = app(VenueController::class)->getCat()['venueCategories'];
                    $restrictionCategories = app(ForAllController::class)->getRestriction()['restrictionCategories'];
                    $addresses = app(ForAllController::class)->getAddress();
                    $html = view($fileName, compact('venueCategories','restrictionCategories','addresses'))->render();
                    return response()->json([
                        'html' => $html
                    ]);
            }


            if (view()->exists($fileName)) {
                $html = view($fileName, compact('amenityCategories', 'amenityAccessibilities'))->render();
                // return view($html);
                // dd($html);
                return response()->json([
                    'html' => $html,
                    //     'amenityCategories' => $amenityCategories,
                    //     'amenityAccessibilities' => $amenityAccessibilities
                ]);
            }
            // return view('admin.featureForms.Amenity');
            $amenityCategories = app(AmenityController::class)->getCat()['amenityCategories'];
            $accessibilityCategories = app(ForAllController::class)->getAccessibility()['accessibilityCategories'];
            $units = app(ForAllController::class)->getUnits();
            $amenities = app(AmenityController::class)->getCorAmenity();
            $html = view($fileName, compact('amenityCategories', 'accessibilityCategories', 'units', 'amenities'))->render();
            return response()->json([
                'html' => $html,
            ]);
        } catch (\Exception $exception) {
            dd('Error: ' . $exception->getMessage());
        }
    }
    public function index()
    {
        $featureList = [
            'Address',
            'Amenity',
            'Anchor',
            'Building',
            'Detail',
            'Fixture',
            'Footprint',
            'Geofence',
            'Kiosk',
            'Level',
            'Occupant',
            'Opening',
            'Relationship',
            'Section',
            'Unit',
            'Venue'
        ];


        $amenityCategories = app(AmenityController::class)->getCat()['amenityCategories'];
        $accessibilityCategories = app(ForAllController::class)->getAccessibility()['accessibilityCategories'];
        $units = app(ForAllController::class)->getUnits();
        $amenities = app(AmenityController::class)->getCorAmenity();

        return view('admin.handlefeature', compact(
            'featureList',
            'amenityCategories',
            'accessibilityCategories',
            'units',
            'amenities'
        ));
    }
}
