import type { MetaFunction } from "@vercel/remix";
import { useTranslation } from "react-i18next";
import { Header } from "~/components/header";

export const meta: MetaFunction = () => {
  return [
    { title: "Rulos Artísticos" },
    {
      name: "description",
      content: "Rulos Artísitcos - Ilustración, Diseño y Papelería",
    },
  ];
};

export default function Index() {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <main className="container mx-auto mt-24 lg:mt-32 pt-8">
        <h2 className="center text-5xl text-center mt-10">{t("coming-soon")}</h2>
      </main>
    </>
  );
}
