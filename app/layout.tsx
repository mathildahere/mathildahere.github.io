import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://mathildahere.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Mathilda Dellanova - Software Engineer & UI/UX Designer",
    template: "%s | Mathilda Dellanova",
  },
  description:
    "Portfolio of Mathilda Dellanova, a Software Engineer and UI/UX Designer specializing in React, Next.js, TypeScript, and full-stack development. Based in Indonesia.",
  keywords: [
    "Mathilda Dellanova",
    "Software Engineer",
    "UI/UX Designer",
    "Frontend Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Portfolio",
    "Indonesia",
  ],
  authors: [{ name: "Mathilda Dellanova", url: BASE_URL }],
  creator: "Mathilda Dellanova",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Mathilda Dellanova",
    title: "Mathilda Dellanova - Software Engineer & UI/UX Designer",
    description:
      "Portfolio of Mathilda Dellanova, a Software Engineer and UI/UX Designer specializing in React, Next.js, TypeScript, and full-stack development.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mathilda Dellanova - Software Engineer & UI/UX Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mathilda Dellanova - Software Engineer & UI/UX Designer",
    description:
      "Portfolio of Mathilda Dellanova, a Software Engineer and UI/UX Designer specializing in React, Next.js, TypeScript, and full-stack development.",
    images: ["/og-image.png"],
    creator: "@MathildaDellanova",
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mathilda Dellanova",
  url: BASE_URL,
  jobTitle: "Software Engineer & UI/UX Designer",
  description:
    "CS/IS graduate specializing in software engineering and UI/UX design. Experienced in React, Next.js, TypeScript, Django, and full-stack development.",
  email: "mathilda.here@gmail.com",
  sameAs: [
    "https://github.com/mathildahere",
    "https://linkedin.com/in/mathilda-dellanova",
    "https://medium.com/@MathildaDellanova",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100..800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
