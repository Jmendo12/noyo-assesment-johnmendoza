import { useQuery } from 'react-query';
import { getUsers } from '../api';

export default function useSeededUsers() {
  const { data, error, isLoading, isError } = useQuery('seedUsers', getUsers);

  return {
    userIds: data ?? [],
    error,
    isLoading,
    isError
  };
}