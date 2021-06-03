import React from 'react';
import { useStyles } from '../hooks';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export function AddressList({ addressList = [], selectedAddressId = '', onAddressItemClick = () => 0 }) {

  const classes = useStyles({
    container: {
      display: 'grid',
      gridTemplateRows: '30px auto auto',
      rowGap: '8px',
      padding: '8px',
      border: '2px solid lightgrey',
      borderRadius: '4px'
    },
    message: {
      justifySelf: 'center',
      aligSelf: 'center'
    },
    listItem: {
      border: '1px solid #000',
      borderRadius: '4px'
    }
  });

  return (
    <div className={classes.container}>
      <h4>Address Information</h4>
      {
        addressList.length === 0 && <p className={classes.message}>No addresses to display.</p>
      }
      <List>
        {
          addressList.map((address, index) => {
            return (
              <ListItem
                key={address.id}
                alignItems="flex-start"
                selected={address.id === selectedAddressId}
                onClick={(e) => onAddressItemClick(address.id)}
                className={classes.listItem}
              >
                <List>
                  {

                    Object.entries(address).map(([key, value]) => (
                      <ListItem alignItems="flex-start" key={`${address.id}-${key}`}>
                        <ListItemText primary={`${key}: ${value}`} />
                      </ListItem>
                    ))
                  }
                </List>
              </ListItem>
            )
          })
        }
      </List>
    </div>
  )
}