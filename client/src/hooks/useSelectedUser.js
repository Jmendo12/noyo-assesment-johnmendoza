import { useState } from 'react';

export default function useSelectedUser() {
  const [selectedUser, setSelectedUser] = useState();

  function handleSelectedUserChange(newSelectedUser) {
    setSelectedUser(newSelectedUser);
  }

  return {
    selectedUser,
    handleSelectedUserChange
  };
}