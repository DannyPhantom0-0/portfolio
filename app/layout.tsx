import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/componets/Home/Navbar/ResponsiveNav";
import Footer from "@/componets/Home/Footer/Footer";
import ScrollToTop from "@/componets/Helper/ScrollToTop";

const font = Inter({
  weight : ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Anshaar Portfolio Website",
  description: "Portfolio built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased bg-[#0d0d1f]`}>
          <ResponsiveNav />
          {children}
          <Footer />
          <ScrollToTop />
      </body>
    </html>
  );
}
