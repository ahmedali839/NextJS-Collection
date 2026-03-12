export async function GET(req, { params }) {
  const { id } = await params;
  console.log(id);

  const products = {
    1: {
      id: "1",
      name: "Laptop",
      description: "High performance laptop",
      price: 999,
    },
    2: {
      id: "2",
      name: "Headphones",
      description: "Noise cancelling headphones",
      price: 199,
    },
  };

  if (products[id]) {
    return Response.json(products[id]);
  }

  return Response.json({ error: "Product not found" }, { status: 404 });
}
