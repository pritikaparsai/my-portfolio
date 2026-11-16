import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pritika Parsai | Economics, Data Analytics & Research",
  description:
    "Explore Pritika Parsai's economics research, data analytics projects, experience, and academic work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
