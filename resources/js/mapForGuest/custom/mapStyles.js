import { Fill, Stroke, Style, Circle, Text} from 'ol/style';
import { Icon } from 'ol/style.js';


const unitStyles = {
    default: {
        fillColor : 'rgba(230,230,230,1)',
        strokeColor : 'rgba(100,100,100,1)',
        strokeWidth: 1,
    },
    room: {
        fillColor : 'rgba(240,240,240,1)',
    },
    classroom: {
        fillColor : 'rgba(220, 250, 250, 1)',
    },
    restroom: {
        fillColor : 'rgba(231,220,237,1)',
    },
    "restroom.female": {
        fillColor : 'rgba(230,220,237,1)',
    },
    "restroom.male": {
        fillColor : 'rgba(230,220,237,1)',
    },
    stairs: {
        fillColor : 'rgba(204,220,229,1)',
    },
    storage: {
        fillColor : 'rgba(210,210,210,1)',
    },
    unenclosedarea: {
        fillColor : 'rgba(205,240,240,0.4)',
    },
    vegetation: {
        fillColor : 'rgba(196,254,194, 1)',
    },
    walkway: {
        fillColor : 'white',
    }

}


const amenityStyles = {
    default: {
        iconUrl: './images/placeholderPoint.svg',
        scale: 0.02
    },
    "restroom.female": {
        iconUrl: './images/femaleRestroom.png',
        scale: 0.08
    },
    "restroom.male": {
        iconUrl: './images/maleRestroom.png',
        scale: 0.08
    },
    stairs: {
        iconUrl: './images/stairs.png',
        scale: 0.08
    },
    parking: {
        iconUrl: './images/parking.png',
        scale: 0.12
    }
}

