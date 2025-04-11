<div class="flex">
    <div class="flex flex-1 flex-col gap-7">
        <x-nameInput featureName="Tên tiện ích"></x-nameInput>
        <x-altNameInput></x-altNameInput>
        <x-catInput featureCategory="Phân loại tiện ích" :array="$amenityCategories"></x-catInput>
        <x-normalInput inputLabel="Giờ phục vụ" input="hour"></x-normalInput>
        <x-normalInput inputLabel="Điện thoại" input="phone"></x-normalInput>
        <x-accessInput :array="$accessibilityCategories"></x-accessInput>
    </div>

    <div class="flex flex-col flex-1 gap-7">
        <x-normalInput inputLabel="Website" input="website"></x-normalInput>
        <x-multiChoices label="Các unit liên quan" inputId="unit" :array="$units"></x-multiChoices>
        <x-comboSearch label="Địa chỉ" inputId="address" :array="$addresses"></x-comboSearch>
        <x-normalInput inputLabel="Nhóm ID tương quan" input="correlation"></x-normalInput>

        {{-- <x-comboSearch label="Tiện ích tương quan" inputId="correlation" :array="$amenities"></x-comboSearch> --}}
        <x-pointGeomInput></x-pointGeomInput>
    </div>
</div>

<script type="module">
    import {
        initComboSearch, initMultiChoices
    } from "/b-utils/featureFunctions.js";
    console.log('hehe')

    document.addEventListener('DOMContentLoaded', function() {
        console.log('AMENITY DOM LOADED')
        initComboSearch('category')
        initComboSearch('accessibility')
        initMultiChoices('unit')
        initComboSearch('correlation')
    })
</script>
