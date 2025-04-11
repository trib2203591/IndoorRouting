import { IMDFData } from "../../init/data";
import { IMDFDataByID } from "../../init/data";
import { showRoutingPanel } from "../routing/initRoutingElements";

const Panel = {
    sidePanel: document.getElementById('side-panel'),
    sidePanelContent: document.getElementById('side-panel-content'),
};

export async function toggleSidePanel(feature, layerType) {
    if(layerType === "venues" || layerType === "footprints" || layerType === "buildings"|| layerType === "levels"){
        Panel.sidePanel.style.left = '-400px';
        return;
    }
    if (!layerType) {
        if(feature.get("feature_type") === 'unit') layerType = "units";
    }


    //loading panel incase of api call
    let panelContent = `<h1> Đang tải... </h1>`;
    Panel.sidePanelContent.innerHTML = panelContent;
    if (document.getElementById('sidebar').classList.contains('hidden')) {
        Panel.sidePanel.style.left = '40px';
    } else Panel.sidePanel.style.left = '325px';
    await sidePanelLayerHandler[layerType](feature); // this set the panel content based on layer type

    // this is for panel positioning based on sidebar
    if (document.getElementById('sidebar').classList.contains('hidden')) {
        Panel.sidePanel.style.left = '40px';
    } else Panel.sidePanel.style.left = '325px';

    if(document.getElementById('ddlistdropdown')){
        document.getElementById('ddlistx').addEventListener('click', function () {
            const ddlistdropdown = document.getElementById('ddlistdropdown')
            ddlistdropdown.classList.toggle('hidden')
        })
    }

}


