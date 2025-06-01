import dynamic from "next/dynamic";
import AboutMe from "~/components/sections/about";
import Connect from "~/components/sections/connect";
import Hero from "~/components/sections/hero";
import Skills from "~/components/sections/skills";
import Layout from "~/layout";

const Works = dynamic(() => import("~/components/sections/work"), {
  ssr: false,
});

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AboutMe />
      <Works />
      <Skills/>
      <Connect />
    </Layout>
  );
}
