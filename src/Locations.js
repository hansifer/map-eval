import {
  Paper,
  Grid,
  Button,
  FormControlLabel,
  Switch,
  Box,
  List,
  Typography,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import LocationIcon from '@mui/icons-material/Room';
import { DEFAULT_MARKER_COLOR } from './utils/marker';

export function Locations({
  locations,
  isCollect,
  isCluster,
  onChangeCollect,
  onChangeCluster,
  onClear,
  onLocationClick,
}) {
  return (
    <Paper sx={{ padding: 2 }}>
      <Grid
        container
        spacing={2}
      >
        <Grid
          item
          xs
        >
          <Typography
            variant="h6"
            component="div"
          >
            {isCollect ? 'Clicked locations' : 'Clicked location'}
          </Typography>
        </Grid>
        <Grid
          item
          container
          xs
          justifyContent="flex-end"
          alignItems="center"
        >
          <FormControlLabel
            control={
              <Switch
                checked={isCollect}
                onChange={(e) => {
                  onChangeCollect(e.target.checked);
                  onChangeCluster(false);
                }}
              />
            }
            label="Collect"
          />
          <Button
            variant="contained"
            size="small"
            onClick={onClear}
            disabled={!locations.length}
          >
            Clear
          </Button>
        </Grid>
      </Grid>
      {isCollect ? (
        <Grid>
          <FormControlLabel
            control={
              <Switch
                checked={isCluster}
                onChange={(e) => {
                  onChangeCluster(e.target.checked);
                }}
              />
            }
            label="Cluster"
          />
        </Grid>
      ) : null}
      {!locations?.length ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 2,
            paddingBottom: '6px',
            color: '#aaa',
          }}
        >
          {isCollect
            ? '(click map to add locations)'
            : '(click map to show location)'}
        </Box>
      ) : (
        <List
          sx={{ width: '100%', paddingBottom: 0 }}
          dense={true}
        >
          {locations.map((location, i) => (
            <ListItemButton
              key={i}
              onClick={() => onLocationClick(location)}
            >
              <ListItemIcon>
                <LocationIcon
                  sx={{ color: location.color || DEFAULT_MARKER_COLOR }}
                />
              </ListItemIcon>
              <ListItemText
                primary={`${location.lat}     ${location.lng}`}
                sx={{
                  whiteSpace: 'pre-wrap',
                }}
              />
            </ListItemButton>
          ))}
        </List>
      )}
    </Paper>
  );
}
