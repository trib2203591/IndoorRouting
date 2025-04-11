import IMDFGeoJSON from '../../map/custom/IMDFGeoJSON';


let CACHED_BUILDINGS_IMDFGeoJSON = null;

export async function createBuildingSource() {
    if (CACHED_BUILDINGS_IMDFGeoJSON) {
        return CACHED_BUILDINGS_IMDFGeoJSON;
    };

    try {
        const response = await fetch(`${import.meta.env.VITE_IMDF_API_URL}buildings`);
        const data = await response.json();

        data.features.forEach((feature) => {
            const geometry ={
                type: feature.properties.display_point.type,
                coordinates: feature.properties.display_point.coordinates
            }
            feature.geometry = geometry;
        })

        const format = new IMDFGeoJSON();
        CACHED_BUILDINGS_IMDFGeoJSON = format.readFeatures(data, {
            featureProjection: 'EPSG:4326',
        });

        return CACHED_BUILDINGS_IMDFGeoJSON;
    } catch (error) {
        console.error('Error creating unit source:', error);
        throw error;
    }
}
