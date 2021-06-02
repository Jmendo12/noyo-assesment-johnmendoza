import React from 'react';
import { useQuery, useAddress } from '../hooks';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function CompareAddresses() {

  const queryParams = useQuery();

  const { address: addressOne, error: errorAddressOne, isLoading: isLoadingAddressOne, isError: isErrorAddressOne } =
    useAddress(queryParams.get("address_id"), queryParams.get("as_of_first"));

  const { address: addressTwo, error: errorAddressTwo, isLoading: isLoadingAddressTwo, isError: isErrorAddressTwo } =
    useAddress(queryParams.get("address_id"), queryParams.get("as_of_second"));

  return (
    <div>
      <Link to='/'>Go Back</Link>
      <div>
        {
          isLoadingAddressOne && <p>Loading first address info...</p>
        }
        {
          isErrorAddressOne && <p>An error occurred when fetching the first address: {errorAddressOne.message}</p>
        }
        <List>
          {
            Object.entries(addressOne).map(([key, value]) => (
              <ListItem>
                <ListItemText primary={`${key}: ${value}`} />
              </ListItem>
            ))
          }
        </List>
      </div>
      <div>
        {
          isLoadingAddressTwo && <p>Loading first address info...</p>
        }
        {
          isErrorAddressTwo && <p>An error occurred when fetching the first address: {errorAddressTwo.message}</p>
        }
        <List>
          {
            Object.entries(addressTwo).map(([key, value]) => (
              <ListItem>
                <ListItemText primary={`${key}: ${value}`} />
              </ListItem>
            ))
          }
        </List>
      </div>
      <List>
      </List>
    </div>
  )
}