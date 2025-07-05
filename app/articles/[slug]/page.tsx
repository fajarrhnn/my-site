import { ArticlesData } from "@/data/articles";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import type { Metadata } from "next";
import { DateFormatter } from "@/helpers/formatter";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const article = await fetch(`/articles/${slug}`)
    .then((res) => res.json())
    .catch((error) => console.log("Error fetching article:", error))
    .finally(() => console.log("Fetch completed"));

  return {
    title: article.title,
    description: article.desc,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const fetchApi = await fetch(`/articles/${slug}`)
    .then((res) => res.json())
    .catch((error) => console.log(error))
    .finally(() => console.log("Fetch completed"));

  const { title, desc, date } = await fetchApi;
  return (
    <>
      <section className="w-11/12 mx-auto container py-12">
        <Card className="overflow-hidden rounded-none">
          {/* <CardHeader>
            <Image src={""} />
          </CardHeader> */}
          <CardContent>
            <CardTitle>{title}</CardTitle>
            <CardDescription className="mt-4">{desc}</CardDescription>
          </CardContent>
          <CardFooter>
            <CardDescription>{DateFormatter(date)}</CardDescription>
          </CardFooter>
        </Card>
      </section>
    </>
  );
}
