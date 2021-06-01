import { getAddressEvents } from '../api';
import { useQuery } from 'react-query';

export default function useAdressEvents(addressId) {
  const { data, error, isLoading, isError } =
    useQuery(
      ['addressEvents', addressId],
      () => getAddressEvents(addressId),
      { enabled: addressId !== null && addressId !== undefined });

  return {
    addressEvents: data ?? [],
    error,
    isLoading,
    isError
  };
}