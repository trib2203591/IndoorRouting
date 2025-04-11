@extends('guest.general')
@section('pageTitle')
    <h1 class="text-scndBlue text-2xl font-extrabold">Hệ thống IoT</h1>
@endsection
@section('rightComponents')
    {{-- <div class="w-full flex justify-end"> --}}
    {{-- <input type="text" placeholder="Search..."
        class="mr-5 placeholder-gray-300 border-transparent bg-vGray rounded-lg min-w-[300px]"> --}}
    {{-- <button
        class="mr-2 w-auto min-w-[100px] rounded-md font-extrabold py-2 px-3 border-gray-300 text-scndBlue flex-shrink-0 border border-2 border-gray-300">Search</button>
    --}}
    {{-- </div> --}}
@endsection

@section('insideOverlay')
    {{-- SensorEdit Form --}}
    <div id="sensorForm" class="fixed flex flex-col bg-white w-4/12 h-5/12 shadow-xl rounded-xl opacity-100">

        {{-- exitBtn --}}
        <div class="flex justify-end m-2">
            <button id="exitForm"
                class="text-slate-400 text-xs px-2 py-1 border shadow-sm border-gray-300 bg-gray-100 rounded-md items-center">
                X
            </button>
        </div>

        {{-- fields in the form --}}
        <div class="p-10 pt-2 pb-7 w-full h-full flex-flex-col flex flex-col gap-4">
            <div class="flex flex-row jusfify-between items-center">
                <label for="sensorName" class="flex-1 font-bold text-scndBlue">Tên</label>
                <input type="text" id="sensorName" class="w-1/12 rounded-xl border-gray-300 border-1">
            </div>

            <div class="flex flex-row jusfify-between items-center">
                <label for="sensorPlace" class="flex-1 font-bold text-scndBlue">Vị trí</label>
                <input type="text" id="sensorPlace" class="w-8/12 rounded-xl border-gray-300 border-1">
            </div>

            <div class="flex flex-row jusfify-between items-center">
                <label for="sensorBattery" class="flex-1 font-bold text-scndBlue">Pin</label>
                <input type="text" id="sensorBattery" disabled
                    class="w-8/12 rounded-xl border-gray-300 border-1 disabled:!bg-gray-100">
            </div>

            <div class="flex flex-row jusfify-between items-center">
                <label for="sensorName" class="flex-1 font-bold text-scndBlue">Trạng thái</label>
                <select name="status" id="sensorStatus"
                    class="w-8/12 rounded-xl border-gray-300 border-1 items-center justify-center">
                    <option value="Hoạt động">Hoạt động</option>
                    <option value="Tắt">Tắt</option>
                </select>
            </div>

            <div class="mt-3 ml-11 mb-0 flex flex-row items-center gap-3 justify-center">
                <button class="p-2 px-5 bg-gray-400 rounded-md text-white">Hủy</button>
                <button class="p-2 ml-2 px-5 bg-primaryBlue rounded-md text-white">Lưu</button>
            </div>
        </div>

    </div>
@endsection


