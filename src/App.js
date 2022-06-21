import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';
import { Container, Grid, Paper } from '@mui/material';
import * as randomColor from 'randomcolor';
import { Layers } from './Layers';
import { Locations } from './Locations';
import { getMarkerSVG } from './utils/marker';
import './App.css';

const queryClient = new QueryClient();

export const App = () => {
  const mapRef = useRef();

  // const [platform, setPlatform] = useState(null);
  const [map, setMap] = useState(null);
  const [bubble, setBubble] = useState(null);
  const [locations, setLocations] = useState([]);
  const [isCollect, setIsCollect] = useState(false);
  const [isCluster, setIsCluster] = useState(false);
  const [layers, setLayers] = useState([
    {
      id: 'country',
      label: 'Country',
      layerIds: ['boundaries.country', 'places.country'],
      selected: true,
    },
    {
      id: 'state',
      label: 'State',
      layerIds: ['boundaries.state', 'places.region'],
      selected: true,
    },
    {
      id: 'county',
      label: 'County',
      layerIds: [],
      selected: false,
      disabled: true,
    },
    {
      id: 'city',
      label: 'City',
      layerIds: ['places.populated-places'],
      selected: true,
    },
    { id: 'postal-code', label: 'Postal Code', layerIds: [], selected: false },
    {
      id: 'street',
      label: 'Street',
      layerIds: ['roads', 'road_labels'],
      selected: true,
    },
    {
      id: 'buildings',
      label: 'Buildings',
      layerIds: ['buildings'],
      selected: true,
    },
  ]);

  // create map instance
  // `useLayoutEffect` renders map sooner than `useEffect`
  useLayoutEffect(() => {
    // `mapRef.current` is `undefined` when this hook first runs
    if (!mapRef.current) return;

    const H = window.H;

    const platform = new H.service.Platform({
      apikey: '4-SzeCGq9PmOCaZK8KNA4PdVNEeji7Fe-LYLEN2Hm40',
    });

    const defaultLayers = platform.createDefaultLayers();

    const map = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
      center: { lat: 39.742043, lng: -104.991531 },
      zoom: 11,
      pixelRatio: window.devicePixelRatio || 1,
    });

    // enable event system
    const mapEvents = new H.mapevents.MapEvents(map);

    // `Behavior` enables default interactions for pan/zoom (also on mobile touch environments)
    const behavior = new H.mapevents.Behavior(mapEvents);

    // create default UI components to allow user to interact with them
    const ui = H.ui.UI.createDefault(map, defaultLayers);

    // create info bubble
    const bubble = new H.ui.InfoBubble(map.getCenter(), {
      content: '',
    });
    bubble.close();
    ui.addBubble(bubble);

    // setPlatform(platform);
    setMap(map);
    setBubble(bubble);

    return () => {
      map.dispose(); // raises mapjs-core exceptions (eg, 'Cannot read properties of null')
      setBubble(null);
      setMap(null);
      // setPlatform(null);
    };
  }, [mapRef]);

  // add listener for map tap and mouse events; sets or appends locations
  useEffect(() => {
    if (!map) return;

    // ensure map occupies entire container
    const handleResize = () => map.getViewPort().resize();
    window.addEventListener('resize', handleResize);

    const handleTap = (e) => {
      // console.log(e.type, e.currentPointer.type, e);

      const coord = map.screenToGeo(
        e.currentPointer.viewportX,
        e.currentPointer.viewportY,
      );

      const location = {
        lat: coord.lat.toFixed(4),
        lng: coord.lng.toFixed(4),
      };

      if (isCollect) {
        location.color = randomColor({
          luminosity: 'dark',
        });

        setLocations((locations) => {
          const lastLocation = locations[locations.length - 1];
          if (
            lastLocation &&
            lastLocation.lat === location.lat &&
            lastLocation.lng === location.lng
          ) {
            // do not duplicate last location
            return locations;
          }

          return [...locations, location];
        });
      } else {
        removeAllMarkers();
        setLocations([location]);
      }

      addMarker(location);
    };

    map.addEventListener('tap', handleTap);

    return () => {
      map.removeEventListener('tap', handleTap);
      window.removeEventListener('resize', handleResize);
    };
  }, [map, isCollect]);

  const handleLayerToggled = (id) => {
    const layer = layers.find((layer) => layer.id === id);
    const togglingOff = layer.selected;

    // get OMV provider from base layer
    const provider = map.getBaseLayer().getProvider();

    // get style object for base layer
    const style = provider.getStyle();

    if (togglingOff) {
      // if (layer.id === 'postal-code') {
      // } else {
      // query, save, and remove the subsection of the style configuration
      // NOTE: the style MUST be in the "READY" state
      layer.styleConfig = style.extractConfig(layer.layerIds);
      // }
      layer.selected = false;
    } else {
      // if (layer.id === 'postal-code') {
      //   showPostalCodes();
      // } else {
      if (layer.styleConfig) style.mergeConfig(layer.styleConfig);
      layer.styleConfig = null;
      // }
      layer.selected = true;
    }

    setLayers([...layers]);
  };

  const addMarker = (location) => {
    bubble.close();

    const icon = new window.H.map.Icon(getMarkerSVG(location.color));
    const marker = new window.H.map.Marker(location, { icon });
    marker.setData(`This marker was created on ${new Date().toLocaleString()}`);

    map.addObject(marker);

    const handleMarkerTap = (e) => {
      const marker = e.target;

      bubble.setPosition(marker.getGeometry());
      bubble.setContent(marker.getData());
      bubble.open();

      e.stopPropagation();
    };

    marker.addEventListener('tap', handleMarkerTap);
  };

  const removeAllMarkers = () => {
    // todo: need to remove event listeners from makers explicitly?
    map.removeObjects(map.getObjects().filter((object) => object.type === 4));
    bubble.close();
  };

  // PSTLCB_GEN tile requests 403'd. requires paid subscription?
  // const showPostalCodes = () => {
  //   const service = platform.getPlatformDataService();

  //   const H = window.H;

  //   const style = new H.map.SpatialStyle();

  //   // create tile provider and layer that displays postcode boundaries
  //   const boundariesProvider = new H.service.extension.platformData.TileProvider(
  //     service,
  //     {
  //       layerId: 'PSTLCB_GEN',
  //       level: 12,
  //     },
  //     {
  //       resultType: H.service.extension.platformData.TileProvider.ResultType.POLYLINE,
  //       styleCallback: function (data) {
  //         return style;
  //       },
  //     },
  //   );

  //   const boundaries = new H.map.layer.TileLayer(boundariesProvider);
  //   map.addLayer(boundaries);

  //   // create tile provider and layer that displays postcode centroids
  //   const centroidsProvider = new H.service.extension.platformData.TileProvider(
  //     service,
  //     {
  //       layerId: 'PSTLCB_MP',
  //       level: 12,
  //     },
  //     {
  //       resultType: H.service.extension.platformData.TileProvider.ResultType.MARKER,
  //     },
  //   );
  //   const centroids = new H.map.layer.MarkerTileLayer(centroidsProvider);
  //   map.addLayer(centroids);

  //   // add event listener that shows popup with basic postal code info
  //   centroidsProvider.addEventListener('tap', function (ev) {
  //     const marker = ev.target;
  //     bubble.setPosition(marker.getGeometry());
  //     const str =
  //       '<nobr>Postal code: ' +
  //       marker.getData().getCell('POSTAL_CODE') +
  //       '</nobr><br>' +
  //       'Country code: ' +
  //       marker.getData().getCell('ISO_COUNTRY_CODE') +
  //       '<br>';
  //     bubble.setContent(str);
  //     bubble.open();
  //   });
  // };

  return (
    <QueryClientProvider client={queryClient}>
      <Container maxWidth="md">
        {/* <Typography
          variant="h5"
          component="div"
          gutterBottom
        >
          Map POC
        </Typography> */}
        <Paper
          elevation={8}
          sx={{ marginBottom: 2 }}
        >
          <div
            ref={mapRef}
            style={{ height: '500px' }}
          />
        </Paper>
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            xs={6}
          >
            <Locations
              locations={locations}
              isCollect={isCollect}
              onChangeCollect={(checked) => {
                setIsCollect(checked);
              }}
              isCluster={isCluster}
              onChangeCluster={(checked) => {
                setIsCluster(checked);
              }}
              onClear={() => {
                setLocations([]);
                removeAllMarkers();
              }}
              onLocationClick={(location) => {
                map.setCenter(location);
              }}
            />
          </Grid>
          <Grid
            item
            container
            xs={6}
            justifyContent="flex-end"
          >
            <Layers
              layers={layers}
              onLayerToggled={handleLayerToggled}
            />
          </Grid>
        </Grid>
      </Container>
      {/* <ReactQueryDevtools initialIsOpen /> */}
    </QueryClientProvider>
  );
};
