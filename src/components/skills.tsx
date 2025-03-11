import Image from "next/image";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

import { SKILLS, SKILLSIMAGEPROPS , animations } from "~/data";

const Skills: React.FC = () => {
  return (
    <section className="w-full  ">
      <motion.div
        transition={{ duration: 0.5 }}
        {...animations}
        className="relative my-6 flex w-full items-end justify-center"
      >
        <h1 className="text-center text-5xl md:text-7xl">Skills</h1>
        <span className="text-6xl text-orange-500 md:text-8xl ">.</span>
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

      <motion.div
        transition={{ duration: 0.9 }}
        {...animations}
        className="my-12 grid w-full grid-cols-2 gap-10 px-6 text-sm  md:flex md:justify-around md:px-16 md:text-xl"
      >
        {SKILLS && (
          <>
            <ul className="ml-4 flex list-disc flex-col gap-6">
              {SKILLS.filter((c) => c.category === "WEB").map((skill, id) => (
                <li key={id} className="pl-1.5">
                  {skill.name}{" "}
                </li>
              ))}
            </ul>
            <ul className="ml-4 flex list-disc flex-col gap-6">
              {SKILLS.filter((c) => c.category === "SERVER").map(
                (skill, id) => (
                  <li key={id} className="pl-1.5">
                    {skill.name}{" "}
                  </li>
                ),
              )}
            </ul>

            <ul className="ml-4 flex list-disc flex-col gap-6">
              {SKILLS.filter((c) => c.category === "OTHER").map((skill, id) => (
                <li key={id} className="pl-1.5">
                  {skill.name}{" "}
                </li>
              ))}
            </ul>
            <ul className="ml-4 flex list-disc flex-col gap-6">
              {SKILLS.filter((c) => c.category === "AI").map((skill, id) => (
                <li key={id} className="pl-1.5">
                  {skill.name}{" "}
                </li>
              ))}
            </ul>
          </>
        )}
      </motion.div>
      <div className="mx-auto my-6 h-[1px] w-[90%] bg-white/15 md:my-12" />

      <Marquee
        speed={150}
        gradient
        gradientColor="#01020d 20%"
        direction="right"
      >
        <div className="hide-scroll grid grid-flow-col justify-between gap-10 overflow-x-scroll px-6 py-10 md:gap-28 md:px-12 md:py-16">
          {SKILLSIMAGEPROPS.filter((img) => img.id <= 9).map((img) => (
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
          {SKILLSIMAGEPROPS.filter((img) => img.id > 9).map((img) => (
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
