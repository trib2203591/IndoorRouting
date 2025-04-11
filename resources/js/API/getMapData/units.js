import IMDFGeoJSON from '../../map/custom/IMDFGeoJSON';

let CACHED_UNITS_IMDFGeoJSON = null;

export async function createUnitSource() {
    if (CACHED_UNITS_IMDFGeoJSON) {
        return CACHED_UNITS_IMDFGeoJSON;
    }

    try {
        const response = await fetch(`${import.meta.env.VITE_IMDF_API_URL}units`);
        const data = await response.json();

        const format = new IMDFGeoJSON();
        CACHED_UNITS_IMDFGeoJSON = format.readFeatures(data, {
            featureProjection: 'EPSG:4326',
        });

        return CACHED_UNITS_IMDFGeoJSON;
    } catch (error) {
        console.error('Error creating unit source:', error);
        throw error;
    }
}
