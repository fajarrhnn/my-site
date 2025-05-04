import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="w-11/12 mx-auto container flex h-16 items-center justify-between">
          <Link href={'/'} className="font-bold">fjrrhn.</Link>
          <nav className="hidden md:flex gap-6">
            {links.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {name}
              </Link>
            ))}
          </nav>
          <Button asChild>
            <Link href="https://linkedin.com/in/fajarrhn" target="_blank">Get in touch</Link>
          </Button>
        </div>
      </header>
    </>
  );
}

const links = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
];
