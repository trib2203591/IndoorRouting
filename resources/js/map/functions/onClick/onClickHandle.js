import { global } from "../../init/global";
import { highlightFeature } from "./hightLight";
import { toggleSidePanel } from "./sidePanel";
import { zoomInto } from "../zoom";



export const mapOnClickHandler = async (evt) => {
    const featuresAtPixel = [];
    global.map.forEachFeatureAtPixel(evt.pixel, (feature, layer) => {
        featuresAtPixel.push({ feature, layer });
    });

    // Process the first feature found
    if(featuresAtPixel.length === 0) {
        toggleSidePanel(); // close side panel
        return;
    }


    const { feature, layer } = featuresAtPixel[0];
    const layerType = getLayerType(layer);


    toggleSidePanel(feature, layerType);
    highlightFeature(feature, layerType);
    zoomInto(feature, layerType);
};


export const getLayerType = (layer) => {
    if (layer === global.anchors) return 'anchors';
    if (layer === global.openings) return 'openings';
    if (layer === global.units) return 'units';
    if (layer === global.fixtures) return 'fixtures';
    if (layer === global.amenities) return 'amenities';
    if (layer === global.levels) return 'levels';
    if (layer === global.buildings) return 'buildings';
    if (layer === global.venues) return 'venues';
    if (layer === global.footprints) return 'footprints';

    return null;
};
