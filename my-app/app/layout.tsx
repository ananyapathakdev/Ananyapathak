import "./globals.css";
import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "Ananya Pathak | Frontend Developer & Technical SEO Specialist",
  description: "Frontend engineer specializing in high-performance React & Next.js development with technical SEO expertise. Building lightning-fast digital experiences.",
  keywords: ["Frontend Developer", "React", "Next.js", "Technical SEO", "UI/UX Designer", "Digital Growth"],
  authors: [{ name: "Ananya Pathak" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ananyapathak.dev",
    title: "Ananya Pathak | Frontend Developer & Technical SEO Specialist",
    description: "Frontend engineer specializing in high-performance React & Next.js development with technical SEO expertise.",
    siteName: "Ananya Pathak Portfolio"
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <link rel="canonical" href="https://ananyapathak.dev" />
      </head>
      <body>{children}</body>
    </html>
  );
}