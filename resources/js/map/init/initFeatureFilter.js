import { setMapLevel } from "../functions/levelSelector/itemsOnLevel";

export const selectedOptions = new Set();

export const initFeatureFilter = () => {
    const options = [
        { value: "amenities", text: "Amenities" },
        { value: "anchors", text: "Anchors" },
        { value: "buildings", text: "Buildings" },
        { value: "fixtures", text: "Fixtures" },
        { value: "footprints", text: "Footprints" },
        { value: "kiosks", text: "Kiosks" },
        { value: "levels", text: "Levels" },
        { value: "openings", text: "Openings" },
        { value: "units", text: "Units" },
        { value: "venues", text: "Venues" }
    ];


    const searchInput = document.getElementById("feature-select-search");
    const dropdown = document.getElementById("feature-select-dropdown");


    // Select all options by default
    options.forEach(option => selectedOptions.add(option.value));

    searchInput.readOnly = true;
    // Populate dropdown with options
    function populateDropdown() {
        dropdown.innerHTML = "";
        options.forEach(option => {
            const li = document.createElement("li");
            li.className = "py-2 px-3 flex items-center hover:bg-scndBlue hover:text-white cursor-pointer";

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.value = option.value;
            checkbox.className = "mr-2";
            checkbox.checked = selectedOptions.has(option.value);

            // Sync checkbox state with selectedOptions and filter features
            checkbox.addEventListener("change", async (e) => {
                if (e.target.checked) {
                    selectedOptions.add(option.value);
                } else {
                    selectedOptions.delete(option.value);
                }
                updateInput();
            });

            const label = document.createElement("span");
            label.textContent = option.text;

            li.appendChild(checkbox);
            li.appendChild(label);

            // Make list item clickable to toggle checkbox
            li.addEventListener("click", (e) => {
                if (e.target !== checkbox) {
                    checkbox.checked = !checkbox.checked;
                    if (checkbox.checked) {
                        selectedOptions.add(option.value);
                    } else {
                        selectedOptions.delete(option.value);
                    }
                    updateInput();
                    setMapLevel(document.getElementById("floor-select").value, selectedOptions);;
                }
            });

            dropdown.appendChild(li);
        });
    }

    // Update input with selected options
    function updateInput() {
        const selectedTexts = [...selectedOptions].map(value => {
            const option = options.find(opt => opt.value === value);
            return option ? option.text : '';
        });
        searchInput.value = selectedTexts.join(", ") || "";
    }

    // Initialize dropdown
    populateDropdown();

    // Show dropdown on input focus
    searchInput.addEventListener("focus", () => {
        dropdown.classList.remove("hidden");
    });

    // Hide dropdown when clicking outside
    document.addEventListener("click", (e) => {
        if (!e.target.closest("#feature-select-search") && !e.target.closest("#feature-select-dropdown")) {
            dropdown.classList.add("hidden");
        }
    });

    // Prevent hiding dropdown on click inside
    dropdown.addEventListener("click", (e) => {
        e.stopPropagation();
    });
};
