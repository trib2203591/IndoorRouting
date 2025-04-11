import IMDFGeoJSON from '../../map/custom/IMDFGeoJSON';

let CACHED_FOOTPRINTS_IMDFGeoJSON = null;

export async function createFootprintSource() {
    if (CACHED_FOOTPRINTS_IMDFGeoJSON) {
        return CACHED_FOOTPRINTS_IMDFGeoJSON;
    }

    try {
        const response = await fetch(`${import.meta.env.VITE_IMDF_API_URL}footprints`);
        const data = await response.json();

        const format = new IMDFGeoJSON();
        CACHED_FOOTPRINTS_IMDFGeoJSON = format.readFeatures(data, {
            featureProjection: 'EPSG:4326',
        });

        return CACHED_FOOTPRINTS_IMDFGeoJSON;
    } catch (error) {
        console.error('Error creating unit source:', error);
        throw error;
    }
}
