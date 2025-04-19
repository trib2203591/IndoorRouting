import GeoJSON from "ol/format/GeoJSON";
import { IMDFDataByID } from "../../init/data";

import { routeData } from "../../../API/routing/getRoute";
import { setMapLevel } from "../levelSelector/itemsOnLevel";

export let routeGuideGeojson = null;
let routeGuideArray = [];
let cursor = 0;
export async function showNextRouteGuide() {
    if(cursor === routeGuideArray.length-1) return;
    routeGuideArray = routeData.paths;

    const tempGeoJson = {
        type: "FeatureCollection",
        features: [
            {
                type: "Feature",
                properties: {
                    ordinal: routeGuideArray[cursor].ordinal
                },
                geometry: {
                    type: "LineString",
                    coordinates: [
                        [routeGuideArray[cursor].geometryX, routeGuideArray[cursor].geometryY],
                        [routeGuideArray[cursor+1].geometryX, routeGuideArray[cursor+1].geometryY]
                    ]
                }
            }
        ]
    }


    const format = new GeoJSON();
    routeGuideGeojson = format.readFeatures(tempGeoJson, {
        featureProjection: 'EPSG:4326',
    });
    document.getElementById("routing-guide-message").innerText = routeGuideArray[cursor+1].direction;

    await setMapLevel(routeGuideArray[cursor].ordinal);
    console.log(routeGuideArray);
    console.log(routeGuideGeojson);
    const utterance = new SpeechSynthesisUtterance(routeGuideArray[cursor+1].direction);
    speechSynthesis.speak(utterance);
    if(cursor === routeGuideArray.length-2) return;
    cursor++;
}

export async function showPreviousRouteGuide() {
    if(cursor === 0) return;
    cursor--;

    routeGuideArray = routeData.paths;

    const tempGeoJson = {
        type: "FeatureCollection",
        features: [
            {
                type: "Feature",
                properties: {
                    ordinal: routeGuideArray[cursor].ordinal
                },
                geometry: {
                    type: "LineString",
                    coordinates: [
                        [routeGuideArray[cursor].geometryX, routeGuideArray[cursor].geometryY],
                        [routeGuideArray[cursor+1].geometryX, routeGuideArray[cursor+1].geometryY]
                    ]
                }
            }
        ]
    }

    const format = new GeoJSON();
    routeGuideGeojson = format.readFeatures(tempGeoJson, {
        featureProjection: 'EPSG:4326',
    });
    document.getElementById("routing-guide-message").innerText = routeGuideArray[cursor+1].direction;
    await setMapLevel(routeGuideArray[cursor].ordinal);
    const utterance = new SpeechSynthesisUtterance(routeGuideArray[cursor+1].direction);
    speechSynthesis.speak(utterance);
    if(cursor === 0) cursor++;
}

export async function cancelRouteGuide() {
    routeGuideGeojson = null;
    routeGuideArray = [];
    cursor = 0;
    await setMapLevel(document.getElementById("floor-select").value);
}