export const mapStyles = {
    getUnitStyle(feature, resolution) {
        const maxResolution = 0.4;
        if(resolution > maxResolution) return;

        const unitCategory = feature.get('category');
        const newStyle = unitStyles[unitCategory] || unitStyles.default;

        const fillColor = newStyle.fillColor || unitStyles.default.fillColor;
        const strokeColor = newStyle.strokeColor || unitStyles.default.strokeColor;
        const strokeWidth = newStyle.strokeWidth || unitStyles.default.strokeWidth;

        return new Style({
            fill: new Fill({
                color: fillColor,
            }),
            stroke: new Stroke({
                color: strokeColor,
                width: strokeWidth,
            }),
        });
    },

    getAmenityStyle(feature, resolution) {
        const maxResolution = 0.4;
        if(resolution > maxResolution) return;

        const amenityCategory = feature.get('category');
        const newStyle = amenityStyles[amenityCategory] || amenityStyles.default;
        return new Style({
            image: new Icon({
                crossOrigin: 'anonymous',
                scale: newStyle.scale,
                src: newStyle.iconUrl,
            }),
        });
    },

    venueStyle: new Style({
        fill: new Fill({
            color: 'rgba(255,255,255,0.5)',
        }),
        stroke: new Stroke({
            color: 'rgba(80,180,250,1)',
           // lineDash: [10],
            width: 2,
        }),
    }),

    getLevelStyle(feature, resolution) {
        const maxResolution = 0.4;
        if(resolution > maxResolution) return;

        let color = 'rgba(220, 200, 170,0.4)';
        if(feature.values_.outdoor){
            // color = 'red'
            color = 'rgba(205,240,240,0.4)'
        }

        return new Style({
            fill: new Fill({
                color: color,
            }),
            stroke: new Stroke({
                // color: 'rgba(190,190,190,1)',
                color: 'rgba(100,100,100,1)',
                width: 1,
                lineDash: [4],
                // strokeColor : 'rgba(190,190,190,1)',
        // strokeWidth: 1,
            }),
        });



    },
    getFootprintStyle(feature, resolution) {
        const minResolution = 0.4;
        if(resolution < minResolution) return;

        return new Style({
            fill: new Fill({
                color: 'rgba(173,216,230,1)',
            }),
            stroke: new Stroke({
                color: 'rgba(190,190,190,1)',
                width: 2,
            }),
        });
    },

    getOpeningStyle(feature, resolution) {
        const maxResolution = 0.4;
        if(resolution > maxResolution) return;

        return new Style({
            stroke: new Stroke({
                color: 'white',
                width: 4,
            }),
        });
    },

    getAnchorStyle(feature, resolution) {
        const maxResolution = 0.4;
        if(resolution > maxResolution) return;

        const label = feature.values_.occupant ? feature.values_.occupant.alt_name.vi : null;
        return new Style({
            image: new Circle({
                radius: 5,
                fill: new Fill({
                    color: 'rgba(115, 249, 174, 1)',
                }),
            }),
            text: new Text({
                text: label,
                font: '10px Calibri,sans-serif',
                fill: new Fill({
                  color: 'black',
                }),
                stroke: new Stroke({
                  color: 'white',
                  width: 2,
                }),
                offsetY: -10,
              }),
        });
    },

    getBuildingStyle(feature, resolution) {
        const minResolution = 0.4;
        if(resolution < minResolution) return;

        return new Style({
            image: new Circle({
                radius: 5,
                fill: new Fill({
                    color: 'rgba(115, 249, 174, 1)',
                }),
            }),
            text: new Text({
                text: feature.values_.name.vi,
                font: 'bold 15px Calibri,sans-serif',
                fill: new Fill({
                  color: 'black',
                }),
                stroke: new Stroke({
                  color: 'white',
                  width: 2,
                }),
                offsetY: -10,
              }),
        })
    },

    getFixtureStyle(feature, resolution) {
        const maxResolution = 0.4;
        if(resolution > maxResolution) return;

        return new Style({
            fill: new Fill({
                color: 'rgba(213,196,161,1)',
            }),
            stroke: new Stroke({
                color: 'rgba(100,100,100,1)',
                width: 1,
            }),
        });
    },

    getKioskStyle(feature, resolution) {
        const maxResolution = 0.4;
        if(resolution > maxResolution) return;

        return new Style({
            fill: new Fill({
                color: 'rgba(11,156,49,0.4)',
            }),
            stroke: new Stroke({
                color: 'rgba(100,100,100,1)',
                width: 1,
            }),
        });
    },

    getRouteStyle(feature, resolution) {
      const maxResolution = 0.4;
      if(resolution > maxResolution) return;

      return new Style({
        stroke: new Stroke({
            color: 'blue',
            width: 3
        })
    });
    },

    highlightStyles: {
        unit: new Style({
            fill: new Fill({
                color: 'rgba(108, 235, 237, 1)',
            }),
        }),
        anchor(feature, resolution) {
            const label = feature.values_.occupant ? feature.values_.occupant.alt_name.vi : null;
            return new Style({
                image: new Circle({
                    radius: 10,
                    fill: new Fill({
                        color: 'rgba(255, 249, 174, 1)',
                    }),
                }),
                text: new Text({
                    text: label,
                    font: 'bold 16px Calibri,sans-serif',
                    fill: new Fill({
                      color: 'black',
                    }),
                    stroke: new Stroke({
                      color: 'white',
                      width: 2,
                    }),
                    offsetY: 20,
                  }),
                  zIndex: 100,
            });
        },
        amenity(feature, resolution) {
            const amenityCategory = feature.get('category');
            const newStyle = amenityStyles[amenityCategory] || amenityStyles.default;
            return new Style({
                image: new Icon({
                    crossOrigin: 'anonymous',
                    scale: newStyle.scale * 1.2,
                    src: newStyle.iconUrl,
                }),
            });
        },
        sensor(feature, resolution) {
            return new Style({
                image: new Icon({
                    crossOrigin: 'anonymous',
                    scale: 0.4,
                    src: './images/sensor.png',
                }),
            });
        },
        fixture : new Style({
            fill: new Fill({
                color: 'rgba(108, 235, 237, 1)',
            }),
            stroke: new Stroke({
                color: 'rgba(100,100,100,1)',
                width: 1,
            }),
        }),
        opening: (feature, resolution) => {
            return new Style({
                stroke: new Stroke({
                    color: 'rgba(108, 235, 237, 1)',
                    width: 4,
                }),
            });
        },
        route: new Style({
            stroke: new Stroke({
                color: 'yellow',
                width: 3
            })
        }),
        more: null//TODO
    }
};

