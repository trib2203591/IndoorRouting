export const featureObjects = {
  'Amenity': {
    "id": "",
    "type": "Feature",
    "feature_type": "amenity",
    "geometry": {
      "type": "Point",
      "coordinates": []
    },
    "properties": {
      "category": "",
      "accessibility": null,
      "name": null,
      "alt_name": null,
      "phone": null,
      "website": null,
      "hours": null,
      "address_id": null,
      "unit_ids": [],
      "correlation_id": null
    }
  },
  'Address':
  {
    "id": "",
    "type": "Feature",
    "feature_type": "address",
    "geometry": null,
    "properties": {
      "address": null,
      "unit": null,
      "locality": null,
      "province": null,
      "country": null,
      "postal_code": null,
      "postal_code_ext": null,
      "postal_code_vanity": null
    }
  },
  'Anchor': {
    "id": "",
    "type": "Feature",
    "feature_type": "anchor",
    "geometry": {
      "type": "Point",
      "coordinates": []
    },
    "properties": {
      "address_id": "",
      "unit_id": ""
    }
  },
  'Building': {
    "id": "",
    "type": "Feature",
    "feature_type": "building",
    "geometry": null,
    "properties": {
      "category": "",
      "restriction": "",
      "name": null,
      "alt_name": null,
      "display_point": {
        "type": "Point",
        "coordinates": []
      },
      "address_id": ""
    }
  },
  'Detail': {
    "id": "",
    "type": "Feature",
    "feature_type": "detail",
    "geometry": {
      "type": "",
      "coordinates": []
    },
    "properties": {
      "level_id": ""
    }
  },
  'Fixture': {
    "id": "",
    "type": "Feature",
    "feature_type": "fixture",
    "geometry": {
      "type": "",
      "coordinates": []
    },
    "properties": {
      "category": "desk",
      "name": null,
      "alt_name": {},
      "display_point": {
        "type": "Point",
        "coordinates": []
      },
      "anchor_id": "",
      "level_id": ""
    }
  },
  'Footprint': {
    "id": "",
    "type": "Feature",
    "feature_type": "footprint",
    "geometry": {
      "type": "",
      "coordinates": []
    },
    "properties": {
      "category": "",
      "name": null,
      "building_ids": []
    }
  },
  'Geofence': {
    "id": "",
    "type": "Feature",
    "feature_type": "geofence",
    "geometry": {},
    "properties": {
      "category": "",
      "restriction": "",
      "name": {},
      "alt_name": null,
      "correlation_id": null,
      "display_point": {
        "type": "Point",
        "coordinates": []
      },
      "building_ids": [],
      "level_ids": [],
      "parents": []
    }
  },
  'Kiosk': {
    "id": "",
    "type": "Feature",
    "feature_type": "kiosk",
    "geometry": {},
    "properties": {
      "name": null,
      "alt_name": null,
      "anchor_id": "",
      "display_point": {
        "type": "Point",
        "coordinates": []
      },
      "level_id": ""
    }
  },
  'Level': {
    "id": "",
    "type": "Feature",
    "feature_type": "level",
    "geometry": {},
    "properties": {
      "category": "",
      "restriction": null,
      "ordinal": 0,
      "outdoor": false,
      "name": {},
      "short_name": {},
      "display_point": {
        "type": "Point",
        "coordinates": []
      },
      "address_id": null,
      "building_ids": []
    }
  },
  'Occupant': {
    "id": "",
    "type": "Feature",
    "feature_type": "occupant",
    "geometry": null,
    "properties": {
      "category": "",
      "name": {},
      "phone": null,
      "website": null,
      "hours": null,
      "validity": {
        "start": "",
        "end": "",
        "modified": ""
      },
      "anchor_id": "",
      "correlation_id": null
    }
  },
  'Openings': {
    "id": "",
    "type": "Feature",
    "feature_type": "opening",
    "geometry": {
      "type": "LineString",
      "coordinates": []
    },
    "properties": {
      "category": "",
      "accessibility": [],
      "access_control": [],
      "door": {
        "type": "",
        "automatic": true,
        "material": ""
      },
      "name": {},
      "alt_name": null,
      "display_point": {
        "type": "Point",
        "coordinates": []
      },
      "level_id": ""
    }
  },
  'Relationship': {
    "id": "",
    "type": "Feature",
    "feature_type": "relationship",
    "geometry": null,
    "properties": {
      "category": "",
      "direction": "",
      "hours": null,
      "origin": null,
      "intermediary": null,
      "destination": null
    }
  },
  'Section': {
    "id": "",
    "type": "Feature",
    "feature_type": "section",
    "geometry": {},
    "properties": {
      "category": "",
      "restriction": "",
      "accessibility": [],
      "name": {},
      "alt_name": null,
      "display_point": {
        "type": "Point",
        "coordinates": []
      },
      "level_id": "",
      "address_id": "",
      "correlation_id": null,
      "parents": []
    }
  },
  'Unit': {
    "id": "",
    "type": "Feature",
    "feature_type": "unit",
    "geometry": {},
    "properties": {
      "category": "",
      "restriction": null,
      "accessibility": null,
      "name": {},
      "alt_name": null,
      "display_point": {
        "type": "Point",
        "coordinates": []
      },
      "level_id": ""
    }
  },
  'Venue': {
    "id": "",
    "type": "Feature",
    "feature_type": "venue",
    "geometry": {},
    "properties": {
      "category": "",
      "restriction": null,
      "name": {},
      "alt_name": null,
      "hours": "",
      "website": "",
      "phone": "",
      "display_point": {
        "type": "Point",
        "coordinates": []
      },
      "address_id": ""
    }
  }
}