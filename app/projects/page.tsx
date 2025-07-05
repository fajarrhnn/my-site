import { ProjectsData } from "@/data/projects";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <>
      <section className="py-12 w-11/12 mx-auto">
        <div className="flex justify-start items-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
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
    </>
  );
}
