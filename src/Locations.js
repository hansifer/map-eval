import { Paper, Grid, Button, FormControlLabel, Switch, Box } from '@mui/material';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import RoomIcon from '@mui/icons-material/Room';

export function Locations({ locations, isMulti, onClear, onChangeMulti }) {
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
            marginTop: 2,
            justifyContent: 'center',
            color: '#aaa',
          }}
        >
          none
        </Box>
      ) : (
        <List sx={{ width: '100%' }} dense={true}>
          {locations.map((location, i) => (
            <ListItem key={i}>
              <ListItemIcon>
                <RoomIcon />
              </ListItemIcon>
              <ListItemText primary={location.lat} />
              <ListItemText primary={location.lng} />
            </ListItem>
          ))}
        </List>
      )}
    </Paper>
  );
}
