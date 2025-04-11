import IMDFGeoJSON from '../../map/custom/IMDFGeoJSON';

let CACHED_FIXTURES_IMDFGeoJSON = null;

export async function createFixtureSource() {
    if (CACHED_FIXTURES_IMDFGeoJSON) {
        return CACHED_FIXTURES_IMDFGeoJSON;
    }

    try {
        const response = await fetch(`${import.meta.env.VITE_IMDF_API_URL}fixtures`);
        const data = await response.json();

        const format = new IMDFGeoJSON();
        CACHED_FIXTURES_IMDFGeoJSON = format.readFeatures(data, {
            featureProjection: 'EPSG:4326',
        });

        return CACHED_FIXTURES_IMDFGeoJSON;
    } catch (error) {
        console.error('Error creating unit source:', error);
        throw error;
    }
}
