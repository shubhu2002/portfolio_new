import { Comfortaa } from "next/font/google";
import Head from "next/head";

import Footer from "~/components/footer";
import Navbar from "~/components/navbar";
import ProjectModal from "~/components/project-modal";
import { useAppStore } from "~/store";

const comfortaa_font = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { showProjectModal } = useAppStore();
  return (
    <>
      <Head>
        <title>Shubhanshu | Portfolio </title>
        <meta name="description" content="Perosnal porfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`relative min-h-screen w-full text-white font-comfortaa ${comfortaa_font.variable} `}
      >
        <Navbar />
        {children}
        <Footer />
      </main>
      {showProjectModal && <ProjectModal />}
    </>
  );
};

export default Layout;
