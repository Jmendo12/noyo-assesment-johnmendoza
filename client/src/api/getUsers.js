
export default async function getUsers() {

  const response = await fetch('/user_ids');

  const data = await response.json();
  
  return data;
}