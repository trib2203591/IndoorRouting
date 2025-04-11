import { createAddressSource } from './addresses';
import { createAmenitySource } from '../../API/getMapData/amenities';
import { createAnchorSource } from '../../API/getMapData/anchors';
import { createBuildingSource } from '../../API/getMapData/buildings';
import { createFootprintSource } from '../../API/getMapData/footprints';
import { createLevelSource } from '../../API/getMapData/levels';
import { createVenueSource } from '../../API/getMapData/venues';
import { createUnitSource } from '../../API/getMapData/units';
import { createOpeningSource } from '../../API/getMapData/openings';
import { createOccupantSource } from '../../API/getMapData/occupants';
import { createFixtureSource } from './fixtures';
import { createKioskSource } from './kiosks';


export const getMapData = {
    addresses: createAddressSource,
    amenities: createAmenitySource,
    anchors: createAnchorSource,
    buildings: createBuildingSource,
    footprints: createFootprintSource,
    levels: createLevelSource,
    venues: createVenueSource,
    units: createUnitSource,
    openings: createOpeningSource,
    occupants: createOccupantSource,
    fixtures: createFixtureSource,
    kiosks: createKioskSource,
}
