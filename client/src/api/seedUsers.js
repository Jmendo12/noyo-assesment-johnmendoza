
export default async function seedUsers() {

  const response = await fetch('/seed', {
    method: "POST"
  });

  const data = await response.json();

  return data.user_ids[0];
}