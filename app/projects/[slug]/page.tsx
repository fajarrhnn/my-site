import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { LinkType, ProjectsData, ToolType } from "@/data/projects";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, Globe } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const projects = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/projects/${slug}`
  )
    .then((res) => res.json())
    .catch((error) => console.log("Error fetching projects:", error))
    .finally(() => console.log("Fetch completed"));

  return {
    title: projects.title,
    description: projects.desc,
  };
}
export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const projects = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/projects/${slug}`
  ).then((res) => res.json());

  const { title, desc, link, status, tools } = await projects;

  return (
    <>
      <section className="w-11/12 mx-auto container py-12">
        <Card className="overflow-hidden rounded-none">
          <CardHeader>
            <Image
              src={
                "https://images.unsplash.com/photo-1750875936215-0c35c1742cd6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
              }
              alt={`${title}`}
              fill
            />
          </CardHeader>
          <CardContent className="space-y-3">
            <CardTitle>{title}</CardTitle>
            <CardDescription>{desc}</CardDescription>
            {status === "public" &&
              link.map(({ github, preview }: LinkType) => (
                <div className="w-max" key={github}>
                  <div className="flex gap-2">
                    <Button variant="outline" size="default" asChild>
                      <Link
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-5 w-5 mr-1" />
                        Code
                      </Link>
                    </Button>
                    <Button size="default" asChild>
                      <Link
                        href={preview}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Globe className="h-5 w-5 mr-1" />
                        Live Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
          </CardContent>
          <CardFooter className="flex flex-col justify-start items-start">
            <CardTitle className="text-xl">Stack</CardTitle>
            <div className="flex flex-col">
              {tools.map(({ title, url, desc }: ToolType) => (
                <CardDescription key={title}>
                  <Link href={url} target="_blank">
                    <strong className="underline">{title}</strong>
                  </Link>
                  . {desc}
                </CardDescription>
              ))}
            </div>
          </CardFooter>
        </Card>
      </section>
    </>
  );
}
