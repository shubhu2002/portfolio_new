import { Comfortaa } from "next/font/google";
import Head from "next/head";
import Footer from "~/component/footer";
import Navbar from "~/component/navbar";
import ProjectModal from "~/component/project-modal";
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
