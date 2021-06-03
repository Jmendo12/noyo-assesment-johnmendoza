import React from 'react';
import { useAddressEvents, useSelectedAddressEvents, useStyles } from '../hooks';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/List';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export function AddressEventList({ addressId }) {

  const { addressEvents, error, isLoading, isError } = useAddressEvents(addressId);

  const { selectedAddressEvents, handleAddressEventSelection } = useSelectedAddressEvents();

  const classes = useStyles({
    container: {
      display: 'grid',
      gridTemplateRows: '60px auto 1fr',
      rowGap: '8px',
      padding: '8px',
      border: '2px solid lightgrey',
      borderRadius: '4px'
    },
    eventHeader: {
      display: 'flex',
      alignItems: 'center'
    },
    compareLink: {
      marginLeft: '8px'
    },
    messageContainer: {
      justifySelf: 'center'
    },
    listItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '16px',
      padding: '8px',
      border: '1px solid #000',
      borderRadius: '4px'
    },
    disabled: {
      cursor: 'not-allowed',
    }
  });

  const generateQueryParams = (selectedEvents) => {
    const eventOne = selectedEvents[0];
    const eventTwo = selectedEvents[1];

    return `?address_id=${eventOne.addressId}&as_of_first=${eventOne.addressDate}&as_of_second=${eventTwo.addressDate}`;
  }

  const linkClass = `${classes.compareLink} ${selectedAddressEvents.length !== 2 ? classes.disabled : ""}`;

  return (
    <div className={classes.container}>
      <div className={classes.eventHeader}>
        <h4>Events</h4>
        <Link
          to={{
            pathname: "/compareaddresses",
            search: selectedAddressEvents.length === 2
              ? generateQueryParams(selectedAddressEvents)
              : ""
          }}
          disabled={selectedAddressEvents.length !== 2}
          className={linkClass}
          onClick={(e) => {
            if (selectedAddressEvents.length !== 2) {
              e.preventDefault();
            }
          }}
        >
          Compare
        </Link>
      </div>
      <div className={classes.messageContainer}>
        {
          isLoading && <p>Loading address events</p>
        }
        {
          isError && <p>An error occurred when fetching address events: {error.message}</p>
        }
        {
          addressEvents.length === 0 && <p>No address events to display</p>
        }
      </div>
      <List>
        {
          addressEvents.map((event) => (
            <ListItem key={event.id} onClick={(e) => handleAddressEventSelection(event)} className={classes.listItem}>
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