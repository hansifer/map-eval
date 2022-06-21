import { getMarkerSVG } from '../marker';

// return object should implement H.clustering.ITheme interface
export const getCustomClusteringTheme = (defaultTheme) => ({
  getClusterPresentation: (cluster) =>
    defaultTheme.getClusterPresentation.call(defaultTheme, cluster), // keep default theme for clusters
  getNoisePresentation: (noisePoint) => {
    const H = window.H;

    const location = noisePoint.getData();
    const icon = new H.map.Icon(getMarkerSVG(location.color));

    const noiseMarker = new H.map.Marker(noisePoint.getPosition(), {
      // use min zoom from a noise point to show it correctly at certain zoom levels
      min: noisePoint.getMinZoom(),
      icon,
    });

    // link a data from the point to the marker to make it accessible inside onMarkerClick
    noiseMarker.setData(location);

    return noiseMarker;
  },
});
