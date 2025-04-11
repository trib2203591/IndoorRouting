<div class="w-8/12">
    <label for="" id="restriction-label" class="font-bold text-gray-600">Hạn chế</label>
    <div id="selectBox" class="">
        <div class="conTent">
            <div class="search">
                <input type="text" class="rounded-xl border-gray-200 mt-1" id="restriction"
                    autocomplete="off">

                {{-- options --}}
                <ul class="max-h-40 overflow-auto z-30 w-full rounded-xl mt-2 border-gray-200 border-1 cursor:pointer mr-10 pl-0 hidden"
                    id="restrictionOptionPane">
                   
                    @foreach ($array as $cat => $value)
                        <li class="border-gray-200 rounded-xl border-1 mt-1 hover:bg-gray-200 p-3 cursor-pointer"
                            data-cat="{{ $cat }}">{{ $value }}</li>
                    @endforeach
                </ul>
                <ul class="max-h-40 overflow-auto z-30 w-full rounded-xl mt-2 border-gray-200 border-1 cursor:pointer mr-10 pl-0 hidden"
                    id="restrictionOptionsForSearch">
                </ul>
            </div>
        </div>
    </div>
</div>