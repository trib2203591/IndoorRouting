@extends('layouts.general')
@section('pageTitle')
    <span class= "w-40 h-8 justify-center items-center">
    <h1 class="text-scndBlue text-2xl font-extrabold">Bản đồ</h1>
    <span>
@endsection

@vite('resources/js/main.js')

@section('rightComponents')
    <div class="w-full flex flex-col md:flex-row items-center md:justify-end gap-2 md:gap-4">
        <!-- Export Button -->
        <a href="http://127.0.0.1:8000/api/export-spatial-data" title="Export Spatial Data"
            class="relative rounded-full bg-gray-100 p-2 text-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <img src="{{ Vite::asset('resources/images/file.png') }}" class="w-6 h-6" alt="Example Image">
        </a>

        <!-- Search Bar -->
        <div class="w-full md:w-auto search-container">
            <input type="text" id="search-bar" placeholder="Gõ để tìm kiếm..."
                class="w-full md:w-auto bg-gray-100 border-transparent rounded-md px-3 py-2">
            <div class="dropdown" id="dropdown"></div>
        </div>

        <!-- Feature Selection -->
        <div class="relative w-full md:w-64">
            <input type="text" id="feature-select-search" class="w-full bg-gray-100 border-transparent rounded-md px-3 py-2"
                placeholder="Chọn loại đối tượng..." />
            <ul id="feature-select-dropdown"
                class="absolute bg-white border-2 border-scndBlue rounded-md mt-1 w-full max-h-60 overflow-y-auto z-10 hidden">
                <!-- Dropdown options will be populated here -->
            </ul>
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
    <div class="justify-center">
        <div id="side-panel" class="fixed left-[-500px] top-[100px] w-[450px] bg-white shadow-[-2px_0_5px_rgba(0,0,0,0.2)] overflow-auto transition-all duration-300 z-50 rounded-2xl h-fit">
            <span id="close-btn" class="mr-2">&times;</span>
            <div id="side-panel-content"></div>
        </div>
    </div>
    {{-- MAP is here --}}
    <div id="map" class="map">
        <div id="map-loading" class="map-loading">
            <div class="flex flex-col items-center">
                <div class="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500"></div>
                <p id="map-loading-text" class="mt-4 text-lg text-gray-700">Đang tải bản đồ...</p>
            </div>
        </div>
    </div>
    {{-- dynamic side panel --}}
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
                        if (sidePanel.style.left === '-500px' || !sidePanel.style.left) {
                            // Side panel is hidden, do nothing
                            return;
                        } else if (sidebar && sidebar.classList.contains('hidden')) {
                            sidePanel.style.left = '325px';
                        } else {
                            sidePanel.style.left = '40px';
                        }
                    }
                });
            }

            // Handle mobile toggle button
            if (toggleMobileBtn) {
                toggleMobileBtn.addEventListener('click', function() {
                    const sidePanel = document.getElementById('side-panel');
                    if (sidePanel) {
                        if (sidePanel.style.left === '-500px' || !sidePanel.style.left) {
                            // Side panel is hidden, do nothing
                            return;
                        } else if (sidebar && sidebar.classList.contains('hidden')) {
                            sidePanel.style.left = '325px';
                        } else {
                            sidePanel.style.left = '40px';
                        }
                    }
                });
            }
        });
    </script>
@endsection
