import { getUserAddresses } from '../api';
import { useQuery } from 'react-query';

export default function useUserAddresses(userId) {
  const { data, error, isLoading, isError } =
    useQuery(
      ['userAddresses', userId],
      () => getUserAddresses(userId),
      { enabled: userId !== null && userId !== undefined });

  return {
    userAddresses: data ?? [],
    error,
    isLoading,
    isError
  };
}