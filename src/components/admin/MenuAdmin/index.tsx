"use client";

import { logoutAction } from "@/actions/login/logout-action";
import SpinLoader from "@/components/SpinLoader";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import clsx from "clsx";
import {
  FileTextIcon,
  HomeIcon,
  LogOutIcon,
  MenuIcon,
  PlusIcon,
} from "lucide-react";
import Link from "next/link";
import { useTransition } from "react";

const linkClasses = clsx("flex", "flex-row", "gap-2", "items-center");
const iconClasses = clsx("text-slate-800");

const MenuAdmin = () => {
  const [isPending, startTransition] = useTransition();

  const handleLogout = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    startTransition(async () => {
      await logoutAction();
    });
  };

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
    {
      href: "#",
      icon: isPending ? (
        <SpinLoader containerClasses="w-5 h-5" />
      ) : (
        <LogOutIcon />
      ),
      label: "Logout",
      ariaLabel: "Logout",
      onClick: handleLogout,
    },
  ];

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
                          "rounded",
                        )}
                      >
                        <Link
                          href={item.href}
                          target={item.target}
                          onClick={item.onClick}
                        >
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
                  "rounded",
                )}
              >
                <Link
                  href={item.href}
                  target={item.target}
                  onClick={item.onClick}
                >
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
