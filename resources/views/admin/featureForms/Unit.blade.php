<div class="flex">
    <div class="flex flex-1 flex-col gap-7">
        <x-nameInput featureName="*Tên unit"></x-nameInput>
        <x-altNameInput></x-altNameInput>
        <x-catInput featureCategory="*Phân loại unit" :array="$unitCategories"></x-catInput>
        <x-accessInput :array="$accessibilityCategories"></x-accessInput>
    </div>

    <div class="flex flex-col flex-1 gap-7">
        <x-restrictionInput :array="$restrictionCategories"></x-restrictionInput>
        <x-comboSearch label="*Tầng" inputId="level" :array="$levels"></x-comboSearch>
        <x-displayPointInput></x-displayPointInput>
        <x-polygonalInput></x-polygonalInput>
    </div>
</div>
