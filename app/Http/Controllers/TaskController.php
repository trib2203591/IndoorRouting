<?php

namespace App\Http\Controllers;

use App\Contracts\MQTTSERVICE;
use Http;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    protected $mqttService;

    public function __construct(MQTTSERVICE $mqttService)
    {
        $this->mqttService = $mqttService;
    }

    // this route didn't use MQTT so can write on javascript with fetch, but I forgot =)) 
    public function getTask($actuator_id)
    {

        try {
            if($actuator_id === "12") {
                $taskcapablity = 25;
            } else {
                $taskcapablity = 26;
            }
            
            $getTasksUrl = 'http://sensingapi.cusc.vn/api/get/actuators('.$actuator_id.')/taskingcapabilities('.$taskcapablity.')/tasks';
            $token = $_REQUEST['$token'];

            
            // dd($getTasksUrl);
            $res= Http::withHeaders([
                'Content-Type' => 'application/json',
                'token' => $token
            ])->get($getTasksUrl);



        // Publish the task to the MQTT broker
          
            return response()->json($res->json());
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to publish task: ' . $e->getMessage(),
            ], 500);
        }
    }
    //////////////////////////////////////////////////
    public function postTask(Request $request)
    {
        // $validated = $validate([
        //     'task' => 'required|string',
        //     'sensor_id' => 'required|integer',
        // ]);
        if($request->actuator_id === 12) {
            $topic = "hackathon_tasking_sensor1";
            $taskcapablity = 25;
        } else {
            $topic = "hackathon_tasking_sensor2";
            $taskcapablity = 26;
        }
        
        $taskingUrl = "http://sensingapi.cusc.vn/api/post/tasks";
        $token = $request->token;
        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'token' => $token
        ])->post($taskingUrl, $request->toArray());
        
        
        $getTasksUrl = 'http://sensingapi.cusc.vn/api/get/actuators('.$request->actuator_id.')/taskingcapabilities('.$taskcapablity.')/tasks';
        
        // dd($getTasksUrl);
        $res= Http::withHeaders([
            'Content-Type' => 'application/json',
            'token' => $token
        ])->get($getTasksUrl);



        // $message = "{'value':[{'taskingParameters':0,'id':26}]}";
        $message = json_encode($res->json());

        // Publish the task to the MQTT broker
        try {
            $this->mqttService->publish($topic, $message);

            return response()->json([
                'success' => true,
                'message' => 'Task published to MQTT successfully!',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to publish task: ' . $e->getMessage(),
            ], 500);
        }
    }
}
