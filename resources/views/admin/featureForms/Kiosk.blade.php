<div class="flex">
    <div class="flex flex-1 flex-col gap-7">
        <x-nameInput featureName="Tên Kiosk"></x-nameInput>
        <x-altNameInput></x-altNameInput>
        <x-comboSearch label="Điểm neo tương ứng" inputId="anchor" :array="$anchors"></x-comboSearch>
        <x-displayPointInput></x-displayPointInput>
        <x-comboSearch label="Tầng tương ứng" inputId="level" :array="$levels"></x-comboSearch>

    </div>
    <div class="flex flex-1 flex-col gap-7">
        <x-polygonalInput></x-polygonalInput>

    </div>
</div>
