# Map Vendor Evaluation

## Vendors

### HERE Technologies

- https://www.here.com/

## Map feature demonstrations

- basic interactivity (pan, zoom, tilt, rotate via mouse/touch/keyboard)
- click handling
  - acquire lat/lng
- symbol rendering
  - render arbitrary number of symbols at arbitrary lat/lng locations
  - customize symbol shape and color
  - display arbitrary associated properties in popup on click or hover
  - clustering
- center the map at arbitrary coord
- render layers
  - countries
  - states
  - counties
  - cities
  - streets
  - postal codes
    - boundaries
    - centroids

## Running locally

`npm start` (opens browser at http://localhost:3000)

The page will reload when you make changes

## TODOS

- generalize to multiple vendors
  - move map to a tab control
  - map controls (clicked locations, layers) should apply to all vendor maps in tabbed control
  - extract HERE-map-specific code from App into own MapHERE comp
  - create similar map wrapper comps for other vendors (eg, MapGoogle, MapMapbox, etc)
  - establish common props interface all map wrapper comps should adhere to
- HERE:
  - issues:
    - can only toggle layer off and back on once. subsequent toggle does nothing.
    - receiving 403 on postal code tile requests. requires paid subscription?
    - `map.dispose()` raises `mapjs-core` exceptions (eg, `Cannot read properties of null`)
