export async function postIMDFFeature(feature, featureType) {
    try {
        const featuretype = getCorrectFeatureType(featureType);
        const response = await fetch(`${import.meta.env.VITE_IMDF_API_URL}${featuretype}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: feature
        })
        return response;
    }
    catch (e) {
        console.log(e)
    }
}

function getCorrectFeatureType(feature_type) {
    let correctFeatureType = feature_type;
    if (feature_type == 'Address') {
        correctFeatureType = 'addresses'
    }
    else if (feature_type == 'Amenity') {
        correctFeatureType = 'amenities'
    }
    else {
        correctFeatureType = feature_type.toLowerCase().trim() + 's'
    }
    return correctFeatureType;
}
