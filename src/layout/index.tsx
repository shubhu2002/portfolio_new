import { Comfortaa, Inter } from "next/font/google";
import Head from "next/head";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";
import ProjectModal from "~/components/project-modal";
import { useAppStore } from "~/store";

const comfortaa_font = Comfortaa({
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
        className={`relative min-h-screen w-full text-white ${comfortaa_font.className} `}
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
