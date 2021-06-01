import { getUserAddresses } from '../api';
import { useQuery } from 'react-query';

export default function useUserAddresses(userId) {
  const { data, error, isLoading, isError } = useQuery(['userAddresses', userId], () => getUserAddresses(userId));

  return {
    userAddresses: data ?? [],
    error,
    isLoading,
    isError
  };
}