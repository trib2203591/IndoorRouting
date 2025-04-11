import VectorSource from 'ol/source/Vector.js';
import VectorLayer from 'ol/layer/Vector';


import { getMapData } from '../../API/getMapData/getMapData';
import { createAnchorSourceWithOccupants } from './anchorsWithOccupants';

import { mapStyles } from '../custom/mapStyles';

const mapLoadingText= document.getElementById("map-loading-text");

export const IMDFData = {
    addresses: null,
    amenities: null,
    anchors: null,
    buildings: null,
    footprints: null,
    levels: null,
    venues: null,
    units: null,
    openings: null,
    occupants: null,
    fixtures: null,
    kiosks: null,

    anchorsWithOccupants: null,
};

export const IMDFDataByID = {}

export const mapIMDFDataByID = () => {
    for (const [featureName, featureArray] of Object.entries(IMDFData)) {
        if (Array.isArray(featureArray)) {
            featureArray.forEach((feature) => {
                if (feature.id_) {
                    IMDFDataByID[feature.id_] = feature;
                }
            });
        }
    }
};

export const initCoreData = async () => {
    const [venues, buildings, footprints, addresses] = await Promise.all([
        getMapData.venues(),
        getMapData.buildings(),
        getMapData.footprints(),
        getMapData.addresses(),
    ]);



    IMDFData.venues = venues;
    IMDFData.buildings = buildings;
    IMDFData.footprints = footprints;
    IMDFData.addresses = addresses;

    sources.venues.addFeatures(venues);
    sources.buildings.addFeatures(buildings);
    sources.footprints.addFeatures(footprints);


};


export const initRemainingData = async () => {
    const dataLoaders = [
        { loader: getMapData.levels, key: 'levels' },
        { loader: getMapData.units, key: 'units' },
        { loader: getMapData.amenities, key: 'amenities' },
        { loader: getMapData.anchors, key: 'anchors' },
        { loader: getMapData.openings, key: 'openings' },
        { loader: getMapData.occupants, key: 'occupants' },
        { loader: getMapData.fixtures, key: 'fixtures' },
        { loader: getMapData.kiosks, key: 'kiosks' },
    ];

    for (const { loader, key } of dataLoaders) {
        try {
            document.getElementById("map-loading-text").innerHTML = `Đang tải ${key}...`;
            const data = await loader();
            IMDFData[key] = data;
            if (sources[key]) {
                sources[key].addFeatures(data);
            }
        } catch (error) {
            console.error(`Error loading ${key}:`, error);
        }
    }
};

export const initExtraDataForOL = async () => {
    const dataLoaders = [
        { loader: createAnchorSourceWithOccupants, key: 'anchorsWithOccupants' }
    ];
    for (const { loader, key } of dataLoaders) {
        try {
            const data = await loader();
            IMDFData[key] = data;
            if (sources[key]) {
                sources[key].addFeatures(data);
            }
        } catch (error) {
            console.error(`Error loading ${key}:`, error);
        }
    }


};

export const sources = {
    anchors: new VectorSource({
        features: IMDFData.anchorsWithOccupants
    }),
    buildings: new VectorSource({
        features: IMDFData.buildings
    }),
    footprints: new VectorSource({
        features: IMDFData.footprints
    }),
    levels: new VectorSource({
        features: IMDFData.levels
    }),
    venues: new VectorSource({
        features: IMDFData.venues
    }),
    units: new VectorSource({
        features: IMDFData.units
    }),
    amenities: new VectorSource({
        features: IMDFData.amenities
    }),
    openings: new VectorSource({
        features: IMDFData.openings
    }),
    fixtures: new VectorSource({
        features: IMDFData.fixtures
    }),
    kiosks: new VectorSource({
        features: IMDFData.kiosks
    }),
};

export const layers = {

    anchors: new VectorLayer({
        source: sources.anchors,
        style: mapStyles.getAnchorStyle,
    }),
    buildings: new VectorLayer({
        source: sources.buildings,
        style: mapStyles.getBuildingStyle,
    }),
    footprints: new VectorLayer({
        source: sources.footprints,
        style: mapStyles.getFootprintStyle,
    }),
    levels: new VectorLayer({
        source: sources.levels,
        style: mapStyles.getLevelStyle,
    }),
    venues: new VectorLayer({
        source: sources.venues,
        style: mapStyles.venueStyle,
    }),
    units: new VectorLayer({
        source: sources.units,
        style: mapStyles.getUnitStyle,
    }),
    amenities: new VectorLayer({
        source: sources.amenities,
        style: mapStyles.getAmenityStyle,
    }),
    openings: new VectorLayer({
        source: sources.openings,
        style: mapStyles.getOpeningStyle,
    }),
    fixtures: new VectorLayer({
        source: sources.fixtures,
        style: mapStyles.getFixtureStyle,
    }),
    kiosks: new VectorLayer({
        source: sources.kiosks,
        style: mapStyles.getKioskStyle,
    })
};

