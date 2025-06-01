import { Comfortaa } from "next/font/google";
import Head from "next/head";

import Navbar from "~/components/navbar";

const comfortaa_font = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>Shubhanshu | Portfolio </title>
        <meta name="description" content="Perosnal porfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`relative min-h-screen w-full bg-primary text-center  text-secondary font-neue-light tracking-wider ${comfortaa_font.variable} `}
      >
        <Navbar />

        {children}
      </main>
    </>
  );
};

export default Layout;
