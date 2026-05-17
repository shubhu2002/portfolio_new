import About from "~/components/sections/about";
import Footer from "~/components/sections/footer";
import Gallery from "~/components/sections/gallery";
import Hero from "~/components/sections/hero";
import ProjectNav from "~/components/sections/project-nav";
import Skills from "~/components/sections/skills";
import Layout from "~/layout";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Gallery />
      <Skills />
      <ProjectNav />
      <Footer />
    </Layout>
  );
}
