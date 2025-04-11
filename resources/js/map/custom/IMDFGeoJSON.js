import GeoJSON from "ol/format/GeoJSON";

class IMDFGeoJSON extends GeoJSON {
    constructor(options) {
        super(options);
    }

    readFeatures(data, opt_options) {

        // Check if the input `data` is a string or an object
        let geojsonObject;
        if (typeof data === 'string') {
            try {
                geojsonObject = JSON.parse(data);
            } catch (error) {
                console.error('Invalid GeoJSON string provided:', error);
                throw new Error('Failed to parse GeoJSON string.');
            }
        } else if (typeof data === 'object' && data !== null) {
            geojsonObject = data; // Use the object directly
        } else {
            console.error('Invalid data type provided to readFeatures:', typeof data);
            throw new Error('Invalid data type for GeoJSON. Expected string or object.');
        }

        // Call the parent class readFeatures method with the GeoJSON object
        const features = super.readFeatures(geojsonObject, opt_options);

        // Add `feature_type` to each feature if it exists in the GeoJSON
        if (geojsonObject.features) {
            geojsonObject.features.forEach((geojsonFeature, index) => {
                if (geojsonFeature.feature_type) {
                    features[index].set('feature_type', geojsonFeature.feature_type);
                }
            });
        }

        return features;
    }
}

export default IMDFGeoJSON;
