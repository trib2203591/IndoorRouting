import { initComboSearch, initForm, postFeature, createGeoJson } from "./featureFunctions";

const initHandleFeatures = () => {
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
        const geoJsonBtn = document.getElementById('geoJsonBtn');
        geoJsonBtn.addEventListener('click', createGeoJson);
    });
}

initHandleFeatures();
