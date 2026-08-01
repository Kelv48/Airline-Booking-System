import "./globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Waypoint",
  description: "Your journey, simplified.",
  icons: {
    icon: "/favicon.ico",
  },
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