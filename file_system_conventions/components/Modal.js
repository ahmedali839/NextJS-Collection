export default function Modal({ children }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: 40,
          borderRadius: 10,
        }}
      >
        {children}
      </div>
    </div>
  );
}