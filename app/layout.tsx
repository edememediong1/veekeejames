import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import { Montserrat } from "next/font/google";
import Footer from "./Components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "LUXURY BY FLORA",
  description: "Established in 2023, Flora has become a symbol of timeless elegance, creativity, and refined femininity. With every piece we create, we aim to transform not just appearances, but presence — sculpting silhouettes that tell bold, beautiful stories. Renowned for our ability to reimagine and elevate the women we dress, each custom design is a statement of confidence, grace, and individuality made for every season.",
  icons: {
    icon: "/flora_icon.png", 
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased w-[100%]`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
