import { Inter } from "next/font/google";

import { getMetadata } from "@/utils/metadata";

import "@/styles/login.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = getMetadata("Login", "Memorize with Flashcards!");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
