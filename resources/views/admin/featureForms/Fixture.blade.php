<div class="flex">

    <div class="flex flex-1 flex-col gap-7">
        <x-normalInput inputLabel="Tên trang bị nội thất" input="name"></x-normalInput>
        <x-normalInput inputLabel="Tên thay thế" input="alt-name"></x-normalInput>
        <x-catInput featureCategory="Phân loại trang bị nội thất" :array="$fixtureCategories"></x-catInput>
        <x-comboSearch label="Điểm neo" inputId="anchor" optionPaneId="anchorOptionPane" :array="$anchors"
            optionsForSearchId="anchorOptionsForSearch">
        </x-comboSearch>
        <x-comboSearch label="Tầng" inputId="level" optionPaneId="levelOptionPane" :array="$levels"
            optionsForSearchId="levelOptionsForSearch">
        </x-comboSearch>
    </div>

    <div class="flex flex-1 flex-col gap-7">
        <x-polygonalInput></x-polygonalInput>
        <x-displayPointInput></x-displayPointInput>
    </div>
</div>