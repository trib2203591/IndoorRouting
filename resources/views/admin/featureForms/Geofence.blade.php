<div class="flex">
    <div class="flex flex-1 flex-col gap-7">
        <x-normalInput inputLabel="Tên vùng địa lý ảo" input="name"></x-normalInput>
        <x-normalInput inputLabel="Tên thay thế" input="alt-name"></x-normalInput>
        <x-catInput featureCategory="Phân loại vùng ảo" :array="$geofenceCategories"></x-catInput>
        <x-restrictionInput :array="$restrictionCategories"></x-restrictionInput>
        <x-normalInput inputLabel="Nhóm liên kết Geofence" input="correlation"></x-normalInput>
        <x-multiChoices label="Các tòa nhà tương ứng" inputId="building" :array="$buildings"></x-multiChoices>
    </div>

    <div class="flex flex-1 flex-col gap-7">
        <x-multiChoices label="Các tầng tương ứng" inputId="level" :array="$levels"></x-multiChoices>
        <x-multiChoices label="Parents" inputId="parent" :array="$parents"></x-multiChoices>
        <x-polygonalInput></x-polygonalInput>
        <x-displayPointInput></x-displayPointInput>
    </div>
</div>
