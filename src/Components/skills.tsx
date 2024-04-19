import { motion } from "framer-motion";
import Image from "next/image";
import { imgData } from "~/data/config";
import Marquee from "react-fast-marquee";

const Skills: React.FC = () => {
  const animations = {
    variants: {
      visible: { x: 0, opacity: 1 },
      hidden: { x: -100, opacity: 0 },
    },
    whileInView: "visible",
    initial: "hidden",
    viewport: { once: true },
  };

  return (
    <section className="w-full  ">
      <motion.div
        transition={{ duration: 0.6 }}
        {...animations}
        className="my-6 px-6 md:px-16"
      >
        <h1 className=" text-center text-7xl">Skills</h1>
      </motion.div>

      <motion.div
        transition={{ duration: 0.7 }}
        {...animations}
        className="relative my-6 flex w-full justify-center px-6 md:px-16"
      >
        <p className="w-full text-2xl md:max-w-[80%] md:text-3xl">
          Embracing the future, I upgraded myself by web3 and latest
          technologies like Next.js , Tailwind CSS. Grounded in the fundamental
          of backend development , I navigate seamlessly through SQL, cloud and
          NoSQL tech. Constantly evolving to stay ahead in this dynamic digital
          realm.
        </p>
        <div className="gradientBg2 -left-2 top-1/2 -translate-y-1/2 md:left-12 md:top-0 md:translate-y-0" />
      </motion.div>
      <div className="mx-auto my-6 h-[1px] w-[90%] bg-white/15 md:my-12 " />
      <motion.div className="my-12 flex w-full justify-evenly gap-10  px-6 text-sm md:px-16 md:text-xl">
        <ul className="ml-4 flex list-disc flex-col gap-6">
          <li>Next JS </li>
          <li>React JS</li>
          <li>TypeScript / JavaScript</li>
          <li>Tailwind CSS</li>
          <li>SASS</li>
          <li>Vanilla CSS</li>
          <li>HTML</li>
        </ul>
        <ul className="flex list-disc flex-col gap-6">
          <li>Express JS</li>
          <li>Node JS</li>
          <li>Supabase</li>
          <li>Mongo DB</li>
          <li>MySQL</li>
        </ul>
        <ul className="flex list-disc flex-col gap-6">
          <li>Redux</li>
          <li>Git / Github</li>
          <li>Vercel</li>
          <li>C++</li>
          <li>C</li>
        </ul>
      </motion.div>
      <div className="mx-auto my-6 h-[1px] w-[90%] bg-white/15 md:my-12" />

      <Marquee
        speed={150}
        gradient
        gradientColor="#01020d 20%"
        direction="right"
      >
        <div className="hide-scroll grid grid-flow-col justify-between gap-10 overflow-x-scroll px-6 py-10 md:gap-28 md:px-12 md:py-16">
          {imgData
            .filter((img) => img.id <= 9)
            .map((img) => (
              <div
                className="h-[60px] w-[60px] md:h-[100px] md:w-[100px]"
                key={img.id}
              >
                <Image
                  src={img.src}
                  alt={img.name}
                  width={100}
                  height={100}
                  onDragStart={(e) => e.preventDefault()}
                />
              </div>
            ))}
        </div>
      </Marquee>

      <Marquee speed={150} gradient gradientColor="#01020d 20%">
        <div className="hide-scroll grid grid-flow-col justify-between gap-10 overflow-x-scroll px-6 py-10 md:gap-28 md:px-12 md:py-16">
          {imgData
            .filter((img) => img.id > 9)
            .map((img) => (
              <div
                className="h-[60px] w-[60px] md:h-[100px] md:w-[100px]  "
                key={img.id}
              >
                <Image
                  src={img.src}
                  alt={img.name}
                  width={100}
                  height={100}
                  onDragStart={(e) => e.preventDefault()}
                  className="h-full w-full "
                />
              </div>
            ))}
        </div>
      </Marquee>
    </section>
  );
};
export default Skills;
