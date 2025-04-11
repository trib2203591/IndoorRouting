onclick="window.location.href='/sensors';">
<nav>
    <a href="/guest"
            class="{{request()->routeIs('guest.index') ? 'bg-activeTab' : '' }} flex items-center mx-2 py-3 px-5  group transition duration-200 rounded-md gap-5 mb-2 hover:bg-activeTab">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" stroke-width="1.5"
                stroke="#1f5ca9" class="size-8 ">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
            </svg> -->
            <img src="{{ Vite::asset('resources/images/location.png') }}" class="size-7"
                alt="Example Image">
            <span
                class="{{request()->routeIs('admin.index') ? 'font-semibold' : '' }} hover:font-semibold text-white text-lg">Bản
                đồ</span>
        </a>

    {{-- <h1 class="text-2xl font-extrabold text-white">Explore</h1> --}}
    {{-- sensor tab --}}
    <a href="/guest/sensors"
    class="{{request()->routeIs('guest.sensor') ? 'bg-activeTab' : '' }} flex items-center mx-2 py-3 px-5  group transition duration-200 rounded-md gap-5 mb-2 hover:bg-activeTab">

    <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5"
        stroke="#1f5ca9" class="size-8 ">
        <path stroke-linecap="round" stroke-linejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
    </svg> -->
    <img src="{{ Vite::asset('resources/images/dashboard.png') }}" class="size-7 fill-white"
        alt="Example Image">
    <span
        class="{{request()->routeIs('admin.sensors') ? 'font-semibold' : '' }} hover:font-semibold text-white text-lg ">Bảng
        điều khiển</span>
    </a>

    <!-- <a href="/features"
            class="flex items-center py-3 px-4 hover:bg-thirdBlue group transition duration-200 rounded-md gap-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="#1f5ca9" class="size-8 ">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
            <span class="text-white text-xl">Feature</span>
        </a> -->
</nav>