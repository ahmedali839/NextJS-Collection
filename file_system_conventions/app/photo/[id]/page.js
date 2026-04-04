import { photos } from "../../../lib/photos";

export default async function PhotoPage({ params }) {
  const param = await params;
  const photo = photos.find((p) => p.id === param.id);
  
  if (!photo) {
    return <div style={{ padding: 40 }}>Photo not found.</div>;
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Full Photo Page</h1>

      <div
        style={{
          border: "3px solid blue",
          padding: 30,
          marginTop: 20,
        }}
      >
        Photo ID: {photo.id}
        <br />
        Title: {photo.title}
      </div>
    </div>
  );
}
