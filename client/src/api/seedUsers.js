
async function seedUsers() {

  const response = await fetch('/seed');

  const userIds = await response.json();

  return userIds;
}

export default seedUsers;