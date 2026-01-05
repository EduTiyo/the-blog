"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import clsx from "clsx";
import { FileTextIcon, HomeIcon, MenuIcon, PlusIcon } from "lucide-react";
import Link from "next/link";

const linkClasses = clsx("flex", "flex-row", "gap-2", "items-center");
const iconClasses = clsx("text-slate-800");

const menuItems = [
  {
    href: "/",
    icon: <HomeIcon />,
    label: "Home",
    ariaLabel: "Página inicial",
    target: "_blank",
  },
  {
    href: "/admin/post",
    icon: <FileTextIcon />,
    label: "Posts",
    ariaLabel: "Página de posts do admin",
  },
  {
    href: "/admin/post/new",
    icon: <PlusIcon />,
    label: "Criar post",
    ariaLabel: "Criar novo",
  },
];

const MenuAdmin = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="sm:hidden">
        <NavigationMenuItem className="w-full">
          <NavigationMenuTrigger className={clsx(linkClasses)}>
            <MenuIcon className={iconClasses} />
            Menu
            <NavigationMenuContent>
              <ul>
                {menuItems.map((item, idx) => {
                  return (
                    <NavigationMenuItem key={idx}>
                      <NavigationMenuLink
                        asChild
                        className={clsx(
                          linkClasses,
                          "w-full",
                          "hover:bg-slate-100",
                          "rounded"
                        )}
                      >
                        <Link href={item.href} target={item.target}>
                          {item.icon}
                          {item.label}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuTrigger>
        </NavigationMenuItem>
      </NavigationMenuList>

      {/* para desktop */}
      <NavigationMenuList className="hidden sm:flex">
        {menuItems.map((item, idx) => {
          return (
            <NavigationMenuItem key={idx}>
              <NavigationMenuLink
                asChild
                className={clsx(
                  linkClasses,
                  "w-full",
                  "hover:bg-slate-100",
                  "rounded"
                )}
              >
                <Link href={item.href} target={item.target}>
                  {item.icon}
                  {item.label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MenuAdmin;
