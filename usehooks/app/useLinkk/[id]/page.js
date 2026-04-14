export default async function page({ params }) {
  const { id } = await params; // getting the id as params

  await new Promise((resolve) => setTimeout(resolve, 5000));
// learning usehooks in next.js
  
  return <div>Child Page id: {id} </div>;
}
