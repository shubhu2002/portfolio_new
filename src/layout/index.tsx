import { Cinzel, Comfortaa, Licorice, Pacifico } from "next/font/google";
import Head from "next/head";

import Navbar from "~/components/navbar";

const comfortaa_font = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
});

const licorice = Licorice({
  variable: "--font-licorice",

  weight: ["400"],
  subsets: ["latin"],
});
const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: ["400"],
});
const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400","500","600","700","800","900"],
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
      suppressHydrationWarning={true}
      
        className={`relative min-h-screen w-full bg-white text-center  font-neue-light tracking-wider text-black ${comfortaa_font.variable} ${cinzel.variable} ${licorice.variable} ${pacifico.variable}`}
      >
        <Navbar />

        {children}
      </main>
    </>
  );
};

export default Layout;
