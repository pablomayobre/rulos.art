import type { MetaFunction } from "@vercel/remix";

export const meta: MetaFunction = () => {
  return [
    { title: "Rulos Artísticos" },
    { name: "description", content: "Rulos Artísitcos - Ilustración, Diseño y Papelería" },
  ];
};

export default function Index() {
  return (
    <div >

    </div>
  );
}
