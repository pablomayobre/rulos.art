import { Heart } from "lucide-react";
import { Trans, useTranslation } from "react-i18next";
import { Header } from "~/components/header";
import RecommendedCard from "~/components/recommended-card";

export default function FMA() {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <main className="container mx-auto mt-24 grow px-2 pb-20 pt-8 lg:mt-32 lg:min-h-[calc(100vh-9rem-3.5rem)] lg:px-14">
        <RecommendedCard
          title={<Trans t={t} i18nKey="recommended.commissions.title" />}
          action={{
            text: t("recommended.commissions.action"),
            href: "#",
          }}
          image={{
            alt: t("recommended.commissions.icon"),
            src: "/assets/commissions-open.png",
            width: "1146",
            height: "1035",
          }}
        >
          <Trans t={t} i18nKey="recommended.commissions.text" />
        </RecommendedCard>{" "}
        <RecommendedCard
          title={<Trans t={t} i18nKey="recommended.commissions.title" />}
          action={{
            text: t("recommended.commissions.action"),
            href: "#",
          }}
          image={{
            alt: t("recommended.commissions.icon"),
            src: "/assets/commissions-open.png",
            width: "1146",
            height: "1035",
          }}
        >
          <Trans t={t} i18nKey="recommended.commissions.text" />
        </RecommendedCard>
      </main>
      <footer className="w-full border border-solid border-white/50 bg-white/30 backdrop-blur-lg backdrop-saturate-150">
        <div className="container mx-auto flex w-full flex-col items-center justify-center gap-2 px-2 py-2 lg:px-14">
          <p>{t("footer.copyright")}</p>
          <p>
            {t("footer.madeWith")}{" "}
            <Heart
              className="inline"
              size="1rem"
              aria-label={t("footer.love")}
            />{" "}
            {t("footer.byPablo")}
          </p>
        </div>
      </footer>
    </>
  );
}
