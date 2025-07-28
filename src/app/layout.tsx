import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "flag-icons/css/flag-icons.min.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nguyễn Phi Long | Portfolio",
  description: "Nguyễn Phi Long's Portfolio - Web Developer specializing in React, Next.js, and Node.js",
  icons: {
    icon: [
      { url: "/favicon-v2.png", sizes: "32x32", type: "image/png" },
    ]
  },  
  keywords: ["Nguyễn Phi Long", "Portfolio", "Web Developer", "React", "Next.js", "Node.js", "Frontend Developer", "TypeScript Developer", "React Native"],
  authors: [{ name: "Nguyễn Phi Long", url: "https://nguyenphilongportfolio.vercel.app/" }],
  creator: "Nguyễn Phi Long",
  metadataBase: new URL("https://nguyenphilongportfolio.vercel.app/"),
  openGraph: {
    title: "Nguyễn Phi Long | Portfolio",
    description: "Explore the personal portfolio of Nguyễn Phi Long - A modern, professional Web Developer.",
    url: "https://nguyenphilongportfolio.vercel.app/",
    siteName: "Nguyễn Phi Long Portfolio",
    images: [
      {
        url: "/Long.png", // preview image when shared
        width: 1200,
        height: 630,
        alt: "Nguyễn Phi Long Portfolio",
      },
    ],
    locale: "en", // Set the locale to English (United States)
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
