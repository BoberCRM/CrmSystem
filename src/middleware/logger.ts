// /middleware/logger.ts

export function middleware(req: Request) {
  console.log(`Request to ${req.url}`);
  return new Response('Log Middleware');
}
