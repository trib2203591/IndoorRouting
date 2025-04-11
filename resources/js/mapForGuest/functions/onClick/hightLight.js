import { sources } from "../../init/data";
import { mapStyles } from "../../custom/mapStyles";


// highlight on click
let primaryHighlightedFeature = null;
let secondaryHighlightedFeature = null;

export function highlightFeature(primaryFeature, layerType) {
    removeHighlight();
    if(layerType === "venues" || layerType === "footprints" || layerType === "buildings"|| layerType === "levels") return;
    if(primaryFeature.get("feature_type") === 'unit') layerType = "units";
    switch (layerType) {
        case "anchors": {
            const secondaryFeature = sources.units.getFeatureById(primaryFeature.values_.unit_id);
            secondaryHighlightedFeature = secondaryFeature;
            secondaryFeature.setStyle(mapStyles.highlightStyles[secondaryFeature.get("feature_type")]);
            break;
        }
        case "amenities": {
            const secondaryFeature = sources.units.getFeatureById(primaryFeature.get("unit_ids")[0]);
            secondaryHighlightedFeature = secondaryFeature;
            secondaryFeature.setStyle(mapStyles.highlightStyles[secondaryFeature.get("feature_type")]);
            break;
        }
        case "units": {
            let secondaryFeature = sources.anchors.getFeatures().find(feature => feature.values_.unit_id === primaryFeature.id_);
            if(!secondaryFeature){
                secondaryFeature = sources.amenities.getFeatures().find(feature => feature.values_.unit_ids?.[0] === primaryFeature.id_);
            }
            if(secondaryFeature){
                secondaryHighlightedFeature = secondaryFeature;
                secondaryFeature.setStyle(mapStyles.highlightStyles[secondaryFeature.get("feature_type")]);
            }
            break;
        }
    }
    primaryHighlightedFeature = primaryFeature;
    primaryFeature.setStyle(mapStyles.highlightStyles[primaryFeature.get("feature_type")]);
}
export function removeHighlight() {
    if (primaryHighlightedFeature) {
        primaryHighlightedFeature.setStyle(undefined);
        primaryHighlightedFeature = null;
    }

    if (secondaryHighlightedFeature) {
        secondaryHighlightedFeature.setStyle(undefined);
        secondaryHighlightedFeature = null;
    }

    if(currentlyHighlighted) {
        currentlyHighlighted.setStyle(undefined);
        currentlyHighlighted = null;
    }
}







//highlight on move

let currentlyHighlighted = null
export function highlightFeatureOnMove(feature, layerType) {
    if(primaryHighlightedFeature) return;
    if(currentlyHighlighted) {
        currentlyHighlighted.setStyle(undefined);
        currentlyHighlighted = null;
    }

    currentlyHighlighted = feature;
    feature.setStyle(mapStyles.highlightStyles[feature.get("feature_type")]);
}


