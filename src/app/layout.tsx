import type { Metadata, Viewport } from "next";
import "./globals.css";
import StickyHeader from "@/components/sticky-header";
import { Footer } from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "M5V Corp",
  description: "M5V Corp - Real Estate Investment & Development",
  keywords: "Real Estate, Investment, Development, M5V Corp, Property",
  authors: [{ name: "M5V Corp" }],
  robots: "index, follow",
  icons: {
    icon: [
      { url: '/images/favicon/logo-favicon-32bit.ico?v=3', sizes: '32x32', type: 'image/x-icon' },
    ],
    shortcut: '/images/favicon/logo-favicon-32bit.ico?v=3',
    apple: '/images/favicon/logo-favicon-180bit.ico?v=3',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-off-white text-black-primary antialiased flex flex-col font-calibre">
        <StickyHeader />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}