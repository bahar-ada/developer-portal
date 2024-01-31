import '@/app/ui/global.css';
import localFont from "next/font/local"
import Head from 'next/head';
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import { NextFont } from 'next/dist/compiled/@next/font';

 const myFont1: NextFont = localFont({ src: "../public/fonts/IRANSansWeb.woff" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="Iconmoon-Designer-Drawing.icns"></link>
        <meta name="theme-color" content="#000" />
      </Head>
      <body className={myFont1.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
