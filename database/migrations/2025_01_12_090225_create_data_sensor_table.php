<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
   /**
     * Run the migrations.
     *
     *
     */
    public function up()
    {
        Schema::create('sensor_data', function (Blueprint $table) {
            $table->bigInteger('id')->primary()->unsigned()->unique();
            $table->unsignedBigInteger('sensor_id');
            $table->foreign('sensor_id')->references('sensor_id')->on('sensor_map')->onDelete('cascade');
            $table->string('data', 50);
            $table->string('battery', 50);
            $table->dateTime('record_time');
            $table->dateTime('result_time');
            $table->dateTime('valid_time')->nullable(); // Nullable column
            $table->timestamps(); // Adds created_at and updated_at columns
        });
    }

    /**
     * Reverse the migrations.
     *
     */
    public function down()
    {
        Schema::dropIfExists('sensor_data');
    }
};
