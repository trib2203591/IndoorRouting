<div class="flex">
    <div class="flex flex-1 flex-col gap-7">
        <x-comboSearch label="Địa chỉ" inputId="address" :array="$addresses"></x-comboSearch>
        <x-comboSearch label="Unit" inputId="unit" :array="$units"></x-comboSearch>
        <x-pointGeomInput></x-pointGeomInput>
    </div>
</div>
</div>

<script type="module">
    document.addEventListener('DOMContentLoaded', function() {
        // console.log('ANCHOR FORM LOADED')
    })
</script>
