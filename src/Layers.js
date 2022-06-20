import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Checkbox,
  Typography,
  Paper,
} from '@mui/material';

export const Layers = ({ layers, onLayerToggled }) => {
  return (
    <Paper sx={{ padding: 2 }}>
      <Typography
        variant="h6"
        component="div"
      >
        Layers
      </Typography>
      <List
        dense
        sx={{ width: 180, maxWidth: 180 }}
      >
        {layers.map((layer) => (
          <ListItem
            key={layer.id}
            secondaryAction={
              <Checkbox
                disabled={layer.disabled}
                edge="end"
                onChange={() => onLayerToggled(layer.id)}
                checked={layer.selected ?? false} // prevent `undefined` to let MUI know this checkbox is controlled
                inputProps={{
                  'aria-labelledby': `checkbox-list-secondary-label-${layer.id}`,
                }}
              />
            }
            disablePadding
          >
            <ListItemButton
              disabled={layer.disabled}
              onClick={() => {
                onLayerToggled(layer.id);
              }}
            >
              <ListItemText
                id={layer.id}
                primary={layer.label}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};
