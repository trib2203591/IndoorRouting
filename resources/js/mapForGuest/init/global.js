import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorLayer from 'ol/layer/Vector';

import { layers } from './data';
import { mapStyles } from '../custom/mapStyles';

const global = {
    amenities: layers.amenities,

    anchors: layers.anchors,

    buildings: layers.buildings,

    footprints: layers.footprints,

    levels: layers.levels,

    venues: layers.venues,

    units: layers.units,

    openings: layers.openings,

    fixtures: layers.fixtures,

    kiosks: layers.kiosks,

    route: new VectorLayer({
        source: null,
        style: mapStyles.getRouteStyle,
    }),

    routeGuide: new VectorLayer({
        source: null,
        style: mapStyles.highlightStyles.route,
    }),

    map: null,
};

global.map = new Map({
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
    global.venues,
    global.footprints,
    global.buildings, //custom building layer
    global.levels,
    global.units,
    global.kiosks,
    global.fixtures,
    global.openings,
    global.amenities,
    global.anchors, //with occupant infos
    global.route,
    global.routeGuide
  ],
  target: 'map',
  view: new View({
    center: [11774144.287902, 1122409.9996554],
    zoom: 20,
    maxZoom: 22,
    minZoom: 16,
  })
});


export { global };

