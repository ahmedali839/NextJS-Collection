import { getUsers } from "../lib/dataAccess";

export default async function Page(users) {
  return (
    <div>
      <h1>Users:</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const users = await getUsers();
  return {
    props: {
      users,
    },
  };
}
