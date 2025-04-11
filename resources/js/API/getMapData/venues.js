import IMDFGeoJSON from '../../map/custom/IMDFGeoJSON';

let CACHED_VENUES_IMDFGeoJSON = null;

export async function createVenueSource() {
    if (CACHED_VENUES_IMDFGeoJSON) {
        return CACHED_VENUES_IMDFGeoJSON;
    }

    try {
        const response = await fetch(`${import.meta.env.VITE_IMDF_API_URL}venues`);
        const data = await response.json();

        const format = new IMDFGeoJSON();
        CACHED_VENUES_IMDFGeoJSON = format.readFeatures(data, {
            featureProjection: 'EPSG:4326',
        });

        return CACHED_VENUES_IMDFGeoJSON;
    } catch (error) {
        console.error('Error creating unit source:', error);
        throw error;
    }
}
