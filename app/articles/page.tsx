import { ArticlesData } from "@/data/articles";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { DateFormatter } from "@/helpers/formatter";

export default function Articles() {
  return (
    <>
      <section className="py-12 w-11/12 mx-auto">
        <div className="flex justify-start items-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Article</h2>
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
    </>
  );
}
