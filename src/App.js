import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';
import { Container, Grid, Paper, Typography } from '@mui/material';
import { LayerSelector } from './LayerSelector';
import { Locations } from './Locations';
import './App.css';

const queryClient = new QueryClient();

export const App = () => {
  const mapRef = useRef();

  const [map, setMap] = useState(null);
  const [locations, setLocations] = useState([]);
  const [isCollect, setIsCollect] = useState(false);

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

    const handleTap = e => {
      // console.log(e.type, e.currentPointer.type, e);

      const coord = map.screenToGeo(e.currentPointer.viewportX, e.currentPointer.viewportY);

      const location = {
        lat: coord.lat.toFixed(4),
        lng: coord.lng.toFixed(4),
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
        setLocations([location]);
      }
    };

    map.addEventListener('tap', handleTap);

    return () => {
      map.removeEventListener('tap', handleTap);
    };
  }, [map, isCollect]);

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
              }}
              onLocationClick={location => {
                console.log(location);
              }}
            />
          </Grid>
          <Grid item xs={6} justifyContent="flex-end">
            <LayerSelector />
          </Grid>
        </Grid>
      </Container>
      {/* <ReactQueryDevtools initialIsOpen /> */}
    </QueryClientProvider>
  );
};
