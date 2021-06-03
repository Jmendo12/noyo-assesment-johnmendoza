import React from 'react';
import { useQuery, useAddress, useStyles } from '../hooks';
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

  const classes = useStyles({
    container: {
      display: 'grid',
      gridTemplateRows: '35px 1fr',
      rowGap: '8px',
      height: '100%',
      padding: '24px'
    },
    comparisonContainer: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      columnGap: '16px',
      padding: '8px',
      border: '2px solid lightgrey',
      borderRadius: '4px'
    },
    addressContainer: {
      display: 'grid',
      gridTemplateRows: 'auto 1fr',
      height: '100%',
      border: '1px solid #000',
      borderRadius: '4px'
    },
    itemAdded: {
      backgroundColor: '#9aeaa0'
    },
    itemRemoved: {
      backgroundColor: '#ef949f'
    },
    itemModified: {
      backgroundColor: '#f2deaa'
    }
  });

  const getListItemClass = (addressOneProperty, addressTwoProperty) => {
    const isNullUndefinedOrEmpty = (property) => property === null || property === undefined || property === "";

    if (isNullUndefinedOrEmpty(addressOneProperty) && !isNullUndefinedOrEmpty(addressTwoProperty)) {
      return classes.itemAdded;
    }

    if (!isNullUndefinedOrEmpty(addressOneProperty) && isNullUndefinedOrEmpty(addressTwoProperty)) {
      return classes.itemRemoved;
    }

    if (!isNullUndefinedOrEmpty(addressOneProperty) && !isNullUndefinedOrEmpty(addressTwoProperty)) {
      return addressOneProperty !== addressTwoProperty
        ? classes.itemModified
        : "";
    }
  }

  return (
    <div className={classes.container}>
      <Link to='/'>Go Back</Link>
      <div className={classes.comparisonContainer}>
        <div className={classes.addressContainer}>
          <div>
            {
              isLoadingAddressOne && <p>Loading first address info...</p>
            }
            {
              isErrorAddressOne && <p>An error occurred when fetching the first address: {errorAddressOne.message}</p>
            }
          </div>
          <List>
            {
              Object.entries(addressOne).map(([key, value]) => (
                <ListItem
                  key={`list-one-${addressOne.id}-${key}`}
                  className={getListItemClass(addressOne[key], addressTwo[key])}
                >
                  <ListItemText primary={`${key}: ${value}`} />
                </ListItem>
              ))
            }
          </List>
        </div>
        <div className={classes.addressContainer}>
          <div>
            {
              isLoadingAddressTwo && <p>Loading first address info...</p>
            }
            {
              isErrorAddressTwo && <p>An error occurred when fetching the first address: {errorAddressTwo.message}</p>
            }
          </div>
          <List>
            {
              Object.entries(addressTwo).map(([key, value]) => (
                <ListItem
                  key={`list-two-${addressTwo.id}-${key}`}
                >
                  <ListItemText primary={`${key}: ${value}`} />
                </ListItem>
              ))
            }
          </List>
        </div>
      </div>
    </div>
  )
}