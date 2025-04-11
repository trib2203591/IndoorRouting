<?php 

namespace App\Contracts;

use PhpMqtt\Client\ConnectionSettings;
use PhpMqtt\Client\Exceptions\MqttClientException;
use PhpMqtt\Client\MqttClient;

class MQTTSERVICE {
    protected $mqtt;

    public function __construct() {
        $this->mqtt = new MqttClient(
            env('MQTT_HOST'),
            env('MQTT_PORT'),
            env('MQTT_CLIENT_ID')
        );

    }

    public function connect() {

        try{
            $settings = (new ConnectionSettings)
                ->setUsername(env('MQTT_USERNAME'))
                ->setPassword(env('MQTT_PASSWORD'));

            $this->mqtt->connect($settings);
            // $this->mqtt->connect(env('MQTT_USERNAME'), env('MQTT_PASSWORD'));
        }
        catch (MqttClientException $e) {
            throw new \Exception('Could not connect to MQTT broker: ' . $e->getMessage());
        }

    }

    public function disconnect() {
        $this->mqtt->disconnect();
    }

    public function publish(string $topic, string $message, int $qos = 0) {
        $this->connect();
        $this->mqtt->publish($topic, $message, $qos);
        $this->disconnect();
    }

    public function subscribe(string $topic, callable $callback, int $qos = 0) {
        $this->connect();
        $this->mqtt->subscribe($topic, $callback, $qos);
        $this->mqtt->loop(true);
    }
}
