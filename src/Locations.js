import { Paper, Grid, Button, FormControlLabel, Switch, Box } from '@mui/material';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import RoomIcon from '@mui/icons-material/Room';

export function Locations({ locations, isMulti, onChangeMulti, onClear, onLocationClick }) {
  return (
    <Paper sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs>
          <Typography variant="h6" component="div">
            Clicked locations
          </Typography>
        </Grid>
        <Grid item container xs justifyContent="flex-end" alignItems="center">
          <FormControlLabel
            control={<Switch checked={isMulti} onChange={onChangeMulti} />}
            label="Collect"
          />
          <Button variant="contained" size="small" onClick={onClear} disabled={!locations.length}>
            Clear
          </Button>
        </Grid>
      </Grid>
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
          none
        </Box>
      ) : (
        <List sx={{ width: '100%', paddingBottom: 0 }} dense={true}>
          {locations.map((location, i) => (
            <ListItemButton key={i} onClick={() => onLocationClick(location)}>
              <ListItemIcon>
                <RoomIcon />
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
