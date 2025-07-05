import { ArticlesData } from "@/data/articles";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import type { Metadata } from "next";
import Image from "next/image";
import { DateFormatter } from "@/helpers/formatter";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;

  const { title, desc } = ArticlesData.filter(
    (article) => article.slug === slug
  )[0];

  return {
    title: `${title} | Fjrrhn`,
    description: desc,
  };
}

export default async function Page({ params }: Props) {
  const data = await params;
  const { title, desc, image, date } = ArticlesData.filter(
    (article) => article.slug === data.slug
  )[0];
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
