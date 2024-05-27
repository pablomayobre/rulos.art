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
    <div className="bg-white/30 border-white/50 border-solid border backdrop-saturate-150 backdrop-blur-lg fixed top-0 left-0 right-0">
      <div className="container w-full h-24 lg:h-32 flex mx-auto items-center justify-between">
        <Tooltip>
          <TooltipTrigger asChild>
            <header>
              <Link to="/" aria-label="Home">
                <Logo
                  color="#82368C"
                  className="w-auto h-16 md:hidden"
                  aria-labelledby="title"
                />
                <Logo
                  color="#82368C"
                  className="w-auto h-16 lg:h-24 hidden md:block"
                  aria-labelledby="title"
                  full
                />
              </Link>
              <h1 className="sr-only" id="title">
                Rulos Artísitcos
              </h1>
            </header>
          </TooltipTrigger>
          <TooltipContent
            side="bottom"
            align="start"
            collisionPadding={16}
            sideOffset={8}
            className="py-3 px-5 rounded-full bg-white/70 border-white/50 border-solid border backdrop-saturate-150 backdrop-blur-lg text-md"
          >
            {t("logo-about")}
          </TooltipContent>
        </Tooltip>

        <NavigationMenu>
          <NavigationMenuList className="flex flex-row gap-1 sm:gap-4 ml-2">
            <NavigationMenuItem>
              <Link to="/ig" title={t("ig")}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <SiInstagram title={t("ig")} />
                  <span className="sr-only">{t("ig")}</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/tw" title={t("x")}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <SiX title={t("x")} />
                  <span className="sr-only">{t("x")}</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/be" title={t("be")}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <SiBehance title={t("be")} />
                  <span className="sr-only">{t("be")}</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
