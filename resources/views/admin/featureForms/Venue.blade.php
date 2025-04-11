<div class="flex">
    <div class="flex flex-1 flex-col gap-7">
        <x-nameInput featureName="Tên địa điểm"></x-nameInput>
        <x-altNameInput></x-altNameInput>
        <x-catInput featureCategory="Phân loại địa điểm" :array="$venueCategories"></x-catInput>
        <x-restrictionInput :array="$restrictionCategories"></x-restrictionInput>
        <x-normalInput inputLabel="Giờ mở cửa" input="hour"></x-normalInput>
        <x-normalInput inputLabel="Website" input="website"></x-normalInput>

    </div>

    <div class="flex flex-col flex-1 gap-7">
        <x-normalInput inputLabel="Điện thoại" input="phone"></x-normalInput>
        <x-displayPointInput></x-displayPointInput>
        <x-comboSearch label="Địa chỉ" inputId="address" :array="$addresses"></x-comboSearch>
        <x-polygonalInput></x-polygonalInput>
    </div>
</div>
