import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <>
      <footer className="border-t py-8">
        <div className="w-11/12 mx-auto container flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} fjrrhn. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {links.map(({ link, icon, title }) => (
              <Button asChild variant="ghost" size="icon" key={link}>
                <Link href={link} target="_blank" rel="noopener noreferrer">
                  <span className="h-5 w-5">{icon}</span>
                  <span className="sr-only">{title}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}

const links = [
  {
    link: "mailto:fajarrehan023@gmail.com",
    icon: <Mail className="h-5 w-5" />,
    title: "Email",
  },
  {
    link: "https://linkedin.com/in/fajarrhn",
    icon: <Linkedin className="h-5 w-5" />,
    title: "Linkedin",
  },
  {
    link: "https://github.com/fajarrhnn",
    icon: <Github />,
    title: "Github",
  },
];
