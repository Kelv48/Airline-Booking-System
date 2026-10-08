import "./globals.scss";
import type { Metadata } from "next";
import Header from "../components/Header";

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
      <body>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}