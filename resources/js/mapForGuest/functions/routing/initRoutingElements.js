import { IMDFData, IMDFDataByID } from "../../init/data";
import { showRoute, hideRoute } from "./routing";
import { initRoutingGuideElements, cancelAndHideRouteGuide } from "./initRoutingGuideElements";
import { showNextRouteGuide } from "./routingGuide";

const routingPanel ={
    routingPanel: document.getElementById('routing-panel'),
    routingCloseBtn: document.getElementById("routing-close-btn"),

    startSearch: document.getElementById('start-routing-search-bar'),
    startSearchDropDown: document.getElementById('start-routing-dropdown'),

    endSearch: document.getElementById('end-routing-search-bar'),
    endSearchDropDown: document.getElementById('end-routing-dropdown'),

    routingStartBtn: document.getElementById("routing-start-btn"),
}


export async function initRoutingElements() {
    //init the start search
    routingPanel.startSearch.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        routingPanel.startSearchDropDown.innerHTML = "";
        if (!query) {
            return;
        }
        const results = search(query);
        if (results.length) {
            routingPanel.startSearchDropDown.style.display = "block";
            results.forEach((item) => {
                const div = document.createElement("div");
                //get name or alname if exist for dropdown display
                let labelForDropdown = getLabel(item);
                div.textContent = labelForDropdown;
                div.addEventListener("click", () => {
                    routingPanel.startSearch.value = labelForDropdown; // Update the search bar
                    routingPanel.startSearch.dataset.id = item.id_;
                    routingPanel.startSearchDropDown.style.display = "none"; // Hide the dropdown
                });
                routingPanel.startSearchDropDown.appendChild(div);
            });
        }
    });


    //init the end search
    routingPanel.endSearch.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        routingPanel.endSearchDropDown.innerHTML = "";
        if (!query) {
            return;
        }
        const results = search(query); // search for units and anchor with the same name or alt name
        if (results.length) {
            routingPanel.endSearchDropDown.style.display = "block";
            results.forEach((item) => {
                const div = document.createElement("div");
                //get name or alname if exist for dropdown display
                let labelForDropdown = getLabel(item);
                div.textContent = labelForDropdown;
                div.addEventListener("click", () => {
                    routingPanel.endSearch.value = labelForDropdown; // Update the search bar
                    routingPanel.endSearch.dataset.id = item.id_;
                    routingPanel.endSearchDropDown.style.display = "none"; // Hide the dropdown
                });
                routingPanel.endSearchDropDown.appendChild(div);
            });
        }
});


    //start routing btn
    routingPanel.routingStartBtn.onclick = async function () {
        if(!routingPanel.startSearch.dataset.id || !routingPanel.endSearch.dataset.id) {
            alert("Chưa chọn điểm bắt đầu hoặc điểm kết thúc");
            return;
        }
        let anchor1 = IMDFData.anchors.find((anchor) => anchor.values_.unit_id === routingPanel.startSearch.dataset.id);
        let anchor2 = IMDFData.anchors.find((anchor) => anchor.values_.unit_id === routingPanel.endSearch.dataset.id);
        await showRoute(anchor1.id_, anchor2.id_);
        cancelAndHideRouteGuide();
        showNextRouteGuide();
        document.getElementById("routing-guide-panel").style.left = '700px';
    }

    //routing panel close btn
    routingPanel.routingCloseBtn.onclick = function () {
            routingPanel.routingPanel.style.left = "-400px";
            hideRoute();
            cancelAndHideRouteGuide();
    };
    initRoutingGuideElements();
}

export async function showRoutingPanel(destination) {
    if (document.getElementById('sidebar').classList.contains('hidden')) {
        routingPanel.routingPanel.style.left = "40px";
    } else routingPanel.routingPanel.style.left = "325px";

    routingPanel.endSearch.value = getLabel(IMDFDataByID[destination.values_.unit_id]);
    routingPanel.endSearch.dataset.id = IMDFDataByID[destination.values_.unit_id].id_;
    routingPanel.startSearchDropDown.style.display = "none";
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


function getLabel(unit) {
    let label = "";
    if (unit.values_.name?.vi) {
        label = unit.values_.name.vi;
    } else if (unit.values_.alt_name) {
        if (unit.values_.alt_name.vi) {
            label = unit.values_.alt_name.vi;
        } else if (unit.values_.alt_name.en) {
            label = unit.values_.alt_name.en;
        } else {
            label = unit.values_.alt_name;
        }
    }
    return label;
}
