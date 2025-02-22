import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amigo Secreto Online: Gerador Gratuito e Fácil de Usar",
  description: "Crie seu amigo secreto online grátis! Sorteio automático, convites por e-mail e organização fácil para sua troca de presentes. Simplifique a organização do seu amigo secreto!",
  keywords: ["amigo secreto", "gerador amigo secreto", "sorteio online", "organizar amigo secreto"],
  authors: [{ name: "Neto Russo" }],
  openGraph: {
    title: "Amigo Secreto Online: Gerador Gratuito e Fácil de Usar",
    description: "Organize seu amigo secreto sem complicação! Crie grupos, sorteie automaticamente e envie convites por e-mail.",
    url: "https://amigosecreto-blue-iota.vercel.app",
    siteName: "Amigo Secreto Online",
    images: [
      {
        url: "https://amigosecreto-blue-iota.vercel.app/images/amigo-secreto-og.png", 
        width: 1200,
        height: 630,
        alt: "Gerador de Amigo Secreto Online",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": "standard",
      "max-image-preview": "large",
    },
  },
  verification: {
    google: "GOOGLE_SEARCH_CONSOLE",
    yandex: "YANDEX_WEBMASTER",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <meta name="author" content="Neto Russo" />
        <link rel="canonical" href="https://amigosecreto-blue-iota.vercel.app/" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}