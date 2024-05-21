import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eleve Brands - Elevate Your Digital Presence",
  description:
    "Transforming brands with innovative web solutions. Join Eleve and ignite your online presence today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="https://eleve.ae/images/favicon.ico" sizes="any" />
      <body className={mulish.className}>{children}</body>
    </html>
  );
}
