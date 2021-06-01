import React from 'react';
import { useUserAddresses, useSelectedAddress } from '../hooks'
import { AddressList } from './AddressList';
import { AddressEventList } from './AdressEventsList';

export function AddressInfo({ userId }) {

  const { userAddresses, error, isLoading, isError } = useUserAddresses(userId);

  const { selectedAddress, handleSelectedAddressChange } = useSelectedAddress();

  return (
    <div>
      {
        isLoading && <p>Loading user address information.</p>
      }
      {
        isError && <p>An error occurred when fetching the user's address info {error}</p>
      }
      <AddressList
        addressList={userAddresses}
        selectedAddressId={selectedAddress}
        onAddressItemClick={handleSelectedAddressChange}
      />
      <AddressEventList addressId={selectedAddress} />
    </div>
  )
}