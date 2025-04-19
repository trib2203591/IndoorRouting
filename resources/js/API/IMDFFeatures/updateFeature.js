
export const updateIMDFFeature = async (featureID, feature_type, feature) => {
    const correctFeatureType = getCorrectFeatureType(feature_type);
    const response = await fetch(`${import.meta.env.VITE_IMDF_API_URL}${correctFeatureType}/${featureID}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: feature
    })
    if (!response.ok) {
        throw new Error(`Failed to update feature: ${response.status} ${response.statusText}`);
    }
    return response.json();
}

function getCorrectFeatureType(feature_type) {
    switch (feature_type) {
        case "address": return "addresses";
        case "amenity": return "amenities";
        case "anchor": return "anchors";
        case "building": return "buildings";
        case "fixture": return "fixtures";
        case "footprint": return "footprints";
        case "kiosk": return "kiosks";
        case "level": return "levels";
        case "opening": return "openings";
        case "sensor": return "sensors";
        case "unit": return "units";
        case "venue": return "venues";
    }
    return feature_type;
}
