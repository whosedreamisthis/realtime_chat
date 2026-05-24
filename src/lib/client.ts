import { treaty } from "@elysiajs/eden";
import type { App } from "@/app/api/[[...slugs]]/route";

const getBaseUrl = () => {
  // If we are running inside the client browser, use the current active domain
  if (typeof window !== "undefined") {
    return window.location.origin;
  }

  // If we are handling Server-Side Rendering (SSR) or build compilation on Vercel
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // Local development fallback
  return "http://localhost:3000";
};

export const client = treaty<App>(getBaseUrl()).api;
