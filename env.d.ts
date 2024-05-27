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

declare module "*.mdx" {
  let MDXComponent: (props: any) => JSX.Element;
  export const frontmatter: unknown;
  export default MDXComponent;
}