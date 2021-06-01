import { useQuery } from 'react-query';
import { seedUsers } from '../api';

export default function useSeededUsers() {
  const { data, error, isLoading, isError } = useQuery('seedUsers', seedUsers);

  return {
    userIds: data ?? [],
    error,
    isLoading,
    isError
  };
}