import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "./ui/navigation-menu";
import { Logo } from "./logo";
import { navigationMenuTriggerStyle } from "./ui/navigation-menu";
import { Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip";
import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";

import { default as SiInstagram } from "@icons-pack/react-simple-icons/icons/SiInstagram.mjs";
import { default as SiX } from "@icons-pack/react-simple-icons/icons/SiX.mjs";
import { default as SiBehance } from "@icons-pack/react-simple-icons/icons/SiBehance.mjs";

export function Header() {
  let { t } = useTranslation();

  return (
    <div className="fixed left-0 right-0 top-0 z-50 border border-solid border-white/50 bg-white/30 backdrop-blur-lg backdrop-saturate-150">
      <div className="container mx-auto flex h-24 w-full items-center justify-between px-2  lg:h-32 lg:px-14">
        <Tooltip>
          <TooltipTrigger asChild>
            <header>
              <Link to="/" aria-label="Home">
                <Logo
                  color="#82368C"
                  className="h-16 w-auto drop-shadow-glow md:hidden"
                  aria-labelledby="title"
                />
                <Logo
                  color="#82368C"
                  className="hidden h-16 w-auto drop-shadow-glow md:block lg:h-24"
                  aria-labelledby="title"
                  full
                />
              </Link>
              <h1 className="sr-only" id="title">
                Rulos Artísticos
              </h1>
            </header>
          </TooltipTrigger>
          <TooltipContent
            side="bottom"
            align="start"
            collisionPadding={16}
            sideOffset={8}
            className="text-md rounded-full border border-solid border-white/50 bg-white/85 px-5 py-3 backdrop-blur-2xl backdrop-saturate-150"
          >
            {t("logoAbout")}
          </TooltipContent>
        </Tooltip>

        <NavigationMenu>
          <NavigationMenuList className="ml-2 flex flex-row gap-1 sm:gap-4">
            <NavigationMenuItem>
              <Link to="/ig" title={t("social.ig")}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <SiInstagram title={t("social.ig")} />
                  <span className="sr-only">{t("social.ig")}</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/tw" title={t("social.x")}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <SiX title={t("social.x")} />
                  <span className="sr-only">{t("social.x")}</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/be" title={t("social.be")}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <SiBehance title={t("social.be")} />
                  <span className="sr-only">{t("social.be")}</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
