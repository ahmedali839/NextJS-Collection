export async function POST() {
  return Response.json({
    time: new Date().toISOString(),
    message: "Successfully fetched from backend tool!"
  });
}