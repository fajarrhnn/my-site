import { SlugFormatter } from "@/helpers/formatter";

type ProjectType = {
  title: string;
  slug: string;
  desc: string;
  image: any;
  date: string;
};

const articles = [
  {
    title:
      "How to Create a Reusable Active Link Component in Next.js App Router",
    desc: "Enhance your Next.js application's navigation experience with a reusable active link component. This step-by-step guide will teach you how to implement an active link components",
    image: "/articles/active-link-component.png",
    date: "2025-10-01",
  },
];

export const ArticlesData: ProjectType[] = articles.map((article) => ({
  ...article,
  slug: SlugFormatter(article.title),
}));

export type { ProjectType };
