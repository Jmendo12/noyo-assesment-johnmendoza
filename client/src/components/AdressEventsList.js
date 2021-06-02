import React from 'react';
import { useAddressEvents, useSelectedAddressEvents } from '../hooks';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/List';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const CompareLink = styled(Link)`
  pointer-events: ${props => props.disabled ? "none" : "all"}
`

export function AddressEventList({ addressId }) {

  const { addressEvents, error, isLoading, isError } = useAddressEvents(addressId);

  const { selectedAddressEvents, handleAddressEventSelection } = useSelectedAddressEvents();

  const generateQueryParams = (selectedEvents) => {
    const eventOne = selectedEvents[0];
    const eventTwo = selectedEvents[1];

    return `?address_id=${eventOne.addressId}&as_of_first=${eventOne.addressDate}&as_of_second=${eventTwo.addressDate}`;
  }

  return (
    <div>
      <h4>Events</h4>
      <CompareLink
        to={{
          pathname: "/compareaddresses",
          search: selectedAddressEvents.length === 2
            ? generateQueryParams(selectedAddressEvents)
            : ""
        }}
        disabled={selectedAddressEvents.length !== 2}
      >
        Compare
      </CompareLink>
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
            <ListItem key={event.id} onClick={(e) => handleAddressEventSelection(event)}>
              <ListItemIcon>
                <Checkbox
                  checked={selectedAddressEvents.findIndex(selectedEvent => selectedEvent.id === event.id) !== -1}
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