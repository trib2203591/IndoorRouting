<div class="flex">
    <div class="flex flex-1 flex-col gap-7">
        <x-nameInput featureName="Tên tòa nhà"></x-nameInput>
        <x-altNameInput></x-altNameInput>
        <x-catInput featureCategory="Phân loại tòa nhà" :array="$buildingCategories"></x-catInput>
    </div>
    <div class="flex flex-1 flex-col gap-7">
        <x-restrictionInput :array="$restrictionCategories"></x-restrictionInput>
        <x-displayPointInput></x-displayPointInput>
        <x-comboSearch label="Địa chỉ" inputId="address" :array="$addresses"></x-comboSearch>
    </div>
</div>

