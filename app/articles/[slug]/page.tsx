import { ArticlesData, ProjectType } from "@/data/articles";
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

  try {
    const article = await fetch(`${process.env.BASE_URL}/articles/${slug}`)
      .then((res) => res.json());

    console.log(article);

    return {
      title: article.title,
      description: article.desc
    };
  } catch (error) {
    console.error("Error fetching article metadata:", error);
    return {
      title: "Error",
      description: "Failed to load article metadata",
    };
  }
}

export default async function ArticlesDetail({ params }: Props) {
  const { slug } = await params;

  if (!slug) {
    return <div>Error: No article slug provided</div>;
  }

  try {
    const fetchApi = await fetch(`${process.env.BASE_URL}/articles/${slug}`).then((res) =>
      res.json()
    );

    console.log(fetchApi);  // Log to inspect the fetched data

    // Assuming you have these fields in the fetched article:
    // const { title, desc, date }: ProjectType = fetchApi;

    return (
      <section className="w-11/12 mx-auto container py-12">
        <p>Article Details</p>
        {/* Render the fetched article */}
        {/* <Card className="overflow-hidden rounded-none">
          <CardHeader>
            <Image src={""} />
          </CardHeader>
          <CardContent>
            <CardTitle>{title}</CardTitle>
            <CardDescription className="mt-4">{desc}</CardDescription>
          </CardContent>
          <CardFooter>
            <CardDescription>{DateFormatter(date)}</CardDescription>
          </CardFooter>
        </Card> */}
      </section>
    );
  } catch (error) {
    console.error("Error fetching article:", error);
    return <div>Error: Failed to load article</div>;
  }
}
