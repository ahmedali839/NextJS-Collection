export default function Products() {
  console.log("Products rendered");

  return (
    <div>
      <h1>Products</h1>
      <p>{new Date().toISOString()}</p>
    </div>
  );
}
