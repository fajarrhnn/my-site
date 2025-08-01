import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my projects and contributions what i've built",
};

export default function ProjectLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <main className="w-full mx-auto min-h-screen">{children}</main>
    </>
  );
}
