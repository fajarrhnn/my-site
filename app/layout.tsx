import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/navbar";
import Footer from "@/components/footer";

const RobotoFont = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Fjrrhn",
    template: "%s | Fjrrhn",
  },
  description: "Personal website of Fjrrhn, a junior web developer.",
  icons: {
    icon: "/globe.svg",
    shortcut: "/globe.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${RobotoFont.className} antialiased`}>
        <Header />
        <main className="w-full mx-auto min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
