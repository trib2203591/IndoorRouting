@extends('layouts.general')
@section('pageTitle')
    <h1 class="text-scndBlue font-extrabold text-2xl">Thêm đối tượng vào bản đồ</h1>
@endsection

@section('content')
    {{-- Feature Selector Pane --}}
    <div class="w-full flex items-center justify-center mt-2 relative">
        <div class="m-2 w-[95%] h-fit rounded-xl">
            <div class="relative">
                <input type="text" id="featureSearch" placeholder="Tìm loại đối tượng..."
                    class="w-full p-3 border-gray-200 border-2 rounded-t-xl" />

                <div id="featureDropdown" class="w-full max-h-40 overflow-y-auto border-gray-200 border-2 border-t-0 rounded-b-xl bg-white">
                    @foreach ($featureList as $feature)
                        <div class="p-2 hover:bg-scndBlue hover:text-white cursor-pointer feature-item"
                            data-content="{{ $feature }}">{{ $feature }}</div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>

    {{-- Feature Form --}}
    <div class="w-full flex flex-row pr-10">
        <div id="formArea" class="p-10 w-full flex-1">
            <h1>Chọn 1 loại đối tượng để thêm</h1>
        </div>
        <div class="flex flex-[0.4] flex-col gap-7">
            <textarea name="json-review" id="json-review" cols="30" rows="20"
                class="border-gray-300 rounded-xl p-0 text-sm m-0 h-fit"></textarea>
            <div class="flex items-center justify-center">
                <button id="testBtn" class="bg-scndBlue p-5 text-white rounded-xl active:bg-primaryBlue">
                    GeoJson
                </button>
            </div>
        </div>
    </div>
    <input type="text" name="chosen" id="currentFeature" hidden>
    <button id="btnSend" class="bg-scndBlue p-5 text-white ml-20 rounded-xl active:bg-primaryBlue mb-10">Tạo đối
        tượng</button>
@endsection

<script type="module">
    import {
        initComboSearch,
        initForm,
        postFeature,
        testFnc
    } from "/b-utils/featureFunctions.js";

    document.addEventListener('DOMContentLoaded', function () {
        console.log('DOM loaded');
        const $ = document.querySelector.bind(document);
        const $$ = document.querySelectorAll.bind(document);

        // Post button handling
        const currentFeature = document.getElementById('currentFeature');
        const btnSend = document.getElementById('btnSend');
        btnSend.addEventListener('click', function () {
            postFeature(currentFeature.value);
        });

        // Searchable dropdown handling
        const searchInput = document.getElementById('featureSearch');
        const dropdown = document.getElementById('featureDropdown');
        const featureItems = dropdown.querySelectorAll('.feature-item');

        // Filter dropdown items based on search input
        searchInput.addEventListener('input', function () {
            const searchValue = this.value.toLowerCase();
            featureItems.forEach(item => {
                const featureName = item.textContent.toLowerCase();
                if (featureName.includes(searchValue)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });

        // Handle feature selection
        featureItems.forEach(item => {
            item.addEventListener('click', function () {
                const theForm = this.dataset.content;
                currentFeature.value = theForm; // Update hidden input
                searchInput.value = theForm; // Update the input with the selected feature
                dropdown.style.display = 'none'; // Hide dropdown
                const rightPane = document.getElementById('json-review');
                rightPane.value = '';
                changeContent(theForm);
            });
        });

        // Show dropdown when input is focused
        searchInput.addEventListener('focus', function () {
            dropdown.style.display = 'block';
        });

        // Hide dropdown when clicking outside
        document.addEventListener('click', function (e) {
            if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
                dropdown.style.display = 'none';
            }
        });

        // Change content dynamically
        async function changeContent(theForm) {
            const formArea = document.getElementById('formArea');
            fetch(`/getform/${theForm}`)
                .then(response => response.json())
                .then(data => {
                    formArea.innerHTML = data.html;

                    const scripts = formArea.querySelectorAll('script');

                    // Reinitialize scripts
                    scripts.forEach(script => {
                        const newScript = document.createElement('script');
                        newScript.type = 'module';
                        newScript.textContent = script.textContent;
                        if (script.src) {
                            newScript.src = script.src;
                        }
                        document.body.appendChild(newScript);
                        script.remove();
                    });

                    // Initialize the form
                    initForm(theForm);
                })
                .catch(e => {
                    console.log(e);
                });
        }

        // Test button handling
        const testBtn = document.getElementById('testBtn');
        testBtn.addEventListener('click', testFnc);
    });
</script>
