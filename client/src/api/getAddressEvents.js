
export default async function getAddressEvents(addressId) {
  const response = await fetch(`addresses/${addressId}/events`);

  const data = await response.json();

  return data;
}