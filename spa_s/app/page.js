import Link from "next/link";

export default function Home() {
  const products = [
    { id: "1", name: "Laptop" },
    { id: "2", name: "Headphones" },
  ];

  return (
    <div>
      <h1>Today Yar, learning and working in Single Page Application(SPA's)</h1>
      <h3>Products</h3> {/* working  */}
      {products.map((product) => (
        <div key={product.id}>
          <Link href={`/product/${product.id}`}>{product.name}</Link>
        </div>
      ))}
    </div>
  );
}
