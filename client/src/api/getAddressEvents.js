
export default async function getAddressEvents(addressId) {

  if (addressId === null || addressId === undefined) {
    return []
  }

  const response = await fetch(`addresses/${addressId}/events`);

  const data = await response.json();

  return data;
}