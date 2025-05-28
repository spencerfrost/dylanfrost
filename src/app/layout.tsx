import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/app/components/layout/Navigation";
import Footer from "@/app/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dylan Frost - Professional Contractor & Carpenter | London, Ontario",
  description: "Experienced contractor and skilled carpenter with 25+ years providing quality construction, renovation, and maintenance services in London and St. Thomas, Ontario. Certified, reliable, and committed to excellence.",
  keywords: "contractor, carpenter, construction, renovation, maintenance, building, skilled trades, London Ontario, St. Thomas Ontario, home improvement, custom carpentry",
  authors: [{ name: "Dylan Frost" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://dylanfrost.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Dylan Frost - Professional Contractor & Carpenter",
    description: "Experienced contractor with 25+ years providing quality construction services in London, Ontario.",
    type: "website",
    locale: "en_CA",
    siteName: "Dylan Frost Construction",
    images: [
      {
        url: '/images/dylan-main.png',
        width: 1200,
        height: 630,
        alt: 'Dylan Frost - Professional Contractor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dylan Frost - Professional Contractor & Carpenter",
    description: "25+ years of quality construction services in London, Ontario.",
    images: ['/images/dylan-main.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
