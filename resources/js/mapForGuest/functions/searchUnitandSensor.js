//this infact only search for unit

import { IMDFData, IMDFDataByID } from "../init/data";
import { zoomInto } from "./zoom";
import { toggleSidePanel } from "./onClick/sidePanel";
import { highlightFeature } from "./onClick/hightLight";
import { setMapLevel } from "./levelSelector/itemsOnLevel";

const searchBar = document.getElementById('search-bar');
const dropdown = document.getElementById('dropdown');

export async function initSearchFunction() {
    searchBar.addEventListener('input', handleSearch);

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-container')) {
          dropdown.style.display = 'none';
          //for routing panel search bar
          document.getElementById('end-routing-dropdown').style.display = 'none';
          document.getElementById('start-routing-dropdown').style.display = 'none';
      }
    });
}

async function handleSearch(e) {


    const query = e.target.value.trim();
    dropdown.innerHTML = ""; // Clear previous results
    if (query) {
        const results = await search(query); // Call the API
        if (results.length) {
            dropdown.style.display = "block";
            results.forEach((item) => {
                const div = document.createElement("div");

                //get name or alname if exist for dropdown display
                let labelForDropdown = "";
                if (item.values_.name?.vi) {
                    labelForDropdown = item.values_.name.vi;
                    div.textContent = item.values_.name.vi;
                } else if (unit.values_.alt_name) {
                    if (unit.values_.alt_name.vi) {
                        labelForDropdown = unit.values_.alt_name.vi;
                        div.textContent = unit.values_.alt_name.vi;
                    } else if (unit.values_.alt_name.en) {
                        labelForDropdown = unit.values_.alt_name.en;
                        div.textContent = unit.values_.alt_name.en;
                    } else {
                        labelForDropdown = unit.values_.alt_name;
                        div.textContent = unit.values_.alt_name;
                    }
                }
                div.addEventListener("click", () => {
                    searchBar.value = labelForDropdown; // Update the search bar

                    //change the floor base on the location of found unit
                    const ordinal =
                        IMDFDataByID[item.get("level_id")].get("ordinal");
                    setMapLevel(ordinal);
                    const floorSelect = document.getElementById("floor-select");
                    floorSelect.value = ordinal;

                    zoomInto(item);
                    highlightFeature(item);
                    toggleSidePanel(item);
                    dropdown.style.display = "none"; // Hide the dropdown
                });
                dropdown.appendChild(div);
            });
        } else {
            dropdown.style.display = "none"; // Hide if no results
        }
    } else {
        dropdown.style.display = "none"; // Hide if query is empty
    }
}

function search(query) {
    query = query.toLowerCase();
    const results = [];

    IMDFData.units.forEach((unit) => {
        const nameVi = unit.values_.name?.vi?.toLowerCase() || "";
        let altName = "";
        if (unit.values_.alt_name) {
            if (unit.values_.alt_name.vi) {
                altName = unit.values_.alt_name.vi;
            } else if (unit.values_.alt_name.en) {
                altName = unit.values_.alt_name.en;
            } else {
                altName = unit.values_.alt_name;
            }
        }
        altName = altName.toLowerCase();

        // Check if the word matches `name.vi` or `alt_name`
        if (nameVi.includes(query) || altName.includes(query)) {
            if (!results.includes(unit)) {
                results.push(unit); // Add the object to results if not already added
            }
        }
    });

    return results;
}
