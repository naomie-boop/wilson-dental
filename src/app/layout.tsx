import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wilson Dental | Cabinet Dentaire Moderne à Levallois-Perret",
  description:
    "Cabinet dentaire Wilson Dental à Levallois-Perret. Soins conservateurs, esthétique, implantologie et pédodontie. Prenez rendez-vous en ligne.",
  keywords: [
    "dentiste",
    "Levallois-Perret",
    "cabinet dentaire",
    "implants",
    "esthétique dentaire",
  ],
  openGraph: {
    title: "Wilson Dental | Cabinet Dentaire Moderne",
    description:
      "Des soins dentaires de pointe dans un cadre moderne et apaisant.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
