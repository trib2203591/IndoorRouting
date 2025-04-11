import { sources } from "../../init/data";
import { mapStyles } from "../../custom/mapStyles";


// highlight on click
let primaryHighlightedFeature = null;
let secondaryHighlightedFeature = null;

export function highlightFeature(primaryFeature, layerType) {
    removeHighlight();
    if(primaryFeature.get("feature_type") === 'unit') layerType = "units";
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


