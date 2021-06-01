
export default async function getUserAddresses(userId) {
  const response = await fetch(`/users/${userId}/addresses`);

  const data = await response.json();

  return data;
}