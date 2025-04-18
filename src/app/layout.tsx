import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
  description: "Personal portfolio of Nguyễn Phi Long - Web developer specialized in React, Next.js, and Node.js.",
  icons: {
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",  // GitHub logo SVG
  },
  keywords: ["Nguyễn Phi Long", "Portfolio", "Web Developer", "Frontend", "React", "Next.js", "Node.js"],
  authors: [{ name: "Nguyễn Phi Long", url: "https://your-domain.com" }],
  creator: "Nguyễn Phi Long",
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    title: "Nguyễn Phi Long | Portfolio",
    description: "Explore the personal portfolio of Nguyễn Phi Long - A modern, professional Web Developer.",
    url: "https://your-domain.com",
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
  twitter: {
    card: "summary_large_image",
    title: "Nguyễn Phi Long | Portfolio",
    description: "Explore the portfolio of Nguyễn Phi Long.",
    images: ["/og-image.png"],
    creator: "@your_twitter_handle",
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
