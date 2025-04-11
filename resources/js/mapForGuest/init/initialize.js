
import {
    initCoreData,
    initRemainingData,
    mapIMDFDataByID,
    initExtraDataForOL,
} from "./data";
import { global } from "./global";
import { setMapLevel } from "../functions/levelSelector/itemsOnLevel";
import { removeHighlight } from "../functions/onClick/hightLight";
import { mapOnClickHandler, getLayerType } from "../functions/onClick/onClickHandle";
import { highlightFeatureOnMove } from "../functions/onClick/hightLight";
import { initSearchFunction } from "../functions/searchUnitandSensor";
import { initRoutingElements } from '../functions/routing/initRoutingElements';



export const initialize = async () => {
    const mapLoadingScreen = document.getElementById("map-loading");
    const mapLoadingText= document.getElementById("map-loading-text");
    try {
        //getting IMDF data for the map
        await initCoreData();

        mapLoadingText.innerText = "Đang tải dữ liệu...";
        await initRemainingData();

        mapLoadingText.innerText = "Đang sắp xếp dữ liệu..."
        mapIMDFDataByID();

        mapLoadingText.innerText = "Đang tạo các lớp..."
        await initExtraDataForOL();


        //setting up UI components
        mapLoadingText.innerText = "Đang tải các giao diện..."
        global.map.on("click", mapOnClickHandler);

        global.map.on("pointermove", (evt) => {
            const currentTime = Date.now();
            if (currentTime - lastExecutionTime >= cooldownPeriod) {
                processHighLightOnMove(evt);
                lastExecutionTime = currentTime;
            }
        });
        initFloorSelector();
        initSidePanel();
        initSearchFunction();
        initRoutingElements();
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
        setMapLevel(event.target.value)
    );
}

function initSidePanel() {
    //side panel close button
    document.getElementById("close-btn").onclick = function () {
        document.getElementById('side-panel').style.left = "-400px";
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


initialize();
