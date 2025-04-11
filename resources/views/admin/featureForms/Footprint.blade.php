<div class="flex">
    <div class="flex flex-1 flex-col gap-7">
        <x-normalInput inputLabel="Tên hình chiếu" input="name"></x-normalInput>
        <x-normalInput inputLabel="Tên thay thế" input="alt-name"></x-normalInput>
        <x-catInput featureCategory="Phân loại hình chiếu" :array="$footprintCategories"></x-catInput>
        <x-multiChoices label="Các tòa nhà tương ứng" inputId="building" :array="$buildings"></x-multiChoices>
    </div>

    <div class="flex flex-1 flex-col gap-7">
        <x-polygonalInput></x-polygonalInput>
    </div>
</div>