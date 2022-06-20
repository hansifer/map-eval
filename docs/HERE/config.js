// result of `map.getBaseLayer().getProvider().getStyle().getConfig()`
const config = {
  global: {
    label: {
      priorities: {
        'custom-labels': 1,
        'custom-labels-no-self-overlap': 2,
        'continent-labels': 3,
        'country-labels': 4,
        'country-small-labels': 5,
        'city-center-country-capital-category1': 6,
        'city-center-country-capital-category2': 7,
        'city-center-country-capital-category3': 8,
        'city-center-country-capital-category4': 9,
        'city-center-country-capital-category5': 10,
        'city-center-country-capital-category6': 11,
        'city-center-country-capital-category7': 12,
        'city-center-country-capital-category8': 13,
        'city-center-country-capital-category9': 14,
        'city-center-country-capital-category10': 15,
        'city-center-country-capital-category11': 16,
        'city-center-country-capital-category12': 17,
        'city-center-country-capital-category13': 18,
        'city-center-country-capital-category14': 19,
        'city-center-country-capital-category15': 20,
        'state-labels': 21,
        'city-center-state-capital-category1': 22,
        'city-center-state-capital-category2': 23,
        'city-center-state-capital-category3': 24,
        'city-center-state-capital-category4': 25,
        'city-center-state-capital-category5': 26,
        'city-center-state-capital-category6': 27,
        'city-center-state-capital-category7': 28,
        'city-center-state-capital-category8': 29,
        'city-center-state-capital-category9': 30,
        'city-center-state-capital-category10': 31,
        'city-center-state-capital-category11': 32,
        'city-center-state-capital-category12': 33,
        'city-center-state-capital-category13': 34,
        'city-center-state-capital-category14': 35,
        'city-center-state-capital-category15': 36,
        'city-center-county-capital-category1': 37,
        'city-center-county-capital-category2': 38,
        'city-center-county-capital-category3': 39,
        'city-center-county-capital-category4': 40,
        'city-center-county-capital-category5': 41,
        'city-center-county-capital-category6': 42,
        'city-center-county-capital-category7': 43,
        'city-center-county-capital-category8': 44,
        'city-center-county-capital-category9': 45,
        'city-center-county-capital-category10': 46,
        'city-center-county-capital-category11': 47,
        'city-center-county-capital-category12': 48,
        'city-center-county-capital-category13': 49,
        'city-center-county-capital-category14': 50,
        'city-center-county-capital-category15': 51,
        'city-center-category1': 52,
        'city-center-category2': 53,
        'city-center-category3': 54,
        'city-center-category4': 55,
        'city-center-category5': 56,
        'city-center-category6': 57,
        'city-center-category7': 58,
        'city-center-category8': 59,
        'city-center-category9': 60,
        'city-center-category10': 61,
        'city-center-category11': 62,
        'city-center-category12': 63,
        'city-center-category13': 64,
        'city-center-category14': 65,
        'city-center-category15': 66,
        'truck-icon-general_truck_restriction': 67,
        'truck-icon-height_restriction': 68,
        'truck-icon-weight_restriction': 69,
        'truck-icon-weight_per_axle_restriction': 70,
        'truck-icon-width_restriction': 71,
        'truck-icon-length_restriction': 72,
        'truck-icon-axle_number_restriction': 73,
        'truck-icon-length_restriction_kpra': 74,
        'truck-icon-hazmat_any': 75,
        'truck-icon-hazmat_goods_harmful_for_water': 76,
        'truck-icon-hazmat_explosive_flammable': 77,
        'truck-icon-hazmat_explosives': 78,
        'truck-icon-hazmat_gas': 79,
        'truck-icon-hazmat_flammable': 80,
        'truck-icon-hazmat_flammable_solid_combustible': 81,
        'truck-icon-hazmat_organic': 82,
        'truck-icon-hazmat_poison': 83,
        'truck-icon-hazmat_poisonous_inhalation_hazard': 84,
        'truck-icon-hazmat_radioactive': 85,
        'truck-icon-hazmat_corrosive': 86,
        'truck-icon-hazmat_tunnel_category': 87,
        'truck-icon-hazmat_other': 88,
        'truck-icon-hazmat_unspecified': 89,
        'truck-icon-hazmat_permit_required': 90,
        'truck-icon-trailer_type': 91,
        'truck-icon-speed_limit': 92,
        'city-center-neighbourhood': 93,
        'mountain-range-labels': 94,
        'japan-annotation-geo-labels': 95,
        'japan-annotation-mountain-peak-labels': 96,
        'japan-mountain-peak-labels': 97,
        'japan-annotation-governmental-office-labels': 98,
        'japan-governmental-office-labels': 99,
        'japan-annotation-public-transport-labels': 103,
        'japan-public-transport-labels': 104,
        'japan-annotation-road-facility-labels': 125,
        'japan-road-facility-labels': 126,
        'japan-city-center-oaza': 133,
        'japan-city-center-aza': 134,
        'japan-annotation-traffic-light-labels': 135,
        'japan-traffic-light-labels': 136,
        'city-center-microhood': 138,
        'city-center-hamlet': 139,
        'ocean-labels': 140,
        'sea-labels': 141,
        'truck-labels': 142,
        'traffic-icon-road_closure': 144,
        'traffic-icon-accident': 145,
        'traffic-icon-disabled_vehicle': 146,
        'traffic-icon-road_hazard': 147,
        'traffic-icon-construction': 148,
        'traffic-icon-congestion': 149,
        'traffic-icon-planned_event': 150,
        'traffic-icon-mass_transit': 151,
        'traffic-icon-weather': 152,
        'traffic-icon-other': 153,
        safetycamera: 154,
        'low-emission-zone-labels': 155,
        'japan-annotation-poi-labels': 156,
        'poi-labels': 157,
        'japan-city-center-microhood-block': 392,
        'japan-speed-rail-labels': 393,
        'japan-state-rail-labels': 394,
        'japan-private-rail-labels': 395,
        'japan-subway-rail-labels': 396,
        'japan-tram-rail-labels': 397,
        'japan-gondola-labels': 398,
        'japan-cable-car-labels': 399,
        'road0-labels': 400,
        'road1-labels': 401,
        'road2-labels': 402,
        'road3-labels': 403,
        'road4-labels': 404,
        'walkway-labels': 405,
        'pedestrian-labels': 406,
        'island-labels': 407,
        'rail-labels': 408,
        'chairlift-labels': 409,
        'skirundownhill-labels': 410,
        'japan-annotation-ferry-labels': 411,
        'ferry-labels': 412,
        'japan-annotation-buildings-info-labels': 413,
        'buildings-info-labels': 414,
        'japan-city-center-microhood-parcel': 415,
        'buildings-address-labels': 416,
        'large-land-use-labels': 417,
        'mountain-peak-labels': 418,
        'land-cover-labels': 419,
        'japan-annotation-small-land-use-labels': 420,
        'small-land-use-labels': 421,
        'water-labels': 422,
        'road-shield-labels': 423,
        'road-shield0-labels': 424,
        'road-shield1-labels': 425,
        'road-shield2-labels': 426,
        'road-shield3-labels': 427,
        'road-shield4-labels': 428,
        'custom-labels-overlap-all': 429,
        'border-line-labels': 430,
        'one-way-arrow-labels': 431,
      },
    },
    texture_buffer_size: '3px',
    ux_language_text_source:
      "function() {\n  return (global.ux_language && feature['name:' + global.ux_language]) ||\n      (global.ux_language_fallback && feature['name:'+global.ux_language_fallback]) ||\n      feature['name'];\n}\n",
    ux_language_text_source_short:
      "function() {\n  return (global.ux_language && feature['name:short:'+global.ux_language]) ||\n      (global.ux_language_fallback && feature['name:short:'+global.ux_language_fallback]) ||\n      feature['name:short'];\n}\n",
    ux_language_text_source_short_or_full_fallback:
      "function() {\n  return (\n    $zoom < 5 && (\n      global.ux_language && feature['name:short:'+global.ux_language] ||\n      global.ux_language_fallback && feature['name:short:'+global.ux_language_fallback] ||\n      feature['name:short']\n    ) ||\n    global.ux_language && feature['name:' + global.ux_language] ||\n    global.ux_language_fallback && feature['name:'+global.ux_language_fallback] ||\n    feature['name']\n  );\n}\n",
    ux_language_text_source_boundary_lines_left_right: {
      left: "function() {\n  // Obtains the features name:left property either in ux_language, ux_fallback_language or in its local language\n  return (global.ux_language && feature['name:left:'+global.ux_language]) ||\n      (global.ux_language_fallback && feature['name:left:'+global.ux_language_fallback]) ||\n      feature['name:left'];\n}\n",
      right:
        "function() {\n  // Obtains the features name:right property either in ux_language, ux_fallback_language or in its local language\n  return (global.ux_language && feature['name:right:'+global.ux_language]) ||\n      (global.ux_language_fallback && feature['name:right:'+global.ux_language_fallback]) ||\n      feature['name:right'];\n}\n",
    },
    ux_language_text_source_boundary_lines:
      "function() {\n  var left = (global.ux_language && feature['name:left:'+global.ux_language]) ||\n      (global.ux_language_fallback && feature['name:left:'+global.ux_language_fallback]) ||\n      feature['name:left'];\n  var right;\n  if (left) {\n    right = (global.ux_language && feature['name:right:'+global.ux_language]) ||\n      (global.ux_language_fallback && feature['name:right:'+global.ux_language_fallback]) ||\n      feature['name:right'];\n  }\n  if (left && right) {\n      return left + \" - \" + right;\n  } else {\n    return (global.ux_language && feature['name:'+global.ux_language]) ||\n        (global.ux_language_fallback && feature['name:'+global.ux_language_fallback]) ||\n        feature.name;\n  }\n}\n",
    ux_language_text_source_ocean:
      "function() {\n  return (\n    (global.ux_language && feature['name:'+global.ux_language]) ||\n    (global.ux_language_fallback && feature['name:'+global.ux_language_fallback]) ||\n    feature['name'] || ''\n  ).split('').join(' ').replace(/\\s{3}/g, '\\n');\n}\n",
    feature_min_zoom_filter:
      'function() {\n  return feature.min_zoom === undefined || $zoom >= feature.min_zoom;\n}\n',
    building_extrude_height:
      'function() {\n  if (feature.min_height) {\n    return feature.height - feature.min_height;\n  } else if (!feature.height) {\n    return 5; // default extrusion\n  }\n  return feature.height;\n}\n',
    building_extrude_min_height:
      'function() {\n  return feature.min_height;\n}\n',
    feature_order:
      'function() {\n  if (feature.sort_rank) {\n    return feature.sort_rank\n  } else {\n    return 0;\n  }\n}\n',
    feature_order_half_more:
      'function() {\n  if (feature.sort_rank) {\n    return feature.sort_rank + 0.5;\n  } else {\n    return 0;\n  }\n}\n',
    population: {
      'class1-1m-up': {
        min: 1000000,
      },
      'class2-250k-1m': {
        min: 250000,
        max: 1000000,
      },
      'class3-100k-250k': {
        min: 100000,
        max: 250000,
      },
      'class4-30k-100k': {
        min: 30000,
        max: 100000,
      },
      'class5-until-30k': {
        max: 30000,
      },
    },
    political_view: '',
    shield: {
      getChild:
        "function(parentNode, childKey) {\n  return parentNode ? (parentNode[childKey] || parentNode['default']) : undefined;\n}\n",
      getStyle:
        "function(road) {\n  const styles = this.styles,\n        network = (road.network || road.all_networks || '').split(':'),\n        origPath = [\n            network[0],\n            network[1],\n            road.route_type || road.all_route_types,\n            // TODO:\n            // The shield text (like \"A-21M\") must be converted into a pattern (like \"A-##M\") to match\n            // with the PATTERN column in road_icon_masterlist.xlsm/RoadIcon.Configuration worksheet.\n            // Be aware that a # character means not only digits [0-9] but also arabic digits and others.\n            // See REGEX column in road_icon_masterlist.xlsm/RoadShieldOnSignRepresentation worksheet.\n            road.shield_text || road.all_shield_texts\n        ];\n  let depth = 3;\n  let style;\n  let path;\n  do {\n      if (depth < 3) {\n          path = origPath.slice();\n          path[depth] = 'default';\n      } else {\n          path = origPath;\n      }\n      style = this.getChild(this.getChild(this.getChild(this.getChild(styles, path[0]), path[1]), path[2]), path[3]);\n  } while (!style && depth--);\n  return style;\n}\n",
      styles: {
        default: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#F7ECB0',
                icon: 'road_shield--green_hexagon',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#F7ECB0',
                icon: 'road_shield--blue_rectangle_yellow',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        AF: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        AL: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_hexagon',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            5: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
        },
        DZ: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--red_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--red_rectangle',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--yellow_rectangle',
              },
            },
          },
        },
        AS: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        AO: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        AD: {
          default: {
            3: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--red_rectangle',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
          },
        },
        AR: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_pentagon',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
        },
        AM: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        AW: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        AU: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_pentagon',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--australia_2',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#588BC6',
                icon: 'road_shield--australia_3',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--australia_b',
              },
            },
            5: {
              default: {
                show: true,
                fontColor: '#F7ECB0',
                icon: 'road_shield--australia_5',
              },
            },
            6: {
              default: {
                show: true,
                fontColor: '#F7ECB0',
                icon: 'road_shield--australia_a',
              },
            },
          },
        },
        AT: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            5: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_oval',
              },
            },
          },
        },
        AZ: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--red_rectangle',
              },
              'AH#': {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
              'AH##': {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        BS: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        BH: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#588BC6',
                icon: 'road_shield--white_shield_m',
              },
            },
          },
        },
        BD: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        BB: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        BY: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--red_rectangle',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--red_rectangle',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        BE: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            6: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
        },
        BZ: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        BJ: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        BM: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        BO: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        BA: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--yellow_rectangle',
              },
            },
          },
        },
        BW: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#F7ECB0',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#F7ECB0',
                icon: 'road_shield--green_rectangle',
              },
            },
          },
        },
        BR: {
          default: {
            1: {
              2: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--brazil_a',
              },
            },
            2: {
              1: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--brazil_b',
              },
            },
          },
        },
        BN: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        BG: {
          default: {
            1: {
              2: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              1: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            3: {
              3: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            4: {
              4: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
          },
        },
        BF: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        BI: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        KH: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        CM: {
          default: {
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        CA: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#559856',
                icon: 'road_shield--canada_a',
              },
            },
          },
          AB: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_pentagon_round',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_oval',
              },
            },
          },
          BC: {
            1: {
              default: {
                show: true,
                fontColor: '#588AC6',
                icon: 'road_shield--CAN_british_columbia_1',
              },
            },
          },
          MB: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--CAN_manitoba_1',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--black_oval',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--CAN_manitoba_3',
              },
            },
          },
          NB: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--green_square_white',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--blue_square_white',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_square',
              },
            },
          },
          NL: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle_green',
              },
            },
          },
          NT: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--CAN_northw_territories_1',
              },
            },
          },
          NS: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--CAN_novia_scotia_1',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_shield',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--red_rectangle',
              },
            },
          },
          ON: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--CAN_ontario_1',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--CAN_ontario_2',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--CAN_ontario_3',
              },
            },
          },
          PE: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--CAN_prince_edward_isl_1_2',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--CAN_prince_edward_isl_1_2',
              },
            },
          },
          QC: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--CAN_quebec_1',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--CAN_quebec_2',
              },
            },
          },
          SK: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--CAN_saskatchewan_1',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#559856',
                icon: 'road_shield--CAN_saskatchewan_2',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#559856',
                icon: 'road_shield--CAN_saskatchewan_3',
              },
            },
          },
          YT: {
            1: {
              default: {
                show: true,
                fontColor: '#D66867',
                icon: 'road_shield--white_square_red',
              },
            },
          },
        },
        CV: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        KY: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        CF: {
          default: {
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        TD: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        CL: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_shield',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        CN: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        CX: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        CC: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        CO: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        KM: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        CD: {
          default: {
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        CG: {
          default: {
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        CR: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        CI: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        HR: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_hexagon',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--orange_rectangle',
              },
            },
            5: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
        },
        CU: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        CY: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#F7ECB0',
                icon: 'road_shield--green_hexagon',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#F7ECB0',
                icon: 'road_shield--blue_rectangle_yellow',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#F7ECB0',
                icon: 'road_shield--blue_rectangle_yellow',
              },
            },
          },
        },
        CZ: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--red_rectangle',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            5: {
              default: {
                show: false,
              },
            },
          },
        },
        DK: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--yellow_rectangle',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
        },
        DJ: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        DO: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        EC: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        EG: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#588BC6',
                icon: 'road_shield--white_shield_m',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_shield',
              },
            },
          },
        },
        GQ: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        ER: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        EE: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--red_rectangle',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--yellow_rectangle',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
        },
        ET: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        FK: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        FO: {
          default: {
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
        },
        FJ: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        FI: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--red_rectangle',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--yellow_rectangle',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
            5: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            6: {
              default: {
                show: false,
              },
            },
          },
        },
        FR: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--red_rectangle',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--red_rectangle',
              },
              'T#': {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
              'T##': {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
              'T###': {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--yellow_rectangle',
              },
              'M#': {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
              'M##': {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
              'M###': {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
              'M####': {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            6: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
          },
        },
        GF: {
          default: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        PF: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        GA: {
          default: {
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        GM: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        GE: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
          },
        },
        DE: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_hexagon',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--yellow_rectangle',
              },
            },
            4: {
              default: {
                show: false,
              },
            },
            5: {
              default: {
                show: false,
              },
            },
            6: {
              default: {
                show: false,
              },
            },
          },
        },
        GH: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        GI: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        GB: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            2: {
              'A#': {
                show: true,
                fontColor: '#F7ECB0',
                icon: 'road_shield--green_rectangle',
              },
              'A##': {
                show: true,
                fontColor: '#F7ECB0',
                icon: 'road_shield--green_rectangle',
              },
              'A###': {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
              'A####': {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
        },
        GR: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_hexagon',
              },
              '#': {
                show: true,
                fontColor: '#588BC6',
                icon: 'road_shield--greece_a',
              },
              '##': {
                show: true,
                fontColor: '#588BC6',
                icon: 'road_shield--greece_a',
              },
              '###': {
                show: true,
                fontColor: '#588BC6',
                icon: 'road_shield--greece_a',
              },
              '#a': {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
              '##a': {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
              '###a': {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
              '#α': {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
              '##α': {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
              '###α': {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
          },
        },
        GP: {
          default: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        GU: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        GT: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_shield',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_shield',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        GN: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        GW: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        GY: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        HT: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        HN: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        HK: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#588AC6',
                icon: 'road_shield--hongkong_a',
              },
            },
          },
        },
        HU: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_pentagon',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_pentagon',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
        },
        IS: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
        },
        IN: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--india_a',
              },
              'AH#': {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--india_b',
              },
              'AH##': {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--india_b',
              },
              'NE-#': {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
              'NE-##': {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
        },
        ID: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        IR: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        IQ: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
              'م#': {
                show: true,
                fontColor: '#588BC6',
                icon: 'road_shield--white_shield_m',
              },
              'م##': {
                show: true,
                fontColor: '#588BC6',
                icon: 'road_shield--white_shield_m',
              },
              'M#': {
                show: true,
                fontColor: '#588BC6',
                icon: 'road_shield--white_shield_m',
              },
              'M##': {
                show: true,
                fontColor: '#588BC6',
                icon: 'road_shield--white_shield_m',
              },
            },
          },
        },
        IE: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#F7ECB0',
                icon: 'road_shield--green_rectangle',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        IM: {
          default: {
            2: {
              'A#': {
                show: true,
                fontColor: '#F7ECB0',
                icon: 'road_shield--green_rectangle',
              },
              'A##': {
                show: true,
                fontColor: '#F7ECB0',
                icon: 'road_shield--green_rectangle',
              },
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        IL: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#588BC6',
                icon: 'road_shield--israel_a',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#D66767',
                icon: 'road_shield--israel_b',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#569956',
                icon: 'road_shield--israel_c',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#8B4513',
                icon: 'road_shield--israel_d',
              },
            },
          },
        },
        IT: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_octagon',
              },
              'RA#': {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
              'RA##': {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
          },
        },
        JM: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        JP: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--japan_ew_a',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--japan_ue_a',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--japan_nr_a',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--japan_mr_a',
              },
            },
            5: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--japan_mr_a',
              },
            },
          },
        },
        JO: {
          default: {
            1: {
              'M#': {
                show: true,
                fontColor: '#588BC6',
                icon: 'road_shield--white_shield_m',
              },
              'M##': {
                show: true,
                fontColor: '#588BC6',
                icon: 'road_shield--white_shield_m',
              },
              'م#': {
                show: true,
                fontColor: '#588BC6',
                icon: 'road_shield--white_shield_m',
              },
              'م##': {
                show: true,
                fontColor: '#588BC6',
                icon: 'road_shield--white_shield_m',
              },
              default: {
                show: true,
                fontColor: '#F7ECB0',
                icon: 'road_shield--green_rectangle',
              },
            },
          },
        },
        KZ: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
          },
        },
        KE: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#F7ECB0',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#F7ECB0',
                icon: 'road_shield--green_rectangle',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
            5: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
        },
        XK: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_hexagon',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--orange_rectangle',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        KP: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        KW: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#588BC6',
                icon: 'road_shield--white_shield_m',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            3: {
              'ROAD #': {
                show: true,
                fontColor: '#588BC6',
                icon: 'road_shield--kuwait_a',
              },
              'ROAD ##': {
                show: true,
                fontColor: '#569956',
                icon: 'road_shield--kuwait_c',
              },
              'ROAD ###': {
                show: true,
                fontColor: '#588BC6',
                icon: 'road_shield--kuwait_b',
              },
            },
          },
        },
        KG: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        LA: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        LV: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--red_rectangle',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
          },
        },
        LB: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#588BC6',
                icon: 'road_shield--white_shield_m',
              },
            },
          },
        },
        LS: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        LR: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        LY: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        LI: {
          default: {
            3: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
          },
        },
        LT: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--red_rectangle',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--yellow_rectangle',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
          },
        },
        LU: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              'A#': {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
              'A##': {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--red_rectangle',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--luxembourg_c',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--yellow_rectangle',
              },
            },
          },
        },
        MO: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        MK: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        MG: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        MW: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#F7ECB0',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#F7ECB0',
                icon: 'road_shield--green_rectangle',
              },
            },
            3: {
              default: {
                show: false,
              },
            },
          },
        },
        MY: {
          default: {
            1: {
              'E#': {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--orange_hexagon',
              },
              'E##': {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--orange_hexagon',
              },
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--orange_hexagon',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#CC5252',
                icon: 'road_shield--orange_hexagon',
              },
            },
          },
        },
        MV: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        ML: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        MT: {
          default: {
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
          },
        },
        MQ: {
          default: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        MR: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        MU: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        YT: {
          default: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        MX: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--mexico_a',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--mexico_b',
              },
            },
          },
        },
        MD: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--romania_b',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--yellow_pentagon',
              },
            },
          },
        },
        MC: {
          default: {
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--yellow_rectangle',
              },
            },
          },
        },
        MN: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        ME: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        MA: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--red_rectangle',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--yellow_rectangle',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
        },
        MZ: {
          default: {
            1: {
              'EN#': {
                show: true,
                fontColor: '#F7ECB0',
                icon: 'road_shield--green_rectangle',
              },
              'EN##': {
                show: true,
                fontColor: '#F7ECB0',
                icon: 'road_shield--green_rectangle',
              },
              default: {
                show: true,
                fontColor: '#F7ECB0',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        MM: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        NA: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#F7ECB0',
                icon: 'road_shield--namibia_a',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#F7ECB0',
                icon: 'road_shield--green_rectangle',
              },
              'C##': {
                show: true,
                fontColor: '#F7ECB0',
                icon: 'road_shield--southafrica_b',
              },
              'MR##': {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
          },
        },
        NP: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        NL: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--red_rectangle',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--yellow_rectangle',
              },
            },
            6: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--netherlands_c',
              },
            },
          },
        },
        NC: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        NZ: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--newzealand_a',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--newzealand_b',
              },
            },
          },
        },
        NI: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        NE: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        NG: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        MP: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        NO: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
            4: {
              default: {
                show: false,
              },
            },
          },
        },
        OM: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#588BC6',
                icon: 'road_shield--white_shield_m',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#F7ECB0',
                icon: 'road_shield--blue_rectangle',
              },
            },
          },
        },
        PK: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
          },
        },
        PS: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#588BC6',
                icon: 'road_shield--israel_a',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#D66767',
                icon: 'road_shield--israel_b',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#569956',
                icon: 'road_shield--israel_c',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#8B4513',
                icon: 'road_shield--israel_d',
              },
            },
          },
        },
        PA: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_shield',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        PY: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        PE: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--peru_1',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        PH: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_pentagon',
              },
              'E#': {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--yellow_pentagon',
              },
              'E2 AH26': {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--yellow_pentagon',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_pentagon',
              },
            },
          },
        },
        PL: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--red_rectangle',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--red_rectangle',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--red_rectangle',
              },
            },
            5: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--yellow_rectangle',
              },
            },
            6: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--yellow_rectangle',
              },
            },
          },
        },
        PT: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--red_rectangle',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
            5: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
            6: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
        },
        PR: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--puerto_rico_1',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--puerto_rico_2',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#F7ECB0',
                icon: 'road_shield--puerto_rico_3',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_oval',
              },
            },
          },
        },
        QA: {
          default: {
            1: {
              'M##': {
                show: true,
                fontColor: '#588BC6',
                icon: 'road_shield--white_shield_m',
              },
              'م##': {
                show: true,
                fontColor: '#588BC6',
                icon: 'road_shield--white_shield_m',
              },
              default: {
                show: true,
                fontColor: '#569956',
                icon: 'road_shield--qatar_b',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#569956',
                icon: 'road_shield--qatar_b',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#569956',
                icon: 'road_shield--qatar_b',
              },
            },
          },
        },
        RE: {
          default: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        RO: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--romania_b',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--romania_c',
              },
            },
            5: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--yellow_rectangle',
              },
            },
          },
        },
        RU: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            5: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
          },
        },
        RW: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#f7ecb0',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#f7ecb0',
                icon: 'road_shield--green_rectangle',
              },
            },
          },
        },
        BL: {
          default: {
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        SH: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        KN: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        VC: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        SM: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        ST: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        SA: {
          default: {
            1: {
              'M#': {
                show: true,
                fontColor: '#588BC6',
                icon: 'road_shield--white_shield_m',
              },
              'M##': {
                show: true,
                fontColor: '#588BC6',
                icon: 'road_shield--white_shield_m',
              },
              'م#': {
                show: true,
                fontColor: '#588BC6',
                icon: 'road_shield--white_shield_m',
              },
              'م##': {
                show: true,
                fontColor: '#588BC6',
                icon: 'road_shield--white_shield_m',
              },
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--saudiarabia_1',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--saudiarabia_2',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--saudiarabia_3',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--saudiarabia_3',
              },
            },
          },
        },
        SN: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--red_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        SC: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        RS: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--yellow_rectangle',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--yellow_rectangle',
              },
            },
            5: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--yellow_rectangle',
              },
            },
          },
        },
        SL: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        SG: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
          },
        },
        SK: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              'D#': {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--red_rectangle',
              },
              'D##': {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--red_rectangle',
              },
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--red_rectangle',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            5: {
              default: {
                show: false,
              },
            },
          },
        },
        SI: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_hexagon',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--yellow_rectangle',
              },
            },
            5: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--yellow_rectangle',
              },
            },
          },
        },
        SO: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        ZA: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#F7ECB0',
                icon: 'road_shield--southafrica_a',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#F7ECB0',
                icon: 'road_shield--southafrica_b',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#F7ECB0',
                icon: 'road_shield--southafrica_d',
              },
            },
          },
        },
        KR: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--korea_1',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#588BC6',
                icon: 'road_shield--korea_2',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--korea_3',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#588BC6',
                icon: 'road_shield--korea_4',
              },
            },
            5: {
              default: {
                show: true,
                fontColor: '#588BC6',
                icon: 'road_shield--korea_5',
              },
            },
          },
        },
        SS: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        ES: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
              'CV-##': {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--orange_rectangle',
              },
              'A-##X': {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--orange_rectangle',
              },
              'BA-##': {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--red_rectangle',
              },
              'SA-##': {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--red_rectangle',
              },
              'SG-##': {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--red_rectangle',
              },
              'SO-##': {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--red_rectangle',
              },
              'LZ-##': {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--red_rectangle',
              },
              'FV-#': {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--red_rectangle',
              },
              'P-##': {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--red_rectangle',
              },
              'FE-##': {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--red_rectangle',
              },
              'CG-#.#': {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
              'VG-#.#': {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--red_rectangle',
              },
            },
          },
          AN: {
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--orange_rectangle',
              },
            },
            5: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            6: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--yellow_rectangle',
              },
            },
          },
          AR: {
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--orange_rectangle',
              },
            },
            5: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            6: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--yellow_rectangle',
              },
            },
          },
          AS: {
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--orange_rectangle',
              },
            },
            5: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            6: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--yellow_rectangle',
              },
            },
          },
          IB: {
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--orange_rectangle',
              },
            },
            5: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            6: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--yellow_rectangle',
              },
            },
          },
          CN: {
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--orange_rectangle',
              },
            },
            5: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            6: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--yellow_rectangle',
              },
            },
          },
          CB: {
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--orange_rectangle',
              },
            },
            5: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            6: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--yellow_rectangle',
              },
            },
          },
          CM: {
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--orange_rectangle',
              },
            },
            5: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            6: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--yellow_rectangle',
              },
            },
          },
          CL: {
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--orange_rectangle',
              },
            },
            5: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            6: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--yellow_rectangle',
              },
              'VP-####': {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
          },
          CT: {
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--orange_rectangle',
              },
            },
            5: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            6: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--yellow_rectangle',
              },
            },
          },
          VC: {
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--orange_rectangle',
              },
            },
            5: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            6: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--yellow_rectangle',
              },
            },
          },
          PV: {
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--orange_rectangle',
              },
            },
            5: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            6: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--yellow_rectangle',
              },
            },
          },
          EX: {
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--orange_rectangle',
              },
            },
            5: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            6: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--yellow_rectangle',
              },
            },
          },
          GA: {
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--orange_rectangle',
              },
            },
            5: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            6: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
          },
          RI: {
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--orange_rectangle',
              },
            },
            5: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            6: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
          MD: {
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--orange_rectangle',
              },
            },
            5: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            6: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
          MC: {
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--orange_rectangle',
              },
            },
            5: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            6: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
          NC: {
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--orange_rectangle',
              },
            },
            5: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            6: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        LK: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        SD: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        SR: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        SZ: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#F7ECB0',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#F7ECB0',
                icon: 'road_shield--green_rectangle',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#F7ECB0',
                icon: 'road_shield--green_rectangle',
              },
            },
          },
        },
        SE: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            4: {
              default: {
                show: false,
              },
            },
          },
        },
        CH: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--red_hexagon',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
          },
        },
        SY: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        TW: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--taiwan_a',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--taiwan_c',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--taiwan_b',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
            5: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
        },
        TZ: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        TH: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--thailand_3',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--thailand_2',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--thailand_1',
              },
            },
            5: {
              default: {
                show: true,
                fontColor: '#F7ECB0',
                icon: 'road_shield--blue_rectangle_yellow',
              },
            },
          },
        },
        TG: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        TT: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        TN: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--red_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--red_rectangle',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--yellow_rectangle',
              },
            },
          },
        },
        TR: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--orange_rectangle',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
        },
        UG: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        US: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--usa_a',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_shield',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          AL: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          AK: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          AZ: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          AR: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          CA: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          CO: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          CT: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          DE: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          FL: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          GA: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          HI: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          ID: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          IL: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          IN: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          IA: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          KS: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          KY: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          LA: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          ME: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          MD: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          MA: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          MI: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          MN: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          MS: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          MO: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          MT: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          NE: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          NV: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          NH: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          NJ: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          NM: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          NY: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          NC: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          ND: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          OH: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          OK: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          OR: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          PA: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          RI: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          SC: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          SD: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          TN: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          TX: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          UT: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          VT: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          VA: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          WA: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          DC: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          WV: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          WI: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
          WY: {
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
        },
        UA: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            5: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
          },
        },
        AE: {
          default: {
            1: {
              'E##': {
                show: true,
                fontColor: '#FECE94',
                icon: 'road_shield--u_a_emirates_1',
              },
              'E###': {
                show: true,
                fontColor: '#FECE94',
                icon: 'road_shield--u_a_emirates_1',
              },
              'إ##': {
                show: true,
                fontColor: '#FECE94',
                icon: 'road_shield--u_a_emirates_1',
              },
              'إ###': {
                show: true,
                fontColor: '#FECE94',
                icon: 'road_shield--u_a_emirates_1',
              },
              default: {
                show: true,
                fontColor: '#588BC6',
                icon: 'road_shield--white_shield_m',
              },
            },
            2: {
              'ش###': {
                show: true,
                fontColor: '#FECE94',
                icon: 'road_shield--u_a_emirates_2b',
              },
              'S###': {
                show: true,
                fontColor: '#FECE94',
                icon: 'road_shield--u_a_emirates_2b',
              },
              'SH##': {
                show: true,
                fontColor: '#FECE94',
                icon: 'road_shield--u_a_emirates_2b',
              },
              'AJ###': {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--u_a_emirates_2c',
              },
              '###ع': {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--u_a_emirates_2c',
              },
              'ف##': {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--u_a_emirates_2c',
              },
              'F##': {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--u_a_emirates_2c',
              },
              default: {
                show: true,
                fontColor: '#FECE94',
                icon: 'road_shield--u_a_emirates_2a',
              },
            },
          },
        },
        UY: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_pentagon',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        VI: {
          default: {
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--us_virgin_islands',
              },
            },
          },
        },
        UZ: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
              'E##': {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        VA: {
          default: {
            4: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
          },
        },
        VE: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--venezuela_1',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--venezuela_2',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--white_rectangle',
              },
            },
          },
        },
        VN: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#FFFFFF',
                icon: 'road_shield--blue_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--yellow_rectangle',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            4: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            5: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        YE: {
          default: {
            default: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        ZM: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
            3: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
        ZW: {
          default: {
            1: {
              default: {
                show: true,
                fontColor: '#F7ECB0',
                icon: 'road_shield--green_rectangle',
              },
            },
            2: {
              default: {
                show: true,
                fontColor: '#323232',
                icon: 'road_shield--generic',
              },
            },
          },
        },
      },
      size: [
        [6, '110%'],
        [15, '120%'],
      ],
      repeat_distance: [
        [10, '150px'],
        [13, '200px'],
        [20, '70px'],
      ],
      text: {
        font: {
          fill: 'black',
          weight: 450,
          size: [
            [6, '8px'],
            [15, '10px'],
            [20, '13px'],
          ],
        },
      },
    },
    poi: {
      default: {
        visible: false,
      },
      computePriority:
        'function (basePriority, feature) {\n  return (basePriority * 1000 + (feature.min_zoom || 0)) / 1000;\n}\n',
    },
    scene_background_color: 'rgb(245,248,250)',
    scene_sky_zenith_color: '#347BC0',
    scene_sky_horizon_color: '#EDF2F9',
    scene_sky_fog_color: '#FFFFFF',
    text_font_family: 'FiraGO',
    text_fill: '#0F1621',
    text_outline: 'global.land_color',
    text_fill_address: 'rgb(122,147,153)',
    text_visible_admin: true,
    icon_visible_populated_places: true,
    text_visible_populated_places: true,
    text_visible_neighbourhoods: true,
    text_visible_water_labels: true,
    text_visible_building: true,
    text_visible_address: true,
    text_visible_roads: true,
    text_visible_ferry: true,
    text_visible_ski_run: true,
    text_visible_chair_lift: true,
    shields_visible: true,
    ux_language: 'en',
    icon_size: [
      [11, '11px'],
      [20, '24px'],
    ],
    icon: {
      text: {
        font: {
          weight: 'normal',
          size: [
            [13, '10px'],
            [14, '11px'],
            [17, '12px'],
            [19, '12px'],
            [20, '14px'],
          ],
          stroke: {
            color: 'global.text_outline',
            width: [
              [12, '3px'],
              [16, '4px'],
            ],
          },
        },
      },
    },
    places: {
      country: {
        label: {
          font: {
            transform: 'uppercase',
            fill: [
              [3, 'rgba(110, 125, 130, 0.8)'],
              [4, 'rgba(110, 125, 130, 0.66)'],
            ],
            size: [
              [3, '11px'],
              [4, '12px'],
              [5, '15px'],
              [6, '17px'],
              [7, '18px'],
            ],
            stroke: {
              color: [
                [3, 'rgba(250, 253, 255, 0.2)'],
                [5, 'rgba(250, 253, 255, 0.8)'],
              ],
              width: '1px',
            },
          },
        },
        large: {
          label: {
            font: {
              size: [
                [3, '14px'],
                [5, '15px'],
                [6, '20px'],
                [7, '26px'],
                [8, '28px'],
              ],
            },
          },
        },
      },
      region: {
        label: {
          font: {
            transform: 'uppercase',
            size: [
              [3, '11px'],
              [4, '12px'],
              [5, '15px'],
              [19, '16px'],
            ],
            fill: [
              [3, 'rgba(0, 0, 20, 0.3)'],
              [4, 'rgba(90, 90, 90, 0.6)'],
            ],
            stroke: {
              color: 'rgba(250, 253, 255, 0.2)',
              width: '1px',
            },
          },
        },
      },
      populated: {
        default: {
          zoom: {
            min: 4,
          },
          icon: {
            size: [
              [9, '4px'],
              [10, '0px'],
            ],
          },
          label: {
            font: {
              size: [
                [5, '9px'],
                [8, '10px'],
                [12, '11px'],
              ],
            },
          },
        },
        '1m-up': {
          label: {
            font: {
              size: [
                [4, '15px'],
                [7, '15px'],
                [8, '17px'],
                [9, '18px'],
                [13, '26px'],
              ],
              stroke: {
                width: [
                  [0, '1px'],
                  [6, '1px'],
                  [7, '1.25px'],
                  [8, '1.5px'],
                  [10, '1.5px'],
                  [11, '2px'],
                  [12, '2px'],
                  [13, '2.25px'],
                ],
              },
            },
          },
          capital: {
            zoom: {
              max: 14,
            },
            icon: {
              size: [
                [9, '8px'],
                [10, '0px'],
              ],
            },
          },
          region_capital: {
            zoom: {
              max: 13,
            },
            icon: {
              size: [
                [9, '8px'],
                [10, '0px'],
              ],
            },
          },
          county_capital: {
            zoom: {
              max: 14,
            },
            icon: {
              size: [
                [9, '8px'],
                [10, '0px'],
              ],
            },
          },
        },
        '250k-1m': {
          label: {
            font: {
              size: [
                [0, '13px'],
                [7, '13px'],
                [8, '14px'],
                [9, '15px'],
                [10, '17px'],
                [11, '19px'],
                [12, '20px'],
                [13, '22px'],
                [14, '24px'],
              ],
              stroke: {
                width: [
                  [0, '1px'],
                  [6, '1px'],
                  [7, '1.25px'],
                  [8, '1.5px'],
                  [11, '1.5px'],
                  [12, '1.75px'],
                  [13, '1.75px'],
                  [14, '2px'],
                ],
              },
            },
          },
          capital: {
            zoom: {
              max: 13,
            },
            icon: {
              size: [
                [9, '6px'],
                [10, '0px'],
              ],
            },
          },
          region_capital: {
            zoom: {
              max: 13,
            },
            icon: {
              size: [
                [9, '6px'],
                [10, '0px'],
              ],
            },
          },
          county_capital: {
            zoom: {
              max: 14,
            },
            icon: {
              size: [
                [9, '6px'],
                [10, '0px'],
              ],
            },
          },
        },
        '100k-250k': {
          label: {
            font: {
              size: [
                [5, '11px'],
                [6, '11px'],
                [7, '12px'],
                [8, '12px'],
                [9, '13.5px'],
                [10, '14.5px'],
                [11, '15.5px'],
                [12, '17.5px'],
                [13, '19px'],
                [14, '22px'],
              ],
              stroke: {
                width: [
                  [5, '2px'],
                  [9, '2.5px'],
                  [10, '2.5px'],
                  [11, '2.5px'],
                  [12, '2.75px'],
                  [13, '2px'],
                  [14, '2.25px'],
                ],
              },
            },
          },
          capital: {
            zoom: {
              max: 13,
            },
            icon: {
              size: [
                [9, '5px'],
                [10, '0px'],
              ],
            },
          },
          region_capital: {
            zoom: {
              max: 13,
            },
            icon: {
              size: [
                [9, '5px'],
                [10, '0px'],
              ],
            },
          },
          county_capital: {
            zoom: {
              max: 14,
            },
            icon: {
              size: [
                [9, '5px'],
                [10, '0px'],
              ],
            },
          },
        },
        '30k-100k': {
          label: {
            font: {
              size: [
                [5, '10px'],
                [6, '10px'],
                [7, '11px'],
                [9, '11px'],
                [10, '12px'],
                [11, '13px'],
                [12, '15px'],
                [13, '17px'],
                [14, '18px'],
              ],
              stroke: {
                width: '1px',
              },
            },
          },
          capital: {
            zoom: {
              max: 14,
            },
            icon: {
              size: [
                [9, '4px'],
                [10, '0px'],
              ],
            },
          },
          region_capital: {
            zoom: {
              max: 13,
            },
            icon: {
              size: [
                [9, '4px'],
                [10, '0px'],
              ],
            },
          },
          county_capital: {
            zoom: {
              max: 14,
            },
            icon: {
              size: [
                [9, '4px'],
                [10, '0px'],
              ],
            },
          },
        },
        'until-30k': {
          label: {
            font: {
              size: [
                [5, '9px'],
                [6, '9px'],
                [7, '10px'],
                [9, '10px'],
                [10, '11px'],
                [11, '11px'],
                [12, '12px'],
                [13, '14px'],
                [14, '15px'],
              ],
              stroke: {
                width: '2px',
              },
            },
          },
          capital: {
            zoom: {
              max: 14,
            },
            icon: {
              size: [
                [9, '4px'],
                [10, '0px'],
              ],
            },
          },
          region_capital: {
            zoom: {
              max: 13,
            },
            icon: {
              size: [
                [9, '4px'],
                [10, '0px'],
              ],
            },
          },
          county_capital: {
            zoom: {
              max: 14,
            },
            icon: {
              size: [
                [9, '4px'],
                [10, '0px'],
              ],
            },
          },
          town: {
            icon: {
              size: [
                [9, '4px'],
                [10, '0px'],
              ],
            },
          },
          village: {
            label: {
              font: {
                stroke: {
                  width: '2px',
                },
              },
            },
          },
        },
        hamlet: {
          zoom: {
            max: 16,
          },
          label: {
            font: {
              transform: 'uppercase',
              size: [
                [13, '11px'],
                [14, '12.5px'],
                [15, '13px'],
              ],
              stroke: {
                width: '1px',
              },
            },
          },
        },
      },
      borough: {
        zoom: {
          max: 15,
        },
        label: {
          font: {
            fill: 'rgb(90,90,120)',
            size: [
              [11, '11px'],
              [12, '12.5px'],
              [13, '14.5px'],
              [14, '15.5px'],
            ],
            stroke: {
              color: [
                [13, 'rgba(240, 245, 247, .70)'],
                [14, 'rgba(237, 242, 244, .70)'],
              ],
              width: '3px',
            },
          },
        },
      },
    },
    place_class1_color: [
      [0, 'rgb(50, 50, 50)'],
      [6, 'rgb(50, 50, 50)'],
      [7, 'rgb(20, 20, 40)'],
      [9, 'rgb(20, 20, 40)'],
      [10, 'rgba(0, 0, 20, .88)'],
      [11, 'rgba(0, 0, 20, .78)'],
      [12, 'rgba(0, 0, 20, .78)'],
      [13, 'rgba(0, 0, 20, .72)'],
    ],
    place_class1_outline_color: [
      [0, 'rgba(250,253,255, .01)'],
      [4, 'rgba(250,253,255, .01)'],
      [5, 'rgba(250,253,255, .47)'],
      [6, 'rgba(250,253,255, .47)'],
      [7, 'rgba(250,253,255, .58)'],
      [8, 'rgba(240,244,245, .7)'],
    ],
    place_class2_color: [
      [0, 'rgb(60, 60, 80)'],
      [6, 'rgb(60, 60, 80)'],
      [7, 'rgb(30, 30, 50)'],
      [9, 'rgb(30, 30, 50)'],
      [10, 'rgba(20, 20, 40, .86)'],
      [11, 'rgba(0, 0, 30, 0.78)'],
      [12, 'rgba(0, 0, 30, 0.78)'],
      [13, 'rgba(0, 0, 30, 0.70)'],
      [14, 'rgba(0, 0, 30, 0.58)'],
    ],
    place_class2_outline_color: [
      [0, 'rgba(250, 253, 255, .01)'],
      [4, 'rgba(250, 253, 255, .01)'],
      [5, 'rgba(250, 253, 255, .47)'],
      [6, 'rgba(250, 253, 255, .47)'],
      [7, 'rgba(250, 253, 255, .58)'],
      [8, 'rgba(250, 253, 255, .70)'],
      [11, 'rgba(250, 253, 255, .70)'],
      [12, 'rgba(240, 244, 245, .70)'],
    ],
    place_class3_color: [
      [0, 'rgb(70, 70, 90)'],
      [6, 'rgb(70, 70, 90)'],
      [7, 'rgb(40, 40, 60)'],
      [9, 'rgb(40, 40, 60)'],
      [10, 'rgba(30, 30, 50, .86)'],
      [11, 'rgba(0, 0, 0, .78)'],
      [12, 'rgba(0, 0, 0, .70)'],
      [12, 'rgba(0, 0, 0, .70)'],
      [14, 'rgba(0, 0, 0, .58)'],
    ],
    place_class3_outline_color: [
      [0, 'rgba(250, 253, 255, .07)'],
      [4, 'rgba(250, 253, 255, .07)'],
      [5, 'rgba(250, 253, 255, .47)'],
      [6, 'rgba(250, 253, 255, .47)'],
      [7, 'rgba(250, 253, 255, .58)'],
      [8, 'rgba(250, 253, 255, .70)'],
      [11, 'rgba(250, 253, 255, .70)'],
      [12, 'rgba(240, 244, 245, .70)'],
    ],
    place_class4_color: [
      [0, 'rgb(70, 70, 90)'],
      [6, 'rgb(70, 70, 90)'],
      [7, 'rgb(50, 50, 70)'],
      [9, 'rgb(50, 50, 70)'],
      [10, 'rgb(40, 40, 60)'],
      [11, 'rgb(40, 40, 60)'],
      [12, 'rgba(0, 0, 0, .86)'],
      [13, 'rgba(0, 0, 0, .78)'],
      [14, 'rgba(0, 0, 0, .70)'],
    ],
    place_class4_outline_color: [
      [0, 'rgba(250, 253, 255, .07)'],
      [4, 'rgba(250, 253, 255, .07)'],
      [5, 'rgba(250, 253, 255, .47)'],
      [6, 'rgba(250, 253, 255, .47)'],
      [7, 'rgba(250, 253, 255, .58)'],
      [8, 'rgba(250, 253, 255, .70)'],
      [13, 'rgba(250, 253, 255, .70)'],
      [14, 'rgba(240, 244, 245, .70)'],
    ],
    place_class5_color: [
      [0, 'rgb(70, 70, 90)'],
      [6, 'rgb(70, 70, 90)'],
      [7, 'rgb(60, 60, 80)'],
      [9, 'rgb(60, 60, 80)'],
      [10, 'rgb(50, 50, 70)'],
      [11, 'rgb(50, 50, 70)'],
      [12, 'rgba(20, 20, 40, .86)'],
      [13, 'rgba(20, 20, 40, .78)'],
      [14, 'rgba(0, 0, 0, .70)'],
    ],
    place_class5_outline_color: [
      [0, 'rgba(250, 253, 255, .07)'],
      [4, 'rgba(250, 253, 255, .07)'],
      [5, 'rgba(250, 253, 255, .47)'],
      [6, 'rgba(250, 253, 255, .47)'],
      [7, 'rgba(250, 253, 255, .58)'],
      [8, 'rgba(250, 253, 255, .70)'],
      [13, 'rgba(250, 253, 255, .70)'],
      [14, 'rgba(240, 244, 245, .70)'],
    ],
    place_capital_color: [
      [0, 'rgb(50, 50, 50)'],
      [7, 'rgb(20, 20, 20)'],
      [10, 'rgba(0, 0, 20, .9)'],
      [11, 'rgba(0, 0, 20, .7)'],
    ],
    place_capital_outline_color: [
      [0, 'rgba(250, 253, 255, .1)'],
      [5, 'rgba(250, 253, 255, .5)'],
      [7, 'rgba(250, 253, 255, .6)'],
      [8, 'rgba(240, 244, 245, .7)'],
    ],
    place_village_font_size: [
      [7, '10px'],
      [8, '10.5px'],
      [9, '10.5px'],
      [10, '11.5px'],
      [11, '11.5px'],
      [12, '12px'],
      [13, '14px'],
      [14, '15px'],
    ],
    place_hamlet_color: 'rgb(120, 120, 120)',
    place_hamlet_outline_color: [
      [0, 'rgba(240, 244, 245, .78)'],
      [11, 'rgba(240, 244, 245, .78)'],
      [12, 'rgba(240, 244, 245, .70)'],
      [13, 'rgba(240, 244, 245, .70)'],
      [14, 'rgba(240, 244, 245, .62)'],
    ],
    land_color: 'rgb (245, 248, 250)',
    beach_color: 'rgb (255, 248, 195)',
    glacier_color: 'rgb (232, 242, 255)',
    woodland_color: 'rgb (186, 247, 176)',
    forest_color: [
      [0, 'rgb(175,224,164)'],
      [8, 'rgb(223, 243, 224)'],
      [9, 'rgb(217, 241, 214)'],
      [11, 'rgb(213, 237, 206)'],
      [15, 'rgb(213, 237, 206)'],
      [16, 'rgb(206, 234, 197)'],
    ],
    water_color: 'rgb (153, 206, 255)',
    water_river_line_width: [
      [10, '1px'],
      [13, '2px'],
      [14, '3px'],
      [15, '4px'],
      [16, '7px'],
      [17, '15px'],
      [18, '28px'],
      [20, '46px'],
    ],
    water: {
      default: {
        label: {
          font: {
            weight: 'normal',
            size: [
              [11, '10px'],
              [12, '11px'],
              [15, '11px'],
              [16, '12px'],
            ],
            style: 'italic',
          },
        },
      },
      ocean: {
        label: {
          font: {
            size: [
              [0, '10px'],
              [1, '11px'],
              [2, '13px'],
              [3, '14px'],
              [4, '16px'],
              [6, '16px'],
              [7, '17px'],
              [8, '20px'],
            ],
            style: 'italic',
          },
        },
      },
      bay: {
        label: {
          font: {
            size: [
              [11, '10px'],
              [12, '11px'],
              [15, '11px'],
              [16, '12px'],
            ],
            stroke: {
              width: '2px',
            },
          },
        },
      },
      lake: {
        label: {
          font: {
            style: 'normal',
            stroke: {
              width: '1px',
            },
          },
        },
      },
    },
    water_deep_color: 'rgb(137, 196, 250)',
    water_label_sea_color: 'rgb(77,147,221)',
    water_label_lake_color: 'rgb(34,105,191)',
    water_label_lake_outline_color: 'rgba(204, 230, 255, .47)',
    water_label_ocean_color: 'rgb(77, 147, 221)',
    water_label_bay_color: 'rgb(34, 105, 191)',
    water_label_bay_outline_color: 'rgba(204, 230, 255, .47)',
    landuse_default_label_color: [
      [15, 'rgb(95,100,110)'],
      [16, 'rgb(105,110,120)'],
    ],
    landuse_default_label_font_size: [
      [12, '10px'],
      [13, '11px'],
      [15, '11px'],
      [16, '12px'],
    ],
    landuse_default_label_font_stroke_color: 'rgba(237,245,238,.58)',
    landuse_default_label_font_stroke_width: '1px',
    landuse_park_label_color: 'rgb(62,120,100)',
    landuse_park_label_outline_color: [
      [11, 'rgba(215,242,205,.58)'],
      [12, 'rgba(208,238,195,.58)'],
    ],
    landuse_forest_label_color: 'rgb(78,133,93)',
    landuse_forest_label_outline_color: 'rgba(230,250,225,.58)',
    landuse_gray_label_color: 'rgb(70,90,110)',
    landuse_gray_label_outline_color: [
      [13, 'rgba(235,243,250,.58)'],
      [14, 'rgba(225,233,240,.58)'],
    ],
    landuse_pedestrian_label_color: [
      [15, 'rgb(95,100,110)'],
      [16, 'rgb(105,110,120)'],
    ],
    landuse_pedestrian_label_outline_color: 'rgba(235,243,250,.58)',
    landuse_hospital_label_color: [
      [15, 'rgb(115,100,110)'],
      [16, 'rgb(125,105,115)'],
    ],
    landuse_industrial_label_color: 'rgb(70,90,110)',
    landuse_industrial_outline_color: 'rgba(235,243,250,.58)',
    landuse_hospital_label_outline_color: 'rgba(245,237,240,.58)',
    landuse_golf_course_label_color: 'rgb(62,120,110)',
    landuse_golf_course_label_outline_color: [
      [11, 'rgba(215,242,205,.58)'],
      [12, 'rgba(194,237,196,.58)'],
    ],
    landuse_beach_label_color: 'rgb(115,114,94)',
    landuse_beach_label_outline_color: 'rgba(250,240,170,.58)',
    landuse_university_label_color: [
      [15, 'rgb(95,100,110)'],
      [16, 'rgb(105,110,120)'],
    ],
    landuse_university_label_outline_color: [
      [15, 'rgba(240,237,232,.58)'],
      [16, 'rgba(245,242,237,.58)'],
    ],
    landuse_parking_label_color: 'rgb(7,78,159)',
    landuse_military_label_color: 'rgb(131,129,156)',
    landuse_military_label_outline_color: 'rgba(242,245,252,.58)',
    builtup_area_color: [
      [0, 'rgb(225, 234, 240)'],
      [10, 'rgb(237, 242, 245)'],
      [13, 'rgb(240, 244, 247)'],
      [14, 'rgb(237, 242, 245)'],
      [15, 'rgb(229, 236, 240)'],
      [16, 'rgb(225, 233, 237)'],
    ],
    builtup_area_outline_color: 'rgba(237,237,237,.5)',
    builtup_area_outline_width: [
      [13, 0],
      [14, '2px'],
    ],
    golf_course_color: [
      [11, 'rgb(198,235,185)'],
      [12, 'rgb(168,232,165)'],
      [13, 'rgb(168,232,165)'],
      [14, 'rgb(162,232,170)'],
      [15, 'rgb(162,232,170)'],
      [16, 'rgb(147,233,162)'],
    ],
    hospital_color: 'rgb (238, 222, 229)',
    industrial_color: [
      [0, 'rgb(228, 234, 240)'],
      [11, 'rgb(225, 230, 234)'],
      [14, 'rgb(218, 225, 228)'],
      [15, 'rgb(211, 220, 222)'],
      [16, 'rgb(206, 216, 220)'],
    ],
    national_park_color: [
      [0, 'rgb(203, 242, 196)'],
      [6, 'rgb(224, 245, 223)'],
      [9, 'rgb(224, 245, 223)'],
      [10, 'rgb(225, 245, 220)'],
      [11, 'rgb(226, 245, 226)'],
      [16, 'rgb(225, 246, 223)'],
    ],
    island: {
      zoom: {
        min: 0,
        max: 15,
      },
      label: {
        font: {
          weight: 'normal',
          size: [
            [0, '10px'],
            [11, '10px'],
            [12, '11px'],
            [13, '11px'],
            [14, '12px'],
            [15, '12px'],
            [16, '13px'],
          ],
          stroke: {
            width: '1px',
          },
        },
      },
    },
    island_color: 'rgb(81,87,4)',
    island_outline_color: 'rgba(250,253,255, .39)',
    native_reservation_color: 'rgba (245, 231, 218, 0.78)',
    military_color: 'rgb(235,237,242)',
    park_color: 'rgb (186, 232, 169)',
    green_area_color: [
      [13, 'rgb(221,235,221)'],
      [14, 'rgb(215,233,219)'],
      [15, 'rgb(215,233,219)'],
      [16, 'rgb(211,233,216)'],
    ],
    pedestrian_area_color: [
      [9, 'rgb(225,234,240)'],
      [10, 'rgb(233,237,240)'],
      [12, 'rgb(233,237,240)'],
      [13, 'rgb(235,239,242)'],
      [14, 'rgb(233,237,240)'],
      [15, 'rgb(223,230,235)'],
      [16, 'rgb(219,225,231)'],
    ],
    aerodrome_color: [
      [10, 'rgb(228,234,240)'],
      [11, 'rgb(225,230,234)'],
      [13, 'rgb(225,230,234)'],
      [14, 'rgb(218,225,228)'],
      [15, 'rgb(211,220,222)'],
      [16, 'rgb(206,216,220)'],
    ],
    runway_color: [
      [13, 'rgb(211,217,222)'],
      [14, 'rgb(205,213,214)'],
      [15, 'rgb(198,209,211)'],
      [16, 'rgb(192,203,208)'],
    ],
    university_campus_color: 'rgb (235, 230, 221)',
    boundary: {
      labels: {
        zoom: {
          min: 8,
        },
        offset: ['0px', '5px'],
        font: {
          size: '9px',
          transform: 'uppercase',
          stroke: {
            color: 'global.land_color',
            width: '3px',
          },
        },
        single_text: {
          offset: ['0px', '0px'],
        },
      },
      country: {
        line: {
          width: '1px',
        },
        outline: {
          width: [
            [3, '0px'],
            [4, '2px'],
            [7, '3px'],
          ],
        },
      },
      other: {
        line: {
          dash: [5, 4],
          width: [
            [0, '0px'],
            [9, '2px'],
          ],
        },
        outline: {
          width: [
            [3, '0px'],
            [4, '1px'],
            [5, '2px'],
            [7, '3px'],
          ],
        },
      },
      state: {
        line: {
          width: '1px',
        },
        outline: {
          width: [
            [0, '0px'],
            [9, '1px'],
          ],
        },
      },
    },
    state_boundary_text_color: 'rgb(102,102,102)',
    country_boundary_color: [
      [4, 'rgb(160, 160, 180)'],
      [5, 'rgb(120, 120, 140)'],
      [6, 'rgb(100, 100, 120)'],
      [7, 'rgb(100, 100, 120)'],
      [8, 'rgb(80, 80, 100)'],
      [9, 'rgb(60, 60, 80)'],
    ],
    country_boundary_outline_color: [
      [3, 'rgba(190, 190, 190, 0.1)'],
      [4, 'rgba(180, 180, 180, 0.15)'],
      [5, 'rgba(150, 150, 150, 0.15)'],
      [6, 'rgba(130, 130, 130, 0.15)'],
      [8, 'rgba(110, 110, 110, 0.15)'],
    ],
    country_disputed_boundary_color: [
      [4, 'rgb(160,160,180)'],
      [5, 'rgb(120,120,140)'],
      [6, 'rgb(100,100,120)'],
      [7, 'rgb(100,100,120)'],
      [8, 'rgb(80,80,100)'],
      [9, 'rgb(60,60,80 )'],
    ],
    country_disputed_boundary_background_color: [0.5, 0.5, 0.5, 0.15],
    region_boundary_color: [
      [3, 'rgb(225, 225, 225)'],
      [4, 'rgb(195, 195, 215)'],
      [5, 'rgb(210, 210, 210)'],
      [6, 'rgb(180, 180, 180)'],
      [7, 'rgb(180, 180, 180)'],
      [8, 'rgb(180, 180, 180)'],
      [9, 'rgb(180, 180, 180)'],
      [10, 'rgb(180, 180, 180)'],
      [11, 'rgb(180, 180, 180)'],
      [12, 'rgb(170, 170, 170)'],
    ],
    region_boundary_outline_color: [
      [4, 'rgba(220, 220, 220, 0.06)'],
      [5, 'rgba(215, 215, 215, 0.06)'],
      [6, 'rgba(200, 200, 200, 0.1)'],
      [7, 'rgba(200, 200, 200, 0.16)'],
      [8, 'rgba(200, 200, 200, 0.16)'],
      [9, 'rgba(200, 200, 200, 0.16)'],
      [10, 'rgba(200, 200, 200, 0.16)'],
      [11, 'rgba(200, 200, 200, 0.16)'],
      [12, 'rgba(200, 200, 200, 0.2)'],
    ],
    building: {
      outline: {
        width: '1px',
      },
      extrusion: {
        zoom: {
          min: 16,
        },
        outline: {
          width: '.5px',
        },
      },
      label: {
        zoom: {
          min: 17,
        },
        font: {
          size: [
            [15, '11px'],
            [16, '12px'],
          ],
          stroke: {
            width: '1px',
          },
        },
      },
      address: {
        label: {
          zoom: {
            min: 18,
          },
          font: {
            size: [
              [18, '12px'],
              [22, '16px'],
            ],
          },
        },
      },
    },
    building_color: 'rgba(250, 254, 255, .58)',
    building_outline_color: [
      [16, 'rgb(216,224,227)'],
      [17, 'rgb(208,216,219)'],
      [18, 'rgb(204,212,217)'],
    ],
    building_extrude_color: 'rgba(196,202,204,.78)',
    building_label_color: 'rgb(86,105,112)',
    building_label_outline_color: 'rgba(240,246,247,.4)',
    road: {
      default: {
        line: {
          width: '1px',
        },
        direction: {
          size: [
            [15, '15px'],
            [18, '30px'],
            [20, '52px'],
          ],
          spacing: [
            [16, '150px'],
            [18, '250px'],
          ],
        },
        label: {
          font: {
            stroke: {
              width: '.5px',
            },
          },
        },
      },
      rail: {
        zoom: {
          min: 10,
        },
        line: {
          width: [
            [15, '1px'],
            [16, '1.5px'],
            [17, '1.5px'],
            [18, '2px'],
            [19, '2.5px'],
          ],
          dash: [7, 7],
        },
        outline: {
          width: [
            [10, '.1px'],
            [13, '.5px'],
            [14, '.8px'],
          ],
        },
      },
      under_construction: {
        line: {
          dash: [2, 2],
        },
      },
      highway: {
        label: {
          font: {
            size: [
              [10, '14px'],
              [20, '22px'],
            ],
          },
        },
        outline: {
          width: [
            [7, '0px'],
            [8, '0.5px'],
          ],
        },
        centerline: {
          width: [
            [10, '0px'],
            [11, '1px'],
          ],
        },
        trunk: {
          label: {
            font: {
              size: [
                [10, '14px'],
                [20, '22px'],
              ],
            },
          },
          outline: {
            width: [
              [9, '0px'],
              [10, '0.5px'],
            ],
          },
        },
        link: {
          label: {
            font: {
              size: [
                [10, '14px'],
                [20, '22px'],
              ],
            },
          },
        },
      },
      major: {
        label: {
          offset: [
            [16, ['0px', '-1px']],
            [18, ['0px', '-2px']],
          ],
          font: {
            stroke: {
              width: '.7px',
            },
            size: [
              [14, '13.5px'],
              [15, '14.5px'],
              [16, '17px'],
              [17, '22px'],
            ],
          },
        },
        outline: {
          width: [
            [9, '0px'],
            [10, '0.5px'],
          ],
        },
        secondary: {
          outline: {
            width: [
              [10, '0px'],
              [11, '.5px'],
            ],
          },
          label: {
            offset: [
              [16, ['0px', '-1px']],
              [17, ['0px', '-3px']],
            ],
            font: {
              size: [
                [14, '12px'],
                [15, '15px'],
                [16, '17px'],
                [17, '21px'],
              ],
              stroke: {
                width: '.7px',
              },
            },
          },
        },
        tertiary: {
          outline: {
            width: [
              [11, '0px'],
              [12, '.5px'],
            ],
          },
          label: {
            font: {
              stroke: {
                width: '.7px',
              },
              size: [
                [13, '10px'],
                [16, '13.5px'],
                [17, '18px'],
                [18, '24px'],
              ],
            },
          },
          link: {
            line: {
              width: [
                [0, '3px'],
                [14, '3px'],
                [15, '4px'],
                [16, '5px'],
                [17, '6px'],
                [18, '12px'],
                [19, '20px'],
                [20, '32px'],
              ],
            },
          },
        },
      },
      minor: {
        direction: {
          zoom: {
            max: 18,
          },
        },
        label: {
          offset: [
            [16, ['0px', '-1px']],
            [18, ['0px', '-2px']],
          ],
          font: {
            stroke: {
              width: '.7px',
            },
            size: [
              [14, '10px'],
              [16, '12px'],
              [18, '19px'],
              [20, '24px'],
            ],
          },
        },
        residential: {
          outline: {
            width: [
              [13.5, '0px'],
              [14, '1px'],
            ],
          },
        },
        service: {
          outline: {
            width: [
              [13.5, '0px'],
              [14, '1px'],
            ],
          },
          label: {
            font: {
              stroke: {
                width: '.7px',
              },
              size: [
                [16, '10px'],
                [20, '16px'],
              ],
            },
          },
        },
      },
      path: {
        label: {
          offset: ['0px', '-2px'],
          font: {
            fill: 'rgb(53,54,73)',
            size: '12px',
            stroke: {
              color: 'rgb(219,226,227)',
              width: '2px',
            },
          },
        },
        unpaved: {
          label: {
            font: {
              fill: 'rgb(124,114,108)',
              stroke: {
                color: 'rgb(212,213,202)',
              },
            },
          },
        },
        pedestrian: {
          line: {
            width: [
              [11, '1px'],
              [15, '1px'],
              [16, '4px'],
            ],
            dash: [1, 1],
          },
        },
        footway: {
          label: {
            zoom: {
              min: 14,
              max: 20,
            },
            offset: ['0px', '-5px'],
            font: {
              fill: 'rgb(120,110,104)',
              size: '12px',
            },
          },
          line: {
            width: [
              [14, '1px'],
              [20, '1px'],
            ],
          },
          bridge: {
            line: {
              width: [
                [14, '1px'],
                [20, '1px'],
              ],
            },
            outline: {
              width: [
                [15, '0px'],
                [16, '.5px'],
              ],
            },
          },
        },
      },
      ferry: {
        label: {
          offset: ['0px', '-12px'],
          font: {
            size: [
              [14, '11px'],
              [16, '12px'],
              [17, '13px'],
            ],
            stroke: {
              width: [
                [14, '1.3px'],
                [15, '1.5px'],
                [16, '1.5px'],
                [17, '1.62px'],
              ],
            },
          },
        },
        line: {
          width: '1px',
          dash: [5, 3],
        },
        tunnel: {
          label: {
            font: {
              stroke: {
                color: 'white',
              },
            },
          },
          line: {
            color: 'rgb(153,153,153)',
            dash: [10, 10],
          },
        },
      },
      aerialway: {
        cable_car: {
          line: {
            color: 'rgb(170, 170, 170)',
            width: '0.5px',
          },
        },
        chair_lift: {
          line: {
            color: [
              [13, 'rgb(153,158,185)'],
              [15, 'rgb(58, 65, 104)'],
            ],
            width: [
              [13, '0.5px'],
              [19, '2px'],
            ],
          },
          label: {
            font: {
              fill: 'rgb(66,74,114)',
              size: [
                [14, '12px'],
                [16, '14px'],
                [18, 21],
                [20, '26px'],
              ],
              stroke: {
                color: 'white',
                width: '2px',
              },
            },
          },
        },
      },
      ski_run: {
        piste: {
          line: {
            color: 'rgb(253, 254, 255)',
            width: [
              [13, '1px'],
              [17, '4px'],
              [19, '9px'],
            ],
          },
          outline: {
            color: 'rgb(218,228,229)',
            width: [
              [13, '0px'],
              [20, '1px'],
            ],
          },
          label: {
            offset: ['0px', '-2px'],
            font: {
              fill: 'rgb(114, 122, 164)',
              size: [
                [14, '10px'],
                [16, '12px'],
                [18, '19px'],
                [20, '24px'],
              ],
              stroke: {
                color: 'white',
                width: '1px',
              },
            },
          },
          directions: {
            size: [
              [15, '10px'],
              [18, '14px'],
              [20, '20px'],
            ],
          },
        },
      },
    },
    tunnel_order: 305,
    bridge_outline: 'rgb(160,160,160)',
    highway_fill: [
      [9, 'rgb(235,148,182)'],
      [10, 'rgb(229,137,175)'],
      [11, 'rgb(229,137,175)'],
      [12, 'rgb(239,151,187)'],
      [13, 'rgb(240,144,179)'],
    ],
    highway_tunnel_fill: 'rgb(204,169,183)',
    highway_tunnel_center_line: 'rgb(204, 129, 160)',
    highway_outline: 'rgb(184,78,122)',
    highway_centerline_fill: [
      [11, 'rgb(224,134,170)'],
      [12, 'rgb(219,117,156)'],
      [13, 'rgb(211,106,154)'],
      [14, 'rgb(212,115,155)'],
    ],
    highway_width: [
      [6, '1px'],
      [7, '2px'],
      [8, '2.5px'],
      [9, '3.5px'],
      [11, '4px'],
      [12, '5px'],
      [13, '5.5px'],
      [14, '7px'],
      [15, '10px'],
      [16, '14px'],
      [17, '18px'],
      [18, '35px'],
      [19, '45px'],
      [20, '70px'],
    ],
    highway_link_width: [
      [5, '1px'],
      [12, '1px'],
      [13, '2px'],
      [14, '3px'],
      [15, '4px'],
      [16, '5px'],
      [17, '7px'],
      [18, '18px'],
      [19, '22px'],
      [20, '35px'],
    ],
    highway_trunk_width: [
      [5, '1px'],
      [8, '1px'],
      [9, '2px'],
      [10, '2px'],
      [12, '2.5px'],
      [13, '3px'],
      [14, '5px'],
      [15, '7px'],
      [16, '12px'],
      [17, '15px'],
      [18, '30px'],
      [19, '37px'],
      [20, '64px'],
    ],
    major_road_fill: [
      [11, 'rgb(255,184,163)'],
      [12, 'rgb(255,181,160)'],
      [13, 'rgb(255,174,158)'],
    ],
    major_road_tunnel_fill: 'rgb(204,177,169)',
    major_road_link_width: [
      [13, '2px'],
      [14, '3px'],
      [15, '4px'],
      [16, '5px'],
      [17, '7px'],
      [18, '18px'],
      [19, '23px'],
      [20, '35px'],
    ],
    major_road_outline: [
      [10, 'rgb(204,105,96)'],
      [11, 'rgb(191,99,90)'],
      [12, 'rgb(191,99,116)'],
    ],
    major_road_width: [
      [8, '1px'],
      [9, '2px'],
      [10, '3px'],
      [12, '3.5px'],
      [13, '4px'],
      [14, '6px'],
      [15, '7px'],
      [16, '11px'],
      [17, '15px'],
      [18, '34px'],
      [19, '38px'],
      [20, '62px'],
    ],
    major_road_secondary_fill: [
      [10, 'rgb(232,220,107)'],
      [12, 'rgb(255,252,140)'],
      [13, 'rgb(255,252,168)'],
    ],
    major_road_secondary_tunnel_fill: 'rgb(204,201,169)',
    major_road_secondary_outline: 'rgb(191,157,134)',
    major_road_secondary_width: [
      [10, '1px'],
      [12, '2px'],
      [13, '3.5px'],
      [14, '5px'],
      [15, '7px'],
      [16, '11px'],
      [17, '12px'],
      [18, '30px'],
      [19, '34px'],
      [20, '54px'],
    ],
    major_road_secondary_link_width: [
      [13, '1px'],
      [16, '4px'],
      [17, '5px'],
      [18, '10px'],
      [19, '20px'],
      [20, '30px'],
    ],
    major_road_tertiary_fill: [
      [11, 'rgb(230,221,184)'],
      [12, 'rgb(255,255,227)'],
    ],
    major_road_tertiary_tunnel_fill: 'rgb(204,200,184)',
    major_road_tertiary_outline: 'rgb(165,164,131)',
    major_road_tertiary_width: [
      [11, '1.5px'],
      [12, '2px'],
      [13, '2.5px'],
      [14, '3.5px'],
      [15, '5px'],
      [16, '9px'],
      [17, '9px'],
      [18, '25px'],
      [19, '29px'],
      [20, '46px'],
    ],
    minor_road_residential_fill: [
      [13, 'rgb(204,205,205)'],
      [14, 'rgb(255, 255, 255)'],
    ],
    minor_road_residential_tunnel_fill: 'rgb(227,227,227)',
    minor_road_residential_outline: 'rgb(200,201,198)',
    minor_road_width: [
      [14, '1px'],
      [14, '2px'],
      [15, '3px'],
      [17, '6px'],
      [18, '18px'],
      [19, '24px'],
      [20, '46px'],
    ],
    minor_road_service_fill: [
      [13, 'rgb(204,205,205)'],
      [14, 'rgb(239,240,235)'],
    ],
    minor_road_service_tunnel_fill: 'rgb(128,128,128)',
    minor_road_service_outline: 'rgb(203,205,203)',
    minor_road_unpaved_fill: 'rgb(239,240,235)',
    path_pedestrian: 'rgb(175, 178, 182)',
    path_footway: 'rgb(180,203,178)',
    path_footway_tunnel_fill: 'rgb(227,227,227)',
    path_footway_cemetery: 'rgb(199,205,204)',
    path_footway_forest: 'rgb(187,190,194)',
    path_footway_park: 'rgb(178,204,172)',
    ferry_line_color: 'rgb(67,141,218)',
    ferry_label_color: 'rgb(48,124,207)',
    ferry_tunnel_color: 'rgb(30,48,65)',
    ferry_label_outline_color: 'rgb(153,206,255)',
    rail_dash_background_color: 'rgb(160, 160, 160)',
    rail_outline_color: 'rgb(160, 160, 160)',
    rail_dash_color: [
      [10, 'rgb(220, 220, 220)'],
      [13, 'rgb(255, 255, 255)'],
      [16, 'rgb(250, 250, 250)'],
    ],
    continent: {
      label: {
        font: {
          transform: 'uppercase',
          fill: 'rgba(255, 118, 120, 0.7)',
          weight: 'normal',
          size: '19px',
          stroke: {
            color: 'rgba(255, 255, 255, 0.118)',
            width: '1px',
          },
        },
      },
    },
  },
  sources: {
    omv: {
      type: 'OMV',
      extra_data: {
        political_view: 'global.political_view',
        poi: {
          default: {
            '100-1000-0000': {
              default: {
                default: {
                  icon: 'poi--restaurant',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 131,
                },
              },
            },
            '100-1000-0001': {
              default: {
                default: {
                  icon: 'poi--restaurant',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 132,
                },
              },
            },
            '100-1000-0002': {
              default: {
                default: {
                  icon: 'poi--restaurant',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 133,
                },
              },
            },
            '100-1000-0003': {
              default: {
                default: {
                  icon: 'poi--restaurant',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 134,
                },
              },
            },
            '100-1000-0004': {
              default: {
                default: {
                  icon: 'poi--restaurant',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 135,
                },
              },
            },
            '100-1000-0005': {
              default: {
                default: {
                  icon: 'poi--restaurant',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 136,
                },
              },
            },
            '100-1000-0006': {
              default: {
                default: {
                  icon: 'poi--restaurant',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 137,
                },
              },
            },
            '100-1000-0007': {
              default: {
                default: {
                  icon: 'poi--restaurant',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 138,
                },
              },
            },
            '100-1000-0008': {
              default: {
                default: {
                  icon: 'poi--restaurant',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 139,
                },
              },
            },
            '100-1000-0009': {
              default: {
                default: {
                  icon: 'poi--fast-food',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 140,
                },
              },
            },
            '100-1100-0000': {
              default: {
                default: {
                  icon: 'poi--coffee',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 142,
                },
              },
            },
            '100-1100-0010': {
              default: {
                default: {
                  icon: 'poi--coffee',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 143,
                },
              },
            },
            '100-1100-0331': {
              default: {
                default: {
                  icon: 'poi--coffee',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 144,
                },
              },
            },
            '200-2000-0000': {
              default: {
                default: {
                  icon: 'poi--night-club',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 156,
                },
              },
            },
            '200-2000-0011': {
              default: {
                default: {
                  icon: 'poi--pub',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 145,
                },
              },
            },
            '200-2000-0012': {
              default: {
                default: {
                  icon: 'poi--night-club',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 146,
                },
              },
            },
            '200-2000-0013': {
              default: {
                default: {
                  icon: 'poi--night-club',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 147,
                },
              },
            },
            '200-2000-0014': {
              default: {
                default: {
                  icon: 'poi--karaoke',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 148,
                },
              },
            },
            '200-2000-0015': {
              default: {
                default: {
                  icon: 'poi--night-club',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 149,
                },
              },
            },
            '200-2000-0016': {
              default: {
                default: {
                  icon: 'poi--pool',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 150,
                },
              },
            },
            '200-2000-0017': {
              default: {
                default: {
                  icon: 'poi--game-arcade',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 151,
                },
              },
            },
            '200-2000-0018': {
              default: {
                default: {
                  icon: 'poi--night-club',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 152,
                },
              },
            },
            '200-2000-0019': {
              default: {
                default: {
                  icon: 'poi--pub',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 153,
                },
              },
            },
            '200-2000-0306': {
              default: {
                default: {
                  icon: 'poi--night-club',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 154,
                },
              },
            },
            '200-2000-0368': {
              default: {
                default: {
                  icon: 'poi--cocktail',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 155,
                },
              },
            },
            '200-2100-0019': {
              default: {
                default: {
                  icon: 'poi--cinema',
                  min_zoom: 16,
                  size: [20, 26],
                  priority: 55,
                },
              },
            },
            '200-2200-0000': {
              default: {
                default: {
                  icon: 'poi--generic-point_entertainment',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 121,
                },
              },
            },
            '200-2200-0020': {
              default: {
                default: {
                  icon: 'poi--theater',
                  min_zoom: 16,
                  size: [20, 26],
                  priority: 56,
                },
              },
            },
            '200-2300-0000': {
              default: {
                default: {
                  icon: 'poi--casino',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 157,
                },
              },
            },
            '200-2300-0021': {
              default: {
                default: {
                  icon: 'poi--casino',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 158,
                },
              },
            },
            '200-2300-0022': {
              default: {
                default: {
                  icon: 'poi--travel-agent-ticketing',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 159,
                },
              },
            },
            '300-3000-0000': {
              default: {
                default: {
                  icon: 'poi--attraction',
                  min_zoom: 17,
                  size: [20, 26],
                  priority: 67,
                },
              },
            },
            '300-3000-0023': {
              default: {
                default: {
                  icon: 'poi--attraction',
                  min_zoom: 16,
                  size: [20, 26],
                  priority: 49,
                },
              },
            },
            '300-3000-0024': {
              default: {
                default: {
                  icon: 'poi--art-gallery',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 160,
                },
              },
            },
            '300-3000-0025': {
              default: {
                default: {
                  icon: 'poi--attraction',
                  min_zoom: 15,
                  size: [20, 26],
                  priority: 13,
                },
              },
            },
            '300-3000-0030': {
              default: {
                default: {
                  icon: 'poi--attraction',
                  min_zoom: 16,
                  size: [20, 26],
                  priority: 50,
                },
              },
            },
            '300-3000-0065': {
              default: {
                default: {
                  icon: 'poi--generic-point_sights-museum',
                  min_zoom: 17,
                  size: [20, 26],
                  priority: 89,
                },
              },
            },
            '300-3000-0350': {
              default: {
                default: {
                  icon: 'poi--generic-point_sights-museum',
                  min_zoom: 17,
                  size: [20, 26],
                  priority: 90,
                },
              },
            },
            '300-3000-0351': {
              default: {
                default: {
                  icon: 'poi--attraction',
                  min_zoom: 17,
                  size: [20, 26],
                  priority: 91,
                },
              },
            },
            '300-3100-0000': {
              default: {
                default: {
                  icon: 'poi--attraction',
                  min_zoom: 16,
                  size: [20, 26],
                  priority: 54,
                },
              },
            },
            '300-3100-0026': {
              default: {
                default: {
                  icon: 'poi--attraction',
                  min_zoom: 16,
                  size: [20, 26],
                  priority: 51,
                },
              },
            },
            '300-3100-0027': {
              default: {
                default: {
                  icon: 'poi--attraction',
                  min_zoom: 17,
                  size: [20, 26],
                  priority: 88,
                },
              },
            },
            '300-3100-0028': {
              default: {
                default: {
                  icon: 'poi--attraction',
                  min_zoom: 16,
                  size: [20, 26],
                  priority: 52,
                },
              },
            },
            '300-3100-0029': {
              default: {
                default: {
                  icon: 'poi--attraction',
                  min_zoom: 16,
                  size: [20, 26],
                  priority: 53,
                },
              },
            },
            '300-3200-0000': {
              default: {
                default: {
                  icon: 'poi--religious-place',
                  min_zoom: 19,
                  size: [20, 26],
                  priority: 239,
                },
              },
            },
            '300-3200-0030': {
              default: {
                default: {
                  icon: 'poi--religious-place',
                  min_zoom: 19,
                  size: [20, 26],
                  priority: 232,
                },
              },
            },
            '300-3200-0031': {
              default: {
                default: {
                  icon: 'poi--religious-place',
                  min_zoom: 19,
                  size: [20, 26],
                  priority: 233,
                },
              },
            },
            '300-3200-0032': {
              default: {
                default: {
                  icon: 'poi--religious-place',
                  min_zoom: 19,
                  size: [20, 26],
                  priority: 234,
                },
              },
            },
            '300-3200-0033': {
              default: {
                default: {
                  icon: 'poi--religious-place',
                  min_zoom: 19,
                  size: [20, 26],
                  priority: 235,
                },
              },
            },
            '300-3200-0034': {
              default: {
                default: {
                  icon: 'poi--religious-place',
                  min_zoom: 19,
                  size: [20, 26],
                  priority: 236,
                },
              },
            },
            '300-3200-0309': {
              default: {
                default: {
                  icon: 'poi--religious-place',
                  min_zoom: 19,
                  size: [20, 26],
                  priority: 237,
                },
              },
            },
            '300-3200-0375': {
              default: {
                default: {
                  icon: 'poi--religious-place',
                  min_zoom: 19,
                  size: [20, 26],
                  priority: 238,
                },
              },
            },
            '350-3500-0300': {
              default: {
                default: {
                  icon: 'poi--harbor',
                  min_zoom: 17,
                  size: [20, 26],
                  priority: 70,
                },
              },
            },
            '350-3510-0237': {
              default: {
                default: {
                  icon: 'poi--mountain-pass',
                  min_zoom: 17,
                  size: [20, 26],
                  priority: 96,
                },
              },
            },
            '350-3510-0238': {
              default: {
                default: {
                  icon: 'poi--mountain',
                  min_zoom: 9,
                  size: [20, 20],
                  priority: 0,
                },
              },
            },
            '400-4000-4580': {
              default: {
                default: {
                  icon: 'poi--airport',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 162,
                },
              },
            },
            '400-4000-4581': {
              default: {
                default: {
                  icon: 'poi--airport',
                  min_zoom: 10,
                  size: [20, 26],
                  priority: 1,
                },
              },
            },
            '400-4000-4582': {
              default: {
                default: {
                  icon: 'poi--airport',
                  min_zoom: 14,
                  size: [20, 26],
                  priority: 6,
                },
              },
            },
            '400-4100-0035': {
              default: {
                default: {
                  icon: 'poi--train',
                  min_zoom: 12,
                  size: [20, 26],
                  priority: 2,
                },
              },
            },
            '400-4100-0036': {
              default: {
                default: {
                  icon: 'poi--bus',
                  min_zoom: 16,
                  size: [20, 26],
                  priority: 33,
                },
              },
            },
            '400-4100-0037': {
              default: {
                default: {
                  icon: 'poi--metro',
                  min_zoom: 15,
                  size: [20, 26],
                  priority: 24,
                },
              },
            },
            '400-4100-0038': {
              default: {
                default: {
                  icon: 'poi--rail-regional',
                  min_zoom: 14,
                  size: [20, 26],
                  priority: 4,
                },
              },
            },
            '400-4100-0039': {
              default: {
                default: {
                  icon: 'poi--rail-regional',
                  min_zoom: 14,
                  size: [20, 26],
                  priority: 5,
                },
              },
            },
            '400-4100-0042': {
              default: {
                default: {
                  icon: 'poi--bus',
                  min_zoom: 16,
                  size: [20, 26],
                  priority: 38,
                },
              },
            },
            '400-4100-0044': {
              default: {
                default: {
                  icon: 'poi--ferry',
                  min_zoom: 15,
                  size: [20, 26],
                  priority: 15,
                },
              },
            },
            '400-4100-0045': {
              default: {
                default: {
                  icon: 'poi--ferry',
                  min_zoom: 15,
                  size: [20, 26],
                  priority: 16,
                },
              },
            },
            '400-4100-0046': {
              default: {
                default: {
                  icon: 'poi--train',
                  min_zoom: 15,
                  size: [20, 26],
                  priority: 20,
                },
              },
            },
            '400-4100-0047': {
              default: {
                default: {
                  icon: 'poi--taxi',
                  min_zoom: 17,
                  size: [20, 26],
                  priority: 119,
                },
              },
            },
            '400-4100-0051': {
              default: {
                default: {
                  icon: 'poi--taxi',
                  min_zoom: 17,
                  size: [20, 26],
                  priority: 120,
                },
              },
            },
            '400-4100-0326': {
              default: {
                default: {
                  icon: 'poi--toll-booth',
                  min_zoom: 16,
                  size: [20, 26],
                  priority: 46,
                },
              },
            },
            '400-4100-0337': {
              default: {
                default: {
                  icon: 'poi--rail-light',
                  min_zoom: 16,
                  size: [20, 26],
                  priority: 39,
                },
              },
            },
            '400-4100-0338': {
              default: {
                default: {
                  icon: 'poi--ferry',
                  min_zoom: 16,
                  size: [20, 26],
                  priority: 30,
                },
              },
            },
            '400-4100-0339': {
              default: {
                default: {
                  icon: 'poi--monorail',
                  min_zoom: 16,
                  size: [20, 26],
                  priority: 40,
                },
              },
            },
            '400-4100-0340': {
              default: {
                default: {
                  icon: 'poi--cable-way',
                  min_zoom: 16,
                  size: [20, 26],
                  priority: 41,
                },
              },
            },
            '400-4100-0342': {
              default: {
                default: {
                  icon: 'poi--inclined',
                  min_zoom: 16,
                  size: [20, 26],
                  priority: 42,
                },
              },
            },
            '400-4300-0000': {
              default: {
                default: {
                  icon: 'poi--picnic-area',
                  min_zoom: 14,
                  size: [20, 26],
                  priority: 7,
                },
              },
            },
            '400-4300-0199': {
              default: {
                default: {
                  icon: 'poi--picnic-area',
                  min_zoom: 14,
                  size: [20, 26],
                  priority: 8,
                },
              },
            },
            '400-4300-0200': {
              default: {
                default: {
                  icon: 'poi--picnic-area',
                  min_zoom: 14,
                  size: [20, 26],
                  priority: 9,
                },
              },
            },
            '400-4300-0201': {
              default: {
                default: {
                  icon: 'poi--picnic-area',
                  min_zoom: 14,
                  size: [20, 26],
                  priority: 10,
                },
              },
            },
            '400-4300-0202': {
              default: {
                default: {
                  icon: 'poi--picnic-area',
                  min_zoom: 14,
                  size: [20, 26],
                  priority: 11,
                },
              },
            },
            '400-4300-0308': {
              default: {
                default: {
                  icon: 'poi--nature-overlook',
                  min_zoom: 15,
                  size: [20, 26],
                  priority: 19,
                },
              },
            },
            '500-5000-0000': {
              default: {
                default: {
                  icon: 'poi--hotel',
                  min_zoom: 17,
                  size: [20, 26],
                  priority: 107,
                },
              },
            },
            '500-5000-0053': {
              default: {
                default: {
                  icon: 'poi--hotel',
                  min_zoom: 17,
                  size: [20, 26],
                  priority: 99,
                },
              },
            },
            '500-5000-0054': {
              default: {
                default: {
                  icon: 'poi--hotel',
                  min_zoom: 17,
                  size: [20, 26],
                  priority: 100,
                },
              },
            },
            '500-5100-0000': {
              default: {
                default: {
                  icon: 'poi--hotel',
                  min_zoom: 17,
                  size: [20, 26],
                  priority: 101,
                },
              },
            },
            '500-5100-0055': {
              default: {
                default: {
                  icon: 'poi--hotel',
                  min_zoom: 17,
                  size: [20, 26],
                  priority: 102,
                },
              },
            },
            '500-5100-0056': {
              default: {
                default: {
                  icon: 'poi--camping',
                  min_zoom: 17,
                  size: [20, 26],
                  priority: 84,
                },
              },
            },
            '500-5100-0057': {
              default: {
                default: {
                  icon: 'poi--hotel',
                  min_zoom: 17,
                  size: [20, 26],
                  priority: 103,
                },
              },
            },
            '500-5100-0058': {
              default: {
                default: {
                  icon: 'poi--hotel',
                  min_zoom: 17,
                  size: [20, 26],
                  priority: 104,
                },
              },
            },
            '500-5100-0059': {
              default: {
                default: {
                  icon: 'poi--hotel',
                  min_zoom: 17,
                  size: [20, 26],
                  priority: 105,
                },
              },
            },
            '500-5100-0060': {
              default: {
                default: {
                  icon: 'poi--hotel',
                  min_zoom: 17,
                  size: [20, 26],
                  priority: 106,
                },
              },
            },
            '550-5510-0000': {
              default: {
                default: {
                  icon: 'poi--nature',
                  min_zoom: 17,
                  size: [20, 26],
                  priority: 80,
                },
              },
            },
            '550-5510-0202': {
              default: {
                default: {
                  icon: 'poi--nature',
                  min_zoom: 17,
                  size: [20, 26],
                  priority: 81,
                },
              },
            },
            '550-5510-0204': {
              default: {
                default: {
                  icon: 'poi--nature',
                  min_zoom: 17,
                  size: [20, 26],
                  priority: 82,
                },
              },
            },
            '550-5510-0205': {
              default: {
                default: {
                  icon: 'poi--beach',
                  min_zoom: 16,
                  size: [20, 26],
                  priority: 63,
                },
              },
            },
            '550-5510-0242': {
              default: {
                default: {
                  icon: 'poi--nature-overlook',
                  min_zoom: 16,
                  size: [20, 26],
                  priority: 57,
                },
              },
            },
            '550-5510-0359': {
              default: {
                default: {
                  icon: 'poi--generic-point_leisure-outdoor',
                  min_zoom: 17,
                  size: [20, 26],
                  priority: 98,
                },
              },
            },
            '550-5510-0378': {
              default: {
                default: {
                  icon: 'poi--camping',
                  min_zoom: 17,
                  size: [20, 26],
                  priority: 85,
                },
              },
            },
            '550-5520-0000': {
              default: {
                default: {
                  icon: 'poi--amusement-park',
                  min_zoom: 17,
                  size: [20, 26],
                  priority: 66,
                },
              },
            },
            '550-5520-0207': {
              default: {
                default: {
                  icon: 'poi--amusement-park',
                  min_zoom: 15,
                  size: [20, 26],
                  priority: 27,
                },
              },
            },
            '550-5520-0208': {
              default: {
                default: {
                  icon: 'poi--zoo',
                  min_zoom: 16,
                  size: [20, 26],
                  priority: 58,
                },
              },
            },
            '550-5520-0209': {
              default: {
                default: {
                  icon: 'poi--zoo',
                  min_zoom: 16,
                  size: [20, 26],
                  priority: 59,
                },
              },
            },
            '550-5520-0211': {
              default: {
                default: {
                  icon: 'poi--attraction',
                  min_zoom: 16,
                  size: [20, 26],
                  priority: 60,
                },
              },
            },
            '550-5520-0212': {
              default: {
                default: {
                  icon: 'poi--ski-run',
                  min_zoom: 17,
                  size: [20, 26],
                  priority: 87,
                },
              },
            },
            '550-5520-0228': {
              default: {
                default: {
                  icon: 'poi--zoo',
                  min_zoom: 16,
                  size: [20, 26],
                  priority: 61,
                },
              },
            },
            '600-6000-0061': {
              default: {
                default: {
                  icon: 'poi--shopping',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 166,
                },
              },
            },
            '600-6100-0062': {
              default: {
                default: {
                  icon: 'poi--shopping',
                  min_zoom: 15,
                  size: [20, 26],
                  priority: 14,
                },
              },
            },
            '600-6200-0063': {
              default: {
                default: {
                  icon: 'poi--shopping',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 122,
                },
              },
            },
            '600-6300-0066': {
              default: {
                default: {
                  icon: 'poi--shopping',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 123,
                },
              },
            },
            '600-6400-0000': {
              default: {
                default: {
                  icon: 'poi--pharmacy',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 163,
                },
              },
            },
            '600-6400-0069': {
              default: {
                default: {
                  icon: 'poi--shopping',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 164,
                },
              },
            },
            '600-6400-0070': {
              default: {
                default: {
                  icon: 'poi--pharmacy',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 165,
                },
              },
            },
            '600-6500-0072': {
              default: {
                default: {
                  icon: 'poi--shopping',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 167,
                },
              },
            },
            '600-6600-0000': {
              default: {
                default: {
                  icon: 'poi--shopping',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 124,
                },
              },
            },
            '600-6600-0077': {
              default: {
                default: {
                  icon: 'poi--shopping',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 125,
                },
              },
            },
            '600-6600-0078': {
              default: {
                default: {
                  icon: 'poi--shopping',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 126,
                },
              },
            },
            '600-6600-0079': {
              default: {
                default: {
                  icon: 'poi--shopping',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 127,
                },
              },
            },
            '600-6600-0080': {
              default: {
                default: {
                  icon: 'poi--shopping',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 128,
                },
              },
            },
            '600-6600-0082': {
              default: {
                default: {
                  icon: 'poi--shopping',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 129,
                },
              },
            },
            '600-6700-0000': {
              default: {
                default: {
                  icon: 'poi--bookstore',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 183,
                },
              },
            },
            '600-6700-0087': {
              default: {
                default: {
                  icon: 'poi--bookstore',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 184,
                },
              },
            },
            '600-6800-0000': {
              default: {
                default: {
                  icon: 'poi--shopping',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 168,
                },
              },
            },
            '600-6800-0089': {
              default: {
                default: {
                  icon: 'poi--shopping',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 169,
                },
              },
            },
            '600-6800-0090': {
              default: {
                default: {
                  icon: 'poi--shopping',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 170,
                },
              },
            },
            '600-6800-0091': {
              default: {
                default: {
                  icon: 'poi--shopping',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 171,
                },
              },
            },
            '600-6800-0092': {
              default: {
                default: {
                  icon: 'poi--shopping',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 172,
                },
              },
            },
            '600-6800-0093': {
              default: {
                default: {
                  icon: 'poi--shopping',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 173,
                },
              },
            },
            '600-6900-0000': {
              default: {
                default: {
                  icon: 'poi--shopping',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 174,
                },
              },
            },
            '600-6900-0094': {
              default: {
                default: {
                  icon: 'poi--shopping',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 175,
                },
              },
            },
            '600-6900-0096': {
              default: {
                default: {
                  icon: 'poi--shopping',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 176,
                },
              },
            },
            '600-6900-0098': {
              default: {
                default: {
                  icon: 'poi--shopping',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 177,
                },
              },
            },
            '600-6900-0106': {
              default: {
                default: {
                  icon: 'poi--generic-point_shopping',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 178,
                },
              },
            },
            '600-6900-0247': {
              default: {
                default: {
                  icon: 'poi--shopping',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 179,
                },
              },
            },
            '600-6900-0248': {
              default: {
                default: {
                  icon: 'poi--generic-point_shopping',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 180,
                },
              },
            },
            '600-6900-0251': {
              default: {
                default: {
                  icon: 'poi--shopping',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 181,
                },
              },
            },
            '600-6900-0358': {
              default: {
                default: {
                  icon: 'poi--shopping',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 182,
                },
              },
            },
            '700-7000-0107': {
              default: {
                default: {
                  icon: 'poi--bank',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 185,
                },
              },
            },
            '700-7010-0108': {
              default: {
                default: {
                  icon: 'poi--atm',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 186,
                },
              },
            },
            '700-7200-0257': {
              default: {
                default: {
                  icon: 'poi--generic-point_business-services-areas',
                  min_zoom: 17,
                  size: [20, 26],
                  priority: 92,
                },
              },
            },
            '700-7200-0265': {
              default: {
                default: {
                  icon: 'poi--generic-point_business-services-areas',
                  min_zoom: 17,
                  size: [20, 26],
                  priority: 93,
                },
              },
            },
            '700-7200-0266': {
              default: {
                default: {
                  icon: 'poi--generic-point_business-services-areas',
                  min_zoom: 17,
                  size: [20, 26],
                  priority: 94,
                },
              },
            },
            '700-7300-0111': {
              default: {
                default: {
                  icon: 'poi--police',
                  min_zoom: 17,
                  size: [20, 26],
                  priority: 112,
                },
              },
            },
            '700-7400-0137': {
              default: {
                default: {
                  icon: 'poi--laundry',
                  min_zoom: 19,
                  size: [20, 26],
                  priority: 243,
                },
              },
            },
            '700-7400-0286': {
              default: {
                default: {
                  icon: 'poi--generic-point_business-services-areas',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 202,
                },
              },
            },
            '700-7450-0114': {
              default: {
                default: {
                  icon: 'poi--post',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 187,
                },
              },
            },
            '700-7460-0115': {
              default: {
                default: {
                  icon: 'poi--tourist-information',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 130,
                },
              },
            },
            '700-7600-0000': {
              default: {
                default: {
                  icon: 'poi--petrol-station',
                  min_zoom: 15,
                  size: [20, 26],
                  priority: 17,
                },
              },
            },
            '700-7600-0116': {
              default: {
                default: {
                  icon: 'poi--petrol-station',
                  min_zoom: 15,
                  size: [20, 26],
                  priority: 18,
                },
              },
            },
            '700-7600-0322': {
              default: {
                default: {
                  icon: 'poi--car-charging',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 201,
                },
              },
            },
            '700-7800-0118': {
              default: {
                default: {
                  icon: 'poi--car-dealership',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 188,
                },
              },
            },
            '700-7800-0119': {
              default: {
                default: {
                  icon: 'poi--car-dealership',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 189,
                },
              },
            },
            '700-7800-0120': {
              default: {
                default: {
                  icon: 'poi--generic-point_business-services-areas',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 190,
                },
              },
            },
            '700-7850-0000': {
              default: {
                default: {
                  icon: 'poi--car-repair',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 191,
                },
              },
            },
            '700-7850-0121': {
              default: {
                default: {
                  icon: 'poi--car-wash',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 192,
                },
              },
            },
            '700-7850-0122': {
              default: {
                default: {
                  icon: 'poi--car-repair',
                  min_zoom: 16,
                  size: [20, 26],
                  priority: 64,
                },
              },
            },
            '700-7850-0123': {
              default: {
                default: {
                  icon: 'poi--car-repair',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 193,
                },
              },
            },
            '700-7851-0117': {
              default: {
                default: {
                  icon: 'poi--car-rental',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 194,
                },
              },
            },
            '700-7851-0127': {
              default: {
                default: {
                  icon: 'poi--car-rental',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 195,
                },
              },
            },
            '800-8000-0000': {
              default: {
                default: {
                  icon: 'poi--generic-point_facilities',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 141,
                },
              },
            },
            '800-8000-0159': {
              default: {
                default: {
                  icon: 'poi--hospital',
                  min_zoom: 15,
                  size: [20, 26],
                  priority: 23,
                },
              },
            },
            '800-8000-0325': {
              default: {
                default: {
                  icon: 'poi--first-aid',
                  min_zoom: 17,
                  size: [20, 26],
                  priority: 65,
                },
              },
            },
            '800-8100-0000': {
              default: {
                default: {
                  icon: 'poi--facilities',
                  min_zoom: 17,
                  size: [20, 26],
                  priority: 68,
                },
              },
            },
            '800-8100-0163': {
              default: {
                default: {
                  icon: 'poi--facilities',
                  min_zoom: 16,
                  size: [20, 26],
                  priority: 43,
                },
              },
            },
            '800-8100-0164': {
              default: {
                default: {
                  icon: 'poi--facilities',
                  min_zoom: 17,
                  size: [20, 26],
                  priority: 116,
                },
              },
            },
            '800-8100-0165': {
              default: {
                default: {
                  icon: 'poi--generic-point_facilities',
                  min_zoom: 17,
                  size: [20, 26],
                  priority: 117,
                },
              },
            },
            '800-8100-0168': {
              default: {
                default: {
                  icon: 'poi--facilities',
                  min_zoom: 16,
                  size: [20, 26],
                  priority: 44,
                },
              },
            },
            '800-8100-0169': {
              default: {
                default: {
                  icon: 'poi--facilities',
                  min_zoom: 17,
                  size: [20, 26],
                  priority: 118,
                },
              },
            },
            '800-8100-0170': {
              default: {
                default: {
                  icon: 'poi--facilities',
                  min_zoom: 17,
                  size: [20, 26],
                  priority: 115,
                },
              },
            },
            '800-8100-0171': {
              default: {
                default: {
                  icon: 'poi--facilities',
                  min_zoom: 17,
                  size: [20, 26],
                  priority: 113,
                },
              },
            },
            '800-8100-0172': {
              default: {
                default: {
                  icon: 'poi--frontier-crossing',
                  min_zoom: 13,
                  size: [20, 26],
                  priority: 3,
                },
              },
            },
            '800-8200-0000': {
              default: {
                default: {
                  icon: 'poi--education',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 196,
                },
              },
            },
            '800-8200-0173': {
              default: {
                default: {
                  icon: 'poi--education',
                  min_zoom: 17,
                  size: [20, 26],
                  priority: 109,
                },
              },
            },
            '800-8200-0174': {
              default: {
                default: {
                  icon: 'poi--education',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 197,
                },
              },
            },
            '800-8200-0295': {
              default: {
                default: {
                  icon: 'poi--generic-point_facilities',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 205,
                },
              },
            },
            '800-8200-0360': {
              default: {
                default: {
                  icon: 'poi--generic-point_facilities',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 206,
                },
              },
            },
            '800-8250-0000': {
              default: {
                default: {
                  icon: 'poi--education',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 198,
                },
              },
            },
            '800-8250-0287': {
              default: {
                default: {
                  icon: 'poi--education',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 199,
                },
              },
            },
            '800-8250-0288': {
              default: {
                default: {
                  icon: 'poi--education',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 200,
                },
              },
            },
            '800-8300-0000': {
              default: {
                default: {
                  icon: 'poi--library',
                  min_zoom: 17,
                  size: [20, 26],
                  priority: 110,
                },
              },
            },
            '800-8300-0175': {
              default: {
                default: {
                  icon: 'poi--library',
                  min_zoom: 17,
                  size: [20, 26],
                  priority: 111,
                },
              },
            },
            '800-8400-0000': {
              default: {
                default: {
                  icon: 'poi--facilities',
                  min_zoom: 17,
                  size: [20, 26],
                  priority: 69,
                },
              },
            },
            '800-8400-0176': {
              default: {
                default: {
                  icon: 'poi--exhibition-center',
                  min_zoom: 15,
                  size: [20, 26],
                  priority: 21,
                },
              },
            },
            '800-8500-0000': {
              default: {
                default: {
                  icon: 'poi--parking',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 208,
                },
              },
            },
            '800-8500-0177': {
              default: {
                default: {
                  icon: 'poi--parking-garage',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 207,
                },
              },
            },
            '800-8500-0178': {
              default: {
                default: {
                  icon: 'poi--parking',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 209,
                },
              },
            },
            '800-8500-0179': {
              default: {
                default: {
                  icon: 'poi--park-and-ride',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 210,
                },
              },
            },
            '800-8500-0315': {
              default: {
                default: {
                  icon: 'poi--parking',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 211,
                },
              },
            },
            '800-8600-0000': {
              default: {
                default: {
                  icon: 'poi--generic-point_facilities',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 212,
                },
              },
            },
            '800-8600-0180': {
              default: {
                default: {
                  icon: 'poi--stadium',
                  min_zoom: 16,
                  size: [20, 26],
                  priority: 62,
                },
              },
            },
            '800-8600-0181': {
              default: {
                default: {
                  icon: 'poi--generic-point_facilities',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 213,
                },
              },
            },
            '800-8600-0182': {
              default: {
                default: {
                  icon: 'poi--swimming',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 214,
                },
              },
            },
            '800-8600-0183': {
              default: {
                default: {
                  icon: 'poi--generic-point_facilities',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 215,
                },
              },
            },
            '800-8600-0184': {
              default: {
                default: {
                  icon: 'poi--bowling',
                  min_zoom: 17,
                  size: [20, 26],
                  priority: 114,
                },
              },
            },
            '800-8600-0185': {
              default: {
                default: {
                  icon: 'poi--generic-point_facilities',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 216,
                },
              },
            },
            '800-8600-0186': {
              default: {
                default: {
                  icon: 'poi--generic-point_facilities',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 217,
                },
              },
            },
            '800-8600-0187': {
              default: {
                default: {
                  icon: 'poi--generic-point_facilities',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 218,
                },
              },
            },
            '800-8600-0188': {
              default: {
                default: {
                  icon: 'poi--generic-point_facilities',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 219,
                },
              },
            },
            '800-8600-0189': {
              default: {
                default: {
                  icon: 'poi--generic-point_facilities',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 220,
                },
              },
            },
            '800-8600-0190': {
              default: {
                default: {
                  icon: 'poi--generic-point_facilities',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 221,
                },
              },
            },
            '800-8600-0191': {
              default: {
                default: {
                  icon: 'poi--fitness',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 222,
                },
              },
            },
            '800-8600-0192': {
              default: {
                default: {
                  icon: 'poi--generic-point_facilities',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 223,
                },
              },
            },
            '800-8600-0193': {
              default: {
                default: {
                  icon: 'poi--golf-course',
                  min_zoom: 15,
                  size: [20, 26],
                  priority: 29,
                },
              },
            },
            '800-8600-0194': {
              default: {
                default: {
                  icon: 'poi--golf-course',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 231,
                },
              },
            },
            '800-8600-0195': {
              default: {
                default: {
                  icon: 'poi--stadium',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 224,
                },
              },
            },
            '800-8600-0196': {
              default: {
                default: {
                  icon: 'poi--generic-point_facilities',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 225,
                },
              },
            },
            '800-8600-0197': {
              default: {
                default: {
                  icon: 'poi--generic-point_facilities',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 226,
                },
              },
            },
            '800-8600-0199': {
              default: {
                default: {
                  icon: 'poi--generic-point_facilities',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 227,
                },
              },
            },
            '800-8600-0200': {
              default: {
                default: {
                  icon: 'poi--generic-point_facilities',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 228,
                },
              },
            },
            '800-8600-0314': {
              default: {
                default: {
                  icon: 'poi--generic-point_facilities',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 229,
                },
              },
            },
            '800-8600-0316': {
              default: {
                default: {
                  icon: 'poi--generic-point_facilities',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 230,
                },
              },
            },
            '800-8700-0166': {
              default: {
                default: {
                  icon: 'poi--cemetry',
                  min_zoom: 19,
                  size: [20, 26],
                  priority: 241,
                },
              },
            },
            '800-8700-0198': {
              default: {
                default: {
                  icon: 'poi--public-toilet',
                  min_zoom: 19,
                  size: [20, 26],
                  priority: 240,
                },
              },
            },
            '900-9100-0216': {
              default: {
                default: {
                  min_zoom: 14,
                  priority: 0,
                },
              },
            },
            '900-9200-0219': {
              default: {
                default: {
                  icon: 'poi--harbor',
                  min_zoom: 15,
                  size: [20, 26],
                  priority: 28,
                },
              },
            },
            '900-9200-0386': {
              default: {
                default: {
                  icon: 'poi--generic-point_business-services-areas',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 203,
                },
              },
            },
            '900-9300-0221': {
              default: {
                default: {
                  icon: 'poi--generic-point_business-services-areas',
                  min_zoom: 18,
                  size: [20, 26],
                  priority: 204,
                },
              },
            },
          },
          getIcons:
            "/**\n * To get icons for the given feature and the given section.\n * @param {Object} properties Feature properties.\n * @param {string} section Section in the extra_data.poi (default, IPC, etc.).\n * @return {Array.<Object>} Icons that belong to the given feature.\n */\nfunction(properties, section) {\n  let icons = [];\n\n  const category = this[section][properties.pds_category];\n  const kindDetail = category && (category[properties.kind_detail] || category['default']);\n  if (kindDetail) {\n    for (let key in properties) {\n      if (key.includes('has_') || (key.includes('is_') && key !== 'is_multimodal')) {\n        let icon;\n        if (properties.is_multimodal) {\n          icon = (kindDetail['is_multimodal'] && kindDetail['is_multimodal'][key]) || kindDetail.default;\n        } else {\n          icon = kindDetail[key] || kindDetail.default;\n        }\n        // icon can be undefined if \"is_*\" flag is in the data, but not in the\n        // master-list, that's currently the case for the \"is_train\" flag:\n        if (icon !== undefined) {\n          icons.push(Object.assign({}, icon));\n        }\n      }\n    }\n\n    // Fallback to kindDetail.default (if defined) in case the\n    // corresponding style for boolean flag is not defined.\n    // In this case we will have only one icon to render:\n    if (icons.length === 0 && kindDetail.default) {\n      icons.push(Object.assign({}, kindDetail.default));\n    }\n  }\n\n  return icons;\n}\n",
          processIcons:
            '/**\n * This funciton does the following:\n * - Sorts icons by their priorities.\n * - Filters-out icons which are outside of the min_zoom range.\n * - Filters-out icons with duplicated images as the same image\n *   shouldn\'t be rendered twice within the same group.\n * - Assigns the default size for each icon, if needed.\n * - Calculates horizontal offset for each icon.\n * - Assigns the priority of the most important icon to each icon.\n *\n * @param {Array.<Object>} icons Icons to process.\n * @partam {number} zoom Current zoom level.\n * @return {Array.<Object>} An array with modified icons.\n */\nfunction(icons, zoom) {\n  // PointOfInterest.General.IconSize\n  let defaultIconSize = zoom < 16 ? 23 : zoom < 18 ? 25 : 26;\n\n  icons.sort((icon1, icon2) => icon1.priority - icon2.priority);\n\n  // Zoom-related filtering is done here and not in the "filter" section of the style because:\n  // - We need an amount of currently visible icons in order to calculate icon offset below.\n  // - We need an amount of currently visible icons in order to calculate text offset during\n  //   the rendering of the multimodal stations.\n  // - We need an amount of currently visible icons because filters of the layers responsible\n  //   for the multimodal stations rendering rely on icons.length.\n  const visited = {};\n  icons = icons.filter((icon) => {\n    if (zoom >= icon.min_zoom) {\n      return visited[icon.icon] ? false : (visited[icon.icon] = true);\n    } else {\n      return false;\n    }\n  });\n\n  for (let i = 0; i < icons.length; i++) {\n    // Scale width according to height\n    let width = Math.round(icons[i].size ?\n      defaultIconSize / icons[i].size[1] * icons[i].size[0] :\n      defaultIconSize);\n    let height = defaultIconSize;\n    icons[i].size = [width, height];\n    let iconWidth = Array.isArray(icons[i].size) ? icons[i].size[0] : icons[i].size;\n    iconWidth = iconWidth + 1; // 1px buffer to avoid collision\n    const firstIconOffset = -((icons.length - 1) * iconWidth / 2);\n    icons[i].offset = [firstIconOffset + iconWidth * i, 0];\n\n    icons[i].priority = icons[0].priority;\n  }\n\n  return icons;\n}\n',
        },
      },
      transform: {
        political_view:
          "function(data, extraData) {\n  if (extraData && extraData.political_view && data.boundaries) {\n    const pview = extraData.political_view;\n    const features = data.boundaries.features;\n    let featureIdx = features.length;\n    while (featureIdx--) {\n      let properties = features[featureIdx].properties;\n      if (properties['kind:'+pview]) {\n        properties.kind = properties['kind:'+pview];\n      }\n    }\n  }\n  return data;\n}\n",
        road_shields:
          "function(data, extraData) {\n  if (data.roads) {\n    const features = data.roads.features;\n    let featureIdx = features.length;\n    while (featureIdx--) {\n      let feature = features[featureIdx],\n          properties = feature.properties;\n      if (typeof properties.all_route_types === 'string') {\n        const types = properties.all_route_types.split(';'),\n              texts = properties.all_shield_texts.split(';'),\n              networks = properties.all_networks.split(';');\n        let idx = types.length;\n        while (idx--) {\n          let props = properties;\n          if (idx) {\n            // Prototyping of feature, properties and geometry + deep clone of geometry coordinates:\n            const featureClone = Object.assign({}, feature);\n            props = featureClone.properties = Object.assign({}, props);\n            featureClone.geometry = Object.assign({}, feature.geometry);\n            const coordinatesClone = featureClone.geometry.coordinates = [],\n                  coordinates = feature.geometry.coordinates;\n            let i = coordinates.length;\n            while (i--) {\n              const lineString = coordinates[i];\n              let lineStringClone;\n              if (lineString[0].slice) {\n                lineStringClone = [];\n                let j = lineString.length;\n                while(j--) lineStringClone[j] = lineString[j].slice();\n              } else {\n                lineStringClone = lineString.slice();\n              };\n              coordinatesClone[i] = lineStringClone;\n            }\n            features.push(featureClone);\n          }\n          props.route_type = types[idx];\n          props.network = networks[idx];\n          props.shield_text = texts[idx];\n        }\n      }\n    }\n  }\n  return data;\n}\n",
        pois: "function(data, extraData, tileInfo) {\n  if (data.pois) {\n    for (let i = 0; i < data.pois.features.length; i++) {\n      const feature = data.pois.features[i];\n      const icons = extraData.poi.getIcons(feature.properties, 'default');\n      feature.properties.icons = extraData.poi.processIcons(icons, tileInfo.coords.z + 1);\n    }\n  }\n  return data;\n}\n",
      },
    },
  },
  scene: {
    background: {
      color: 'global.scene_background_color',
    },
    sky: {
      zenith: 'global.scene_sky_zenith_color',
      horizon: 'global.scene_sky_horizon_color',
      fog: 'global.scene_sky_fog_color',
    },
  },
  textures: {
    icon_library: {
      url: 'https://js.api.here.com/v3/3.1/styles/omv/icons/sprite-2x.png',
      density: 2,
      sprites: {
        'area-icon-day--amusement_park': [2, 42, 68, 68],
        'area-icon-day--animal_park': [82, 2, 68, 68],
        'area-icon-day--golf_course': [154, 2, 68, 68],
        'area-icon-day--hospital_complex': [2, 114, 68, 68],
        'area-icon-day--industrial_complex': [2, 186, 52, 52],
        'area-icon-day--park': [74, 114, 68, 68],
        'area-icon-day--shopping_complex': [146, 114, 68, 68],
        'area-icon-day--sport_complex': [226, 2, 68, 68],
        'area-icon-day--transport_airport': [58, 186, 52, 52],
        'area-icon-day--university_campus': [226, 74, 68, 68],
        'city-center--capital_day': [154, 74, 22, 22],
        'city-center--circle_day': [180, 74, 22, 22],
        'city-center--square_day': [82, 74, 22, 22],
        'lane-arrow-day--arrow': [114, 186, 52, 52],
        'mountain-peak--mountain': [170, 186, 44, 44],
        'mountain-peak--volcano': [218, 186, 44, 44],
      },
    },
    road_icons: {
      url: 'https://js.api.here.com/v3/3.1/styles/omv/icons/road_icons-2x.png',
      density: 2,
      sprites: {
        'road_shield--CAN_british_columbia_1': [816, 170, 28, 48],
        'road_shield--CAN_british_columbia_1_1.5': [816, 222, 42, 48],
        'road_shield--CAN_british_columbia_1_2': [694, 302, 56, 48],
        'road_shield--CAN_manitoba_1': [648, 514, 28, 44],
        'road_shield--CAN_manitoba_1_1.5': [2, 812, 42, 44],
        'road_shield--CAN_manitoba_1_2': [694, 354, 56, 44],
        'road_shield--CAN_manitoba_3': [910, 240, 40, 36],
        'road_shield--CAN_manitoba_3_1.5': [244, 266, 60, 36],
        'road_shield--CAN_manitoba_3_2': [2, 190, 80, 36],
        'road_shield--CAN_northw_territories_1': [758, 698, 32, 52],
        'road_shield--CAN_northw_territories_1_1.5': [2, 756, 48, 52],
        'road_shield--CAN_northw_territories_1_2': [546, 222, 64, 52],
        'road_shield--CAN_novia_scotia_1': [616, 2, 28, 60],
        'road_shield--CAN_novia_scotia_1_1.5': [648, 2, 42, 60],
        'road_shield--CAN_novia_scotia_1_2': [2, 600, 56, 60],
        'road_shield--CAN_ontario_1': [816, 274, 28, 48],
        'road_shield--CAN_ontario_1_1.5': [816, 326, 42, 48],
        'road_shield--CAN_ontario_1_2': [694, 402, 56, 48],
        'road_shield--CAN_ontario_2': [616, 66, 28, 44],
        'road_shield--CAN_ontario_2_1.5': [48, 812, 42, 44],
        'road_shield--CAN_ontario_2_2': [694, 454, 56, 44],
        'road_shield--CAN_ontario_3': [616, 114, 28, 44],
        'road_shield--CAN_ontario_3_1.5': [94, 812, 42, 44],
        'road_shield--CAN_ontario_3_2': [694, 502, 56, 44],
        'road_shield--CAN_prince_edward_isl_1_2': [816, 378, 28, 48],
        'road_shield--CAN_prince_edward_isl_1_2_1.5': [816, 430, 42, 48],
        'road_shield--CAN_prince_edward_isl_1_2_2': [694, 550, 56, 48],
        'road_shield--CAN_quebec_1': [616, 162, 28, 44],
        'road_shield--CAN_quebec_1_1.5': [140, 812, 42, 44],
        'road_shield--CAN_quebec_1_2': [694, 602, 56, 44],
        'road_shield--CAN_quebec_2': [816, 482, 24, 48],
        'road_shield--CAN_quebec_2_1.5': [816, 534, 36, 48],
        'road_shield--CAN_quebec_2_2': [816, 586, 48, 48],
        'road_shield--CAN_saskatchewan_1': [910, 602, 28, 36],
        'road_shield--CAN_saskatchewan_1_1.5': [50, 860, 42, 36],
        'road_shield--CAN_saskatchewan_1_2': [198, 544, 56, 36],
        'road_shield--CAN_saskatchewan_2': [648, 66, 28, 60],
        'road_shield--CAN_saskatchewan_2_1.5': [648, 130, 42, 60],
        'road_shield--CAN_saskatchewan_2_2': [62, 600, 56, 60],
        'road_shield--CAN_saskatchewan_3': [910, 280, 28, 40],
        'road_shield--CAN_saskatchewan_3_1.5': [2, 904, 42, 40],
        'road_shield--CAN_saskatchewan_3_2': [186, 600, 56, 40],
        'road_shield--australia_2': [910, 642, 36, 36],
        'road_shield--australia_2_1.5': [246, 600, 54, 36],
        'road_shield--australia_2_2': [168, 266, 72, 36],
        'road_shield--australia_3': [910, 682, 36, 36],
        'road_shield--australia_3_1.5': [304, 600, 54, 36],
        'road_shield--australia_3_2': [164, 308, 72, 36],
        'road_shield--australia_5': [910, 722, 36, 32],
        'road_shield--australia_5_1.5': [362, 600, 54, 32],
        'road_shield--australia_5_2': [168, 230, 72, 32],
        'road_shield--australia_a': [910, 758, 36, 24],
        'road_shield--australia_a_1.5': [306, 372, 54, 24],
        'road_shield--australia_a_2': [310, 276, 72, 24],
        'road_shield--australia_b': [374, 860, 32, 32],
        'road_shield--australia_b_1.5': [816, 638, 48, 32],
        'road_shield--australia_b_2': [546, 278, 64, 32],
        'road_shield--black_oval': [186, 812, 44, 36],
        'road_shield--black_oval_1.5': [78, 488, 66, 36],
        'road_shield--black_oval_2': [2, 114, 88, 36],
        'road_shield--blue_hexagon': [530, 756, 44, 32],
        'road_shield--blue_hexagon_1.5': [454, 440, 66, 32],
        'road_shield--blue_hexagon_2': [102, 78, 88, 32],
        'road_shield--blue_pentagon': [910, 786, 36, 32],
        'road_shield--blue_pentagon_1.5': [420, 600, 54, 32],
        'road_shield--blue_pentagon_2': [240, 308, 72, 32],
        'road_shield--blue_rectangle': [910, 822, 36, 24],
        'road_shield--blue_rectangle_1.5': [364, 372, 54, 24],
        'road_shield--blue_rectangle_2': [316, 308, 72, 24],
        'road_shield--blue_rectangle_yellow': [910, 850, 36, 24],
        'road_shield--blue_rectangle_yellow_1.5': [438, 544, 54, 24],
        'road_shield--blue_rectangle_yellow_2': [394, 2, 72, 24],
        'road_shield--blue_shield': [868, 50, 36, 36],
        'road_shield--blue_shield_1.5': [122, 664, 54, 36],
        'road_shield--blue_shield_2': [394, 30, 72, 36],
        'road_shield--blue_square': [616, 318, 28, 28],
        'road_shield--blue_square_1.5': [648, 562, 42, 28],
        'road_shield--blue_square_2': [382, 400, 56, 28],
        'road_shield--blue_square_white': [616, 350, 28, 28],
        'road_shield--blue_square_white_1.5': [392, 716, 42, 28],
        'road_shield--blue_square_white_2': [484, 488, 56, 28],
        'road_shield--brazil_a': [868, 90, 36, 32],
        'road_shield--brazil_a_1.5': [478, 600, 54, 32],
        'road_shield--brazil_a_2': [394, 70, 72, 32],
        'road_shield--brazil_b': [54, 756, 52, 36],
        'road_shield--brazil_b_1.5': [86, 266, 78, 36],
        'road_shield--brazil_b_2': [2, 2, 104, 36],
        'road_shield--canada_a': [868, 2, 38, 44],
        'road_shield--canada_a_1.5': [694, 254, 58, 44],
        'road_shield--canada_a_2': [84, 308, 76, 44],
        'road_shield--generic': [868, 126, 36, 24],
        'road_shield--generic_1.5': [496, 544, 54, 24],
        'road_shield--generic_2': [394, 106, 72, 24],
        'road_shield--greece_a': [410, 860, 32, 32],
        'road_shield--greece_a_1.5': [816, 674, 48, 32],
        'road_shield--greece_a_2': [546, 314, 64, 32],
        'road_shield--green_hexagon': [578, 756, 44, 32],
        'road_shield--green_hexagon_1.5': [148, 488, 66, 32],
        'road_shield--green_hexagon_2': [94, 114, 88, 32],
        'road_shield--green_octagon': [868, 154, 36, 32],
        'road_shield--green_octagon_1.5': [536, 600, 54, 32],
        'road_shield--green_octagon_2': [394, 134, 72, 32],
        'road_shield--green_pentagon': [868, 190, 36, 32],
        'road_shield--green_pentagon_1.5': [594, 600, 54, 32],
        'road_shield--green_pentagon_2': [394, 170, 72, 32],
        'road_shield--green_rectangle': [868, 226, 36, 24],
        'road_shield--green_rectangle_1.5': [554, 544, 54, 24],
        'road_shield--green_rectangle_2': [394, 206, 72, 24],
        'road_shield--green_square_white': [616, 382, 28, 28],
        'road_shield--green_square_white_1.5': [438, 716, 42, 28],
        'road_shield--green_square_white_2': [258, 544, 56, 28],
        'road_shield--hongkong_a': [616, 210, 24, 32],
        'road_shield--hongkong_a_1.5': [868, 254, 36, 32],
        'road_shield--hongkong_a_2': [816, 710, 48, 32],
        'road_shield--india_a': [816, 746, 28, 48],
        'road_shield--india_a_1.5': [648, 306, 42, 48],
        'road_shield--india_a_2': [2, 664, 56, 48],
        'road_shield--india_b': [648, 358, 28, 48],
        'road_shield--india_b_1.5': [648, 410, 42, 48],
        'road_shield--india_b_2': [62, 664, 56, 48],
        'road_shield--israel_a': [910, 324, 40, 32],
        'road_shield--israel_a_1.5': [244, 230, 60, 32],
        'road_shield--israel_a_2': [86, 190, 80, 32],
        'road_shield--israel_b': [910, 360, 40, 32],
        'road_shield--israel_b_1.5': [356, 488, 60, 32],
        'road_shield--israel_b_2': [170, 190, 80, 32],
        'road_shield--israel_c': [626, 756, 44, 32],
        'road_shield--israel_c_1.5': [218, 488, 66, 32],
        'road_shield--israel_c_2': [2, 154, 88, 32],
        'road_shield--israel_d': [254, 190, 52, 32],
        'road_shield--israel_d_1.5': [86, 230, 78, 32],
        'road_shield--israel_d_2': [2, 42, 104, 32],
        'road_shield--japan_ew_a': [910, 396, 40, 32],
        'road_shield--japan_ew_a_1.5': [420, 488, 60, 32],
        'road_shield--japan_ew_a_2': [2, 230, 80, 32],
        'road_shield--japan_mr_a': [2, 860, 44, 40],
        'road_shield--japan_mr_a_1.5': [546, 2, 66, 40],
        'road_shield--japan_mr_a_2': [218, 2, 88, 40],
        'road_shield--japan_nr_a': [910, 432, 40, 38],
        'road_shield--japan_nr_a_1.5': [70, 544, 60, 38],
        'road_shield--japan_nr_a_2': [2, 266, 80, 38],
        'road_shield--japan_ue_a': [910, 194, 40, 42],
        'road_shield--japan_ue_a_1.5': [122, 600, 60, 42],
        'road_shield--japan_ue_a_2': [310, 2, 80, 42],
        'road_shield--korea_1': [868, 290, 36, 36],
        'road_shield--korea_1_1.5': [180, 664, 54, 36],
        'road_shield--korea_1_2': [394, 234, 72, 36],
        'road_shield--korea_2': [674, 756, 44, 32],
        'road_shield--korea_2_1.5': [546, 46, 66, 32],
        'road_shield--korea_2_2': [218, 46, 88, 32],
        'road_shield--korea_3': [868, 330, 36, 24],
        'road_shield--korea_3_1.5': [238, 664, 54, 24],
        'road_shield--korea_3_2': [394, 274, 72, 24],
        'road_shield--korea_4': [868, 358, 36, 24],
        'road_shield--korea_4_1.5': [296, 664, 54, 24],
        'road_shield--korea_4_2': [394, 302, 72, 24],
        'road_shield--korea_5': [722, 756, 44, 32],
        'road_shield--korea_5_1.5': [546, 82, 66, 32],
        'road_shield--korea_5_2': [218, 82, 88, 32],
        'road_shield--kuwait_a': [616, 538, 24, 24],
        'road_shield--kuwait_a_1.5': [868, 386, 36, 24],
        'road_shield--kuwait_a_2': [586, 664, 48, 24],
        'road_shield--kuwait_b': [868, 414, 36, 24],
        'road_shield--kuwait_b_1.5': [354, 664, 54, 24],
        'road_shield--kuwait_b_2': [394, 330, 72, 24],
        'road_shield--kuwait_c': [616, 566, 24, 24],
        'road_shield--kuwait_c_1.5': [868, 442, 36, 24],
        'road_shield--kuwait_c_2': [638, 664, 48, 24],
        'road_shield--luxembourg_c': [868, 470, 36, 24],
        'road_shield--luxembourg_c_1.5': [412, 664, 54, 24],
        'road_shield--luxembourg_c_2': [2, 372, 72, 24],
        'road_shield--mexico_a': [868, 498, 36, 36],
        'road_shield--mexico_a_1.5': [2, 716, 54, 36],
        'road_shield--mexico_a_2': [2, 400, 72, 36],
        'road_shield--mexico_b': [616, 414, 24, 28],
        'road_shield--mexico_b_1.5': [868, 538, 36, 28],
        'road_shield--mexico_b_2': [292, 716, 48, 28],
        'road_shield--namibia_a': [868, 570, 36, 36],
        'road_shield--namibia_a_1.5': [60, 716, 54, 36],
        'road_shield--namibia_a_2': [78, 400, 72, 36],
        'road_shield--netherlands_c': [166, 756, 48, 32],
        'road_shield--netherlands_c_1.5': [154, 400, 72, 32],
        'road_shield--netherlands_c_2': [2, 78, 96, 32],
        'road_shield--newzealand_a': [868, 610, 36, 36],
        'road_shield--newzealand_a_1.5': [118, 716, 54, 36],
        'road_shield--newzealand_a_2': [470, 2, 72, 36],
        'road_shield--newzealand_b': [446, 860, 32, 32],
        'road_shield--newzealand_b_1.5': [218, 756, 48, 32],
        'road_shield--newzealand_b_2': [546, 350, 64, 32],
        'road_shield--orange_hexagon': [234, 812, 44, 32],
        'road_shield--orange_hexagon_1.5': [546, 118, 66, 32],
        'road_shield--orange_hexagon_2': [218, 118, 88, 32],
        'road_shield--orange_rectangle': [868, 650, 36, 24],
        'road_shield--orange_rectangle_1.5': [470, 664, 54, 24],
        'road_shield--orange_rectangle_2': [470, 42, 72, 24],
        'road_shield--peru_1': [868, 678, 36, 36],
        'road_shield--peru_1_1.5': [176, 716, 54, 36],
        'road_shield--peru_1_2': [470, 70, 72, 36],
        'road_shield--puerto_rico_1': [616, 246, 24, 32],
        'road_shield--puerto_rico_1_1.5': [868, 718, 36, 32],
        'road_shield--puerto_rico_1_2': [270, 756, 48, 32],
        'road_shield--puerto_rico_2': [616, 282, 24, 32],
        'road_shield--puerto_rico_2_1.5': [868, 754, 36, 32],
        'road_shield--puerto_rico_2_2': [322, 756, 48, 32],
        'road_shield--puerto_rico_3': [910, 474, 40, 36],
        'road_shield--puerto_rico_3_1.5': [134, 544, 60, 36],
        'road_shield--puerto_rico_3_2': [310, 48, 80, 36],
        'road_shield--qatar_b': [616, 446, 28, 24],
        'road_shield--qatar_b_1.5': [422, 372, 42, 24],
        'road_shield--qatar_b_2': [546, 514, 56, 24],
        'road_shield--red_hexagon': [282, 812, 44, 32],
        'road_shield--red_hexagon_1.5': [546, 154, 66, 32],
        'road_shield--red_hexagon_2': [218, 154, 88, 32],
        'road_shield--red_rectangle': [868, 790, 36, 24],
        'road_shield--red_rectangle_1.5': [528, 664, 54, 24],
        'road_shield--red_rectangle_2': [470, 110, 72, 24],
        'road_shield--romania_b': [868, 818, 36, 28],
        'road_shield--romania_b_1.5': [234, 716, 54, 28],
        'road_shield--romania_b_2': [470, 138, 72, 28],
        'road_shield--romania_c': [652, 600, 36, 32],
        'road_shield--romania_c_1.5': [758, 2, 54, 32],
        'road_shield--romania_c_2': [470, 170, 72, 32],
        'road_shield--saudiarabia_1': [482, 860, 32, 32],
        'road_shield--saudiarabia_1_1.5': [374, 756, 48, 32],
        'road_shield--saudiarabia_1_2': [546, 386, 64, 32],
        'road_shield--saudiarabia_2': [910, 2, 40, 44],
        'road_shield--saudiarabia_2_1.5': [694, 2, 60, 44],
        'road_shield--saudiarabia_2_2': [310, 88, 80, 44],
        'road_shield--saudiarabia_3': [96, 860, 36, 36],
        'road_shield--saudiarabia_3_1.5': [758, 38, 54, 36],
        'road_shield--saudiarabia_3_2': [470, 206, 72, 36],
        'road_shield--southafrica_a': [136, 860, 36, 36],
        'road_shield--southafrica_a_1.5': [758, 78, 54, 36],
        'road_shield--southafrica_a_2': [470, 246, 72, 36],
        'road_shield--southafrica_b': [910, 514, 40, 40],
        'road_shield--southafrica_b_1.5': [694, 50, 60, 40],
        'road_shield--southafrica_b_2': [310, 136, 80, 40],
        'road_shield--southafrica_d': [770, 756, 36, 32],
        'road_shield--southafrica_d_1.5': [758, 118, 54, 32],
        'road_shield--southafrica_d_2': [470, 286, 72, 32],
        'road_shield--taiwan_a': [518, 860, 32, 32],
        'road_shield--taiwan_a_1.5': [426, 756, 48, 32],
        'road_shield--taiwan_a_2': [546, 422, 64, 32],
        'road_shield--taiwan_b': [176, 860, 36, 36],
        'road_shield--taiwan_b_1.5': [758, 154, 54, 36],
        'road_shield--taiwan_b_2': [470, 322, 72, 36],
        'road_shield--taiwan_c': [216, 860, 36, 36],
        'road_shield--taiwan_c_1.5': [758, 194, 54, 36],
        'road_shield--taiwan_c_2': [470, 362, 72, 36],
        'road_shield--thailand_1': [910, 50, 36, 44],
        'road_shield--thailand_1_1.5': [758, 234, 54, 44],
        'road_shield--thailand_1_2': [2, 440, 72, 44],
        'road_shield--thailand_2': [910, 98, 36, 44],
        'road_shield--thailand_2_1.5': [758, 282, 54, 44],
        'road_shield--thailand_2_2': [78, 440, 72, 44],
        'road_shield--thailand_3': [910, 146, 36, 44],
        'road_shield--thailand_3_1.5': [758, 330, 54, 44],
        'road_shield--thailand_3_2': [154, 440, 72, 44],
        'road_shield--u_a_emirates_1': [648, 194, 36, 52],
        'road_shield--u_a_emirates_1_1.5': [758, 378, 54, 52],
        'road_shield--u_a_emirates_1_2': [2, 488, 72, 52],
        'road_shield--u_a_emirates_2a': [648, 250, 32, 52],
        'road_shield--u_a_emirates_2a_1.5': [816, 2, 48, 52],
        'road_shield--u_a_emirates_2a_2': [546, 458, 64, 52],
        'road_shield--u_a_emirates_2b': [694, 94, 52, 60],
        'road_shield--u_a_emirates_2b_1.5': [2, 308, 78, 60],
        'road_shield--u_a_emirates_2b_2': [110, 2, 104, 60],
        'road_shield--u_a_emirates_2c': [816, 58, 32, 52],
        'road_shield--u_a_emirates_2c_1.5': [816, 114, 48, 52],
        'road_shield--u_a_emirates_2c_2': [2, 544, 64, 52],
        'road_shield--us_virgin_islands': [554, 860, 32, 32],
        'road_shield--us_virgin_islands_1.5': [478, 756, 48, 32],
        'road_shield--us_virgin_islands_2': [288, 488, 64, 32],
        'road_shield--usa_a': [256, 860, 36, 36],
        'road_shield--usa_a_1.5': [758, 434, 54, 36],
        'road_shield--usa_a_2': [230, 440, 72, 36],
        'road_shield--venezuela_1': [910, 558, 40, 40],
        'road_shield--venezuela_1_1.5': [694, 158, 60, 40],
        'road_shield--venezuela_1_2': [310, 180, 80, 40],
        'road_shield--venezuela_2': [336, 860, 34, 32],
        'road_shield--venezuela_2_1.5': [110, 756, 52, 32],
        'road_shield--venezuela_2_2': [382, 440, 68, 32],
        'road_shield--white_oval': [344, 716, 44, 28],
        'road_shield--white_oval_1.5': [546, 190, 66, 28],
        'road_shield--white_oval_2': [94, 154, 88, 28],
        'road_shield--white_pentagon': [330, 812, 36, 32],
        'road_shield--white_pentagon_1.5': [758, 474, 54, 32],
        'road_shield--white_pentagon_2': [470, 402, 72, 32],
        'road_shield--white_pentagon_round': [370, 812, 36, 32],
        'road_shield--white_pentagon_round_1.5': [758, 510, 54, 32],
        'road_shield--white_pentagon_round_2': [230, 400, 72, 32],
        'road_shield--white_rectangle': [690, 664, 36, 24],
        'road_shield--white_rectangle_1.5': [758, 546, 54, 24],
        'road_shield--white_rectangle_2': [78, 372, 72, 24],
        'road_shield--white_rectangle_green': [576, 716, 36, 24],
        'road_shield--white_rectangle_green_1.5': [758, 574, 54, 24],
        'road_shield--white_rectangle_green_2': [154, 372, 72, 24],
        'road_shield--white_shield': [410, 812, 36, 28],
        'road_shield--white_shield_1.5': [758, 602, 54, 28],
        'road_shield--white_shield_2': [306, 400, 72, 28],
        'road_shield--white_shield_m': [648, 462, 40, 48],
        'road_shield--white_shield_m_1.5': [694, 202, 60, 48],
        'road_shield--white_shield_m_2': [310, 224, 80, 48],
        'road_shield--white_square': [616, 474, 28, 28],
        'road_shield--white_square_1.5': [484, 716, 42, 28],
        'road_shield--white_square_2': [318, 544, 56, 28],
        'road_shield--white_square_red': [616, 506, 28, 28],
        'road_shield--white_square_red_1.5': [530, 716, 42, 28],
        'road_shield--white_square_red_2': [378, 544, 56, 28],
        'road_shield--yellow_pentagon': [296, 860, 36, 32],
        'road_shield--yellow_pentagon_1.5': [758, 634, 54, 32],
        'road_shield--yellow_pentagon_2': [306, 440, 72, 32],
        'road_shield--yellow_rectangle': [616, 716, 36, 24],
        'road_shield--yellow_rectangle_1.5': [758, 670, 54, 24],
        'road_shield--yellow_rectangle_2': [230, 372, 72, 24],
      },
    },
    pois: {
      url: 'https://js.api.here.com/v3/3.1/styles/omv/icons/poi-2x.png',
      density: 2,
      sprites: {
        'poi--airport': [4, 4, 40, 52],
        'poi--amusement-park': [52, 4, 40, 52],
        'poi--art-gallery': [100, 4, 40, 52],
        'poi--atm': [4, 64, 40, 52],
        'poi--attraction': [52, 64, 40, 52],
        'poi--bank': [100, 64, 40, 52],
        'poi--beach': [148, 4, 40, 52],
        'poi--bookstore': [148, 64, 40, 52],
        'poi--bowling': [4, 124, 40, 52],
        'poi--bus': [52, 124, 40, 52],
        'poi--cable-way': [100, 124, 40, 52],
        'poi--camping': [148, 124, 40, 52],
        'poi--car-charging': [196, 4, 40, 52],
        'poi--car-dealership': [196, 64, 40, 52],
        'poi--car-rental': [196, 124, 40, 52],
        'poi--car-repair': [4, 184, 40, 52],
        'poi--car-wash': [52, 184, 40, 52],
        'poi--casino': [100, 184, 40, 52],
        'poi--cemetry': [148, 184, 40, 52],
        'poi--cinema': [196, 184, 40, 52],
        'poi--cocktail': [244, 4, 40, 52],
        'poi--coffee': [244, 64, 40, 52],
        'poi--education': [244, 124, 40, 52],
        'poi--exhibition-center': [244, 184, 40, 52],
        'poi--facilities': [292, 4, 40, 52],
        'poi--fast-food': [292, 64, 40, 52],
        'poi--ferry': [292, 124, 40, 52],
        'poi--first-aid': [292, 184, 40, 52],
        'poi--fitness': [4, 244, 40, 52],
        'poi--frontier-crossing': [52, 244, 40, 52],
        'poi--game-arcade': [100, 244, 40, 52],
        'poi--generic-point_business-services-areas': [148, 244, 40, 52],
        'poi--generic-point_entertainment': [196, 244, 40, 52],
        'poi--generic-point_facilities': [244, 244, 40, 52],
        'poi--generic-point_leisure-outdoor': [292, 244, 40, 52],
        'poi--generic-point_shopping': [340, 4, 40, 52],
        'poi--generic-point_sights-museum': [340, 64, 40, 52],
        'poi--golf-course': [340, 124, 40, 52],
        'poi--harbor': [340, 184, 40, 52],
        'poi--hospital': [340, 244, 40, 52],
        'poi--hotel': [4, 304, 40, 52],
        'poi--inclined': [52, 304, 40, 52],
        'poi--karaoke': [100, 304, 40, 52],
        'poi--laundry': [148, 304, 40, 52],
        'poi--library': [196, 304, 40, 52],
        'poi--metro': [244, 304, 40, 52],
        'poi--monorail': [292, 304, 40, 52],
        'poi--mountain': [340, 424, 40, 40],
        'poi--mountain-pass': [340, 304, 40, 52],
        'poi--nature': [388, 4, 40, 52],
        'poi--nature-overlook': [388, 64, 40, 52],
        'poi--night-club': [388, 124, 40, 52],
        'poi--park-and-ride': [388, 184, 40, 52],
        'poi--parking': [388, 244, 40, 52],
        'poi--parking-garage': [388, 304, 40, 52],
        'poi--petrol-station': [4, 364, 40, 52],
        'poi--pharmacy': [52, 364, 40, 52],
        'poi--picnic-area': [100, 364, 40, 52],
        'poi--police': [148, 364, 40, 52],
        'poi--pool': [196, 364, 40, 52],
        'poi--post': [244, 364, 40, 52],
        'poi--pub': [292, 364, 40, 52],
        'poi--public-toilet': [340, 364, 40, 52],
        'poi--rail-light': [388, 364, 40, 52],
        'poi--rail-regional': [436, 4, 40, 52],
        'poi--religious-place': [436, 64, 40, 52],
        'poi--restaurant': [436, 124, 40, 52],
        'poi--shopping': [436, 184, 40, 52],
        'poi--ski-run': [436, 244, 40, 52],
        'poi--stadium': [436, 304, 40, 52],
        'poi--swimming': [436, 364, 40, 52],
        'poi--taxi': [4, 424, 40, 52],
        'poi--theater': [52, 424, 40, 52],
        'poi--toll-booth': [100, 424, 40, 52],
        'poi--tourist-information': [148, 424, 40, 52],
        'poi--train': [196, 424, 40, 52],
        'poi--travel-agent-ticketing': [244, 424, 40, 52],
        'poi--zoo': [292, 424, 40, 52],
      },
    },
  },
  fonts: {
    FiraGO: [
      {
        weight: 'normal',
        url: 'https://js.api.here.com/v3/3.1/styles/fonts/FiraGO-Map.woff',
      },
      {
        weight: 'normal',
        style: 'italic',
        url: 'https://js.api.here.com/v3/3.1/styles/fonts/FiraGO-Italic.woff',
      },
    ],
  },
  styles: {
    icon_library: {
      base: 'points',
      texture: 'icon_library',
      blend_order: 1,
      draw: {
        size: 'global.icon_size',
        sprite_default: 'generic',
        buffer: 'global.texture_buffer_size',
        text: {
          text_source: 'global.ux_language_text_source',
          anchor: [
            'top-right',
            'top-left',
            'bottom-right',
            'bottom-left',
            'top',
            'bottom',
          ],
          buffer: 'global.texture_buffer_size',
          text_wrap: 18,
          max_lines: 3,
          font: {
            family: 'global.text_font_family',
            weight: 'global.icon.text.font.weight',
            fill: 'global.text_fill',
            size: 'global.icon.text.font.size',
            stroke: 'global.icon.text.font.stroke',
          },
        },
      },
    },
    'text-blend-order': {
      base: 'text',
      blend_order: 1,
    },
    'translucent-polygons': {
      base: 'polygons',
      blend: 'translucent',
      material: {
        ambient: 1.7,
        diffuse: 0.3,
      },
    },
    'translucent-lines': {
      base: 'lines',
      blend: 'translucent',
    },
    'center-lines': {
      base: 'lines',
      blend: 'opaque',
    },
    bridge: {
      base: 'lines',
      blend: 'opaque',
      draw: {
        order: 'global.feature_order',
        cap: 'round',
        outline: {
          cap: 'butt',
          width: [
            [14, '0px'],
            [16, '1.5px'],
            [17, '2px'],
          ],
          color: 'global.bridge_outline',
        },
      },
    },
    shields: {
      base: 'points',
      blend_order: 1,
      draw: {
        visible: 'global.shields_visible',
        texture: 'road_icons',
        sprite:
          "function() {\n  // TODO: As a Hot-Fix for OLPRPS-7447 we fall back to the ref property:\n  const text = feature.shield_text || feature.all_shield_texts || feature.ref;\n  if (text) {\n    const size = text.length;\n    return global.shield.getStyle(feature).icon + (size < 3 ? '' : size < 5 ? '_1.5' : '_2');\n  }\n}\n",
        size: 'global.shield.size',
        repeat_group: 'shields',
        repeat_distance: 'global.shield.repeat_distance',
        placement: 'midpoint',
        placement_min_length_ratio: 0.1,
        text: {
          anchor: 'center',
          text_source:
            'function() {\n  // TODO: As a Hot-Fix for OLPRPS-7447 we fall back to the ref property:\n  return feature.shield_text || feature.all_shield_texts || feature.ref;\n}\n',
          font: {
            fill: 'function() {return global.shield.getStyle(feature).fontColor;}',
            family: 'global.text_font_family',
            weight: 'global.shield.text.font.weight',
            size: 'global.shield.text.font.size',
          },
        },
      },
    },
    pois: {
      base: 'points',
      blend_order: 1,
      draw: {
        texture: 'pois',
      },
    },
  },
  layers: {
    earth: {
      data: {
        source: 'omv',
        layer: 'earth',
      },
      draw: {
        polygons: {
          order: 100,
          color: 'global.land_color',
        },
      },
    },
    landuse: {
      filter: 'global.feature_min_zoom_filter',
      data: {
        source: 'omv',
        layer: 'landuse',
      },
      draw: {
        polygons: {
          order: 'global.feature_order',
        },
        lines: {
          order: 'global.feature_order',
        },
      },
      label: {
        filter: {
          all: [
            {
              $geometry: 'point',
            },
          ],
        },
        draw: {
          'text-blend-order': {
            text_source: 'global.ux_language_text_source',
            priority: 'global.label.priorities.small-land-use-labels',
            text_wrap: 18,
            font: {
              fill: 'global.landuse_default_label_color',
              family: 'global.text_font_family',
              weight: 'normal',
              size: 'global.landuse_default_label_font_size',
              stroke: {
                color: 'global.landuse_default_label_font_stroke_color',
                width: 'global.landuse_default_label_font_stroke_width',
              },
            },
          },
        },
        park: {
          filter: {
            kind: 'park',
          },
          draw: {
            'text-blend-order': {
              font: {
                fill: 'global.landuse_park_label_color',
                stroke: {
                  color: 'global.landuse_park_label_outline_color',
                },
              },
            },
          },
        },
        'forest-national-park': {
          filter: {
            kind: ['forest', 'national_park', 'nature_reserve'],
          },
          draw: {
            'text-blend-order': {
              priority: 'global.label.priorities.land-cover-labels',
              font: {
                fill: 'global.landuse_forest_label_color',
                stroke: {
                  color: 'global.landuse_forest_label_outline_color',
                },
              },
            },
          },
          'national_park-nature_reserve': {
            filter: {
              kind: ['national_park', 'nature_reserve'],
            },
            draw: {
              'text-blend-order': {
                priority: 'global.label.priorities.large-land-use-labels',
              },
            },
          },
        },
        pedestrian: {
          filter: {
            kind: 'pedestrian',
          },
          draw: {
            'text-blend-order': {
              font: {
                fill: 'global.landuse_pedestrian_label_color',
                stroke: {
                  color: 'global.landuse_pedestrian_label_outline_color',
                },
              },
            },
          },
        },
        beach: {
          filter: {
            kind: 'beach',
          },
          draw: {
            'text-blend-order': {
              font: {
                fill: 'global.landuse_beach_label_color',
                stroke: {
                  color: 'global.landuse_beach_label_outline_color',
                },
              },
            },
          },
        },
        military: {
          filter: {
            kind: 'military',
          },
          draw: {
            'text-blend-order': {
              priority: 'global.label.priorities.large-land-use-labels',
              font: {
                fill: 'global.landuse_military_label_color',
                stroke: {
                  color: 'global.landuse_military_label_outline_color',
                },
              },
            },
          },
        },
        other: {
          filter: {
            kind: ['railway', 'parking'],
          },
          draw: {
            'text-blend-order': {
              font: {
                fill: 'global.landuse_gray_label_color',
                stroke: {
                  color: 'global.landuse_gray_label_outline_color',
                },
              },
            },
          },
        },
        industrial: {
          filter: {
            kind: 'industrial',
          },
          draw: {
            'text-blend-order': {
              font: {
                fill: 'global.landuse_industrial_label_color',
                stroke: {
                  color: 'global.landuse_industrial_outline_color',
                },
              },
            },
          },
        },
        'with-icon': {
          filter: {
            kind: [
              'sports_centre',
              'commercial',
              'zoo',
              'theme_park',
              'hospital',
              'aerodrome',
              'golf_course',
              'university',
            ],
          },
          draw: {
            icon_library: {
              priority: 'global.label.priorities.small-land-use-labels',
              text: {
                anchor: ['top', 'bottom', 'left', 'right'],
                text_wrap: 18,
                font: {
                  size: 'global.landuse_default_label_font_size',
                  stroke: {
                    color: 'global.landuse_default_label_font_stroke_color',
                    width: '2px',
                  },
                },
              },
            },
          },
          sports_centre: {
            filter: {
              kind: 'sports_centre',
            },
            draw: {
              icon_library: {
                sprite: 'area-icon-day--sport_complex',
                text: {
                  font: {
                    fill: 'global.landuse_default_label_color',
                    stroke: {
                      color: 'global.landuse_default_label_font_stroke_color',
                    },
                  },
                },
              },
            },
          },
          commercial: {
            filter: {
              kind: 'commercial',
            },
            draw: {
              icon_library: {
                sprite: 'area-icon-day--shopping_complex',
                text: {
                  font: {
                    fill: 'global.landuse_gray_label_color',
                    stroke: {
                      color: 'global.landuse_gray_label_outline_color',
                    },
                  },
                },
              },
            },
          },
          zoo: {
            filter: {
              kind: 'zoo',
            },
            draw: {
              icon_library: {
                sprite: 'area-icon-day--animal_park',
                text: {
                  font: {
                    fill: 'global.landuse_gray_label_color',
                    stroke: {
                      color: 'global.landuse_gray_label_outline_color',
                    },
                  },
                },
              },
            },
          },
          theme_park: {
            filter: {
              kind: 'theme_park',
            },
            draw: {
              icon_library: {
                sprite: 'area-icon-day--amusement_park',
                text: {
                  font: {
                    fill: 'global.landuse_gray_label_color',
                    stroke: {
                      color: 'global.landuse_gray_label_outline_color',
                    },
                  },
                },
              },
            },
          },
          hospital: {
            filter: {
              kind: 'hospital',
            },
            draw: {
              icon_library: {
                sprite: 'area-icon-day--hospital_complex',
                text: {
                  font: {
                    fill: 'global.landuse_hospital_label_color',
                    stroke: {
                      color: 'global.landuse_hospital_label_outline_color',
                    },
                  },
                },
              },
            },
          },
          aerodrome: {
            filter: {
              kind: 'aerodrome',
            },
            draw: {
              icon_library: {
                sprite: 'area-icon-day--transport_airport',
                text: {
                  font: {
                    fill: 'global.landuse_gray_label_color',
                    stroke: {
                      color: 'global.landuse_gray_label_outline_color',
                    },
                  },
                },
              },
            },
          },
          golf: {
            filter: {
              kind: 'golf_course',
            },
            draw: {
              icon_library: {
                sprite: 'area-icon-day--golf_course',
                text: {
                  font: {
                    fill: 'global.landuse_golf_course_label_color',
                    stroke: {
                      color: 'global.landuse_golf_course_label_outline_color',
                    },
                  },
                },
              },
            },
          },
          university: {
            filter: {
              kind: 'university',
            },
            draw: {
              icon_library: {
                sprite: 'area-icon-day--university_campus',
                text: {
                  font: {
                    fill: 'global.landuse_university_label_color',
                    stroke: {
                      color: 'global.landuse_university_label_outline_color',
                    },
                  },
                },
              },
            },
          },
        },
      },
      wood: {
        filter: {
          kind: ['wood', 'natural_wood', 'wetland'],
        },
        draw: {
          polygons: {
            color: 'global.woodland_color',
          },
        },
      },
      forest: {
        filter: {
          kind: ['forest', 'natural_forest'],
        },
        draw: {
          polygons: {
            color: 'global.forest_color',
          },
        },
      },
      park: {
        filter: {
          kind: ['park', 'grass'],
        },
        draw: {
          polygons: {
            color: 'global.park_color',
          },
        },
      },
      national_park: {
        filter: {
          kind: 'national_park',
        },
        draw: {
          polygons: {
            color: 'global.national_park_color',
          },
        },
      },
      nature_reserve: {
        filter: {
          kind: 'nature_reserve',
        },
        draw: {
          polygons: {
            color: 'global.native_reservation_color',
          },
        },
      },
      glacier: {
        filter: {
          kind: 'glacier',
        },
        draw: {
          polygons: {
            color: 'global.glacier_color',
          },
        },
      },
      beach: {
        filter: {
          kind: 'beach',
        },
        draw: {
          polygons: {
            color: 'global.beach_color',
          },
        },
      },
      builtup: {
        filter: {
          kind: ['residential', 'urban', 'urban_area'],
        },
        draw: {
          polygons: {
            color: 'global.builtup_area_color',
          },
          lines: {
            color: 'global.builtup_area_outline_color',
            width: 'global.builtup_area_outline_width',
          },
        },
      },
      'green-areas': {
        filter: {
          kind: [
            'allotments',
            'amusement_ride',
            'animal',
            'cemetery',
            'grave_yard',
            'playground',
            'pitch',
            'recreation-ground',
            'recreation_track',
            'sports_centre',
            'stadium',
            'theme_park',
            'zoo',
          ],
        },
        draw: {
          polygons: {
            color: 'global.green_area_color',
          },
        },
      },
      golf: {
        filter: {
          kind: 'golf_course',
        },
        draw: {
          polygons: {
            color: 'global.golf_course_color',
          },
        },
      },
      hospital: {
        filter: {
          kind: 'hospital',
        },
        draw: {
          polygons: {
            color: 'global.hospital_color',
          },
        },
      },
      university: {
        filter: {
          kind: ['college', 'university'],
        },
        draw: {
          polygons: {
            color: 'global.university_campus_color',
          },
        },
      },
      military: {
        filter: {
          kind: 'military',
        },
        draw: {
          polygons: {
            color: 'global.military_color',
          },
        },
      },
      pedestrian: {
        filter: {
          kind: 'pedestrian',
        },
        draw: {
          polygons: {
            color: 'global.pedestrian_area_color',
          },
        },
      },
      runway: {
        filter: {
          kind: 'runway',
        },
        draw: {
          polygons: {
            color: 'global.runway_color',
          },
        },
      },
      aerodrome: {
        filter: {
          kind: 'aerodrome',
        },
        draw: {
          polygons: {
            color: 'global.aerodrome_color',
          },
        },
      },
      other: {
        filter: {
          kind: ['industrial', 'railway', 'commercial', 'bridge', 'parking'],
        },
        draw: {
          polygons: {
            color: 'global.industrial_color',
          },
        },
      },
    },
    water: {
      data: {
        source: 'omv',
        layer: 'water',
      },
      draw: {
        polygons: {
          order: 'global.feature_order',
          color: 'global.water_color',
        },
      },
      small_water: {
        filter: {
          kind: ['basin', 'lake', 'dock', 'playa', 'riverbank'],
        },
        draw: {
          polygons: {
            color: 'global.water_color',
          },
        },
      },
      deep_water: {
        filter: {
          all: [
            {
              $geometry: 'polygon',
            },
            {
              kind: ['ocean', 'sea'],
            },
          ],
        },
        draw: {
          polygons: {
            color: 'global.water_deep_color',
          },
        },
      },
      river: {
        filter: {
          all: [
            {
              kind: ['river', 'canal', 'ditch', 'drain', 'stream'],
            },
            {
              $geometry: 'line',
            },
          ],
        },
        draw: {
          lines: {
            order: 'global.feature_order',
            width: 'global.water_river_line_width',
            color: 'global.water_color',
            cap: 'round',
          },
        },
      },
      'water-labels': {
        filter: {
          all: [
            {
              name: true,
            },
          ],
        },
        draw: {
          'text-blend-order': {
            text_source: 'global.ux_language_text_source',
            visible: 'global.text_visible_water_labels',
            priority: 'global.label.priorities.water-labels',
            font: {
              fill: 'global.water_label_sea_color',
              family: 'global.text_font_family',
              weight: 'global.water.default.label.font.weight',
              size: 'global.water.default.label.font.size',
              style: 'global.water.default.label.font.style',
            },
          },
        },
        'ocean-labels': {
          filter: {
            all: [
              {
                kind: ['ocean'],
              },
              "function() { var name = feature.name || feature['name:en']; return name && name.indexOf('Ocean') != -1 }",
            ],
          },
          draw: {
            'text-blend-order': {
              text_source: 'global.ux_language_text_source_ocean',
              text_wrap: false,
              priority: 'global.label.priorities.ocean-labels',
              font: {
                fill: 'global.water_label_ocean_color',
                size: 'global.water.ocean.label.font.size',
                style: 'global.water.ocean.label.font.style',
              },
            },
          },
        },
        'sea-labels': {
          filter: {
            all: [
              {
                kind: 'sea',
              },
              'global.feature_min_zoom_filter',
            ],
          },
          draw: {
            'text-blend-order': {
              priority: 'global.label.priorities.sea-labels',
            },
          },
        },
        'bay-labels': {
          filter: {
            all: [
              {
                kind: 'bay',
              },
              'global.feature_min_zoom_filter',
            ],
          },
          draw: {
            'text-blend-order': {
              font: {
                fill: 'global.water_label_bay_color',
                size: 'global.water.bay.label.font.size',
                stroke: {
                  color: 'global.water_label_bay_outline_color',
                  width: 'global.water.bay.label.font.stroke.width',
                },
              },
            },
          },
        },
        'lake-labels': {
          filter: {
            all: [
              {
                kind: 'lake',
              },
              'global.feature_min_zoom_filter',
            ],
          },
          draw: {
            'text-blend-order': {
              font: {
                fill: 'global.water_label_lake_color',
                family: 'global.text_font_family',
                style: 'global.water.lake.label.font.style',
                stroke: {
                  color: 'global.water_label_lake_outline_color',
                  width: 'global.water.lake.label.font.stroke.width',
                },
              },
            },
          },
        },
      },
    },
    boundaries: {
      filter: 'global.feature_min_zoom_filter',
      data: {
        source: 'omv',
        layer: 'boundaries',
      },
      draw: {
        'translucent-lines': {
          order: 500,
        },
      },
      'border-labels': {
        filter: {
          all: [
            {
              $zoom: {
                min: 'global.boundary.labels.zoom.min',
              },
            },
            {
              kind: ['country', 'region', 'disputed'],
            },
          ],
        },
        draw: {
          'text-blend-order': {
            priority: 'global.label.priorities.border-line-labels',
            visible: 'global.text_visible_admin',
            text_source:
              'global.ux_language_text_source_boundary_lines_left_right',
            offset: 'global.boundary.labels.offset',
            text_wrap: 100,
            font: {
              family: 'global.text_font_family',
              size: 'global.boundary.labels.font.size',
              fill: 'global.text_fill',
              transform: 'global.boundary.labels.font.transform',
              stroke: {
                color: 'global.boundary.labels.font.stroke.color',
                width: 'global.boundary.labels.font.stroke.width',
              },
            },
          },
        },
        'no-left-right': {
          filter: {
            'name:left': false,
            'name:right': false,
          },
          draw: {
            'text-blend-order': {
              text_source: 'global.ux_language_text_source_boundary_lines',
              offset: 'global.boundary.labels.single_text.offset',
            },
          },
        },
      },
      country: {
        filter: {
          kind: 'country',
        },
        draw: {
          'translucent-lines': {
            color: 'global.country_boundary_color',
            width: 'global.boundary.country.line.width',
            outline: {
              color: 'global.country_boundary_outline_color',
              width: 'global.boundary.country.outline.width',
            },
          },
        },
      },
      other: {
        filter: {
          kind: [
            'disputed',
            'indefinite',
            'indeterminate',
            'lease_limit',
            'line_of_control',
            'overlay_limit',
          ],
        },
        draw: {
          'translucent-lines': {
            color: 'global.country_disputed_boundary_color',
            join: 'round',
            dash: 'global.boundary.other.line.dash',
            dash_background_color:
              'global.country_disputed_boundary_background_color',
            width: 'global.boundary.other.line.width',
            outline: {
              color: 'global.country_disputed_boundary_background_color',
              width: 'global.boundary.other.outline.width',
            },
          },
        },
      },
      state: {
        filter: {
          kind: ['state', 'region'],
          kind_detail: [3, 4],
        },
        draw: {
          'translucent-lines': {
            color: 'global.region_boundary_color',
            width: 'global.boundary.state.line.width',
            outline: {
              color: 'global.region_boundary_outline_color',
              width: 'global.boundary.state.outline.width',
            },
          },
          'text-blend-order': {
            font: {
              fill: 'global.state_boundary_text_color',
            },
          },
        },
      },
    },
    roads: {
      filter: 'global.feature_min_zoom_filter',
      data: {
        source: 'omv',
        layer: 'roads',
      },
      draw: {
        lines: {
          order: 340,
          join: 'round',
          cap: 'round',
          width: 'global.road.default.line.width',
          outline: {
            order: 352,
          },
        },
      },
      directions: {
        filter: {
          all: [
            {
              $zoom: {
                min: 16,
              },
            },
            {
              oneway: 'yes',
            },
            {
              under_construction: false,
            },
          ],
        },
        draw: {
          points: {
            priority: 'global.label.priorities.one-way-arrow-labels',
            texture: 'icon_library',
            sprite: 'lane-arrow-day--arrow',
            size: 'global.road.default.direction.size',
            placement: 'spaced',
            placement_spacing: 'global.road.default.direction.spacing',
            angle: 'auto',
            flat: true,
          },
        },
        minor_road: {
          filter: {
            kind: 'minor_road',
            $zoom: 'global.road.minor.direction.zoom',
          },
          draw: {
            points: {
              visible: false,
            },
          },
        },
        ski_run: {
          filter: {
            kind: 'piste',
          },
          draw: {
            points: {
              size: 'global.road.ski_run.piste.directions.size',
            },
          },
        },
      },
      rail: {
        filter: {
          all: [
            {
              kind: 'rail',
            },
            {
              under_construction: false,
            },
            {
              $zoom: 'global.road.rail.zoom',
            },
            'global.feature_min_zoom_filter',
          ],
        },
        draw: {
          lines: {
            order: 'global.feature_order',
            width: 'global.road.rail.line.width',
            color: 'global.rail_dash_color',
            dash: 'global.road.rail.line.dash',
            dash_background_color: 'global.rail_dash_background_color',
            outline: {
              color: 'global.rail_outline_color',
              width: 'global.road.rail.outline.width',
            },
          },
        },
      },
      under_construction: {
        filter: {
          under_construction: true,
        },
        draw: {
          lines: {
            cap: 'butt',
            dash: 'global.road.under_construction.line.dash',
          },
          'center-lines': {
            visible: false,
          },
        },
        bridge: {
          filter: {
            is_bridge: true,
          },
          draw: {
            bridge: {
              cap: 'butt',
              dash: 'global.road.under_construction.line.dash',
            },
          },
        },
      },
      highway: {
        filter: {
          kind: 'highway',
        },
        draw: {
          lines: {
            order: 'global.feature_order',
            color: 'global.highway_fill',
            width: 'global.highway_width',
            outline: {
              color: 'global.highway_outline',
              width: 'global.road.highway.outline.width',
            },
          },
          'center-lines': {
            order: 'global.feature_order_half_more',
            color: 'global.highway_centerline_fill',
            width: 'global.road.highway.centerline.width',
          },
        },
        bridge: {
          filter: {
            is_bridge: true,
          },
          draw: {
            bridge: {
              color: 'global.highway_fill',
              width: 'global.highway_width',
            },
          },
        },
        tunnel: {
          filter: {
            is_tunnel: true,
          },
          draw: {
            lines: {
              order: 'global.tunnel_order',
              color: 'global.highway_tunnel_fill',
            },
            'center-lines': {
              order: 'global.tunnel_order',
              color: 'global.highway_tunnel_center_line',
            },
          },
        },
        link: {
          filter: {
            is_link: true,
          },
          draw: {
            lines: {
              width: 'global.highway_link_width',
            },
            'center-lines': {
              visible: false,
            },
          },
          trunk: {
            filter: {
              kind_detail: 'trunk',
            },
            draw: {
              lines: {
                width: 'global.highway_link_width',
              },
            },
          },
          bridge: {
            filter: {
              is_bridge: true,
            },
            draw: {
              bridge: {
                width: 'global.highway_link_width',
              },
            },
          },
        },
        trunk: {
          filter: {
            kind_detail: 'trunk',
          },
          draw: {
            lines: {
              width: 'global.highway_trunk_width',
              color: 'global.major_road_fill',
              outline: {
                width: 'global.road.highway.trunk.outline.width',
              },
            },
            'center-lines': {
              visible: false,
            },
          },
          bridge: {
            filter: {
              is_bridge: true,
            },
            draw: {
              bridge: {
                color: 'global.major_road_fill',
                width: 'global.major_road_width',
              },
            },
          },
          tunnel: {
            filter: {
              is_tunnel: true,
            },
            draw: {
              lines: {
                order: 'global.tunnel_order',
                color: 'global.major_road_tunnel_fill',
              },
            },
          },
        },
      },
      major_road: {
        filter: {
          kind: 'major_road',
        },
        draw: {
          lines: {
            color: 'global.major_road_fill',
            order: 'global.feature_order',
            width: 'global.major_road_width',
            outline: {
              color: 'global.major_road_outline',
              width: 'global.road.major.outline.width',
            },
          },
        },
        bridge: {
          filter: {
            is_bridge: true,
          },
          draw: {
            bridge: {
              color: 'global.major_road_fill',
              width: 'global.major_road_width',
            },
          },
        },
        tunnel: {
          filter: {
            is_tunnel: true,
          },
          draw: {
            lines: {
              order: 'global.tunnel_order',
              color: 'global.major_road_tunnel_fill',
            },
          },
        },
        link: {
          filter: {
            is_link: true,
          },
          draw: {
            lines: {
              color: 'global.major_road_fill',
              width: 'global.major_road_link_width',
            },
          },
        },
        secondary: {
          filter: {
            kind_detail: ['secondary', 'secondary_link'],
          },
          draw: {
            lines: {
              color: 'global.major_road_secondary_fill',
              width: 'global.major_road_secondary_width',
              outline: {
                color: 'global.major_road_secondary_outline',
                width: 'global.road.major.secondary.outline.width',
              },
            },
          },
          link: {
            filter: {
              is_link: true,
            },
            draw: {
              lines: {
                color: 'global.major_road_secondary_fill',
                width: 'global.major_road_secondary_link_width',
              },
            },
          },
          bridge: {
            filter: {
              is_bridge: true,
            },
            draw: {
              bridge: {
                color: 'global.major_road_secondary_fill',
                width: 'global.major_road_secondary_width',
              },
            },
          },
          tunnel: {
            filter: {
              is_tunnel: true,
            },
            draw: {
              lines: {
                order: 'global.tunnel_order',
                color: 'global.major_road_secondary_tunnel_fill',
              },
            },
          },
        },
        tertiary: {
          filter: {
            kind_detail: ['tertiary', 'tertiary_link'],
          },
          draw: {
            lines: {
              color: 'global.major_road_tertiary_fill',
              width: 'global.major_road_tertiary_width',
              outline: {
                color: 'global.major_road_tertiary_outline',
                width: 'global.road.major.tertiary.outline.width',
              },
            },
          },
          link: {
            filter: {
              is_link: true,
            },
            draw: {
              lines: {
                color: 'global.major_road_tertiary_fill',
                width: 'global.road.major.tertiary.link.line.width',
              },
            },
          },
          bridge: {
            filter: {
              is_bridge: true,
            },
            draw: {
              bridge: {
                color: 'global.major_road_tertiary_fill',
                width: 'global.major_road_tertiary_width',
              },
            },
          },
          tunnel: {
            filter: {
              is_tunnel: true,
            },
            draw: {
              lines: {
                order: 'global.tunnel_order',
                color: 'global.major_road_tertiary_tunnel_fill',
              },
            },
          },
        },
      },
      minor_road: {
        filter: {
          kind: 'minor_road',
        },
        draw: {
          lines: {
            order: 'global.feature_order',
            width: 'global.minor_road_width',
          },
        },
        residential: {
          filter: {
            kind_detail: 'residential',
          },
          draw: {
            lines: {
              color: 'global.minor_road_residential_fill',
              outline: {
                color: 'global.minor_road_residential_outline',
                width: 'global.road.minor.residential.outline.width',
              },
            },
          },
          bridge: {
            filter: {
              is_bridge: true,
            },
            draw: {
              bridge: {
                color: 'global.minor_road_residential_fill',
                width: 'global.minor_road_width',
              },
            },
          },
          tunnel: {
            filter: {
              is_tunnel: true,
            },
            draw: {
              lines: {
                order: 'global.tunnel_order',
                color: 'global.minor_road_residential_tunnel_fill',
              },
            },
          },
        },
        service: {
          filter: {
            kind_detail: ['service', 'unclassified', 'road'],
          },
          draw: {
            lines: {
              color: 'global.minor_road_service_fill',
              width: 'global.minor_road_width',
              outline: {
                color: 'global.minor_road_service_outline',
                width: 'global.road.minor.service.outline.width',
              },
            },
          },
          bridge: {
            filter: {
              is_bridge: true,
            },
            draw: {
              bridge: {
                color: 'global.minor_road_service_fill',
                width: 'global.minor_road_width',
              },
            },
          },
          tunnel: {
            filter: {
              is_tunnel: true,
            },
            draw: {
              lines: {
                order: 'global.tunnel_order',
                color: 'global.minor_road_service_tunnel_fill',
              },
            },
          },
        },
        unpaved: {
          filter: {
            surface: 'unpaved',
          },
          draw: {
            lines: {
              order: 'function() {\n  return feature.sort_rank - 0.5\n}\n',
              color: 'global.minor_road_unpaved_fill',
            },
          },
        },
      },
      path: {
        filter: {
          kind: 'path',
        },
        pedestrian: {
          filter: {
            kind_detail: 'pedestrian',
          },
          draw: {
            lines: {
              order: 'global.feature_order',
              width: 'global.road.path.pedestrian.line.width',
              color: 'global.path_pedestrian',
              dash: 'global.road.path.pedestrian.line.dash',
            },
          },
        },
        footway: {
          filter: {
            kind_detail: 'footway',
          },
          draw: {
            lines: {
              order: 'global.feature_order',
              color: 'global.path_footway',
              width: 'global.road.path.footway.line.width',
            },
          },
          bridge: {
            filter: {
              is_bridge: true,
            },
            draw: {
              bridge: {
                color: 'global.path_footway',
                width: 'global.road.path.footway.bridge.line.width',
                outline: {
                  width: 'global.road.path.footway.bridge.outline.width',
                },
              },
            },
          },
          tunnel: {
            filter: {
              is_tunnel: true,
            },
            draw: {
              lines: {
                order: 'global.tunnel_order',
                color: 'global.path_footway_tunnel_fill',
              },
            },
          },
          cemetery: {
            filter: {
              landuse_kind: 'cemetery',
            },
            draw: {
              lines: {
                color: 'global.path_footway_cemetery',
              },
            },
          },
          forest: {
            filter: {
              landuse_kind: 'forest',
            },
            draw: {
              lines: {
                color: 'global.path_footway_forest',
              },
            },
          },
          park: {
            filter: {
              landuse_kind: 'park',
            },
            draw: {
              lines: {
                color: 'global.path_footway_park',
              },
            },
          },
        },
      },
      ferry: {
        filter: {
          kind: 'ferry',
        },
        draw: {
          lines: {
            order: 'global.feature_order',
            color: 'global.ferry_line_color',
            width: 'global.road.ferry.line.width',
            dash: 'global.road.ferry.line.dash',
          },
        },
        tunnel: {
          filter: {
            is_tunnel: true,
          },
          draw: {
            lines: {
              dash: 'global.road.ferry.tunnel.line.dash',
              color: 'global.road.ferry.tunnel.line.color',
              dash_background_color: 'global.ferry_tunnel_color',
            },
          },
        },
      },
      aerialway: {
        filter: {
          kind: 'aerialway',
        },
        cable_car: {
          filter: {
            kind_detail: ['cable_car', 'gondola'],
          },
          draw: {
            lines: {
              order: 1001,
              color: 'global.road.aerialway.cable_car.line.color',
              width: 'global.road.aerialway.cable_car.line.width',
            },
          },
        },
        chair_lift: {
          filter: {
            kind_detail: 'chair_lift',
          },
          draw: {
            lines: {
              order: 'global.feature_order',
              color: 'global.road.aerialway.chair_lift.line.color',
              width: 'global.road.aerialway.chair_lift.line.width',
            },
          },
        },
      },
      ski_run: {
        filter: {
          kind: 'piste',
          kind_detail: 'downhill',
        },
        draw: {
          lines: {
            order: 'global.feature_order',
            color: 'global.road.ski_run.piste.line.color',
            width: 'global.road.ski_run.piste.line.width',
            outline: {
              color: 'global.road.ski_run.piste.outline.color',
              width: 'global.road.ski_run.piste.outline.width',
            },
          },
        },
      },
      shields: {
        filter: {
          all: [
            {
              kind: ['highway', 'major_road', 'minor_road'],
            },
            'global.feature_min_zoom_filter',
            'function() {return global.shield.getStyle(feature).show;}',
          ],
        },
        draw: {
          shields: {
            visible: 'global.shields_visible',
          },
        },
        highway: {
          filter: {
            kind: 'highway',
          },
          draw: {
            shields: {
              priority: 'global.label.priorities.road-shield0-labels',
            },
          },
          trunk: {
            filter: {
              kind_detail: 'trunk',
            },
            draw: {
              shields: {
                priority: 'global.label.priorities.road-shield1-labels',
              },
            },
          },
        },
        major_road: {
          filter: {
            kind: 'major_road',
          },
          draw: {
            shields: {
              priority: 'global.label.priorities.road-shield2-labels',
            },
          },
          primary: {
            filter: {
              kind_detail: 'primary',
            },
            draw: {
              shields: {
                priority: 'global.label.priorities.road-shield1-labels',
              },
            },
          },
          tertiary: {
            filter: {
              kind_detail: 'tertiary',
            },
            draw: {
              shields: {
                priority: 'global.label.priorities.road-shield3-labels',
              },
            },
          },
        },
        minor_road: {
          filter: {
            kind: 'minor_road',
          },
          draw: {
            shields: {
              priority: 'global.label.priorities.road-shield4-labels',
            },
          },
        },
      },
    },
    road_labels: {
      data: {
        source: 'omv',
        layer: 'road_labels',
      },
      draw: {
        'text-blend-order': {
          visible: 'global.text_visible_roads',
          text_source: 'global.ux_language_text_source',
          font: {
            fill: 'global.text_fill',
            family: 'global.text_font_family',
            stroke: {
              color: 'global.text_outline',
              width: 'global.road.default.label.font.stroke.width',
            },
          },
        },
      },
      highway: {
        filter: {
          kind: 'highway',
        },
        draw: {
          'text-blend-order': {
            priority: 'global.label.priorities.road0-labels',
            font: {
              size: 'global.road.highway.label.font.size',
            },
          },
        },
        link: {
          filter: {
            kind_detail: 'motorway_link',
          },
          draw: {
            'text-blend-order': {
              font: {
                size: 'global.road.highway.link.label.font.size',
              },
            },
          },
        },
        trunk: {
          filter: {
            kind_detail: 'trunk',
          },
          draw: {
            'text-blend-order': {
              priority: 'global.label.priorities.road1-labels',
              font: {
                size: 'global.road.highway.trunk.label.font.size',
              },
            },
          },
        },
      },
      major_road: {
        filter: {
          kind: 'major_road',
        },
        draw: {
          'text-blend-order': {
            priority: 'global.label.priorities.road2-labels',
            offset: 'global.road.major.label.offset',
            font: {
              stroke: {
                width: 'global.road.major.label.font.stroke.width',
              },
              size: 'global.road.major.label.font.size',
            },
          },
        },
        primary: {
          filter: {
            kind_detail: 'primary',
          },
          draw: {
            'text-blend-order': {
              priority: 'global.label.priorities.road1-labels',
            },
          },
        },
        secondary: {
          filter: {
            kind_detail: 'secondary',
          },
          draw: {
            'text-blend-order': {
              priority: 'global.label.priorities.road2-labels',
              offset: 'global.road.major.secondary.label.offset',
              font: {
                stroke: {
                  width: 'global.road.major.secondary.label.font.stroke.width',
                },
                size: 'global.road.major.secondary.label.font.size',
              },
            },
          },
        },
        tertiary: {
          filter: {
            kind_detail: 'tertiary',
          },
          draw: {
            'text-blend-order': {
              priority: 'global.label.priorities.road3-labels',
              font: {
                stroke: {
                  width: 'global.road.major.tertiary.label.font.stroke.width',
                },
                size: 'global.road.major.tertiary.label.font.size',
              },
            },
          },
        },
      },
      minor_road: {
        filter: {
          kind: 'minor_road',
        },
        draw: {
          'text-blend-order': {
            offset: 'global.road.minor.label.offset',
            priority: 'global.label.priorities.road4-labels',
            font: {
              stroke: {
                width: 'global.road.minor.label.font.stroke.width',
              },
              size: 'global.road.minor.label.font.size',
            },
          },
        },
        service: {
          filter: {
            kind_detail: ['service', 'unclassified', 'road'],
          },
          draw: {
            'text-blend-order': {
              font: {
                stroke: {
                  width: 'global.road.minor.service.label.font.stroke.width',
                },
                size: 'global.road.minor.service.label.font.size',
              },
            },
          },
        },
      },
      path: {
        filter: {
          kind: 'path',
        },
        draw: {
          'text-blend-order': {
            offset: 'global.road.path.label.offset',
            priority: 'global.label.priorities.pedestrian-labels',
            font: {
              fill: 'global.road.path.label.font.fill',
              stroke: {
                color: 'global.road.path.label.font.stroke.color',
                width: 'global.road.path.label.font.stroke.width',
              },
              size: 'global.road.path.label.font.size',
            },
          },
        },
        unpaved: {
          filter: {
            surface: 'unpaved',
          },
          draw: {
            'text-blend-order': {
              font: {
                fill: 'global.road.path.unpaved.label.font.fill',
                stroke: {
                  color: 'global.road.path.unpaved.label.font.stroke.color',
                },
              },
            },
          },
        },
        footway: {
          filter: {
            all: [
              {
                kind_detail: 'footway',
              },
              {
                $zoom: 'global.road.path.footway.label.zoom',
              },
            ],
          },
          draw: {
            'text-blend-order': {
              priority: 'global.label.priorities.walkway-labels',
              offset: 'global.road.path.footway.label.offset',
              font: {
                fill: 'global.road.path.footway.label.font.fill',
                size: 'global.road.path.footway.label.font.size',
              },
            },
          },
        },
      },
      ferry: {
        filter: {
          kind: 'ferry',
        },
        draw: {
          'text-blend-order': {
            text_source: 'global.ux_language_text_source',
            offset: 'global.road.ferry.label.offset',
            visible: 'global.text_visible_ferry',
            priority: 'global.label.priorities.ferry-labels',
            font: {
              fill: 'global.ferry_label_color',
              stroke: {
                color: 'global.ferry_label_outline_color',
                width: 'global.road.ferry.label.font.stroke.width',
              },
              size: 'global.road.ferry.label.font.size',
            },
          },
        },
        tunnel: {
          filter: {
            is_tunnel: true,
          },
          draw: {
            'text-blend-order': {
              font: {
                fill: 'global.ferry_tunnel_color',
                stroke: {
                  color: 'global.road.ferry.tunnel.label.font.stroke.color',
                },
              },
            },
          },
        },
      },
      chair_lift: {
        filter: {
          kind: 'aerialway',
          kind_detail: 'chair_lift',
        },
        draw: {
          'text-blend-order': {
            text_source: 'global.ux_language_text_source',
            visible: 'global.text_visible_chair_lift',
            priority: 'global.label.priorities.chairlift-labels',
            font: {
              fill: 'global.road.aerialway.chair_lift.label.font.fill',
              size: 'global.road.aerialway.chair_lift.label.font.size',
              stroke: {
                color:
                  'global.road.aerialway.chair_lift.label.font.stroke.fill',
                width:
                  'global.road.aerialway.chair_lift.label.font.stroke.width',
              },
            },
          },
        },
      },
      ski_run: {
        filter: {
          kind: 'piste',
          kind_detail: 'downhill',
        },
        draw: {
          'text-blend-order': {
            text_source: 'global.ux_language_text_source',
            visible: 'global.text_visible_ski_run',
            offset: 'global.road.ski_run.label.piste.offset',
            priority: 'global.label.priorities.skirundownhill-labels',
            font: {
              fill: 'global.road.ski_run.piste.label.font.fill',
              size: 'global.road.ski_run.piste.label.font.size',
              stroke: {
                color: 'global.road.ski_run.piste.label.font.stroke.color',
                width: 'global.road.ski_run.piste.label.font.stroke.width',
              },
            },
          },
        },
      },
    },
    buildings: {
      data: {
        source: 'omv',
        layer: 'buildings',
      },
      filter: 'global.feature_min_zoom_filter',
      draw: {
        'translucent-polygons': {
          order: 'global.feature_order',
          color: 'global.building_color',
        },
        'translucent-lines': {
          order: 'global.feature_order',
          color: 'global.building_outline_color',
          width: 'global.building.outline.width',
        },
      },
      extrude: {
        filter: {
          $zoom: 'global.building.extrusion.zoom',
        },
        draw: {
          'translucent-polygons': {
            order: 'global.feature_order',
            color: 'global.building_extrude_color',
            extrude: 'global.building_extrude_height',
            z: 'global.building_extrude_min_height',
          },
          'translucent-lines': {
            order: 'global.feature_order',
            color: 'global.building_outline_color',
            extrude: 'global.building_extrude_height',
            z: 'global.building_extrude_min_height',
            width: 'global.building.extrusion.outline.width',
          },
        },
      },
      labels: {
        filter: {
          all: [
            {
              $zoom: 'global.building.label.zoom',
            },
            {
              not: {
                kind: 'address',
              },
            },
            {
              $geometry: 'point',
            },
            {
              name: true,
            },
          ],
        },
        draw: {
          text: {
            priority: 'global.label.priorities.buildings-info-labels',
            visible: 'global.text_visible_building',
            text_source: 'global.ux_language_text_source',
            anchor: 'center',
            font: {
              fill: 'global.building_label_color',
              family: 'global.text_font_family',
              size: 'global.building.label.font.size',
              stroke: {
                color: 'global.building_label_outline_color',
                width: 'global.building.label.font.stroke.width',
              },
            },
          },
        },
      },
      'address-labels': {
        filter: {
          all: [
            {
              $zoom: 'global.building.address.label.zoom',
            },
            {
              kind: 'address',
            },
          ],
        },
        draw: {
          'text-blend-order': {
            visible: 'global.text_visible_address',
            priority: 'global.label.priorities.buildings-address-labels',
            text_source: 'addr_housenumber',
            font: {
              fill: 'global.text_fill_address',
              family: 'global.text_font_family',
              size: 'global.building.address.label.font.size',
            },
          },
        },
      },
    },
    continent_label: {
      data: {
        source: 'omv',
        layer: 'earth',
      },
      filter: {
        all: [
          {
            kind: 'continent',
          },
          'global.feature_min_zoom_filter',
        ],
      },
      draw: {
        'text-blend-order': {
          collide: true,
          text_source: 'global.ux_language_text_source',
          priority: 'global.label.priorities.continent-labels',
          blend: 'overlay',
          blend_order: 1,
          anchor: 'center',
          font: {
            transform: 'global.continent.label.font.transform',
            fill: 'global.continent.label.font.fill',
            stroke: {
              color: 'global.continent.label.font.stroke.color',
              width: 'global.continent.label.font.stroke.width',
            },
            family: 'global.text_font_family',
            weight: 'global.continent.label.font.weight',
            size: 'global.continent.label.font.size',
          },
        },
      },
    },
    places: {
      data: {
        source: 'omv',
        layer: 'places',
      },
      filter: {
        name: true,
      },
      draw: {
        'text-blend-order': {
          priority: 'global.label.priorities.city-center-hamlet',
          text_source: 'global.ux_language_text_source',
          visible: false,
          buffer: 'global.texture_buffer_size',
          font: {
            family: 'global.text_font_family',
            fill: 'global.text_fill',
          },
        },
      },
      country: {
        filter: {
          kind: 'country',
        },
        draw: {
          'text-blend-order': {
            priority: 'global.label.priorities.country-labels',
            visible: 'global.text_visible_admin',
            anchor: 'center',
            font: {
              transform: 'global.places.country.label.font.transform',
              fill: 'global.places.country.label.font.fill',
              stroke: {
                color: 'global.places.country.label.font.stroke.color',
                width: 'global.places.country.label.font.stroke.width',
              },
              size: 'global.places.country.label.font.size',
            },
          },
        },
        large_country_label: {
          filter: {
            iso_code: ['US', 'CA', 'RU', 'CN', 'IN', 'ID', 'AU'],
          },
          draw: {
            'text-blend-order': {
              font: {
                size: 'global.places.country.large.label.font.size',
              },
            },
          },
        },
      },
      region: {
        filter: {
          all: [
            {
              kind: 'region',
            },
            {
              $zoom: {
                max: 13,
              },
            },
          ],
        },
        draw: {
          'text-blend-order': {
            text_source:
              'global.ux_language_text_source_short_or_full_fallback',
            priority: 'global.label.priorities.state-labels',
            visible: 'global.text_visible_admin',
            font: {
              transform: 'global.places.region.label.font.transform',
              size: 'global.places.region.label.font.size',
              fill: 'global.places.region.label.font.fill',
              stroke: {
                color: 'global.places.region.label.font.stroke.color',
                width: 'global.places.region.label.font.stroke.width',
              },
            },
          },
        },
      },
      'populated-places': {
        filter: {
          all: [
            {
              kind: 'locality',
            },
            {
              $zoom: 'global.places.populated.default.zoom',
            },
          ],
        },
        draw: {
          icon_library: {
            visible: false,
            anchor: [
              'center',
              'left',
              'right',
              'top',
              'bottom',
              'top-left',
              'top-right',
              'bottom-left',
            ],
            size: 'global.places.populated.default.icon.size',
            sprite: 'city-center--circle_day',
            buffer: 'global.texture_buffer_size',
            priority: 'global.label.priorities.city-center-hamlet',
            text: {
              text_wrap: true,
              visible: 'global.text_visible_populated_places',
              buffer: 'global.texture_buffer_size',
              font: {
                fill: 'global.text_fill',
                size: 'global.places.populated.default.label.font.size',
              },
            },
          },
          'text-blend-order': {
            text_wrap: true,
            buffer: 'global.texture_buffer_size',
            font: {
              size: 'global.places.populated.default.label.font.size',
            },
          },
        },
        'population-1m-up': {
          filter: {
            all: [
              {
                population: 'global.population.class1-1m-up',
              },
              {
                $zoom: {
                  max: 14,
                },
              },
            ],
          },
          draw: {
            icon_library: {
              priority: 'global.label.priorities.city-center-category1',
              visible: 'global.icon_visible_populated_places',
              text: {
                priority: 'global.label.priorities.city-center-category1',
                font: {
                  fill: 'global.place_class1_color',
                  size: 'global.places.populated.1m-up.label.font.size',
                  stroke: {
                    color: 'global.place_class1_outline_color',
                    width:
                      'global.places.populated.1m-up.label.font.stroke.width',
                  },
                },
              },
            },
          },
          capital: {
            filter: {
              all: [
                {
                  country_capital: true,
                },
                {
                  $zoom: 'global.places.populated.1m-up.capital.zoom',
                },
              ],
            },
            draw: {
              icon_library: {
                size: 'global.places.populated.1m-up.capital.icon.size',
                sprite: 'city-center--capital_day',
                priority:
                  'global.label.priorities.city-center-country-capital-category1',
                text: {
                  priority:
                    'global.label.priorities.city-center-country-capital-category1',
                  font: {
                    fill: 'global.place_capital_color',
                  },
                },
              },
            },
          },
          'region-capital': {
            filter: {
              all: [
                {
                  region_capital: true,
                },
                {
                  $zoom: 'global.places.populated.1m-up.region_capital.zoom',
                },
              ],
            },
            draw: {
              icon_library: {
                size: 'global.places.populated.1m-up.region_capital.icon.size',
                sprite: 'city-center--square_day',
                priority:
                  'global.label.priorities.city-center-state-capital-category1',
                text: {
                  priority:
                    'global.label.priorities.city-center-state-capital-category1',
                },
              },
            },
          },
          'county-capital': {
            filter: {
              all: [
                {
                  county_capital: true,
                },
                {
                  $zoom: 'global.places.populated.1m-up.county_capital.zoom',
                },
              ],
            },
            draw: {
              icon_library: {
                size: 'global.places.populated.1m-up.county_capital.icon.size',
                sprite: 'city-center--circle_day',
                priority:
                  'global.label.priorities.city-center-county-capital-category1',
                text: {
                  priority:
                    'global.label.priorities.city-center-county-capital-category1',
                },
              },
            },
          },
        },
        'population-250k-1m': {
          filter: {
            all: [
              {
                population: 'global.population.class2-250k-1m',
              },
              {
                $zoom: {
                  max: 15,
                },
              },
            ],
          },
          draw: {
            icon_library: {
              priority: 'global.label.priorities.city-center-category2',
              visible: 'global.icon_visible_populated_places',
              text: {
                priority: 'global.label.priorities.city-center-category2',
                font: {
                  fill: 'global.place_class2_color',
                  size: 'global.places.populated.250k-1m.label.font.size',
                  stroke: {
                    color: 'global.place_class2_outline_color',
                    width:
                      'global.places.populated.250k-1m.label.font.stroke.width',
                  },
                },
              },
            },
          },
          capital: {
            filter: {
              all: [
                {
                  country_capital: true,
                },
                {
                  $zoom: 'global.places.populated.250k-1m.capital.zoom',
                },
              ],
            },
            draw: {
              icon_library: {
                size: 'global.places.populated.250k-1m.capital.icon.size',
                sprite: 'city-center--capital_day',
                priority:
                  'global.label.priorities.city-center-country-capital-category2',
                text: {
                  priority:
                    'global.label.priorities.city-center-country-capital-category2',
                  font: {
                    fill: 'global.place_capital_color',
                    stroke: {
                      color: 'global.place_capital_outline_color',
                    },
                  },
                },
              },
            },
          },
          'region-capital': {
            filter: {
              all: [
                {
                  region_capital: true,
                },
                {
                  $zoom: 'global.places.populated.250k-1m.region_capital.zoom',
                },
              ],
            },
            draw: {
              icon_library: {
                size: 'global.places.populated.250k-1m.region_capital.icon.size',
                sprite: 'city-center--square_day',
                priority:
                  'global.label.priorities.city-center-state-capital-category2',
                text: {
                  priority:
                    'global.label.priorities.city-center-state-capital-category2',
                },
              },
            },
          },
          'county-capital': {
            filter: {
              all: [
                {
                  county_capital: true,
                },
                {
                  $zoom: 'global.places.populated.250k-1m.county_capital.zoom',
                },
              ],
            },
            draw: {
              icon_library: {
                size: 'global.places.populated.250k-1m.county_capital.icon.size',
                sprite: 'city-center--circle_day',
                priority:
                  'global.label.priorities.city-center-county-capital-category2',
                text: {
                  priority:
                    'global.label.priorities.city-center-county-capital-category2',
                },
              },
            },
          },
        },
        'population-100k-250k': {
          filter: {
            all: [
              {
                population: 'global.population.class3-100k-250k',
              },
              {
                $zoom: {
                  min: 5,
                  max: 15,
                },
              },
            ],
          },
          draw: {
            icon_library: {
              priority: 'global.label.priorities.city-center-category3',
              visible: 'global.icon_visible_populated_places',
              text: {
                priority: 'global.label.priorities.city-center-category3',
                font: {
                  fill: 'global.place_class3_color',
                  size: 'global.places.populated.100k-250k.label.font.size',
                  stroke: {
                    color: 'global.place_class3_outline_color',
                    width:
                      'global.places.populated.100k-250k.label.font.stroke.width',
                  },
                },
              },
            },
          },
          capital: {
            filter: {
              all: [
                {
                  country_capital: true,
                },
                {
                  $zoom: 'global.places.populated.100k-250k.capital.zoom',
                },
              ],
            },
            draw: {
              icon_library: {
                size: 'global.places.populated.100k-250k.capital.icon.size',
                sprite: 'city-center--capital_day',
                priority:
                  'global.label.priorities.city-center-country-capital-category3',
                text: {
                  priority:
                    'global.label.priorities.city-center-country-capital-category3',
                  font: {
                    fill: 'global.place_capital_color',
                    stroke: {
                      color: 'global.place_capital_outline_color',
                    },
                  },
                },
              },
            },
          },
          'region-capital': {
            filter: {
              all: [
                {
                  region_capital: true,
                },
                {
                  $zoom:
                    'global.places.populated.100k-250k.region_capital.zoom',
                },
              ],
            },
            draw: {
              icon_library: {
                size: 'global.places.populated.100k-250k.region_capital.icon.size',
                sprite: 'city-center--square_day',
                priority:
                  'global.label.priorities.city-center-state-capital-category3',
                text: {
                  priority:
                    'global.label.priorities.city-center-state-capital-category3',
                },
              },
            },
          },
          'county-capital': {
            filter: {
              all: [
                {
                  county_capital: true,
                },
                {
                  $zoom:
                    'global.places.populated.100k-250k.county_capital.zoom',
                },
              ],
            },
            draw: {
              icon_library: {
                size: 'global.places.populated.100k-250k.county_capital.icon.size',
                sprite: 'city-center--circle_day',
                priority:
                  'global.label.priorities.city-center-county-capital-category3',
                text: {
                  priority:
                    'global.label.priorities.city-center-county-capital-category3',
                },
              },
            },
          },
        },
        'population-30k-100k': {
          filter: {
            all: [
              {
                population: 'global.population.class4-30k-100k',
              },
              {
                $zoom: {
                  min: 4,
                  max: 15,
                },
              },
            ],
          },
          draw: {
            icon_library: {
              priority: 'global.label.priorities.city-center-category4',
              visible: 'global.icon_visible_populated_places',
              text: {
                priority: 'global.label.priorities.city-center-category4',
                font: {
                  fill: 'global.place_class4_color',
                  size: 'global.places.populated.30k-100k.label.font.size',
                  stroke: {
                    color: 'global.place_class4_outline_color',
                    width:
                      'global.places.populated.30k-100k.label.font.stroke.width',
                  },
                },
              },
            },
          },
          capital: {
            filter: {
              all: [
                {
                  country_capital: true,
                },
                {
                  $zoom: 'global.places.populated.30k-100k.capital.zoom',
                },
              ],
            },
            draw: {
              icon_library: {
                size: 'global.places.populated.30k-100k.capital.icon.size',
                sprite: 'city-center--capital_day',
                priority:
                  'global.label.priorities.city-center-country-capital-category4',
                text: {
                  priority:
                    'global.label.priorities.city-center-country-capital-category4',
                  font: {
                    fill: 'global.place_capital_color',
                    stroke: {
                      color: 'global.place_capital_outline_color',
                    },
                  },
                },
              },
            },
          },
          'region-capital': {
            filter: {
              all: [
                {
                  region_capital: true,
                },
                {
                  $zoom: 'global.places.populated.30k-100k.region_capital.zoom',
                },
              ],
            },
            draw: {
              icon_library: {
                size: 'global.places.populated.30k-100k.region_capital.icon.size',
                sprite: 'city-center--square_day',
                priority:
                  'global.label.priorities.city-center-state-capital-category4',
                text: {
                  priority:
                    'global.label.priorities.city-center-state-capital-category4',
                },
              },
            },
          },
          'county-capital': {
            filter: {
              all: [
                {
                  county_capital: true,
                },
                {
                  $zoom: 'global.places.populated.30k-100k.county_capital.zoom',
                },
              ],
            },
            draw: {
              icon_library: {
                size: 'global.places.populated.30k-100k.county_capital.icon.size',
                sprite: 'city-center--circle_day',
                priority:
                  'global.label.priorities.city-center-state-capital-category4',
                text: {
                  priority:
                    'global.label.priorities.city-center-state-capital-category4',
                },
              },
            },
          },
        },
        'population-until-30k': {
          filter: {
            all: [
              {
                population: 'global.population.class5-until-30k',
              },
              {
                $zoom: {
                  min: 4,
                  max: 15,
                },
              },
            ],
          },
          draw: {
            icon_library: {
              priority: 'global.label.priorities.city-center-category5',
              visible: 'global.text_visible_populated_places',
              text: {
                priority: 'global.label.priorities.city-center-category5',
                font: {
                  fill: 'global.place_class5_color',
                  size: 'global.places.populated.until-30k.label.font.size',
                  stroke: {
                    color: 'global.place_class5_outline_color',
                    width:
                      'global.places.populated.until-30k.label.font.stroke.width',
                  },
                },
              },
            },
          },
          capital: {
            filter: {
              all: [
                {
                  country_capital: true,
                },
                {
                  $zoom: 'global.places.populated.until-30k.capital.zoom',
                },
              ],
            },
            draw: {
              icon_library: {
                size: 'global.places.populated.until-30k.capital.icon.size',
                sprite: 'city-center--capital_day',
                priority:
                  'global.label.priorities.city-center-country-capital-category5',
                text: {
                  priority:
                    'global.label.priorities.city-center-country-capital-category5',
                  font: {
                    fill: 'global.place_capital_color',
                    stroke: {
                      color: 'global.place_capital_outline_color',
                    },
                  },
                },
              },
            },
          },
          'region-capital': {
            filter: {
              all: [
                {
                  region_capital: true,
                },
                {
                  $zoom:
                    'global.places.populated.until-30k.region_capital.zoom',
                },
              ],
            },
            draw: {
              icon_library: {
                size: 'global.places.populated.until-30k.region_capital.icon.size',
                sprite: 'city-center--square_day',
                priority:
                  'global.label.priorities.city-center-state-capital-category5',
                text: {
                  priority:
                    'global.label.priorities.city-center-state-capital-category5',
                },
              },
            },
          },
          'county-capital': {
            filter: {
              all: [
                {
                  county_capital: true,
                },
                {
                  $zoom:
                    'global.places.populated.until-30k.county_capital.zoom',
                },
              ],
            },
            draw: {
              icon_library: {
                size: 'global.places.populated.until-30k.county_capital.icon.size',
                sprite: 'city-center--circle_day',
                priority:
                  'global.label.priorities.city-center-state-capital-category5',
                text: {
                  priority:
                    'global.label.priorities.city-center-state-capital-category5',
                },
              },
            },
          },
          town: {
            filter: {
              kind_detail: 'town',
            },
            draw: {
              icon_library: {
                size: 'global.places.populated.until-30k.town.icon.size',
                sprite: 'city-center--circle_day',
                priority: 'global.label.priorities.city-center-hamlet',
                text: {
                  priority: 'global.label.priorities.city-center-hamlet',
                },
              },
            },
          },
          village: {
            filter: {
              all: [
                {
                  kind_detail: 'village',
                },
                {
                  $zoom: {
                    min: 7,
                    max: 15,
                  },
                },
              ],
            },
            draw: {
              icon_library: {
                priority: 'global.label.priorities.city-center-hamlet',
                text: {
                  priority: 'global.label.priorities.city-center-hamlet',
                  font: {
                    fill: 'global.place_class5_color',
                    size: 'global.place_village_font_size',
                    stroke: {
                      color: 'global.place_class5_outline_color',
                      width:
                        'global.places.populated.until-30k.village.label.font.stroke.width',
                    },
                  },
                },
              },
            },
          },
        },
        hamlet: {
          filter: {
            all: [
              {
                kind_detail: 'hamlet',
              },
              {
                $zoom: 'global.places.populated.hamlet.zoom',
              },
            ],
          },
          draw: {
            'text-blend-order': {
              visible: 'global.text_visible_populated_places',
              priority: 'global.label.priorities.city-center-hamlet',
              anchor: [
                'center',
                'left',
                'right',
                'top',
                'bottom',
                'top-left',
                'top-right',
                'bottom-left',
              ],
              font: {
                transform:
                  'global.places.populated.hamlet.label.font.transform',
                fill: 'global.place_hamlet_color',
                size: 'global.places.populated.hamlet.label.font.size',
                stroke: {
                  color: 'global.place_hamlet_outline_color',
                  width:
                    'global.places.populated.hamlet.label.font.stroke.width',
                },
              },
            },
          },
        },
      },
      borough: {
        filter: {
          all: [
            {
              kind: 'borough',
            },
            {
              $zoom: 'global.places.borough.zoom',
            },
          ],
        },
        draw: {
          'text-blend-order': {
            visible: 'global.text_visible_neighbourhoods',
            priority: 'global.label.priorities.city-center-hamlet',
            buffer: 'global.texture_buffer_size',
            text_wrap: true,
            font: {
              fill: 'global.places.borough.label.font.fill',
              size: 'global.places.borough.label.font.size',
              stroke: {
                color: 'global.places.borough.label.font.stroke.color',
                width: 'global.places.borough.label.font.stroke.width',
              },
            },
          },
        },
      },
    },
    island_label: {
      data: {
        source: 'omv',
        layer: 'earth',
      },
      filter: {
        kind: 'island',
        $zoom: 'global.island.zoom',
      },
      draw: {
        'text-blend-order': {
          text_source: 'global.ux_language_text_source',
          priority: 'global.label.priorities.island-labels',
          anchor: 'center',
          font: {
            fill: 'global.island_color',
            stroke: {
              color: 'global.island_outline_color',
              width: 'global.island.label.font.stroke.width',
            },
            family: 'global.text_font_family',
            weight: 'global.island.label.font.weight',
            size: 'global.island.label.font.size',
          },
        },
      },
    },
    pois: {
      data: {
        source: 'omv',
        layer: 'pois',
      },
      default: {
        filter: 'function() {\n  return feature.icons.length;\n}\n',
        draw: {
          pois: {
            visible: 'global.poi.default.visible',
            priority:
              "function() {\n  const basePriority = global.label.priorities['poi-labels'] + feature.icons[0].priority;\n  return global.poi.computePriority(basePriority, feature);\n}\n",
            sprite: 'function() {\n  return feature.icons[0].icon;\n}\n',
            size: 'function() {\n  return feature.icons[0].size;\n}\n',
            anchor: 'top',
            text: {
              anchor: 'top',
              offset: [0, '3px'],
              text_source: 'global.ux_language_text_source',
              font: {
                family: 'global.text_font_family',
                fill: 'rgb(100, 100, 100)',
                size: [
                  [5, '8px'],
                  [8, '9px'],
                  [12, '9px'],
                  [13, '10px'],
                  [15, '10px'],
                  [16, '11px'],
                ],
                stroke: {
                  color: 'rgba(240, 246, 247, 0.59)',
                  width: '1px',
                },
              },
            },
          },
        },
        public_transport: {
          filter: {
            pds_category: [
              '400-4000-4581',
              '400-4000-4582',
              '400-4100-0038',
              '400-4100-0339',
              '400-4100-0340',
              '400-4100-0342',
              '400-4100-0037',
              '400-4100-0337',
              '400-4100-0035',
              '400-4100-0047',
              '400-4100-0039',
              '400-4100-0044',
            ],
          },
          draw: {
            pois: {
              anchor: 'center',
            },
          },
        },
        mountain: {
          filter: {
            kind: ['peak', 'volcano'],
          },
          draw: {
            pois: {
              anchor: 'center',
              size: '10px',
              text: {
                priority:
                  "function() {\n  const basePriority = global.label.priorities['mountain-peak-labels'];\n  return global.poi.computePriority(basePriority, feature);\n}\n",
                text_source:
                  "function() {\n  return ((global.ux_language && feature['name:' + global.ux_language]) ||\n    (global.ux_language_fallback && feature['name:' + global.ux_language_fallback]) ||\n    feature['name']) + (feature.elevation && ' (' + feature.elevation + 'm)' || '');\n}\n",
                text_wrap: 1,
                max_lines: 5,
                anchor: 'top',
                font: {
                  fill: 'rgb(113, 101, 97)',
                  stroke: {
                    width: '1px',
                    color: 'rgba(250, 254, 255, .47)',
                  },
                  size: '10px',
                },
              },
            },
          },
        },
        only_label: {
          filter: 'function() {\n  return !feature.icons[0].icon;\n}\n',
          draw: {
            'text-blend-order': {
              visible: 'global.poi.default.visible',
              priority:
                "function() {\n  const basePriority = global.label.priorities['poi-labels'] + feature.icons[0].priority;\n  return global.poi.computePriority(basePriority, feature);\n}\n",
              anchor: 'center',
              text_source: 'global.ux_language_text_source',
              font: {
                family: 'global.text_font_family',
                fill: 'rgb(100, 100, 100)',
                size: [
                  [5, '8px'],
                  [8, '9px'],
                  [12, '9px'],
                  [13, '10px'],
                  [15, '10px'],
                  [16, '11px'],
                ],
                stroke: {
                  color: 'rgba(240, 246, 247, 0.59)',
                  width: '1px',
                },
              },
            },
          },
          neighborhood: {
            filter: {
              pds_category: '900-9100-0216',
            },
            draw: {
              'text-blend-order': {
                priority:
                  "function() {\n  const basePriority = global.label.priorities['city-center-neighbourhood'] + feature.icons[0].priority;\n  return global.poi.computePriority(basePriority, feature);\n}\n",
              },
            },
          },
        },
      },
      filter: 'global.feature_min_zoom_filter',
      mountain: {
        filter: {
          kind: ['peak', 'volcano'],
        },
        draw: {
          icon_library: {
            size: '10px',
            text: {
              priority: 'global.label.priorities.mountain-peak-labels',
              text_source:
                "function() {\n  return ((global.ux_language && feature['name:' + global.ux_language]) ||\n    (global.ux_language_fallback && feature['name:' + global.ux_language_fallback]) ||\n    feature['name']) + (feature.elevation && ' (' + feature.elevation + 'm)' || '');\n}\n",
              text_wrap: 1,
              max_lines: 5,
              anchor: 'top',
              font: {
                fill: 'rgb(120,107,103)',
                stroke: {
                  width: '1px',
                  color: 'rgba(250,254,255,.47)',
                },
                size: '10px',
              },
            },
          },
        },
        peak: {
          filter: {
            kind: 'peak',
          },
          draw: {
            icon_library: {
              sprite: 'mountain-peak--mountain',
            },
          },
        },
        volcano: {
          filter: {
            kind: 'volcano',
          },
          draw: {
            icon_library: {
              sprite: 'mountain-peak--volcano',
            },
          },
        },
      },
    },
  },
};
