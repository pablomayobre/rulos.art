import z from "zod";

export const REDIRECT_CODE = {
  moved_permanently: 301,
  found: 302,
  see_other: 303,
  temporary_redirect: 307,
  permanent_redirect: 308,
} as const;

export const RouteObjectSchema = z.object({
  path: z.string(),
  code: z.nativeEnum(REDIRECT_CODE).optional(),
  defaults: z.record(z.string()).optional(),
});

export const RouteSchema = z.string().or(RouteObjectSchema);
export const RedirectsSchema = z.record(RouteSchema);

export type RouteObject = z.infer<typeof RouteObjectSchema>
export type Route = z.infer<typeof RouteSchema>;
export type Redirects = z.infer<typeof RedirectsSchema>;
