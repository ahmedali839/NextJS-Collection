export async function register() {
  // This only runs on the Node.js server side
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('./otel-setup');
  }
}