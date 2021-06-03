import React from 'react';
import { useUserAddresses, useSelectedAddress, useStyles } from '../hooks'
import { AddressList } from './AddressList';
import { AddressEventList } from './AdressEventsList';

export function AddressInfo({ userId }) {

  const { userAddresses, error, isLoading, isError } = useUserAddresses(userId);

  const { selectedAddress, handleSelectedAddressChange } = useSelectedAddress();

  const classes = useStyles({
    container: {
      display: 'grid',
      gridTemplateRows: '55px 1fr',
      gridTemplateColumns: '1fr 1fr',
      columnGap: '24px',
    },
    messageContainer: {
      gridRow: 1,
      gridColumn: 'span 2'
    }
  });

  return (
    <div className={classes.container}>
      <div className={classes.messageContainer}>
        {
          isLoading && <p>Loading user address information.</p>
        }
        {
          isError && <p>An error occurred when fetching the user's address info {error.message}</p>
        }
      </div>
      <AddressList
        addressList={userAddresses}
        selectedAddressId={selectedAddress}
        onAddressItemClick={handleSelectedAddressChange}
      />
      <AddressEventList addressId={selectedAddress} />
    </div>
  )
}