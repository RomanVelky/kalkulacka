import Image from "next/image";
import * as React from "react";
import Link from "next/link";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { PATHS } from "@/lib/paths";
import ListItem from "./ListItem";

export default function Header() {
  const hamburgerList = [
    { text: PATHS.WAGES.description, link: PATHS.WAGES.link },
    { text: PATHS.SAVINGS.description, link: PATHS.SAVINGS.link },
    { text: PATHS.INVESTMENTS.description, link: PATHS.INVESTMENTS.link },
    { text: PATHS.TAXES.description, link: PATHS.TAXES.link },
    { text: PATHS.NEWS.description, link: PATHS.NEWS.link },
  ];

  const headerMenuList = [
    {
      header: PATHS.WAGES.description,
      link: PATHS.WAGES.link,
      colorSubMenu: {
        link: PATHS.WAGES.subPaths.NET_SALARY.link,
        subHeader: PATHS.WAGES.subPaths.NET_SALARY.text,
        text: "Jednoduchá a prehľadná kalkulačka na výpočet čistej mzdy",
      },
      items: [
        {
          link: PATHS.WAGES.subPaths.GROSS_SALARY.link,
          subHeader: PATHS.WAGES.subPaths.GROSS_SALARY.text,
          text: "Výpočet hrubej mzdy",
        },
        {
          link: PATHS.WAGES.subPaths.PRICE_OF_WORK.link,
          subHeader: PATHS.WAGES.subPaths.PRICE_OF_WORK.text,
          text: "Výpočet superhrubej mzdy",
        },
        {
          link: PATHS.WAGES.link,
          subHeader: "MZDY JEDNODUCHO",
          text: "Čo je to mzda, aké druhy sú a ako sa vypočítavajú a kde sa udávajú. Porovnanie priemernej mzdy naprieč krajinami.",
        },
      ],
    },
    {
      header: PATHS.SAVINGS.description,
      link: PATHS.SAVINGS.link,
      colorSubMenu: {
        link: PATHS.INVESTMENTS.link,
        subHeader: PATHS.INVESTMENTS.description,
        text: "Podielové fondy, nehnuteľnosti, akcie, kryptomeny",
      },
      items: [
        {
          link: PATHS.SAVINGS.subPaths.SAVINGS_ACCOUNTS.link,
          subHeader: PATHS.SAVINGS.subPaths.SAVINGS_ACCOUNTS.text,
          text: "Typy a fungovanie sporiacich účtov",
        },
        {
          link: PATHS.SAVINGS.subPaths.BUILDING_SAVINGS.link,
          subHeader: PATHS.SAVINGS.subPaths.BUILDING_SAVINGS.text,
          text: "Čo je to stavebné sporenie?",
        },
        {
          link: PATHS.SAVINGS.subPaths.RETIREMENT_SAVINGS.link,
          subHeader: PATHS.SAVINGS.subPaths.RETIREMENT_SAVINGS.text,
          text: "Možnosti sporenia na dôchodok",
        },
      ],
    },
    {
      header: PATHS.TAXES.description,
      link: PATHS.TAXES.link,
      colorSubMenu: {
        link: PATHS.TAXES.subPaths.VAT.link,
        subHeader: PATHS.TAXES.subPaths.VAT.text,
        text: "Dôležité informácie o dani z pridanej hodnoty",
      },
      items: [
        {
          link: PATHS.TAXES.subPaths.INCOME_TAX.link,
          subHeader: PATHS.TAXES.subPaths.INCOME_TAX.text,
          text: "Čo je to daň z príjmu? Od čoho závisí jej výška?",
        },
        {
          link: PATHS.TAXES.subPaths.TAX_CALENDAR.link,
          subHeader: PATHS.TAXES.subPaths.TAX_CALENDAR.text,
          text: "Kalendár obsahujúci informácie do kedy a aké dane zaplatiť",
        },
      ],
    },
  ];

  return (
    <nav className=" border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="w-2/6">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src="/logo.svg" alt="Love Logo" width={45} height={45} />
          </Link>
        </div>
        <div className="w-2/6 hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList>
              {headerMenuList.map((headerSection, key) => (
                <NavigationMenuItem key={key}>
                  <NavigationMenuTrigger>
                    <Link href={headerSection.link}>
                      {headerSection.header}
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink
                          href={headerSection.colorSubMenu.link}
                          className="bg-gradient-to-b from-[#DB4E66] from-0% via-[#A24688] via-40% to-[#4E3ABA] to-100%"
                          asChild>
                          <a className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md">
                            <div className="mb-2 mt-4 text-lg font-medium text-white">
                              {headerSection.colorSubMenu.subHeader}
                            </div>
                            <p className="text-sm leading-tight text-white">
                              {headerSection.colorSubMenu.text}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      {headerSection.items.map((item, key) => (
                        <ListItem
                          key={key}
                          href={item.link}
                          title={item.subHeader}>
                          {item.text}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <Link href="/news" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    ČLÁNKY
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="w-2/6 flex gap-3 justify-end">
          <div className="px-6 hidden sm:block">
            <Button>Prihlásenie</Button>
          </div>
          <Button variant="outline" size="icon">
            <HelpOutlineIcon />
            <span className="sr-only">Support</span>
          </Button>
          <Button variant="outline" size="icon">
            <LanguageIcon />
            <span className="sr-only">Choose Language</span>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button className="lg:hidden" variant="outline" size="icon">
                <MenuIcon />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="grid gap-4 p-4">
                {hamburgerList.map((link, key) => (
                  <Link
                    key={key}
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100/50 focus:bg-gray-100/50 dark:bg-gray-800 dark:hover:bg-gray-800/50 dark:focus:bg-gray-800/50"
                    href={link.link}>
                    {link.text}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
