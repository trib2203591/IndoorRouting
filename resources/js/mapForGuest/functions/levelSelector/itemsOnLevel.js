import VectorSource from 'ol/source/Vector.js';

import { IMDFData } from "../../init/data";
import { global } from "../../init/global";
import { routegeojson } from '../routing/routing'; // remove later
import { routeGuideGeojson } from '../routing/routingGuide';

export async function setMapLevel(ordinal) {
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

    const pathsource = new VectorSource({
        features: await routeOnOrdinal(ordinal)
    });

    const routeGuideSource = new VectorSource({
        features: await routeGuideOnLevel(levels)
    });

    global.levels.setSource(levelsource);
    global.units.setSource(unitsource);
    global.anchors.setSource(anchorsource);
    global.amenities.setSource(amenitiesource);
    global.openings.setSource(openingsource);
    global.fixtures.setSource(fixturesource);
    global.kiosks.setSource(kiosksource);
    global.route.setSource(pathsource);
    global.routeGuide.setSource(routeGuideSource);
    //return unit;
}


async function levelOnOrdinal(ordinal) {
    return IMDFData.levels.filter(level => String(level.values_.ordinal) === String(ordinal));
}

async function unitOnLevel(levels) {
    let units = [];
    levels.forEach(function (l) {
        units = units.concat(IMDFData.units.filter(unit => unit.values_.level_id === l.id_));
    });

    return units;
}

async function anchorsInUnits(units) {
    let anchors = [];
    units.forEach(function (u) {
        anchors = anchors.concat(IMDFData.anchorsWithOccupants.filter(anchor => anchor.values_.unit_id === u.id_));
    });

    return anchors;
}

async function amenitiesInUnits(units) {
    let amenities = [];
    units.forEach(function (u) {
        amenities = amenities.concat(IMDFData.amenities.filter(amenity => amenity.values_.unit_ids[0] === u.id_));
    });

    return amenities;
}

async function openingsOnlevel (levels) {
    let openings = [];
    levels.forEach(function (l) {
        openings = openings.concat(IMDFData.openings.filter(opening => opening.values_.level_id === l.id_));
    });

    return openings;
}


async function fixturesOnLevel(levels) {
    let fixtures = [];
    levels.forEach(function (l) {
        fixtures = fixtures.concat(IMDFData.fixtures.filter(fixture => fixture.values_.level_id === l.id_));
    });

    return fixtures;
}

async function kiosksOnLevel(levels) {
    let kiosks = [];
    levels.forEach(function (l) {
        kiosks = kiosks.concat(IMDFData.kiosks.filter(kiosk => kiosk.values_.level_id === l.id_));
    });

    return kiosks;
}

async function routeOnOrdinal(ordinal) {
    if(!routegeojson) {
        return [];
    }
    const route = routegeojson;
    return route.filter(r => String(r.values_.ordinal) === String(ordinal));
}

async function routeGuideOnLevel(levels) {
    if(!routeGuideGeojson) return [];

    let temp = [];
    levels.forEach(function(l){
        temp = temp.concat(routeGuideGeojson.filter(g => String(g.values_.levelId) === String(l.id_)));
    });

    return temp;
}
