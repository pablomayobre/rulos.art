import type { MetaFunction } from "@vercel/remix";
import { Trans, useTranslation } from "react-i18next";
import { Header } from "~/components/header";
import { Separator } from "~/components/ui/separator";
import { Hero, HeroItem } from "~/components/hero";
import { Gallery, GalleryItem } from "~/components/gallery";
import { Button } from "~/components/ui/button";
import { default as SiInstagram } from "@icons-pack/react-simple-icons/icons/SiInstagram.mjs";
import { Heart, LucideArrowRight } from "lucide-react";
import RecommendedCard from "~/components/recommended-card";

export const meta: MetaFunction = () => {
  return [
    { title: "Rulos Artísticos" },
    {
      name: "description",
      content: "Rulos Artísticos - Ilustración, Diseño y Papelería",
    },
  ];
};

export default function Index() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <main className="container mx-auto mt-24 px-2 pb-20 pt-8 lg:mt-32 lg:px-14">
        <Hero>
          <HeroItem
            title={<Trans t={t} i18nKey="hero.commissions.title" />}
            description={<Trans t={t} i18nKey="hero.commissions.text" />}
            primaryAction={{
              href: "#",
              text: t("hero.commissions.primaryAction"),
            }}
            image={{
              src: "/assets/commissions-open.png",
              alt: t("hero.commissions.image"),
              width: "2700",
              height: "4200",
              className:
                "w-[25rem] top-[unset] bottom-[-9.2rem] right-[-4rem] left-[unset] xl:right-[5rem]",
            }}
            align="left"
          />
          <HeroItem
            title={<Trans t={t} i18nKey="hero.fma.title" />}
            description={<Trans t={t} i18nKey="hero.fma.text" />}
            primaryAction={{
              href: "#",
              text: t("hero.fma.primaryAction"),
            }}
            secondaryAction={{
              href: "#",
              text: t("hero.fma.secondaryAction"),
            }}
            image={{
              src: "/assets/fma-anniversary-box.png",
              alt: t("hero.fma.image"),
              width: "1146",
              height: "1035",
              className:
                "w-[45rem] top-[-13rem] left-[-9rem] lg:top-[-2rem] lg:left-[unset] lg:right-[-9rem] sm:left-[-4rem]",
            }}
            align="right"
          />
          <HeroItem
            title={<Trans t={t} i18nKey="hero.merch.title" />}
            description={<Trans t={t} i18nKey="hero.merch.text" />}
            primaryAction={{
              href: "#",
              text: t("hero.merch.primaryAction"),
            }}
            image={{
              src: "/assets/tye-salepoint.png",
              alt: t("hero.merch.image"),
              width: "1146",
              height: "1035",
              className:
                "w-[45rem] lg:top-[-5rem] lg:left-[-15rem] xl:left-[-5rem] top-[-12rem] sm:left-[2rem] left-[-5rem]",
            }}
            align="left"
          />
        </Hero>

        <div className="align-start mt-8 flex w-full flex-col">
          <h2 className="text-3xl">{t("gallery.title")}</h2>
          <Separator className="my-4 bg-gray-300" />
          <Gallery>
            <GalleryItem
              src="/assets/kitsune-y-tengu.png"
              height="2247"
              width="2520"
              className="object-bottom"
              alt="Kitsune & Tengu"
              href="https://www.instagram.com/reel/CyeBP0bpVqY/"
            />

            <GalleryItem
              src="/assets/dance-the-night-away.png"
              height="2480"
              width="3508"
              alt="Dance the Night Away - Barbie"
              href="https://www.instagram.com/p/CvYXmyXpn1n/?img_index=1"
            />

            <GalleryItem
              src="/assets/cold-1-2-3.png"
              height="2000"
              width="2000"
              className="object-center"
              alt="1, 2, 3"
              href="https://www.instagram.com/p/CfPulC6pUqT/?img_index=1"
            />
            <GalleryItem
              src="/assets/red-panda.png"
              height="2480"
              width="3508"
              className="object-[center_20%]"
              alt="I can now be free - Turning Red"
              href="https://www.instagram.com/reel/CbdcY5HJJPc/"
            />
            <GalleryItem
              src="/assets/selkie-dress.png"
              height="1158"
              width="1637"
              alt="Selkie Dress"
              href="https://www.instagram.com/reel/CWtSt-TpAwG/"
            />

            <GalleryItem
              src="/assets/red-unicorn-girl.png"
              height="2480"
              width="3508"
              alt="Red Unicorn Girl"
              href="https://www.instagram.com/reel/Clhov0rJ1CS/"
            />
          </Gallery>
          <Button
            asChild
            className="w-[min-content] grow-0 gap-2 self-end"
            variant="ghost"
            size="tight"
          >
            <a href="/ig">
              <SiInstagram size={14} />
              {t("gallery.more")}
              <LucideArrowRight size={16} />
            </a>
          </Button>
        </div>
        <div className="mt-8 w-full">
          <h2 className="text-3xl">Recommended</h2>
          <Separator className="my-4 bg-gray-300" />
          <div className="max-w- grid grid-cols-1 grid-rows-1 gap-6 lg:grid-cols-2">
            <RecommendedCard
              title={<Trans t={t} i18nKey="recommended.merch.title" />}
              action={{
                text: t("recommended.merch.action"),
                href: "https://www.instagram.com/tiempo.y.espacio_/",
              }}
              image={{
                alt: t("recommended.merch.icon"),
                src: "/assets/tye-salepoint.png",
                width: "1146",
                height: "1035",
              }}
            >
              <Trans t={t} i18nKey="recommended.merch.text" />
            </RecommendedCard>

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
          </div>
        </div>
      </main>
      <footer className="bottom-0 left-0 right-0 border border-solid border-white/50 bg-white/30 backdrop-blur-lg backdrop-saturate-150">
        <div className="container mx-auto flex w-full flex-col items-center justify-center gap-2 px-2 py-2 lg:px-14">
          <p>{t("footer.copyright")}</p>
          <p>
            {t("footer.madeWith")}
            <Heart
              className="inline"
              size="1rem"
              aria-label={t("footer.love")}
            />
            {t("footer.byPablo")}
          </p>
        </div>
      </footer>
    </>
  );
}
