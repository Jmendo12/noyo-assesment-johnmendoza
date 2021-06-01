import { useState } from 'react';

export default function useSelectedAddress() {
  const [selectedAddress, setSelectedAddress] = useState();

  function handleSelectedAddressChange(selectedAddressId) {
    console.log(selectedAddressId);
    setSelectedAddress(selectedAddressId);
  }

  return {
    selectedAddress,
    handleSelectedAddressChange
  };
}