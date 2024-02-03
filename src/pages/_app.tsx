import { type AppType } from "next/dist/shared/lib/utils";
import {Comfortaa} from 'next/font/google'
import "~/styles/globals.css";

import Navbar from "~/Components/Navbar";
import Footer from "~/Components/Footer";

const comfortaa = Comfortaa({subsets:["latin"]});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={`${comfortaa.className} w-full min-h-screen font-extrabold`}>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
};

export default MyApp;
