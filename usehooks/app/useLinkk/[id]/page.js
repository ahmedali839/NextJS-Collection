export default async function page({ params }) {
  const { id } = await params;

  await new Promise((resolve) => setTimeout(resolve, 5000));

  return <div>Child Page id: {id} </div>;
}
