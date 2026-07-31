import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journey Planner",
  description: "Map-based travel planning platform"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}