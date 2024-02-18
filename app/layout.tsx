import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";

const nunitoFont = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AirBNB Clone for your MVP",
  description: "A project to learn how create my startup XOLETS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunitoFont.className}>
        {/* <ClientOnly> */}
        <RegisterModal></RegisterModal>
        <Navbar />
        {/* </ClientOnly> */}
        {children}
      </body>
    </html>
  );
}
