@extends('guest.general')
@section('pageTitle')
    <span class= "w-40 h-8 justify-center items-center">
        <h1 class="text-scndBlue text-2xl font-extrabold">Bản đồ</h1>
    </span>
@endsection

@vite('resources/js/mapForGuest/init/initialize.js')

@section('rightComponents')
    <div class="w-full flex flex-col md:flex-row items-center md:justify-end gap-2 md:gap-4">
        <!-- Search Bar -->
        <div class="w-full md:w-auto search-container">
            <input type="text" id="search-bar" placeholder="Gõ để tìm kiếm..."
                class="w-full md:w-auto bg-gray-100 border-transparent rounded-md px-3 py-2">
            <div class="dropdown" id="dropdown"></div>
        </div>

        <!-- Floor Selection -->
        <select id="floor-select"
            class="w-full md:w-auto min-w-[100px] rounded-md font-extrabold py-2 px-3 border-2 border-scndBlue text-scndBlue">
            <option value="0" class="text-gray-700">Tầng 1</option>
            <option value="1" class="text-gray-700">Tầng 2</option>
        </select>
    </div>
@endsection


@section('content')
    {{-- side panel --}}
    <div class="justify-center">
        <div id="side-panel" class="fixed left-[-400px] top-[200px] w-[300px] bg-white shadow-[-2px_0_5px_rgba(0,0,0,0.2)] overflow-auto transition-all duration-300 z-50 rounded-2xl h-fit">
            <span id="close-btn" class="mr-2">&times;</span>
            <div id="side-panel-content"></div>
        </div>
    </div>

    {{-- Routing panel --}}
    <div class=" justify-center ">
        <div id="routing-panel" class="fixed left-[-400px] top-[420px] w-[300px] bg-white shadow-[-2px_0_5px_rgba(0,0,0,0.2)] overflow-auto transition-all duration-300 z-50 rounded-2xl h-fit">
            <span id="routing-close-btn" class="mr-2">&times;</span>
            <div id="routing-panel-content" class="ml-2">
                <h3 class="font-extrabold text-scndBlue mt-4">
                    Dẫn đường
                </h3>
                <p class="mt-2">Chọn điểm bắt đầu</p>
                <div class="mt-1 w-full md:w-auto routing-search-container">
                    <input type="text" id="start-routing-search-bar" data-id="" autocomplete="off" placeholder="Gõ để tìm kiếm..." class="w-full md:w-auto bg-gray-100 border-transparent rounded-md px-3 py-2">
                    <div class="start-routing-dropdown" id="start-routing-dropdown"></div>
                </div>
                <p class="mt-2">Chọn điểm kết thúc</p>
                <div class="mt-1 w-full md:w-auto routing-search-container">
                    <input type="text" id="end-routing-search-bar" data-id="" autocomplete="off" placeholder="Gõ để tìm kiếm..." class="w-full md:w-auto bg-gray-100 border-transparent rounded-md px-3 py-2">
                    <div class="end-routing-dropdown" id="end-routing-dropdown"></div>
                </div>
                <div class="flex justify">
                    <button id="routing-start-btn" class="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                        Bắt đầu
                    </button>
                </div>
            </div>
        </div>
    </div>

    {{-- Routing guide panel --}}
    <div class="justify-center">
        <div id="routing-guide-panel" class="routing-guide-panel h-fit">
            <span id="routing-guide-close-btn" class="mr-2">&times;</span>
            <div id="routing-guide-panel-content">
                <p id="routing-guide-message" class="mt-2 text-center text-xl font-bold">No route</p>
                <div class="mt-4 flex justify-between w-full">
                    <button id="routing-guide-back-btn" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                        Quay lại
                    </button>
                    <button id="routing-guide-next-btn" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                        Tiếp tục
                    </button>
                </div>
            </div>
        </div>
    </div>

    {{-- MAP --}}
    <div id="map" class="map">
        <div id="map-loading" class="map-loading">
            <div class="flex flex-col items-center">
                <div class="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500"></div>
                <p id="map-loading-text" class="mt-4 text-lg text-gray-700">Đang tải bản đồ...</p>
            </div>
        </div>
    </div>

    {{-- Dynamic side panel --}}
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const toggleBtn = document.getElementById('toggleSidebar');
            const toggleMobileBtn = document.getElementById('toggleSidebarMobile');
            const sidebar = document.getElementById('sidebar');
            const sidebarPlaceholder = document.getElementById('sidebarPlaceholder');

            if (toggleBtn) {
                toggleBtn.addEventListener('click', function() {
                    // Adjust side panel position if it exists
                    const sidePanel = document.getElementById('side-panel');
                    if (sidePanel) {
                        if (sidePanel.style.left === '-400px' || !sidePanel.style.left) {
                            // Side panel is hidden, do nothing
                            return;
                        } else if (sidebar && sidebar.classList.contains('hidden')) {
                            sidePanel.style.left = '325px';
                        } else {
                            sidePanel.style.left = '40px';
                        }
                    }
                    const routePanel = document.getElementById('routing-panel');
                    if (routePanel) {
                        if (routePanel.style.left === '-400px' || !routePanel.style.left) {
                            // Side panel is hidden, do nothing
                            return;
                        } else if (sidebar && sidebar.classList.contains('hidden')) {
                            routePanel.style.left = '325px';
                        } else {
                            routePanel.style.left = '40px';
                        }
                    }
                });
            }

            // Handle mobile toggle button
            if (toggleMobileBtn) {
                toggleMobileBtn.addEventListener('click', function() {
                    const sidePanel = document.getElementById('side-panel');
                    if (sidePanel) {
                        if (sidePanel.style.left === '-400px' || !sidePanel.style.left) {
                            // Side panel is hidden, do nothing
                            return;
                        } else if (sidebar && sidebar.classList.contains('hidden')) {
                            sidePanel.style.left = '325px';
                        } else {
                            sidePanel.style.left = '40px';
                        }
                    }
                    const routePanel = document.getElementById('routing-panel');
                    if (routePanel) {
                        if (routePanel.style.left === '-400px' || !routePanel.style.left) {
                            // Side panel is hidden, do nothing
                            return;
                        } else if (sidebar && sidebar.classList.contains('hidden')) {
                            routePanel.style.left = '325px';
                        } else {
                            routePanel.style.left = '40px';
                        }
                    }
                });
            }
        });
    </script>
@endsection
