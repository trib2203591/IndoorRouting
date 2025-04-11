<div class="flex">
    <div class="flex flex-1 flex-col gap-7">
        <x-nameInput featureName="Tên tầng"></x-nameInput>
        <x-normalInput inputLabel="Tên gọi ngắn gọn" input="shortname"></x-normalInput>
        <x-catInput featureCategory="Phân loại tầng" :array="$levelCategories"></x-catInput>
        <x-restrictionInput :array="$restrictionCategories"></x-restrictionInput>
        <x-normalInput inputLabel="Thứ tự tầng" input="ordinal"></x-normalInput>
        <div class="w-8/12 flex flex-col gap-2">
            <label for="" class="font-bold text-gray-600">Ngoài trời</label>
            <select id="outdoor" class="rounded-xl border-gray-200 mt-1" name="selector">
                <option value="false">Không</option>
                <option value="true">Có</option>
            </select>
        </div>
    </div>

    <div class="flex flex-1 flex-col gap-7">
        <x-polygonalInput></x-polygonalInput>
        <x-displayPointInput></x-displayPointInput>
        <x-comboSearch label="Địa chỉ" inputId="address" :array="$addresses"></x-comboSearch>
        <x-multiChoices label="Các tòa nhà tương ứng" inputId="building" :array="$buildings"></x-multiChoices>
    </div>
</div>
