import React from 'react';
import { useAddressEvents, useSelectedAddressEvents } from '../hooks';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/List';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export function AddressEventList({ addressId }) {

  const { addressEvents, error, isLoading, isError } = useAddressEvents(addressId);

  const { selectedAddressEvents, handleAddressEventSelection } = useSelectedAddressEvents();

  return (
    <div>
      <h4>Events</h4>
      {
        isLoading && <p>Loading address events</p>
      }
      {
        isError && <p>An error occurred when fetching address events: {error.message}</p>
      }
      {
        addressEvents.length === 0 && <p>No address events to display</p>
      }
      <List>
        {
          addressEvents.map((event) => (
            <ListItem key={event.id} onClick={(e) => handleAddressEventSelection(event.id)}>
              <ListItemIcon>
                <Checkbox
                  checked={selectedAddressEvents.includes(event.id)}
                  edge="start"
                  inputProps={{ 'aria-labelledby': `checkbox-list-label-${event.id}` }}
                />
              </ListItemIcon>
              <ListItemText primary={event.type} id={`checkbox-list-label-${event.id}`} />
              <ListItemText primary={event.created_at} />
            </ListItem>
          ))
        }
      </List>
    </div>
  )
}