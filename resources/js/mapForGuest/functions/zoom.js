import { global } from "../init/global";
import { calculatePolygonMidpoint } from "./calculateMidPoint";

export function zoomInto(feature, layerType) {
    if(layerType === "venues" || layerType === "footprints" || layerType === "buildings"|| layerType === "levels") return;

    let zoomToCoordinates = null

    if(feature.get("display_point")){
//        console.log(feature.get("display_point").coordinates);
        //zoomToCoordinates = feature.get("display_point").coordinates
    }
    if(!zoomToCoordinates) {
        zoomToCoordinates = calculatePolygonMidpoint(feature.get("geometry").flatCoordinates);
    }


    if(zoomToCoordinates){
        global.map.getView().animate({
            center: zoomToCoordinates,
            duration: 600
          });
    }

    return;
}



