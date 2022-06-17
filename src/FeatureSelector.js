import { List, ListItem, ListItemButton, ListItemText, Checkbox } from '@mui/material';

export const FeatureSelector = ({ features, onFeatureToggled }) => {
  return (
    <List dense sx={{ width: 180, maxWidth: 180 }}>
      {features.map(feature => (
        <ListItem
          key={feature.id}
          secondaryAction={
            <Checkbox
              disabled={feature.disabled}
              edge="end"
              onChange={() => onFeatureToggled(feature.id)}
              checked={feature.selected ?? false} // prevent `undefined` to let MUI know this checkbox is controlled
              inputProps={{ 'aria-labelledby': `checkbox-list-secondary-label-${feature.id}` }}
            />
          }
          disablePadding
        >
          <ListItemButton
            disabled={feature.disabled}
            onClick={() => {
              onFeatureToggled(feature.id);
            }}
          >
            <ListItemText id={feature.id} primary={feature.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
