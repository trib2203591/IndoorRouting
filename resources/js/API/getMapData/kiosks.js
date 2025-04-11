import IMDFGeoJSON from '../../map/custom/IMDFGeoJSON';

let CACHED_KIOSKS_IMDFGeoJSON = null;

export async function createKioskSource() {
    if (CACHED_KIOSKS_IMDFGeoJSON) {
        return CACHED_KIOSKS_IMDFGeoJSON;
    }

    try {
        const response = await fetch(`${import.meta.env.VITE_IMDF_API_URL}kiosks`);
        const data = await response.json();

        const format = new IMDFGeoJSON();
        CACHED_KIOSKS_IMDFGeoJSON = format.readFeatures(data, {
            featureProjection: 'EPSG:4326',
        });

        return CACHED_KIOSKS_IMDFGeoJSON;
    } catch (error) {
        console.error('Error creating unit source:', error);
        throw error;
    }
}
