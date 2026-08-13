import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shiv Kumar — Software Developer & Product Builder",

  description:
    "Portfolio of Shiv Kumar, a Software Developer and Product Builder specializing in React Native, Next.js, Node.js, TypeScript and AI/ML.",

    icons: {
  icon: "/favicon.png",
},

  keywords: [
    "Shiv Kumar",
    "Software Developer",
    "React Native Developer",
    "Next.js Developer",
    "AI Engineer",
    "Full Stack Developer",
    "React Native",
    "TypeScript",
    "Node.js",
    "Artificial Intelligence",
    "StudXAI",
  ],

  authors: [
    {
      name: "Shiv Kumar",
    },
  ],

  creator: "Shiv Kumar",

  openGraph: {
    title: "Shiv Kumar — Software Developer & Product Builder",

    description:
      "I build AI-powered products and production-ready applications.",

    type: "website",
    

    siteName: "Shiv Kumar Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shiv Kumar — Software Developer & Product Builder",
    description:
      "Software Developer and Product Builder specializing in React Native, Next.js and AI/ML.",
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}