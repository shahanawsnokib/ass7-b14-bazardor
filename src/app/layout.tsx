import { Toaster } from 'react-hot-toast';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../app/navbar/page";
import Footer from "./footer/page";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BazarDor",
  description: "Your online marketplace",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="bn"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-white text-black">
        <div className="container mx-auto flex flex-1 flex-col px-10">
          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              duration: 3000,
              style: {
                borderRadius: '12px',
                background: '#111827',
                color: '#fff',
              },
            }}
          />
          <header>
            <Suspense fallback="Loading....">
            <Navbar />
            </Suspense>
          </header>
         <Suspense fallback="Loading....">
          <main className="flex-1">
            {children}
          </main>
          </Suspense>

          <footer className="mt-auto mb-1">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
