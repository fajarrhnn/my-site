import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { ProjectsData } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ArticlesData } from "@/data/articles";
import { DateFormatter } from "@/helpers/formatter";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-background">
      <main className="py-8 md:py-12">
        <section className="w-11/12 mx-auto py-12 md:py-24 lg:py-32 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Hi, I'm <span className="text-primary">Fajar Raihan</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-[700px]">
            Software Developer specializing in building exceptional digital
            experiences
          </p>
          <div className="flex gap-4">
            {links.map(({ link, icon, title }) => (
              <Button asChild variant="outline" size="icon" key={link}>
                <Link href={link} target="_blank" rel="noopener noreferrer">
                  <span className="text-center">{icon}</span>
                  <span className="sr-only">{title}</span>
                </Link>
              </Button>
            ))}
          </div>
        </section>

        <Separator />
        <section id="about" className="py-12 md:py-24 w-11/12 mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-4">
                I'm a passionate software developer with expertise in building
                modern web applications. With over 5 years of experience in the
                industry, I've worked on a variety of projects ranging from
                small business websites to large-scale enterprise applications.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                My journey in tech began when I was in college, where I
                discovered my love for creating digital solutions that solve
                real-world problems. Since then, I've been constantly learning
                and improving my skills to stay at the forefront of technology.
              </p>
              <p className="text-lg text-muted-foreground">
                When I'm not coding, you can find me hiking, reading, or
                experimenting with new recipes in the kitchen.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1642959894234-e0ef989c15a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="About me"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <Separator />
        <section className="py-12 md:py-24 w-11/12 mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
            <Button asChild>
              <Link href="/projects" className="text-muted-foreground">
                View All
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ProjectsData.map(({ title, desc, slug }) => (
              <Card
                key={title}
                className="overflow-hidden rounded-none gap-0 py-0"
              >
                <CardHeader className="relative h-56">
                  <Image
                    src="https://images.unsplash.com/photo-1642959894234-e0ef989c15a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt={`Project ${title}`}
                    fill
                    className="object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <Link href={`/projects/${slug}`} passHref>
                    <CardTitle className="mb-2">{title}</CardTitle>
                  </Link>
                  <CardDescription className="text-muted-foreground line-clamp-3">
                    {desc}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />
        <section className="py-12 w-11/12 mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Article</h2>
            <Button asChild>
              <Link href="/articles" className="text-muted-foreground">
                View All
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ArticlesData.map(({ title, desc, slug, date }) => (
              <Card
                key={title}
                className="overflow-hidden shadow-none rounded-none border"
              >
                <CardContent>
                  <Link href={`/articles/${slug}`} passHref>
                    <CardTitle className="text-lg">{title}</CardTitle>
                  </Link>
                  <CardDescription className="mt-2 text-sm text-justify text-muted-foreground line-clamp-4">
                    {desc}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <CardDescription className="text-sm text-muted-foreground">
                    Published on {DateFormatter(date)}
                  </CardDescription>
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/articles/${slug}`}>{"Read More >>"}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

const links = [
  {
    link: "https://github.com/fajarrhnn",
    icon: <Github />,
    title: "Github",
  },
  {
    link: "https://linkedin.com/in/fajarrhn",
    icon: <Linkedin />,
    title: "Linkedin",
  },
];
