// Health check endpoint, matching the original Axum `/healthz`.
export function GET() {
  return new Response("ok", {
    headers: { "content-type": "text/plain" },
  });
}
