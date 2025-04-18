
export const getFeatureById = async (featureID, feature_type) => {
    const correctFeatureType = getCorrectFeatureType(feature_type);
    const response = await fetch(`${import.meta.env.VITE_IMDF_API_URL}${correctFeatureType}/${featureID}/`, { method: 'GET' });
    if (!response.ok) {
        throw new Error(`Failed to get feature: ${response.status} ${response.statusText}`);
    }
    return response.json();
}

function getCorrectFeatureType(feature_type) {
    switch (feature_type) {
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
