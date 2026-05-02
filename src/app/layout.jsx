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
  title: "Tech Expert Portfolio",
  description: "Senior Full-Stack Developer specializing in high-performance web applications.",
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
