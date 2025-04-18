import GeoJSON from "ol/format/GeoJSON";


export let routeData = null;
async function fetchRoute(startNode, endNode) {
    const response = await fetch("http://localhost:8081/api/Graph/moore-dijsktra", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            startNode: startNode,
            endNode: endNode
        })
    });
    routeData = await response.json();
    return routeData;
}

export async function getRoute(startNode, endNode) {
    let route = await fetchRoute(startNode, endNode);
    const groupedPaths = {};
    let ordinal = 0;
    route.paths.forEach(p => {
        if(p.ordinal === 1) {
          ordinal = 1;
        } else {
          ordinal = 0;
        }


        if (!groupedPaths[ordinal]) {
            groupedPaths[ordinal] = [];
        }
        groupedPaths[ordinal].push([p.geometryX, p.geometryY]);
    });

    const geoJson = {
        type: "FeatureCollection",
        features: Object.keys(groupedPaths).map(ordinal => ({
            type: "Feature",
            properties: { ordinal: parseInt(ordinal) },
            geometry: {
                type: "LineString",
                coordinates: groupedPaths[ordinal]
            }
        }))
    };
    const format = new GeoJSON();
    const pathGeoJson = format.readFeatures(geoJson, {
        featureProjection: 'EPSG:4326',
    });


    return pathGeoJson;
}
