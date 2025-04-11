
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="https://openlayers.org/favicon.ico" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @vite('resources/css/app.css')
    <title>Indoor Mappping</title>
</head>

<body>
    <div class="relative z-10 flex min-h-screen">
        <div id="sidebar"
            class="bg-cyan-600
            hidden
         text-cyan-100
         w-64
          space-y-6
          px-2
           py-6
           absolute
           inset-y-0
           left-0
           md:relative
           md:-translate-x-0
           transform
           -translate-x-full
           transition duration-200 ease-in-out
           shadow-md
           ">
           {{-- sidebar title --}}
            <a href="" class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-10">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                </svg>
                <span class="text-2xl font-extrabold text-white">Indoor Sensing</span>
            </a>
            <nav>
                <a href="/admin"
                    class="flex items-center py-3 px-4 hover:bg-cyan-700 group transition duration-200 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6 group-hover:text-cyan-300">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                    </svg>
                    <span class="text-white group-hover:text-cyan-300">Map</span>
                </a>

                <h1 class="text-2xl font-extrabold text-white">Explore</h1>
                {{-- sensor tab --}}
                <a href="/admin"
                    class="flex items-center py-3 px-4 hover:bg-cyan-700 transition duration-200 group rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6 group-hover:text-cyan-300">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                    <span class="text-white group-hover:text-cyan-300">Sensors</span>
                </a>
            </nav>
        </div>

        {{-- title pane --}}
        <div class="flex-1">
            <div class="bg-white shadow-md px-1 py-3 flex justify-between relative z-10">
                <button id="toggleSidebar" class="rounded-md bg-cyan-600 text-white py-2 px-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
                    </svg>
                </button>
                <div class="w-full flex justify-end">
                    <input type="text" placeholder="Search..." class="mr-5 placeholder-gray-300 border-cyan-600 border-2 rounded-lg min-w-[300px]">
                    <select id="floor-select" class="mr-2 w-auto min-w-[100px] rounded-md font-extrabold py-2 px-3 border-gray-300 text-cyan-700 flex-shrink-0">
                        <option value="11111111-1111-1111-1111-111111111111" class="text-gray-700">Floor 1</option>
                        <option value="11111111-1111-1111-1111-111111111112" class="text-gray-700">Floor 2</option>
                    </select>
                </div>

            </div>

            <div class="text-cyan-700 font-extrabold p-0 shadow-md">
                {{-- <div id="side-panel" class="side-panel">
                    <span id="close-btn">&times;</span>
                    <div id="side-panel-content"></div>
                </div> --}}
                @vite('resources/js/main.js')
                {{-- <script type="module" src="../../js/main.js"></script> --}}
            </div>

            {{-- MAP is here --}}
            <div id="map" class="map"></div>

        </div>



    </div>
    <script>
        document.getElementById('toggleSidebar').addEventListener('click', function() {
            const sidebar = document.getElementById('sidebar')
            const button = this
            sidebar.classList.toggle('hidden')

            if (sidebar.classList.contains('hidden')) {
                button.classList.remove('text-cyan-600')
                button.classList.add('bg-cyan-600', 'text-white')
            } else {

                button.classList.remove('bg-cyan-600', 'text-white')
                button.classList.add('text-cyan-600')
            }
        })
    </script>
</body>

</html>
