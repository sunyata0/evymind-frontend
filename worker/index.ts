import { email } from "./email";

type ContactPayload = {
  name: string;
  email: string;
  license?: string;
  message: string;
};

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/api/")) {
      return Response.json({ name: "Cloudflare" });
    }

    if (url.pathname === "/email" && request.method === "POST") {
      let body: ContactPayload;

      try {
        body = (await request.json()) as ContactPayload;
      } catch {
        return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }

      const { name, email: userEmail, license, message } = body;

      if (!name || !userEmail || !message) {
        return new Response(JSON.stringify({ error: "Missing required fields" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }

      return await email({
        name,
        email: userEmail,
        license,
        message,
      });
    }

    return new Response("Not found", { status: 404 });
  },
} satisfies ExportedHandler;
