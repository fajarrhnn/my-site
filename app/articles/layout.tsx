import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles",
  description: "The latest articles and insights",
};

export default function ArticleLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <main className="w-full mx-auto min-h-screen">{children}</main>
    </>
  );
}
