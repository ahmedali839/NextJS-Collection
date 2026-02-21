import { getUsers } from "@/lib/dataAccess";
import GetData from "./client/page";

let counter = 0;

export default async function Home() {
  counter++;
  // HTTPS method most secured for bigger companies and don't expose to browser
  const res2 = await fetch("http://localhost:3000/api/users");
  const user2 = await res2.json();

  // DAL method most secured for industries and bussiness and less chances to expose to browser
  const user1 = await getUsers();

  // Compoent base data access method: not secured, for local sites, working very close to client side and most chances to expose to browser
  const res3 = await fetch("https://jsonplaceholder.typicode.com/users/2");
  if (!res3.ok) throw new Error("Failed to fetch users3.");
  const user3 = await res3.json();

  return (
    <div>
      <h1>Users (Using Data Access Layer)</h1>
      <p className="mt-5">1) HTTPS-method: {user1.name}</p>
      <p className="mt-3">2) DAL(Data Access Layer) method: {user2.name}</p>
      <p className="mt-3">Component-base Data Access: {user3.name}</p>
      <p className="mt-3">
        3) "/client": Best example of Component-base Data Access: {<GetData />}
      </p>
      <h1> Mutation Error: {counter} Unpredictable</h1>;
    </div>
  );
}
