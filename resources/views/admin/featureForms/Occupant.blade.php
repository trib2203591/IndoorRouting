<div class="flex">
    <div class="flex flex-1 flex-col gap-7">
        <x-nameInput featureName="Chủ thể kinh doanh"></x-nameInput>
        <x-catInput featureCategory="Phân loại chủ thể kinh doanh" :array="$occupantCategories"></x-catInput>
        <x-normalInput inputLabel="Điện thoại" input="phone"></x-normalInput>
        <x-normalInput inputLabel="Website" input="website"></x-normalInput>
        <x-normalInput inputLabel="Giờ phục vụ" input="hour"></x-normalInput>
    </div>

    <div class="flex flex-1 flex-col gap-7">
        {{-- Validity --}}
        <div class="w-8/12">
            <label class="font-bold text-gray-600">Thời gian hiệu lực</label>
            <div class="h-3"></div>
            <label class="text-gray-600 mt-10 text-sm">Bắt đầu</label>
            <input type="text" class="rounded-xl border-gray-200 mt-1 mb-3" id="start">

            <label class="text-gray-600 text-sm">Kết thúc</label>
            <input type="text" class="rounded-xl border-gray-200 mt-1 mb-3" id="end">

            <label class="text-gray-600 text-sm">Chỉnh sửa lần cuối</label>
            <input type="text" class="rounded-xl border-gray-200 mt-1 mb-3" id="modified">
        </div>
        <x-comboSearch label="Điểm neo tương ứng" inputId="anchor" :array="$anchors"></x-comboSearch>
        <x-normalInput inputLabel="ID nhóm" input="correlation"></x-normalInput>
    </div>
</div>
