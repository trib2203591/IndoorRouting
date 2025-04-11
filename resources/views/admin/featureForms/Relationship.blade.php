<div class="flex">
    <div class="flex flex-1 flex-col gap-7">
        <x-catInput featureCategory="Phân loại" :array="$relationshipCategories"></x-catInput>
        <div class="w-8/12 flex flex-col gap-2">
            <label for="" class="font-bold text-gray-600">Hướng</label>
            <select id="direction" class="rounded-xl border-gray-200 mt-1" name="selector">
                <option value="directed">Có hướng</option>
                <option value="undirected">Không có hướng</option>
            </select>
        </div>
        <x-normalInput inputLabel="Giờ hoạt động" input="hour"></x-normalInput>
        <x-txtInput inputLabel="Điểm bắt đầu" input="origin"></x-txtInput>

    </div>

    <div class="flex flex-col flex-1 gap-7">
        <x-txtInput inputLabel="Các điểm trung gian" input="intermediary"></x-txtInput>
        <x-txtInput inputLabel="Điểm đến" input="destination"></x-txtInput>
    </div>
</div>
