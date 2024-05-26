/// <reference types="vite/client" />
/// <reference types="@vercel/remix" />

declare module "*.yml" {
  const value: unknown; // Add type definitions here if desired
  export default value;
}

declare module "*.yaml" {
  const value: unknown; // Add type definitions here if desired
  export default value;
}