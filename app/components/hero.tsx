import { count } from "console";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { useState, useEffect, ReactNode } from "react";
import { cn } from "~/utils/tailwind";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

export function Hero({ children }: { children: ReactNode }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);
  const [count, setCount] = useState(
    Array.isArray(children) ? children.length : 1,
  );
  const { t } = useTranslation();

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("slidesInView", () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap() + 1);
    });

    api.on("select", () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      className="max-h-[calc(100vh - 13rem)] group w-full"
      setApi={setApi}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent className="h-full">{children}</CarouselContent>

      <div className="flex items-center justify-center gap-10 pt-3">
        <CarouselPrevious
          className="opacity-0 transition-opacity disabled:invisible group-hover:opacity-100 !lg:relative !lg:inset-0 !lg:transform-none"
          aria-label={t("hero.prev")}
        />
        {count > 1 ? (
          <ToggleGroup
            type="single"
            size="sm"
            value={current.toString()}
            onMouseOver={() => {
              const auto = api?.plugins()["autoplay"];

              if (auto && "stop" in auto && typeof auto.stop === "function") {
                auto.stop();
              }
            }}
            onMouseLeave={() => {
              const auto = api?.plugins()["autoplay"];

              if (auto && "play" in auto && typeof auto.play === "function") {
                auto.play();
              }
            }}
            onValueChange={(value) => api?.scrollTo(parseInt(value) - 1)}
          >
            {Array(count)
              .fill(0)
              .map((_, index) => {
                return (
                  <ToggleGroupItem
                    key={index}
                    value={(index + 1).toString()}
                    className="h-10 w-10 rounded-full"
                  >
                    <span className="sr-only">{t("carousel.goTo")}</span>
                    {index + 1}
                  </ToggleGroupItem>
                );
              })}
          </ToggleGroup>
        ) : null}
        <CarouselNext
          className="opacity-0 transition-opacity disabled:invisible group-hover:opacity-100 !lg:relative !lg:inset-0 !lg:transform-none"
          aria-label={t("hero.next")}
        />
      </div>
    </Carousel>
  );
}

export type ActionData = {
  href: string;
  text: ReactNode;
};

export type ImageData = {
  src: string;
  alt: string;
  width: string | number;
  height: string | number;
  className?: string;
};

export type HeroItemProps = {
  title: string | ReactNode;
  description: string | ReactNode;
  image: ImageData;
  primaryAction: ActionData;
  secondaryAction?: ActionData;
  align?: "left" | "right";
};

export function HeroItem({
  title,
  description,
  image,
  primaryAction,
  secondaryAction,
  align = "left",
}: HeroItemProps) {
  return (
    <CarouselItem>
      <div className="p-1 h-full">
        <Card className="h-full border border-solid border-white/50 bg-white/40 backdrop-blur-lg backdrop-saturate-150">
          <CardContent
            className={cn(
              "flex-col lg:gap-x-20 relative isolate flex h-full min-h-[min(calc(100vh-13rem),30rem)] overflow-hidden rounded-lg p-6 sm:px-16 sm:pt-16 md:min-h-0 md:pt-24 lg:px-24 lg:pt-0",
              align === "left" ? "lg:flex-row" : "lg:flex-row-reverse",
            )}
          >
            <div className="relative z-10 mx-auto max-w-xl shrink-0 grow items-stretch text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-lg font-bold tracking-tight text-secondary-foreground sm:text-xl md:text-3xl">
                {title}
              </h2>
              <p className="sm:text-md mt-6 text-sm text-gray-600 md:text-lg md:leading-8">
                {description}
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <Button asChild>
                  <a href={primaryAction.href}>{primaryAction.text}</a>
                </Button>
                {secondaryAction ? (
                  <a
                    href={secondaryAction.href}
                    className="text-sm font-semibold leading-6 text-secondary-foreground"
                  >
                    {secondaryAction.text}
                  </a>
                ) : null}
              </div>
            </div>
            <div className="relative mt-16 h-full shrink-0 grow sm:h-[initial] md:min-h-80 lg:mt-8">
              <img
                className={cn(
                  align === "left"
                    ? "absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                    : "absolute right-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10",
                  image.className,
                )}
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
}
