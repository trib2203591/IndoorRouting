import { getRoute } from "../../../API/routing/getRoute";
import { setMapLevel } from "../levelSelector/itemsOnLevel";

export let routegeojson = null;

export async function showRoute(startNode, endNode) {
    const pathGeoJson = await getRoute(startNode, endNode);

    routegeojson = pathGeoJson;

    await setMapLevel(document.getElementById("floor-select").value);

}


export async function hideRoute() {
    routegeojson = null;
    await setMapLevel(document.getElementById("floor-select").value);
}
