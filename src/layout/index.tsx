import { Comfortaa } from "next/font/google";
import Head from "next/head";
import { useEffect } from "react";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";
import ProjectModal from "~/components/project-modal";
import { useAppStore } from "~/store";
import { getAllMyProjects } from "~/supabase";

const comfortaa_font = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { showProjectModal, setMyProjects } = useAppStore();

  useEffect(() => {
    async function fetch() {
      const data = await getAllMyProjects();
      setMyProjects(data);
    }
    void fetch();
  }, [setMyProjects]);

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
