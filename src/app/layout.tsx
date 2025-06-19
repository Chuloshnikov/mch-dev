import type { Metadata } from "next";
import { Antonio } from "next/font/google";
import "./globals.css";

const antonio = Antonio({
  subsets: ["latin"],
  variable: "--font-antonio",
});

export const metadata: Metadata = {
  title: "Maxym Chuloshnikov - Full-Stack Developer",
  description: "Full-Stack Web Developer specializing in React, Next.js, Node.js, and modern web technologies.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={antonio.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
