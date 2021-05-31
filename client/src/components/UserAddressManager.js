import React from 'react';
import { useSeededUsers } from '../hooks';

export default function UserAddressManager() {

  const { userIds, error, isLoading, isError } = useSeededUsers();

  return (
    <main>
      <div>
        {
          isLoading && <p>Seeding user ids, please wait.</p>
        }
        {
          isError && <p>An error occurred when seeding the data: {error}</p>
        }
      </div>
      {
        !isLoading && !isError &&
        userIds.map((userId, index) => <p key={index}>{userId}</p>)
      }
    </main>
  )
}