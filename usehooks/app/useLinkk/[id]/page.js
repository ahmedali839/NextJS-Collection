export default async function page({ params }) {
  const { id } = await params;

  // it will wait for 5 seconds before rendering the page, you can remove this line if you don't want to wait
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return <div>Child Page id: {id} </div>;
}
