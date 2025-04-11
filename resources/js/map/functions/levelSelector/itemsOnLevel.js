import VectorSource from 'ol/source/Vector.js';

import { IMDFData } from "../../init/data";
import { global } from "../../init/global";

export async function setMapLevel(ordinal, filters) {
    const levels = await levelOnOrdinal(ordinal);
    const levelsource = new VectorSource({
        features: levels
    });

    let units = await unitOnLevel(levels);
    const unitsource = new VectorSource({
        features: units
    });

    const anchorsource = new VectorSource({
        features: await anchorsInUnits(units)
    });

    const amenitiesource = new VectorSource({
        features: await amenitiesInUnits(units)
    });

    const openingsource = new VectorSource({
        features: await openingsOnlevel(levels)
    });

    const fixturesource = new VectorSource({
        features: await fixturesOnLevel(levels)
    });

    const kiosksource = new VectorSource({
        features: await kiosksOnLevel(levels)
    });

    const buildingssource = new VectorSource({
        features: IMDFData.buildings
    })

    const footprintssource = new VectorSource({
        features: IMDFData.footprints
    })

    const venuessource = new VectorSource({
        features: IMDFData.venues
    })

    const allFeaturesSource = {
        levels: levelsource,
        units: unitsource,
        anchors: anchorsource,
        amenities: amenitiesource,
        openings: openingsource,
        fixtures: fixturesource,
        kiosks: kiosksource,
        buildings: buildingssource,
        footprints: footprintssource,
        venues: venuessource
    }

    //if the feature is in filters, add source to filterToApply
    //if the feature is not in filters, when access it is undefined, automatically remove from the map
    const filtersToAply = {};
    filters.forEach((feature) => {
        filtersToAply[feature] = allFeaturesSource[feature];
    });

    global.levels.setSource(filtersToAply.levels);
    global.units.setSource(filtersToAply.units);
    global.anchors.setSource(filtersToAply.anchors);
    global.amenities.setSource(filtersToAply.amenities);
    global.openings.setSource(filtersToAply.openings);
    global.fixtures.setSource(filtersToAply.fixtures);
    global.kiosks.setSource(filtersToAply.kiosks);
    global.buildings.setSource(filtersToAply.buildings);
    global.footprints.setSource(filtersToAply.footprints);
    global.venues.setSource(filtersToAply.venues);
}





export async function levelOnOrdinal(ordinal) {
    return IMDFData.levels.filter(level => String(level.values_.ordinal) === String(ordinal));
}

export async function unitOnLevel(levels) {
    let units = [];
    levels.forEach(function (l) {
        units = units.concat(IMDFData.units.filter(unit => unit.values_.level_id === l.id_));
    });

    return units;
}

export async function anchorsInUnits(units) {
    let anchors = [];
    units.forEach(function (u) {
        anchors = anchors.concat(IMDFData.anchorsWithOccupants.filter(anchor => anchor.values_.unit_id === u.id_));
    });

    return anchors;
}

export async function amenitiesInUnits(units) {
    let amenities = [];
    units.forEach(function (u) {
        amenities = amenities.concat(IMDFData.amenities.filter(amenity => amenity.values_.unit_ids[0] === u.id_));
    });

    return amenities;
}

export async function openingsOnlevel (levels) {
    let openings = [];
    levels.forEach(function (l) {
        openings = openings.concat(IMDFData.openings.filter(opening => opening.values_.level_id === l.id_));
    });

    return openings;
}


export async function fixturesOnLevel(levels) {
    let fixtures = [];
    levels.forEach(function (l) {
        fixtures = fixtures.concat(IMDFData.fixtures.filter(fixture => fixture.values_.level_id === l.id_));
    });

    return fixtures;
}

export async function kiosksOnLevel(levels) {
    let kiosks = [];
    levels.forEach(function (l) {
        kiosks = kiosks.concat(IMDFData.kiosks.filter(kiosk => kiosk.values_.level_id === l.id_));
    });

    return kiosks;
}
