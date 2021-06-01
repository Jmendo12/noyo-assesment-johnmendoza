import React from 'react';
import { useUsers, useSelectedUser } from '../hooks';
import { Select } from './Select';
import { AddressInfo } from './AddressInfo';

export default function UserAddressManager() {

  const { userIds, error, isLoading, isError } = useUsers();

  const { selectedUser, handleSelectedUserChange } = useSelectedUser();

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
      <Select
        label="User Id: "
        selectedValue={selectedUser}
        onChange={handleSelectedUserChange}
        options={
          userIds.map((userId) => ({
            text: userId,
            value: userId
          }))
        }
      />
      <AddressInfo userId={selectedUser} />
    </main>
  )
}