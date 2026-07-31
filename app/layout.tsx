import "./globals.css";

export const metadata = {
  title: "Airline Infrastructure",
  description: "Airline Infrastructure Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}