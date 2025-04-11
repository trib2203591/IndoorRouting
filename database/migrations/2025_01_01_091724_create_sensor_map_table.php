<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sensor_map', function (Blueprint $table) {
            $table->id();
            $table->uuid('anchor_id');
            $table->unsignedBigInteger('sensor_id');
            $table->unique(['sensor_id','anchor_id']);
            
            $table->timestamps();
        });

        DB::table('sensor_map')->insert([
            'sensor_id' => 11,
            'anchor_id' => '08689fdc-d16a-4447-a7d9-5bf2d459e860'
        ]);
        DB::table('sensor_map')->insert([
            'sensor_id' => 10,
            'anchor_id' => '08689fdc-d16a-4447-a7d9-5bf2d459e861'
        ]);
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sensor_map');
    }
};