@section('content')
    {{-- charts pane --}}

    <div class="flex flex-col items-center">
        <div
            class="flex flex-col gap-3 bg-primaryGray rounded-2xl p-5 w-11/12 justify-center border-2 border-gray-200 mb-2">
            <h1 class="m-1 text-scndBlue text-lg font-bold">
                Dữ Liệu Cảm Biến
            </h1>
            <div
                class="relative h-[300px] w-12/12 flex-col flex flex-1 rounded-2xl items-center justify-center p-4 border-2 border-gray-200 bg-white mb-5">
                <h1 class="px-4 py-2 text-scndBlue font-bold text-center w-full">Laser Optical Dust Sensor</h1>
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full px-4">
                    <div class="flex flex-col w-full sm:w-auto">
                        <label for="fromDateDust" class="text-gray-700 mb-1">Từ ngày:</label>
                        <input id="fromDateDust" name="fromDateDust" type="datetime-local"
                            class="py-2 px-3 border rounded-lg bg-white w-full" onchange="changeDateRangeDust()" />
                    </div>
                    <div class="flex flex-col w-full sm:w-auto">
                        <label for="toDateDust" class="text-gray-700 mb-1">Đến ngày:</label>
                        <input id="toDateDust" name="toDateDust" type="datetime-local"
                            class="py-2 px-3 border rounded-lg bg-white w-full" onchange="changeDateRangeDust()" />
                    </div>
                </div>
                <canvas id="airChart" style="width: 100%; height: 100%; max-height: 300px;"></canvas>
                @vite('resources/js/charts/airChart.js')
            </div>

            <div
                class="relative h-[300px] w-12/12 flex-col flex flex-1 rounded-2xl items-center justify-center p-4 border-2 border-gray-200 bg-white mb-5">
                <h1 class="px-4 py-2 text-scndBlue font-bold text-center w-full">Turbidity Sensor</h1>
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full px-4">
                    <div class="flex flex-col w-full sm:w-auto">
                        <label for="fromDateWater" class="text-gray-700 mb-1">Từ ngày:</label>
                        <input id="fromDateWater" name="fromDateWater" type="datetime-local"
                            class="py-2 px-3 border rounded-lg bg-white w-full" onchange="changeDateRangeWater()" />
                    </div>
                    <div class="flex flex-col w-full sm:w-auto">
                        <label for="toDateWater" class="text-gray-700 mb-1">Đến ngày:</label>
                        <input id="toDateWater" name="toDateWater" type="datetime-local"
                            class="py-2 px-3 border rounded-lg bg-white w-full" onchange="changeDateRangeWater()" />
                    </div>
                </div>
                <canvas id="waterChart" style="width: 100%; height: 100%; max-height: 300px;"></canvas>
                @vite('resources/js/charts/waterChart.js')
            </div>
        </div>


        <div class="flex flex-col gap-3 bg-primaryGray rounded-2xl p-5 w-11/12 justify-center border-2 border-gray-200 ">
            <h1 class="m-3 text-scndBlue text-lg font-bold">
                Quản Lý Cảm Biến
            </h1>
            <table class="border-collapse bg-white rounded-2xl" style="border-collapse: separate !important">
                <thead>
                    <tr class="h-20">
                        <th class="px-4 py-2 text-scndBlue font-semibold">Tên Cảm Biến</th>
                        <th class="px-4 py-2 text-scndBlue font-semibold">Giá Trị Đo Mới Nhất</th>
                        <th class="px-4 py-2 text-scndBlue font-semibold">Thời Gian Đo</th>
                        <th class="px-4 py-2 text-scndBlue font-semibold">Vị Trí</th>
                        <th class="px-4 py-2 text-scndBlue font-semibold">Trạng Thái</th>
                        <th class="px-4 py-2 text-scndBlue font-semibold">Pin</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($sensors as $sensor)
                        <tr class="h-20">
                            <td class="px-4 py-2 border-t border-gray-300 border-t-1" style="text-align: center">
                                {{ $sensor['name'] }}
                            </td>
                            <td class="px-4 py-2 border-t border-gray-300 border-t-1" style="text-align: center">
                                {{ $sensor['measure'] }}
                            </td>
                            <td class="px-4 py-2 border-t border-gray-300 border-t-1" style="text-align: center">
                                {{ $sensor['lastMeasureTime'] }}
                            </td>
                            <td class="px-4 py-2 border-t border-gray-300 border-t-1" style="text-align: center">
                                {{ $sensor['place'] }}
                            </td>
                            <td class="px-4 py-2 border-t border-gray-300 border-t-1" style="text-align: center">
                                {{ $sensor['status'] }}
                            </td>
                            <td class="px-4 py-2 border-t border-gray-300 border-t-1" style="text-align: center">
                                {{ $sensor['battery'] }}
                            </td>
                        </tr>
                    @endforeach

                </tbody>
            </table>

            <div class="flex-grow"></div>
        </div>

    </div>



    {{-- search bar --}}

    <div class="w-full flex justify-end">
        {{-- <input type="text" placeholder="Nhập tên cảm biến để tìm kiếm..." --}} {{--
            class=" mt-15 mb-3 mr-5 placeholder-gray-300 border-transparent bg-vGray rounded-lg min-w-[400px] placeholder-gray-400">
        --}}
        {{-- <button
            class="mr-2 w-auto min-w-[100px] rounded-md font-extrabold py-2 px-3 border-gray-300 text-scndBlue flex-shrink-0 border border-2 border-gray-300">Search</button>
        --}}
    </div>

    {{-- sensors list --}}


    {{--
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const titlePane = document.getElementById('titlePane');
            console.log(titlePane)
            titlePane.classList.remove('shadow-md');
            titlePane.classList.add('')
        });
    </script> --}}
@endsection
<script>
    document.addEventListener('DOMContentLoaded', function() {
        var editBtns = document.querySelectorAll(`[id*="editsensorBtn"]`)
        var overlay = document.getElementById('overlay')

        editBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                console.log('hehe', this)
                // get data from button
                const name = this.getAttribute('data-name')
                console.log(name)
                const measure = this.getAttribute('data-measure')
                const lastMeasureTime = this.getAttribute('lastMeasureTime')
                const place = this.getAttribute('data-place')
                const status = this.getAttribute('data-status')

                //set data to the form
                document.getElementById('sensorName').value = name
                console.log(document.getElementById('sensorName').value)
                document.getElementById('sensorPlace').value = place
                document.getElementById('sensorStatus').value = status
                document.getElementById('sensorBattery').value = "95%"

                //blur and darken background
                overlay.classList.remove('hidden')
                document.getElementById('pageBody').classList.add('blur');

            })
        })

        //close form
        var exitBtn = document.getElementById('exitForm')
        exitBtn.addEventListener('click', function() {
            overlay.classList.add('hidden')
            document.getElementById('pageBody').classList.remove('blur');
        })
    })
</script>
