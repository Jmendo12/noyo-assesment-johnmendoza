import { getAddress } from '../api';
import { useQuery } from 'react-query';

export default function useAddress(addressId, addressDate) {
  const { data, error, isLoading, isError } =
    useQuery(
      ['addressAtDate', addressId, addressDate],
      () => getAddress(addressId, addressDate),
      {
        enabled: addressId !== null && addressId !== undefined
          && addressDate !== null && addressDate !== undefined
      });

  return {
    address: data ?? {},
    error,
    isLoading,
    isError
  };
}