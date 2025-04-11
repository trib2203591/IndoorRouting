<div class>
    <label class="text-gray-600 text-sm">{{ $label }}</label>
    <div>
        <div>
            <div class="search">
                <input type="text" class="rounded-xl border-gray-200 mt-1" id="{{ $inputId }}"
                    autocomplete="off">

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
</div>