const sidePanelLayerHandler = {
    anchors: async (feature) => {
        let panelContent = "";

        let weekhours = null;
        let opentime = "7:00";
        let closetime = "17:00";

        panelContent +=
            '<h3 class="font-extrabold text-scndBlue mt-4 ml-2">' +
            feature.values_.occupant.name.vi +
            "</h3>";
        //IMDFDataByID[currentUnit[0].values_.level_id]
        let currentLevel = IMDFDataByID[IMDFDataByID[feature.values_.unit_id].values_.level_id];

        panelContent +=
            '<p class="mt-2 ml-2 font-bold text-gray-700 text-base">' +
            currentLevel.values_.name.vi +
            "</p>";

        weekhours = feature.values_.occupant.hours;
        panelContent += '<p class="mt-2 ml-2">Giờ hoạt động: </p>';
        panelContent +=
            '<span class="font-bold text-green-400 text-sm ml-2">Mở cửa</span>' +
            '<span class=" font-bold text-gray-600 text-sm ml-2">Mở cửa lúc ' +
            opentime +
            "</span>" +
            '<span id="ddlistx" class="text-xs ml-1 text-gray-500">>></span>' +
            '<div class="hidden" id="ddlistdropdown">' +
            '<p class="text-gray-700 text-sm ml-2">Thứ Hai   ' +
            weekhours +
            "</p>" +
            '<p class="text-gray-700 text-sm ml-2">Thứ Ba  ' +
            weekhours +
            "</p>" +
            '<p class="text-gray-700 text-sm ml-2">Thứ Tư  ' +
            weekhours +
            "</p>" +
            '<p class="text-gray-700 text-sm ml-2">Thứ Năm  ' +
            weekhours +
            "</p>" +
            '<p class="text-gray-700 text-sm ml-2">Thứ Sáu  ' +
            weekhours +
            "</p>" +
            '<p class="text-gray-700 text-sm ml-2">Thứ Bảy  ' +
            weekhours +
            "</p>" +
            '<p class="text-gray-700 text-sm ml-2">Chủ Nhật  ' +
            weekhours +
            "</p>" +
            "</div>";
        panelContent += "<div class='flex flex-row'>";
        if (feature.values_.occupant.phone != null) {
            panelContent +=
                '<div class="bg-gray-300 rounded-lg mt-2 ml-2 p-2 max-w-36  ">' +
                "<p>" +
                `${feature.values_.occupant.phone}` +
                "</p>" +
                "</div>";
        }

        if (feature.values_.occupant.website != null) {
            panelContent +=
                '<div class="bg-gray-300 rounded-lg mt-2 ml-2 p-2 max-w-10  ">' +
                "<a href=" +
                `${feature.values_.occupant.website}` +
                " target='_blank'>" +
                '<img src="./images/internet.png" class="size-6"/>' +
                "</a>" +
                "</div>";
            panelContent += "</div>";
        }
        //add the routing button
        panelContent += `<div class="flex justify-end">
                <button id="startRouting" class="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Chỉ đường
                </button></div>`;

        Panel.sidePanelContent.innerHTML = panelContent;

        const startRoutingBtn = document.getElementById("startRouting");
        startRoutingBtn.addEventListener("click", () => {
            showRoutingPanel(feature);
        });
    },
    units: async (feature) => {
        let panelContent = null;
        switch (true) {
            case IMDFData.anchors.some((anchor) => anchor.values_.unit_id === feature.getId()):
                let anchor = IMDFData.anchors.find((anchor) => anchor.values_.unit_id === feature.getId());
                await sidePanelLayerHandler.anchors(anchor);
                return;
            case (feature.get("name").vi !== null):
                panelContent = `<h3 class="font-extrabold text-scndBlue mt-5 ml-2">${feature.get("name").vi}</h3>`;
                panelContent +=
                    '<p class="mt-2 ml-2 font-bold text-gray-700 text-base">' +
                    IMDFDataByID[feature.values_.level_id].values_.name.vi +
                    "</p>";
                break;
            default:
                panelContent = `<h3 class="font-extrabold text-scndBlue mt-5 ml-2">${feature.get("category")}</h3>`;
                panelContent +=
                    '<p class="mt-2 ml-2 font-bold text-gray-700 text-base">' +
                    IMDFDataByID[feature.values_.level_id].values_.name.vi +
                    "</p>";
                break;
        }

        //add the routing button
        panelContent += `<div class="flex justify-end">
            <button id="startRouting" class="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Chỉ đường
            </button></div>`;

        Panel.sidePanelContent.innerHTML = panelContent;

        const startRoutingBtn = document.getElementById("startRouting");
        startRoutingBtn.addEventListener("click", () => {
            console.log("routing clicked");
            const routingPanel = document.getElementById("routing-panel");
            let anchor = IMDFData.anchors.find((anchor) => anchor.values_.unit_id === feature.getId());
            document.getElementById("start-routing-search-bar").dataset.id = anchor.id_;
            routingPanel.style.left ='325px';
        })
    },
    amenities: async (feature) => {
        let unit = IMDFDataByID[feature.values_.unit_ids[0]];
        await sidePanelLayerHandler.units(unit);
    },
    fixtures: async (feature) => {
        let panelContent = null;
        if (!feature.get("name").vi) {
            panelContent = `<h3 class="font-extrabold text-scndBlue mt-5 ml-2">${feature.get("category")}</h3>`;
        } else {
            panelContent = `<h3 class="font-extrabold text-scndBlue mt-5 ml-2">${feature.get("name").vi}</h3>`;
        }

        panelContent +=
        '<p class="mt-2 ml-2 font-bold text-gray-700 text-base">' +
        IMDFDataByID[feature.values_.level_id].values_.name.vi +
        "</p>";

        Panel.sidePanelContent.innerHTML = panelContent;
    },
    openings: async (feature) => {
        let panelContent = null;
        if (feature.get("name").vi) {
            panelContent = `<p>${feature.get("name").vi}</p>`;;
        }
        panelContent +=
        '<p class="mt-2 ml-2 font-bold text-gray-700 text-base">' +
        IMDFDataByID[feature.values_.level_id].values_.name.vi +
        "</p>";

        Panel.sidePanelContent.innerHTML = panelContent;
    },

};










function timeAgo(timestamp) {
    const now = Date.now();
    const elapsed = now - timestamp;

    const seconds = Math.floor(elapsed / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (seconds < 60) {
        return `${seconds} giây trước`;
    } else if (minutes < 60) {
        return `${minutes} phút trước`;
    } else if (hours < 24) {
        return `${hours} giờ trước`;
    } else if (days < 7) {
        return `${days} ngày trước`;
    } else if (weeks < 4) {
        return `${weeks} tuần trước`;
    } else if (months < 12) {
        return `${months} tháng trước`;
    } else {
        return `${years} năm trước`;
    }
}
