<div class="w-8/12">
    <label for="amenityName" id="category-label" class="font-bold text-gray-600">{{ $featureCategory }}</label>
    <div id="selectBox" class="">
        <div class="conTent">
            {{-- search cell --}}
            <div class="search">
                <input type="text" class="rounded-xl border-gray-200 mt-1" id="category"
                    autocomplete="off">

                {{-- options --}}
                <ul class="max-h-40 overflow-auto z-30 w-full rounded-xl mt-2 border-gray-200 border-1 cursor:pointer mr-10 pl-0 hidden"
                    id="categoryOptionPane">
                    @foreach ($array as $cat => $value)
                        <li class="border-gray-200 rounded-xl border-1 mt-1 hover:bg-gray-200 p-3 cursor-pointer"
                            data-cat="{{ $cat }}">{{ $value }}</li>
                    @endforeach
                </ul>
                <ul class="max-h-40 overflow-auto z-30 w-full rounded-xl mt-2 border-gray-200 border-1 cursor:pointer mr-10 pl-0 hidden"
                    id="categoryOptionsForSearch">
                </ul>
            </div>
        </div>
    </div>
</div>