import React from 'react';
import { useUsers, useSelectedUser, useStyles } from '../hooks';
import { Select } from './Select';
import { AddressInfo } from './AddressInfo';

export default function UserAddressManager() {

  const { userIds, error, isLoading, isError } = useUsers();

  const { selectedUser, handleSelectedUserChange } = useSelectedUser();

  const classes = useStyles({
    main: {
      display: 'grid',
      gridTemplateRows: '40px 40px 1fr',
      rowGap: '8px',
      height: '100%',
      padding: '24px'
    },
    messageContainer: {
      gridRow: 2
    },
    select: {
      width: '350px'
    }
  });

  return (
    <main className={classes.main}>
      <div className={classes.messageContainer}>
        {
          isLoading && <p>Loading user ids, please wait.</p>
        }
        {
          isError && <p>An error occurred when loading the user data: {error.message}</p>
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
        className={classes.select}
      />
      <AddressInfo userId={selectedUser} />
    </main>
  )
}