<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="https://openlayers.org/favicon.ico" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @vite('resources/css/app.css')
    @vite('resources/css/scrollbar.css')
    @vite('resources/css/style.css')
    <title>Indoor Routing</title>
    <style>
        .hidden {
            display: none;
        }
    </style>
</head>

<body>
    {{-- an overlay on the entire screen when an edit form appears --}}
    <div id="overlay" class="flex bg-darken2 h-screen w-screen fixed z-40 items-center justify-center hidden">
        @yield('insideOverlay')
    </div>


    {{-- PAGE --}}
    <div class="p-0 m-0 w-full bg-white relative z-10 flex min-h-screen" id="pageBody">
        <div id="sidebar"
                class="md:flex hidden bg-scndBlue fixed z-20
                    w-72
                    space-y-6
                    px-2
                    py-6
                    inset-y-0
                    left-0
                    md:-translate-x-0
                    transition duration-200 ease-in-out
                    shadow-md
                    min-h-screen
                    flex-col
                    pb-0
                   ">
            {{-- sidebar close button for mobile --}}
            <div class="md:hidden mt-2 mb-1 flex justify-end">
                <button id="toggleSidebarMobile" class="rounded-md text-white py-1 px-6">
                    <p class="text-lg font-bold">X</p>
                </button>
            </div>

            {{-- sidebar title --}}
            <div class="mt-2 mb-10">
                <a href="" class="flex flex-row items-center gap-4 justify-center ">
                    <img src="{{ Vite::asset('resources/images/ctu.png') }}" alt="" class="size-14">
                    <span class="text-xl font-bold text-white">Indoor Routing</span>
                </a>
            </div>

            {{-- sidebar navigation --}}
            <nav>
                @php $isIndex = request()->routeIs('guest.index'); @endphp
                <a href="/guest"
                    class="{{ $isIndex ? 'bg-activeTab' : '' }} flex items-center mx-2 py-3 px-5 group transition duration-200 rounded-md gap-5 mb-2 hover:bg-activeTab">
                    <img src="{{ Vite::asset('resources/images/location.png') }}" class="size-7" alt="Example Image">
                    <span class="{{$isIndex ? 'font-semibold' : '' }} hover:font-semibold text-white text-lg">
                        Bản đồ
                    </span>
                </a>
            </nav>

            <div class="flex-grow"></div>

            {{-- sidebar footer --}}
            <div class="flex flex-row mt-auto">
                <!-- Logout Button -->
                <form method="POST" action="{{ route('logout') }}" class="w-fit flex flex-row items-center gap-14">
                    @csrf
                    <button type="submit"
                        class="bg-fourthBlue hover:bg-activeTab text-white font-bold py-2 px-4 rounded flex items-center justify-center w-fit">
                        <h1 class="text-xs font-semi">Đăng Nhập</h1>

                    </button>
                    <!-- Version -->
                    <span class="text-activeTab text-xs font-thin font-mono">Version 1.0.0</span>
                </form>
            </div>
        </div>

        <div id="sidebarPlaceholder"
            class="md:flex hidden bg-scndBlue fixed
                h-full
                min-w-72
                space-y-6
                px-2
                py-6
                inset-y-0
                left-0
                md:relative
                md:-translate-x-0
                transition duration-200 ease-in-out
                shadow-md
                rounded-tr-2xl
                rounded-br-2xl
        "></div>

        {{-- main page on the left--}}
        <div class="flex-1 relative w-auto">
            {{-- title pane --}}
            <div id="titlePane" class="px-1 py-3 flex justify-between relative z-10">
                <div class="flex flex-row items-center gap-3 pl-2">
                    <button id="toggleSidebar" class="rounded-md text-scndBlue py-2 px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
                        </svg>
                    </button>
                    @yield('pageTitle')
                </div>

                {{-- other components on the right --}}
                @yield('rightComponents')
            </div>

            {{-- main content --}}
            @yield('content')
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const toggleBtn = document.getElementById('toggleSidebar');
            const toggleMobileBtn = document.getElementById('toggleSidebarMobile');
            const sidebar = document.getElementById('sidebar');
            const sidebarPlaceholder = document.getElementById('sidebarPlaceholder');

            // Check if elements exist before adding listeners
            if (toggleBtn) {
                toggleBtn.addEventListener('click', function() {
                    // Toggle both sidebars' visibility
                    if (sidebar) sidebar.classList.toggle('hidden');
                    if (sidebarPlaceholder) sidebarPlaceholder.classList.toggle('hidden');

                    // Change button appearance based on sidebar state
                    if (sidebar && sidebar.classList.contains('hidden')) {
                        this.classList.remove('bg-scndBlue', 'text-white');
                        this.classList.add('text-scndBlue');
                    } else {
                        this.classList.remove('text-scndBlue');
                        this.classList.add('bg-scndBlue', 'text-white');
                    }
                });
            }

            // Handle mobile toggle button
            if (toggleMobileBtn) {
                toggleMobileBtn.addEventListener('click', function() {
                    if (sidebar) sidebar.classList.toggle('hidden');
                    if (sidebarPlaceholder) sidebarPlaceholder.classList.toggle('hidden');
                });
            }
        });
    </script>

</body>

</html>
