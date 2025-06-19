import type { Metadata } from "next";
import { Antonio } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

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
      <body className="antialiased min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
