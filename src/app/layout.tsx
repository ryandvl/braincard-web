import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home • LearnFCS",
  description: "Memorize with Flashcards!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} w-screen h-screen flex justify-center antialiased p-10 transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
