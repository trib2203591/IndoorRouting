import IMDFGeoJSON from '../../map/custom/IMDFGeoJSON';

let CACHED_ADDRESSES_IMDFGeoJSON = null;

export async function createAddressSource() {
    if (CACHED_ADDRESSES_IMDFGeoJSON) {
        return CACHED_ADDRESSES_IMDFGeoJSON;
    }

    try {
        const response = await fetch(`${import.meta.env.VITE_IMDF_API_URL}addresses`);
        const data = await response.json();

        const format = new IMDFGeoJSON();
        CACHED_ADDRESSES_IMDFGeoJSON = format.readFeatures(data, {
            featureProjection: 'EPSG:4326',
        });


        return CACHED_ADDRESSES_IMDFGeoJSON;
    } catch (error) {
        console.error('Error creating unit source:', error);
        throw error;
    }
}
