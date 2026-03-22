import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { DM_Serif_Display } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Murphy Rental Property Management | Milwaukee, WI",
    template: "%s | Murphy Rental Property Management",
  },
  description:
    "Quality rentals with fair prices in Milwaukee, WI. Managed by Lucas Murphy, a licensed Wisconsin Realtor\u00AE who believes in rent stability and responsive maintenance.",
  metadataBase: new URL("https://www.murphyrentalpropertymanagement.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Murphy Rental Property Management",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
