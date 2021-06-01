import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

export function AddressList({ addressList = [], selectedAddressId = '', onAddressItemClick = () => 0 }) {

  return (
    <div>
      <h4>Address Information</h4>
      <List>
        {
          addressList.length === 0 && <p>No addresses to display.</p>
        }
        {
          addressList.map((address, index) => {
            return (
              <ListItem
                key={address.id}
                alignItems="flex-start"
                selected={address.id === selectedAddressId}
                onClick={(e) => onAddressItemClick(address.id)}
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