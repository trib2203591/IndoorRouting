<div class="w-8/12">
    <label class="font-bold text-gray-600">{{ $label }}</label>
    <div>
        <div>
            <div class=" div-container mb-2 p-1 mt-3 w-[100%] border flex flex-wrap h-24 border-gray-200 rounded-xl overflow-auto"
                id="{{ $inputId . 'Container' }}"></div>
            <input type="text"
                class="
                 border-b-gray-200 border-t-transparent border-l-transparent border-r-transparent mt-1 placeholder:text-gray-300 --}}
                focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:outline-none focus:ring-0 focus:border-b-2"
                id="{{ $inputId }}" autocomplete="off" placeholder="Click để chọn hoặc tìm...">

            {{-- options --}}
            <ul class="max-h-40 overflow-auto z-30 w-full rounded-xl mt-2 border-gray-200 border-1 cursor:pointer mr-10 pl-0 hidden"
                id="{{ $inputId . 'OptionPane' }}">
                @foreach ($array as $key => $value)
                    <li class="border-gray-200 rounded-xl border-1 mt-1 hover:bg-gray-200 p-3 cursor-pointer"
                        data-cat="{{ $key }}">{{ $value }}</li>
                @endforeach
            </ul>
            <ul class="max-h-40 overflow-auto z-30 w-full rounded-xl mt-2 border-gray-200 border-1 cursor:pointer mr-10 pl-0 hidden"
                id="{{ $inputId . 'OptionsForSearch' }}">
            </ul>
        </div>
    </div>
</div>
