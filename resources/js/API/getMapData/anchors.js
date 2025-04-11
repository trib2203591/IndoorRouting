import IMDFGeoJSON from '../../map/custom/IMDFGeoJSON';

let CACHED_ANCHORS_IMDFGeoJSON = null;

export async function createAnchorSource() {
    if (CACHED_ANCHORS_IMDFGeoJSON) {
        return CACHED_ANCHORS_IMDFGeoJSON;
    }

    try {
        const response = await fetch(`${import.meta.env.VITE_IMDF_API_URL}anchors`);
        const data = await response.json();

        const format = new IMDFGeoJSON();
        CACHED_ANCHORS_IMDFGeoJSON = format.readFeatures(data, {
            featureProjection: 'EPSG:4326',
        });
        return CACHED_ANCHORS_IMDFGeoJSON;
    } catch (error) {
        console.error('Error creating anchor source:', error);
        throw error;
    }
}
