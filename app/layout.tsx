import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Conciergerie - Professional Property Management Services",
  description:
    "Professional concierge property management for short-term rentals. Full-service management including guest communication, cleaning, maintenance, and optimization.",
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
        <div className="pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
