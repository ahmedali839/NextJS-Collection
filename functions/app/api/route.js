export function GET() {
  return Response.json(
    {
      message: "GET request fetched succesfully.",
    },
    {
      status: 201,
    },
  );
}

// export function GET(req, res) {
//   return res.json({
//     message: "GET request fetched succesfully.",
//     status: 200,
//   });
// }
