export async function POST(request: Request) {
  const { email } = await request.json();
  console.log('Newsletter subscription:', email);
  return Response.json({ success: true });
}
