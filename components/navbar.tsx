"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="w-11/12 mx-auto container flex h-16 items-center justify-between">
          <Link href={"/"} className="font-bold">
            fjrrhn.
          </Link>
          <Sheet>
            <SheetTrigger className="block md:hidden">
              <MenuIcon id="menu" />
              <span className="sr-only">menu</span>
            </SheetTrigger>
            <SheetContent className="block md:hidden">
              <SheetHeader>
                <SheetTitle>
                  <Link href={"/"}>fjrrhn.</Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col justify-center items-center gap-3 mt-5">
                {links.map(({ name, href }) => (
                  <Link
                    key={name}
                    href={href === "#about" ? "/#about" : href}
                    className="text-xl text-center font-semibold"
                  >
                    {name}
                  </Link>
                ))}
              </div>
              <Button
                asChild
                className="flex justify-center items-center w-max mt-4 mx-auto"
              >
                <Link href="mailto:fajarrehan023@gmail.com" target="_blank">
                  Get in touch
                </Link>
              </Button>
            </SheetContent>
          </Sheet>
          <nav className="hidden md:flex  gap-6">
            {links.map(({ name, href }) => (
              <Link
                key={name}
                href={href === "#about" ? "/#about" : href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {name}
              </Link>
            ))}
          </nav>
          <Button asChild className="hidden md:flex">
            <Link href="mailto:fajarrehan023@gmail.com" target="_blank">
              Get in touch
            </Link>
          </Button>
        </div>
      </header>
    </>
  );
}

const links = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "/projects" },
  { name: "Articles", href: "/articles" },
];
