<?php

namespace App\Http\Controllers;

use DB;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class SensorController extends Controller
{
    public function index()
    {
        // $activeSensors = Sensor::where('status', 'active')->count();

        $response = Http::withHeaders([
            'token' => 'pWn3VuR5FKFglahFP3MehC63x8qWYne6hbnZhKYQljNpTzamtAutbqNgHXG9'
        ])->get('http://sensingapi.cusc.vn/api/get/datastreams/sensors?$top=all');

        $sensorData = $response->json();
        // dd($sensors["value"]);
        $sensors = [];
        foreach ($sensorData["value"] as $sensor) {
            if ($sensor['id'] === 11 || $sensor['id'] === 10) {
                // dd( $sensor['name']);
                $data = ['name' => $sensor['name'], 'measure' => '12 NTU', 'place' => 'Room 3', 'status' => 'Hoạt động', 'lastMeasureTime' => '7 phút trước', 'battery' => '100%'];

                // dd($sensor);
                $response = Http::withHeaders([
                    'token' => 'pWn3VuR5FKFglahFP3MehC63x8qWYne6hbnZhKYQljNpTzamtAutbqNgHXG9'
                ])->get('http://sensingapi.cusc.vn/api/get/sensors(' . $sensor['id'] . ')/datastreams/observations?$top=1&$order=id desc');

                $observation = $response->json();
                if (count($observation['value']) && ($sensor['id'] === 11 || $sensor['id'] === 10)) {
                    if (isset($observation['value'][0]['result'])) {
                        if (!is_numeric($observation['value'][0]['result'][0])) {
                            $arr = array_values($observation['value'][0]['result'][0]);
                            $data['measure'] = $arr[0] ?? '';
                            // $data['battery'] = $arr[1] ?? '';
                            $data['lastMeasureTime'] = $arr[2] ?? '';
                            $data['battery'] = $arr[1] ??'';
                        }
                    }
                }

                // viet api tu anchor lay dc unit
                // tam thoi code nhu nay
                $anchor_id = DB::table('sensor_map')->select('anchor_id')->where('sensor_id', $sensor['id'])->first();
                if ($anchor_id) {
                    // dd($anchor_id->anchor_id);
                    $response = Http::withHeaders([
                    ])->get(config('app.imdf_api_url') . '/api/anchors/' . $anchor_id->anchor_id);


                    $anchor = $response->json();
                    $unit_id = $anchor['features'][0]['properties']['unit_id'];
                    // dd($unit_id);

                    $response = Http::withHeaders([
                    ])->get(config('app.imdf_api_url') . '/api/units/' . $unit_id);

                    $unit = $response->json();
                    $data['place'] = $unit['features'][0]['properties']['name']['vi'];
                }

                // $data['measure'] =
                array_push($sensors, $data);
            }
        }



        $activeSensors = 10;
        // $sensors = [['name'=>'Cảm biến độ đục nước', 'measure'=>'3 µg/m³', 'place'=>'Room 1', 'status'=>'Hoạt động', 'lastMeasureTime'=>'5 phút trước' ],
        // ['name'=>'Cảm biến bụi mịn', 'measure'=>'12 NTU', 'place'=>'Room 3', 'status'=>'Hoạt động', 'lastMeasureTime'=>'7 phút trước' ]];
        // dd($sensors);


        // return view('admin.sensors', compact('activeSensors','sensors'));
        return view('admin.sensors', compact('activeSensors', 'sensors'));
    }

    public function indexGuest()
    {
        // // $activeSensors = Sensor::where('status', 'active')->count();

        // $response = Http::withHeaders([
        //     'token' => 'pWn3VuR5FKFglahFP3MehC63x8qWYne6hbnZhKYQljNpTzamtAutbqNgHXG9'
        // ])->get('http://sensingapi.cusc.vn/api/get/datastreams/sensors?$top=all');

        // $sensorData = $response->json();
        // // dd($sensors["value"]);
        // $sensors = [];
        // foreach ($sensorData["value"] as $sensor) {
        //     if ($sensor['id'] === 11 || $sensor['id'] === 10) {
        //         // dd( $sensor['name']);
        //         $data = ['name' => $sensor['name'], 'measure' => '12 NTU', 'place' => 'Room 3', 'status' => 'Hoạt động', 'lastMeasureTime' => '7 phút trước', 'battery' => '100%'];

        //         // dd($sensor);
        //         $response = Http::withHeaders([
        //             'token' => 'pWn3VuR5FKFglahFP3MehC63x8qWYne6hbnZhKYQljNpTzamtAutbqNgHXG9'
        //         ])->get('http://sensingapi.cusc.vn/api/get/sensors(' . $sensor['id'] . ')/datastreams/observations?$top=1&$order=id desc');

        //         $observation = $response->json();
        //         if (count($observation['value']) && ($sensor['id'] === 11 || $sensor['id'] === 10)) {
        //             if (isset($observation['value'][0]['result'])) {
        //                 if (!is_numeric($observation['value'][0]['result'][0])) {
        //                     $arr = array_values($observation['value'][0]['result'][0]);
        //                     $data['measure'] = $arr[0] ?? '';
        //                     // $data['battery'] = $arr[1] ?? '';
        //                     $data['lastMeasureTime'] = $arr[2] ?? '';
        //                     $data['battery'] = $arr[1] ??'';
        //                 }
        //             }
        //         }

        //         // viet api tu anchor lay dc unit
        //         // tam thoi code nhu nay
        //         $anchor_id = DB::table('sensor_map')->select('anchor_id')->where('sensor_id', $sensor['id'])->first();
        //         if ($anchor_id) {
        //             // dd($anchor_id->anchor_id);
        //             $response = Http::withHeaders([
        //             ])->get(config('app.imdf_api_url') . '/api/anchors/' . $anchor_id->anchor_id);


        //             $anchor = $response->json();
        //             $unit_id = $anchor['features'][0]['properties']['unit_id'];
        //             // dd($unit_id);

        //             $response = Http::withHeaders([
        //             ])->get(config('app.imdf_api_url') . '/api/units/' . $unit_id);

        //             $unit = $response->json();
        //             $data['place'] = $unit['features'][0]['properties']['name']['vi'];
        //         }

        //         // $data['measure'] =
        //         array_push($sensors, $data);
        //     }
        // }



        $activeSensors = 10;
         $sensors = [['name'=>'Cảm biến độ đục nước', 'measure'=>'3 µg/m³', 'place'=>'Room 1', 'status'=>'Hoạt động', 'lastMeasureTime'=>'5 phút trước', 'battery' => '-10%']];
        // dd($sensors);


        // // return view('admin.sensors', compact('activeSensors','sensors'));
        return view('guest.sensor', compact('activeSensors', 'sensors'));
    }
    public function getSensorID($anchor_id)
    {
        $result = DB::table('sensor_map')
            ->select('sensor_id')
            ->where('anchor_id', $anchor_id)->get();
        // dd($result);
        return response()->json($result[0], 200);
    }
    public function getSensors()
    {
        $result = DB::table('sensor_map')
            ->select('sensor_id', 'anchor_id')->get();
        // dd($result);
        return response()->json($result, 200);
    }

    public function getSensorData(Request $request)
    {
        // Validate input parameters
        $request->validate([
            'fromDate' => 'required|date',
            'toDate' => 'required|date|after_or_equal:fromDate',
            'sensorId' => 'nullable|integer',
        ]);

        $fromDate = $request->input('fromDate');
        $toDate = $request->input('toDate');
        $sensorId = $request->input('sensorId');

        // Build the query
        $query = DB::table('sensor_data')->whereBetween('result_time', [$fromDate, $toDate]);

        if ($sensorId) {
            $query->where('sensor_id', $sensorId);
        }

        $query->orderBy('id', 'desc');

        // Execute the query
        $sensorData = $query->get();

        // Return the response
        return response()->json($sensorData);
    }

    public function insertSensorData(Request $request)
{
    // Validate input
    $validatedData = $request->validate([
        'id' => 'required|integer',
        'sensor_id' => 'required|integer|exists:sensor_map,sensor_id',
        'data' => 'required|string|max:50',
        'battery' => 'required|string|max:50',
        'record_time' => 'required|date',
        'result_time' => 'required|date',
        'valid_time' => 'nullable|date',
    ]);

    // Insert into database
    try {
        DB::table('sensor_data')->insert([
            'id' => $validatedData['id'],
            'sensor_id' => $validatedData['sensor_id'],
            'data' => $validatedData['data'],
            'battery' => $validatedData['battery'],
            'record_time' => $validatedData['record_time'],
            'result_time' => $validatedData['result_time'],
            'valid_time' => $validatedData['valid_time'] ?? null,
        ]);

        return response()->json(['message' => 'Sensor data inserted successfully'], 201);
    } catch (\Exception $e) {
        return response()->json(['error' => 'Failed to insert data', 'details' => $e->getMessage()], 500);
    }
}
}
