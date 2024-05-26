import { generatePath, matchPath } from "@remix-run/react";
import { redirect } from "@vercel/remix";
import { readFile } from "~/utils/fs.server";
import { RedirectsSchema } from "~/schemas/redirects";
import { parse as parseYaml } from "yaml";

import type { Route } from "~/schemas/redirects";
import type { LoaderFunctionArgs } from "@vercel/remix";

export async function loader({ params }: LoaderFunctionArgs) {
  const urlToMatch = params["*"];

  // No URL to match, 404
  if (!urlToMatch) {
    throw new Response(null, {
      status: 404,
      statusText: "Not Found",
    });
  }

  // Read redirects.yaml configuration file
  const redirectsFile = await readFile(
    process.env.NODE_ENV === "production"
      ? __dirname + "/../redirects.yaml"
      : "./app/redirects.yaml",
    "utf-8"
  );

  // Parse the redirect file and validate it
  const redirects = RedirectsSchema.parse(parseYaml(redirectsFile));

  // Find the first entry that matches the current URL
  for (let item of Object.entries(redirects)) {
    let [pattern, route] = item;

    // Match against the current pattern
    const match = matchPath(pattern, `/${urlToMatch}`);

    if (match) {
      if (typeof route === "string") {
        route = { path: route } satisfies Route;
      }

      const params = {
        ...(route.defaults ?? {}),
        ...match.params,
        splat: match.params["*"],
      };

      try {
        // If there is a match grab the provided route template and generate a new URL
        const to = generatePath(route.path, params);

        // Redirect to that URL with the given status code
        return redirect(to, route.code ?? 301);
      } catch (e) {
        console.error(`Failed to match URL`);
        console.error(`URL: ${urlToMatch}`);
        console.error(`Pattern: ${pattern}`);
        console.error(`Template: ${route.path} (${route.code ?? 301})`);
        console.error(`Params: ${JSON.stringify(params, null, 2)}`);
        console.error(e);

        throw new Response(null, {
          status: 404,
          statusText: "Not Found",
        });
      }
    }
  }

  // Couldn't find a successful match 404
  throw new Response(null, {
    status: 404,
    statusText: "Not Found",
  });
}

export default function CatchAll() {
  return "You are being redirected!";
}