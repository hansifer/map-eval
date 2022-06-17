import { List, ListItem, ListItemButton, ListItemText, Checkbox } from '@mui/material';

export const FeatureSelector = ({ features, onFeatureToggled }) => {
  return (
    <List dense sx={{ width: 180, maxWidth: 180 }}>
      {features.map(feature => (
        <ListItem
          key={feature.id}
          secondaryAction={
            <Checkbox
              edge="end"
              onChange={e => onFeatureToggled(feature.id, e.target.checked)}
              checked={feature.selected ?? false} // prevent `undefined` to let MUI know this checkbox is controlled
              inputProps={{ 'aria-labelledby': `checkbox-list-secondary-label-${feature.id}` }}
            />
          }
          disablePadding
        >
          <ListItemButton>
            <ListItemText id={feature.id} primary={feature.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
