export default function DashboardLayout({
  children,
  users,
  notifications,
  analytics,
}) {
  return (
    <div style={{ padding: 30 }}>

      <h1 style={{ fontSize: 40 }}>Dashboard Layout</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
          marginTop: 30,
        }}
      >

        <div style={{ border: "3px solid blue", padding: 20 }}>
          <h2>Main Page</h2>
          {children}
        </div>

        <div style={{ border: "3px solid green", padding: 20 }}>
          <h2>Users Slot</h2>
          {users}
        </div>

        <div style={{ border: "3px solid red", padding: 20 }}>
          <h2>Notifications Slot</h2>
          {notifications}
        </div>

        <div style={{ border: "3px solid purple", padding: 20 }}>
          <h2>Analytics Slot</h2>
          {analytics}
        </div>

      </div>
    </div>
  );
}