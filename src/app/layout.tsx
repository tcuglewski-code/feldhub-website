import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Feldhub | Digitale Betriebssysteme für den Außendienst",
  description: "Feldhub digitalisiert Forstbetriebe, Landschaftsbau, Tiefbau und Handwerk — mit einer maßgeschneiderten Plattform, die wirklich zu Ihrem Betrieb passt. DSGVO-konform. Made in Germany.",
  keywords: ["Forstmanagement", "Außendienst Software", "Digitale Protokolle", "Zeiterfassung", "Auftragsverwaltung", "Mobile App Forstwirtschaft"],
  authors: [{ name: "Feldhub" }],
  openGraph: {
    title: "Feldhub | Digitale Betriebssysteme für den Außendienst",
    description: "Maßgeschneiderte Plattform für Forstbetriebe, Landschaftsbau, Tiefbau und Handwerk. DSGVO-konform. Made in Germany.",
    url: "https://feldhub.de",
    siteName: "Feldhub",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Feldhub | Digitale Betriebssysteme für den Außendienst",
    description: "Maßgeschneiderte Plattform für Forstbetriebe, Landschaftsbau, Tiefbau und Handwerk.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
