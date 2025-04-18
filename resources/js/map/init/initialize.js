import {
    IMDFData,
    initCoreData,
    initRemainingData,
    mapIMDFDataByID,
    initExtraDataForOL,
} from "./data";

import { selectedOptions } from "./initFeatureFilter";
import { global } from "./global";
import { setMapLevel } from "../functions/levelSelector/itemsOnLevel";
import { removeHighlight } from "../functions/onClick/hightLight";
import { mapOnClickHandler, getLayerType } from "../functions/onClick/onClickHandle";
import { highlightFeatureOnMove } from "../functions/onClick/hightLight";
import { initSearchFunction } from "../functions/search";
import { initFeatureFilter } from "./initFeatureFilter";


export const initialize = async () => {
    const mapLoadingScreen = document.getElementById("map-loading");
    const mapLoadingText= document.getElementById("map-loading-text");


    //setting up UI components
    initFloorSelector();
    initSidePanel();
    initSearchFunction();
    initFeatureFilter();
    try {
        //getting IMDF data for the map
        await initCoreData();

        mapLoadingText.innerText = "Đang tải dữ liệu...";
        await initRemainingData();

        mapLoadingText.innerText = "Đang sắp xếp dữ liệu..."
        mapIMDFDataByID();

        mapLoadingText.innerText = "Đang tạo các lớp..."
        await initExtraDataForOL();


        //setting up map interaction
        mapLoadingText.innerText = "Đang thiết lập bản đồ..."
        global.map.on("click", mapOnClickHandler);

        global.map.on("pointermove", (evt) => {
            const currentTime = Date.now();
            if (currentTime - lastExecutionTime >= cooldownPeriod) {
                processHighLightOnMove(evt);
                lastExecutionTime = currentTime;
            }
        });
        setMapLevel(0);
    } catch (error) {
        console.error("Error during initialization:", error);
    } finally {
        mapLoadingScreen.style.display = "none";
    }
};

function initFloorSelector() {
    const floorSelector = document.getElementById("floor-select");
    floorSelector.addEventListener("change", (event) =>
        setMapLevel(event.target.value, selectedOptions)
    );
}

function initSidePanel() {
    //side panel close button
    document.getElementById("close-btn").onclick = function () {
        document.getElementById('side-panel').style.left = "-500px";
        removeHighlight();
    };
}


let lastExecutionTime = 0;
const cooldownPeriod = 20;
function processHighLightOnMove(evt) {
    const featuresAtPixel = [];
    global.map.forEachFeatureAtPixel(evt.pixel, (feature, layer) => {
        featuresAtPixel.push({ feature, layer });
    });

    if (featuresAtPixel.length === 0) {
        return;
    }

    const { feature, layer } = featuresAtPixel[0];
    const layerType = getLayerType(layer);

    highlightFeatureOnMove(feature, layerType);
}
