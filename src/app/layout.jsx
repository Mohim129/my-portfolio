import { Plus_Jakarta_Sans, Inter, Playwrite_NO } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playwriteNO = Playwrite_NO({
  variable: "--font-playwrite-no",
});

export const metadata = {
  metadataBase: new URL("https://mohim-portfolio-three.vercel.app"),
  title: {
    default: "Mohim Uddin - Full-Stack Developer Portfolio",
    template: "%s | Mohim Uddin"
  },
  description: "A passionate Full-Stack Developer specializing in high-performance web applications, MERN stack, Next.js, and scalable digital experiences.",
  keywords: ["Mohim Uddin", "Full-Stack Developer", "Web Developer", "React Developer", "Next.js", "MERN stack", "JavaScript", "Portfolio"],
  authors: [{ name: "Mohim Uddin" }],
  creator: "Mohim Uddin",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Mohim Uddin - Full-Stack Developer",
    description: "A passionate Full-Stack Developer specializing in high-performance web applications, MERN stack, Next.js, and scalable digital experiences.",
    siteName: "Mohim Uddin Portfolio",
    images: [
      {
        url: "https://i.ibb.co.com/tTvfrZ5c/My-pic-removebg-preview.png",
        width: 1200,
        height: 630,
        alt: "Mohim Uddin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohim Uddin - Full-Stack Developer",
    description: "A passionate Full-Stack Developer specializing in high-performance web applications, MERN stack, Next.js, and scalable digital experiences.",
    images: ["https://i.ibb.co.com/tTvfrZ5c/My-pic-removebg-preview.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import SmoothScrolling from "@/components/SmoothScrolling";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable} ${playwriteNO.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
