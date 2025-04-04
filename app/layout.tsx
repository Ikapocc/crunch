import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import { Nunito } from 'next/font/google';
import ReactQueryProvider from "./libs/tanstack";

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400','500','600','700'], 
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} antialiased overflow-x-hidden bg-black text-white`}
      >
      <ReactQueryProvider>
        <Header />
        {children}
      </ReactQueryProvider>
      </body>
    </html>
  );
}
