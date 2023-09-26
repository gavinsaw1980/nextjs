
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import { Suspense } from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | My first NextJS',
    default: 'Home | My first NextJS',
  },
  description: 'Welcome to Next.js',
  keywords: ['Next.js', 'React', 'JavaScript','taiwind css'],
  authors: [{ name: 'Gavin' }, { name: 'Gavin Saw', url: 'https://nextjs.org' }],
  creator: 'Gavin Saw',
  icons: {
    icon: '',
    shortcut: '',
    apple: '',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <Suspense fallback={<div>Loading</div>}>
        {children}
        </Suspense>
        <Footer />
      </body>
    </html>
  )
}
