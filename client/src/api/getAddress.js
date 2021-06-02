
export default async function getAddress(adressId, adressDate) {
  const response = await fetch(`/addresses/${adressId}?as_of=${adressDate}`);

  const data = await response.json();

  return data;
}