<div class="w-8/12 flex flex-col">
    <label for="unitName" class="font-bold text-gray-600 mb-5">Dữ liệu hình học</label>
    <div class="flex flex-col gap-3">
        <label for="" class="text-gray-600 flex-1">
            <input type="radio" name="geom-type" id="polygon" value="Polygon">
            Polygon
        </label>
        <label for="" class="text-gray-600 flex-1">
            <input type="radio" name="geom-type" id="multi-polygon" value="MultiPolygon">
            MultiPolygon
        </label>
    </div>
    <textarea rows="7" class="rounded-xl border-gray-200 mt-3 h-fit" id="geometry-coordinates"></textarea>
</div>