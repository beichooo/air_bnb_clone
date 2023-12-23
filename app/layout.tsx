import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";

const nunitoFont = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AirBNB Clone",
  description: "A project to learn how create my startup",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunitoFont.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
