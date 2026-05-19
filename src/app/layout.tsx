import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ── Ibrand — display / headings ─────────────────────────── */
const ibrand = localFont({
  src: [
    {
      path: "../fonts/Ibrand.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Ibrand.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-ibrand",
  display: "swap",
  preload: true,
});

/* ── Nobel Uno — body / UI text ───────────────────────────── */
const nobelUno = localFont({
  src: [
    {
      path: "../fonts/NobelUno-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/NobelUno-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/NobelUno-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/NobelUno-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/NobelUno-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/NobelUno-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/NobelUno-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/NobelUno-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/NobelUno-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-nobel",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://equalizerstudio.mg"
  ),
  title: {
    default: "Equalizer Studio | Agence de Communication Professionnelle",
    template: "%s | Equalizer Studio",
  },
  description:
    "Equalizer Studio, votre agence de communication professionnelle à Madagascar. Photos, vidéos, voix off, évènementiel, MC, hôtesses et team building depuis plus de 13 ans.",
  keywords: [
    "Equalizer Studio",
    "agence communication Madagascar",
    "voix off Madagascar",
    "évènementiel Antananarivo",
    "hôtesses Madagascar",
    "photos vidéos Madagascar",
    "MC animateur Madagascar",
    "team building",
    "spot audio",
  ],
  authors: [{ name: "Equalizer Studio" }],
  creator: "Equalizer Studio",
  openGraph: {
    type: "website",
    locale: "fr_MG",
    siteName: "Equalizer Studio",
    title: "Equalizer Studio | Agence de Communication Professionnelle",
    description:
      "Votre partenaire de confiance en communication professionnelle à Madagascar. Photos, vidéos, voix off, évènementiel et plus.",
    images: [
      {
        url: "/logo-light.jpeg",
        width: 800,
        height: 600,
        alt: "Equalizer Studio — Agence de Communication",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Equalizer Studio | Agence de Communication",
    description:
      "Votre partenaire en communication professionnelle à Madagascar.",
    images: ["/logo-light.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Equalizer Studio",
  description:
    "Agence de communication professionnelle à Madagascar. Photos, vidéos, voix off, évènementiel, MC, hôtesses et team building.",
  email: "contact.equalizerstudio@gmail.com",
  telephone: ["+261346493198", "+261322540773"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lot II A 122 FK Nanisana",
    addressLocality: "Antananarivo",
    addressCountry: "MG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${ibrand.variable} ${nobelUno.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-gold focus:text-black focus:rounded-md focus:font-medium"
        >
          Aller au contenu principal
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

