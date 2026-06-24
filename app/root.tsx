import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import "./zenithustra.css";

export const links: Route.LinksFunction = () => [
  { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap",
  },
];

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Zenithustra — Build Real. Grow Real. Scale Real." },
    {
      name: "description",
      content:
        "Zenithustra Private Limited builds agritech management systems, gym platforms, mobile apps, and physical infrastructure. A NexLogos ACCRNOVA Group company.",
    },
    { property: "og:title", content: "Zenithustra — Build Real. Grow Real. Scale Real." },
    {
      property: "og:description",
      content:
        "Zenithustra Private Limited delivers physical infrastructure projects, technical and software platforms, and manages Agritech, Gym Management, and App Development verticals from Bangalore.",
    },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ];
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body style={{ margin: 0, background: "#070B06", color: "#F2F7F0" }}>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (error && error instanceof Error) {
    details = error.message;
    stack = import.meta.env.DEV ? error.stack : undefined;
  }

  return (
    <main style={{ padding: "64px 24px", fontFamily: "Inter, sans-serif", color: "#F2F7F0" }}>
      <h1 style={{ fontSize: "48px" }}>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre style={{ padding: "16px", overflowX: "auto" }}>
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
