export async function POST() {
  return Response.json({
    time: new Date().toISOString(),
  });
}
