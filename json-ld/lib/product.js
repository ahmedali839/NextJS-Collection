export async function getProduct(id) {
  // Simulated database
  const products = {
    "1": {
      id: "1",
      name: "iPhone 15 Pro",
      description: "Latest Apple iPhone with A17 chip.",
      image: "http://localhost:3000/iphone.jpg",
      price: "999",
      currency: "USD",
      rating: "4.8",
      reviewCount: "124",
    },
  }

  return products[id]
}