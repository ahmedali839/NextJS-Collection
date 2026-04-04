import Modal from "../../../../../components/Modal";
import { photos } from "../../../../../lib/photos";

export default async function PhotoModal({ params }) {
  const param = await params;
  const photo = photos.find((p) => p.id === param.id);

  if (!photo) {
    return (
      <Modal>
        <p>Photo not found.</p>
      </Modal>
    );
  }

  return (
    <Modal>
      <h2>Modal Photo View</h2>

      <div
        style={{
          border: "3px solid red",
          color: "orange",
          padding: 20,
          marginTop: 20,
        }}
      >
        Photo ID: {photo.id}
        <br />
        Title: {photo.title}
      </div>
    </Modal>
  );
}
