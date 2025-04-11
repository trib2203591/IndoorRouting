import GeoJSON from "ol/format/GeoJSON";

// const route = {
//     "totalDistance": 58.056000000000004,
//     "paths": [
//         {
//             "id": "1849a2a7-0ed6-4058-8bdc-6643df330417",
//             "levelId": "c8c333cd-764b-49c8-aae0-34628489b209",
//             "geometryX": 11774144.72,
//             "geometryY": 1122399.6266,
//             "distanceFromStartNode": 0,
//             "direction": "Go straight"
//         },
//         {
//             "id": "1849a2a7-0ed6-4058-8bdc-6643df330414",
//             "levelId": "c8c333cd-764b-49c8-aae0-34628489b209",
//             "geometryX": 11774158.981,
//             "geometryY": 1122387.214,
//             "distanceFromStartNode": 18.906,
//             "direction": "Turn Right"
//         },
//         {
//             "id": "1e1d2d2a-308d-491c-b68e-c1f7aafd3d51",
//             "levelId": "c8c333cd-764b-49c8-aae0-34628489b209",
//             "geometryX": 11774152.668,
//             "geometryY": 1122380.886,
//             "distanceFromStartNode": 27.831,
//             "direction": "Turn Left"
//         },
//         {
//             "id": "1e1d2d2a-308d-491c-b68e-c1f7aafd3d52",
//             "levelId": "c8c333cd-764b-49c8-aae0-34628489b209",
//             "geometryX": 11774155.833,
//             "geometryY": 1122378.034,
//             "distanceFromStartNode": 31.868,
//             "direction": "Turn Left"
//         },
//         {
//             "id": "1e1d2d2a-308d-491c-b68e-c1f7aafd3d57",
//             "levelId": "c8c333cd-764b-49c8-aae0-34628489b209",
//             "geometryX": 11774160.104,
//             "geometryY": 1122382.699,
//             "distanceFromStartNode": 38.068,
//             "direction": "Turn Left"
//         },
//         {
//             "id": "1e1d2d2a-308d-491c-b68e-c1f7aafd3d53",
//             "levelId": "c8c333cd-764b-49c8-aae0-34628489b209",
//             "geometryX": 11774159.145,
//             "geometryY": 1122383.508,
//             "distanceFromStartNode": 39.351,
//             "direction": "Turn Left"
//         },
//         {
//             "id": "1e1d2d2a-308d-491c-b68e-c1f7aafd3d58",
//             "levelId": "c8c333cd-764b-49c8-aae0-34628489b209",
//             "geometryX": 11774158.41,
//             "geometryY": 1122384.028,
//             "distanceFromStartNode": 40.249,
//             "direction": "Turn Left"
//         },
//         {
//             "id": "1e1d2d2a-308d-491c-b68e-c1f7aafd3d59",
//             "levelId": "c8c333cd-764b-49c8-aae0-34628489b209",
//             "geometryX": 11774155.224,
//             "geometryY": 1122380.384,
//             "distanceFromStartNode": 45.002,
//             "direction": "Go Straight"
//         },
//         {
//             "id": "1e1d2d2a-308d-491c-b68e-c1f7aafd3d60",
//             "levelId": "4bb6f304-932b-4eee-bbc5-2ab7a30af10e",
//             "geometryX": 11774155.224,
//             "geometryY": 1122380.384,
//             "distanceFromStartNode": 45.002,
//             "direction": "Go Straight"
//         },
//         {
//             "id": "1e1d2d2a-308d-491c-b68e-c1f7aafd3d55",
//             "levelId": "4bb6f304-932b-4eee-bbc5-2ab7a30af10e",
//             "geometryX": 11774150.082,
//             "geometryY": 1122374.622,
//             "distanceFromStartNode": 52.687000000000005,
//             "direction": "Turn Left"
//         },
//         {
//             "id": "1e1d2d2a-308d-491c-b68e-c1f7aafd3d56",
//             "levelId": "4bb6f304-932b-4eee-bbc5-2ab7a30af10e",
//             "geometryX": 11774154.5798,
//             "geometryY": 1122371.4879,
//             "distanceFromStartNode": 58.056000000000004,
//             "direction": "Finish"
//         }
//     ],
//     "executeTime": "227800 ns"
// }

//let route = null;
// const startNode = "1849a2a7-0ed6-4058-8bdc-6643df330417";
// const endNode = "1e1d2d2a-308d-491c-b68e-c1f7aafd3d56";
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
        if(p.levelId == "4bb6f304-932b-4eee-bbc5-2ab7a30af10e") {
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
