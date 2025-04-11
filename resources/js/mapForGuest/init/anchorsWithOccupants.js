import { IMDFData } from './data';
import { IMDFDataByID } from './data';

let CACHED_ANCHORS_WITH_OCCUPANTS = null;

export async function createAnchorSourceWithOccupants() { // with unit alt name
    if (CACHED_ANCHORS_WITH_OCCUPANTS) {
        return CACHED_ANCHORS_WITH_OCCUPANTS;
    }

    const anchors = IMDFData.anchors;
    const occupants = {}
    IMDFData.occupants.forEach(occupant => {
        occupants[occupant.values_.anchor_id] = occupant.values_
    })

    anchors.forEach(anchor => {
        if (occupants[anchor.id_]) {
            occupants[anchor.id_].alt_name = IMDFDataByID[anchor.values_.unit_id].values_.alt_name

            anchor.values_.occupant = occupants[anchor.id_];
        }
    })

    CACHED_ANCHORS_WITH_OCCUPANTS = anchors;
    return CACHED_ANCHORS_WITH_OCCUPANTS;
}
