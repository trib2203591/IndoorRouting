import IMDFGeoJSON from '../../map/custom/IMDFGeoJSON';

let CACHED_OCCUPANTS_IMDFGeoJSON = null;

export async function createOccupantSource() {
    if (CACHED_OCCUPANTS_IMDFGeoJSON) {
        return CACHED_OCCUPANTS_IMDFGeoJSON;
    }

    try {
        const response = await fetch(`${import.meta.env.VITE_IMDF_API_URL}occupants`);
        const data = await response.json();

        const format = new IMDFGeoJSON();
        CACHED_OCCUPANTS_IMDFGeoJSON = format.readFeatures(data, {
            featureProjection: 'EPSG:4326',
        });

        return CACHED_OCCUPANTS_IMDFGeoJSON;
    } catch (error) {
        console.error('Error creating unit source:', error);
        throw error;
    }
}
