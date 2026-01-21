// app/artists/[username]/albums.jsx
import React from "react";

export default function Albums({ list }) {
  if (!Array.isArray(list)) {
    return <p>No albums found or loading...</p>;
  }
  return (
    <div style={{ marginTop: "20px" }}>
      <ul>
        {list.map((album) => (
          <li key={album.id} style={{ padding: "5px 0" }}>
            {album.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
