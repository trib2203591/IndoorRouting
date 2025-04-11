@extends('layouts.explore.item')
@section('itemcontent')
    <h1 class="text-2xl font-extrabold py-6">Sensor</h1>
    <input type="text" class="block text-sm/6 font-medium text-gray-900" placeholder="Type here to search">
    @php
        $cars = ['Volvo', 'BMW', 'Toyota'];
        $sampleText = 'The w-auto utility can be useful if you need to remove an element’s assigned width under a specific condition, like at a particular breakpoint.'
    @endphp

    @foreach ($cars as $car)
        <div class="card px-6 py-4 shadow w-400 space-y-5 align-items-center">
            <div>{{ $car }}</div>
            <div class="text-black font-thin">{{ $sampleText }}</div> 
        </div>
    @endforeach
@endsection
