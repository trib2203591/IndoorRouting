<?php

namespace App\Http\Controllers;

use App\Contracts\Geom;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Validator;
use InvalidArgumentException;


class FeatureController extends Controller
{




    public function addAnchor(Request $request)  {
        $attributes = Validator::make($request->all(), [
            'anchor_id' => 'required',
            'feature_id' => 'required',
            'unit_id' => 'required',
            'geometry' => 'required',
            'address id' => 'nullable',
        ]);

        if($attributes->fails()) {
            abort(404);
        }
        // dd($request->geometry);
        $row = [
            // replace with random uuid generate
            'id' => $request->anchor_id,
            'type' => 'Feature',
            'feature_type' => 'anchor',
            // can hanle them cho nay
            'geometry' => Geom::wktToGeoJSON($request->geometry),
            'properties' => [
                'address_id' => $request->address_id ?? null,
                'unit_id' => $request->unit_id
                ]
            ];
            // $row = json_encode($row);
            // dd($row);
            if(isset($row)) {
                $response = Http::withHeaders([
                    'Content-Type' => 'application/json'
                ])->post(config('app.imdf_api_url') . '/api/anchors', $row);

                if($response->getStatusCode() == 201) {
                    return redirect()->route('admin.index');
                } else return view('admin.features');

            } else abort(500);

    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('admin.features');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
