import IMDFGeoJSON from '../../map/custom/IMDFGeoJSON';

let CACHED_OPENINGS_IMDFGeoJSON = null;

export async function createOpeningSource() {
    if (CACHED_OPENINGS_IMDFGeoJSON) {
        return CACHED_OPENINGS_IMDFGeoJSON;
    }

    try {
        const response = await fetch(`${import.meta.env.VITE_IMDF_API_URL}openings`);
        const data = await response.json();

        const format = new IMDFGeoJSON();
        CACHED_OPENINGS_IMDFGeoJSON = format.readFeatures(data, {
            featureProjection: 'EPSG:4326',
        });

        return CACHED_OPENINGS_IMDFGeoJSON;
    } catch (error) {
        console.error('Error creating unit source:', error);
        throw error;
    }
}
