import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useRouteLoaderData,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";
import type {
  LinksFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from "@vercel/remix";
import styles from "~/styles/tailwind.css?url";
import { TooltipProvider } from "./components/ui/tooltip";
import { useChangeLanguage } from "remix-i18next/react";
import { useTranslation } from "react-i18next";
import i18next, { localeCookie } from "~/i18next.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const locale = await i18next.getLocale(request);
  return json(
    { locale },
    { headers: { "Set-Cookie": await localeCookie.serialize(locale) } },
  );
}

export let handle = {
  // In the handle export, we can add a i18n key with namespaces our route
  // will need to load. This key can be a single string or an array of strings.
  // TIP: In most cases, you should set this to your defaultNS from your i18n config
  // or if you did not set one, set it to the i18next default namespace "translation"
  i18n: "common",
};

export const meta: MetaFunction = () => [
  { name: "msapplication-TileColor", content: "#f4a7ff" },
  { name: "msapplication-TileImage", content: "/mstile-144x144.png" },
  { name: "theme-color", content: "#f4d2f9" },
  { property: "og:type", content: "website" },
  { property: "og:title", content: "Rulos Artísticos" },
  { property: "og:url", content: "https://rulos.art/" },
  { property: "og:image", content: "/og.png" },
  {
    property: "og:description",
    content: "Rulos Artísticos - Ilustración, Diseño y Papelería",
  },
  { name: "twitter:card", content: "summary_large_image" },
  { property: "twitter:domain", content: "rulos.art" },
  { property: "twitter:url", content: "https://rulos.art" },
  { name: "twitter:title", content: "Rulos Artísticos" },
  {
    name: "twitter:description",
    content: "Rulos Artísticos - Ilustración, Diseño y Papelería",
  },
  { name: "twitter:image", content: "/twitter.png" },
];

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "194x194",
    href: "/favicon-194x194.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "192x192",
    href: "/android-chrome-192x192.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png",
  },
  { rel: "manifest", href: "/site.webmanifest" },
  { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#82368c" },

  { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
  { rel: "icon", type: "image/png", href: "/favicon.png" },
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const loaderData = useRouteLoaderData<typeof loader>("root");

  return (
    <html lang={loaderData?.locale ?? "en"}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen min-w-full flex flex-col bg-background-pattern">
        {children}
        <ScrollRestoration />
        <Scripts />
        <Analytics />
      </body>
    </html>
  );
}

export default function App() {
  // Get the locale from the loader
  let { locale } = useRouteLoaderData<typeof loader>("root") ?? {
    locale: "en",
  };

  let { i18n } = useTranslation();

  // This hook will change the i18n instance language to the current locale
  // detected by the loader, this way, when we do something to change the
  // language, this locale will change and i18next will load the correct
  // translation files
  useChangeLanguage(locale);

  return (
    <TooltipProvider>
      <Outlet />
    </TooltipProvider>
  );
}
