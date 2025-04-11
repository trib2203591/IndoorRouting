<div class="flex">
    <div class="flex flex-1 flex-col gap-7">
        <x-nameInput featureName="Tên khu vực"></x-nameInput>
        <x-altNameInput></x-altNameInput>
        <x-catInput featureCategory="Phân loại khu vực" :array="$sectionCategories"></x-catInput>
        <x-restrictionInput :array="$restrictionCategories"></x-restrictionInput>
        <x-accessInput :array="$accessibilityCategories"></x-accessInput>
        <x-multiChoices label="Parents" inputId="parent" :array="$sections"></x-multiChoices>

    </div>
    <div class="flex flex-1 flex-col gap-7">
        <x-displayPointInput></x-displayPointInput>
        <x-comboSearch label="Tầng" inputId="level" :array="$levels"></x-comboSearch>
        <x-comboSearch label="Địa chỉ" inputId="address" :array="$addresses"></x-comboSearch>
        <x-polygonalInput></x-polygonalInput>
        <x-normalInput inputLabel="ID nhóm" input="correlation"></x-normalInput>

    </div>
</div>
