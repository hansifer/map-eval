import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';
import { Container, Grid, Paper, Typography } from '@mui/material';
import * as randomColor from 'randomcolor';
import { FeatureSelector } from './FeatureSelector';
import { Locations } from './Locations';
import { DEFAULT_MARKER_COLOR } from './consts';
import './App.css';

const queryClient = new QueryClient();

export const App = () => {
  const mapRef = useRef();

  const [map, setMap] = useState(null);
  const [locations, setLocations] = useState([]);
  const [isCollect, setIsCollect] = useState(false);
  const [features, setFeatures] = useState([
    { id: 'country', label: 'Country' },
    { id: 'state', label: 'State' },
    { id: 'city', label: 'City' },
    { id: 'county', label: 'County' },
    { id: 'postal-code', label: 'Postal Code' },
    { id: 'street', label: 'Street' },
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

    setMap(map);

    return () => {
      map.dispose();
      setMap(null);
    };
  }, [mapRef]);

  // add listener for map tap and mouse events; sets or appends locations
  useEffect(() => {
    if (!map) return;

    // ensure map occupies entire container
    const handleResize = () => map.getViewPort().resize();
    window.addEventListener('resize', handleResize);

    const handleTap = e => {
      // console.log(e.type, e.currentPointer.type, e);

      const coord = map.screenToGeo(e.currentPointer.viewportX, e.currentPointer.viewportY);

      const location = {
        lat: coord.lat.toFixed(4),
        lng: coord.lng.toFixed(4),
        color: randomColor(),
      };

      if (isCollect) {
        setLocations(locations => {
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

  const handleFeatureToggled = id => {
    setFeatures(features =>
      features.map(feature =>
        feature.id === id ? { ...feature, selected: !feature.selected } : feature,
      ),
    );
  };

  const addMarker = location => {
    const svg = `<svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
  <path fill="${
    location.color || DEFAULT_MARKER_COLOR
  }" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
</svg>`;
    const icon = new window.H.map.Icon(svg);
    const marker = new window.H.map.Marker(location, { icon });

    map.addObject(marker);
  };

  const removeAllMarkers = () => {
    map.removeObjects(map.getObjects().filter(object => object.type === 4));
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Container maxWidth="md">
        <Typography variant="h5" component="div" gutterBottom>
          Map POC
        </Typography>
        <Paper elevation={8} sx={{ marginBottom: 2 }}>
          <div ref={mapRef} style={{ height: '500px' }} />
        </Paper>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Locations
              locations={locations}
              isCollect={isCollect}
              onChangeCollect={event => {
                setIsCollect(event.target.checked);
              }}
              onClear={() => {
                setLocations([]);
                removeAllMarkers();
              }}
              onLocationClick={location => {
                map.setCenter(location);
              }}
            />
          </Grid>
          <Grid item container xs={6} justifyContent="flex-end">
            <FeatureSelector features={features} onFeatureToggled={handleFeatureToggled} />
          </Grid>
        </Grid>
      </Container>
      {/* <ReactQueryDevtools initialIsOpen /> */}
    </QueryClientProvider>
  );
};
