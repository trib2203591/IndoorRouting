<div class="flex">

    <div class="flex flex-1 flex-col gap-7">
        <x-nameInput featureName="Tên cửa mở"></x-nameInput>
        <x-altNameInput></x-altNameInput>
        <x-catInput featureCategory="Phân loại cửa mở" :array="$openingCategories"></x-catInput>
        <x-accessInput :array="$accessibilityCategories"></x-accessInput>
        <x-multiChoices label="Kiểm soát đi vào" inputId="accesscontrol" :array="$accesscontrolCategories"></x-multiChoices>

    </div>
    <div class="flex flex-1 flex-col gap-7">


        <div class="w-8/12">
            <div class="flex flex-row gap-5 items-center">
                <label class="font-bold text-gray-600">Cửa</label>
                <input type="checkbox" class="border-gray-300 rounded-md" name="door" id="door"
                    value="doorcheck">
            </div>
            <div class="h-3"></div>
            <div class="flex flex-col gap-3 w-full hidden" id="doordetail">
                <x-subComboSearch label="Loại cửa" inputId="doortype" :array="$doorTypes"></x-subComboSearch>
                <div class="flex flex-col">
                    <label class="text-gray-600 text-sm">Tự động</label>
                    <select id="automatic" class="rounded-xl border-gray-200" name="selector">
                        <option value="true">Có</option>
                        <option value="false">Không</option>
                    </select>   
                </div>
                <x-subComboSearch label="Vật liệu" inputId="material" :array="$materials"></x-subComboSearch>
            </div>
        </div>
        <x-comboSearch label="Tầng" inputId="level" :array="$levels"></x-comboSearch>
        <div class="w-8/12 flex flex-col">
            <label for="" class="font-bold text-gray-600">Dữ liệu hình học</label>
            <textarea rows="7" class="rounded-xl border-gray-200 mt-2 h-fit" id="geometry-coordinates"></textarea>
        </div>
        <x-displayPointInput></x-displayPointInput>
    </div>
</div>
</div>
