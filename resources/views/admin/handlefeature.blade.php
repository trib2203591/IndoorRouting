@extends('layouts.general')
@section('pageTitle')
    <h1 class="text-scndBlue font-extrabold text-2xl">Thêm đối tượng vào bản đồ</h1>
@endsection

@vite('resources/js/handleFeatures/init.js')

@section('content')
    {{-- Feature Selector Pane --}}
    <div class="w-full flex items-center justify-center mt-2 relative">
        <div class="m-2 w-[95%] h-fit rounded-xl">

            <div class="relative">
                <input type="text" id="featureSearch" placeholder="Tìm loại đối tượng..."
                    class="w-full p-3 border-gray-200 border-2 rounded-t-xl" />

                <div id="featureDropdown" class="w-full max-h-40 overflow-y-auto border-gray-200 border-2 border-t-0 rounded-b-xl bg-white">
                    @foreach ($featureList as $feature)
                        <div class="p-2 hover:bg-scndBlue hover:text-white cursor-pointer feature-item"
                            data-content="{{ $feature }}">{{ $feature }}</div>
                    @endforeach
                </div>
            </div>
            <h2 class="ml-2 font-bold text-red-500">Các trường có * là bắt buộc</h2>
        </div>
    </div>

    {{-- Feature Form --}}
    <div class="w-full flex flex-row pr-10">
        <div id="formArea" class="p-10 w-full flex-1">
            <h1>Chọn 1 loại đối tượng để thêm</h1>
        </div>
        <div class="flex flex-[0.4] flex-col gap-7">
            <textarea name="json-review" id="json-review" cols="30" rows="20"
                class="border-gray-300 rounded-xl p-0 text-sm m-0 h-fit"></textarea>
            <div class="flex items-center justify-center">
                <button id="geoJsonBtn" class="bg-scndBlue p-5 text-white rounded-xl active:bg-primaryBlue">
                    GeoJson
                </button>
            </div>
        </div>
    </div>
    <input type="text" name="chosen" id="currentFeature" hidden>
    <button id="btnSend" class="bg-scndBlue p-5 text-white ml-20 rounded-xl active:bg-primaryBlue mb-10">Tạo đối
        tượng</button>
@endsection
