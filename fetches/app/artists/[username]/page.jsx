import Albums from "./albums.jsx";

async function getArtists(username) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/?website=${username}`,
  );

  if (!response.ok) {
    // throw new Error("Failed to fetch artist.");
    return <div>Data not found</div>;
  }
  const data = await response.json();
  console.log(data);

  //   return data;

  return data.length > 0 ? data[0] : null;
}

// async function getAlbums(id) {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${id}/albums`,
//   );
//   if (!response.ok) {
//     // throw new Error("Failed to fetch Albums");
//     return <div>Data not found</div>;
//   }
//   return response.json();
// }

export default async function Page({ params }) {
  const { username } = await params;

  const artistData = await getArtists(username);
  //   const artistAlbums = getAlbums(username);

  // wait for both to finish
  //   const [artist, albums] = await Promise.all([artistData, artistAlbums]);
  return (
    <div className="p-40 font-serif">
      <p>url: {username}</p>
      <h1 className="text-blue-500 ">{artistData.name}</h1>
      <p>Email: {artistData.email}</p>
      <p>Website: {artistData.website}</p>
      <br />
      <h3>Albums Collection</h3>
      {/* <Albums list={albums} /> */}
    </div>
  );
}
