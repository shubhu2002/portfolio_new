import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Element, Link as ScrollLink } from "react-scroll";
import Marquee from "react-fast-marquee";
import { FaDiamond } from "react-icons/fa6";

import AceternityIcon from "../common/aceternity-btn";
import useIsMobile from "~/hooks/useIsMobile";

const TAGS = [
  "Build",
  "Develop",
  "Code",
  "Deploy",
  "Debug",
  "Optimize",
  "Bundle",
  "Security",
  "IDE",
  "Update",
  "Server",
];

const Hero = () => {
  const animations = {
    variants: {
      visible: { y: 0, opacity: 1, scale: 1 },
      hidden: { y: 60, opacity: 0, scale: 0.8 },
    },
    whileInView: "visible",
    initial: "hidden",
    transition: {
      duration: 1,
    },
    viewport: {
      once: false,
    },
  };

  const isMobile = useIsMobile();
  return (
    <Element name="hero" id="hero">
      <AnimatePresence>
        <main className="relative flex min-h-screen flex-col items-center gap-7 pt-24 sm:justify-center sm:pt-0 ">
          <Image
            src={"/assets/spotlight-left.svg"}
            alt={"spotlight"}
            width={1000}
            height={1000}
            onDragStart={(e) => e.preventDefault()}
            className="absolute left-0 top-0  object-contain"
          />
          <Image
            src={"/assets/spotlight-right.svg"}
            alt={"spotlight"}
            width={1000}
            height={1000}
            onDragStart={(e) => e.preventDefault()}
            className="absolute right-0 top-0 object-contain"
          />
          <motion.div
            {...animations}
            className="relative mt-0 flex w-full flex-col items-center justify-center gap-3 px-[4%] sm:mt-16 sm:px-[6%]"
          >
            <div
              style={{
                background:
                  "radial-gradient(100% 100% at 50% 100%, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 100%) ",
              }}
              className="mb-4 rounded-lg border border-[rgba(105,113,162,0.16)] px-2.5 py-[5px] text-sm text-tertiary text-opacity-80 shadow-deep-inset sm:text-lg"
            >
              🚀 20+ Web Applications In Production
            </div>
            <div className="flex flex-col text-center font-thunder-semibold text-4xl tracking-wider sm:max-w-[80vw] md:text-8xl">
              <span>Software Engineer Crafting </span>
              <div className="mt-2">
                <span className="uppercase text-blue">Next-Gen</span> Digital
                Experiences
              </div>
            </div>

            <p className=" max-w-[90vw] text-lg text-tertiary md:max-w-[60vw]">
              Web Developer building modern web applications powered by AI
              technology and blockchain integration. Transforming ideas into
              intelligent digital solutions.
            </p>
          </motion.div>

          <motion.div {...animations}>
            <ScrollLink
              activeClass="about"
              to="about"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
            >
              <AceternityIcon className="!rounded-[14px] capitalize">
                explore more
              </AceternityIcon>
            </ScrollLink>
          </motion.div>

          <motion.div
            {...animations}
            className="clipbg mt-12 flex w-[93vw] justify-self-center bg-[#c2cde7] pt-1 sm:mt-28 sm:pb-0.5 sm:pt-2 "
          >
            <Marquee
              speed={100}
              gradient={true}
              gradientColor={"#c2cde7"}
              gradientWidth={isMobile ? 180 : 430}
            >
              <div className="flex w-full grid-flow-col items-center justify-between  text-primary">
                {TAGS.map((t, i) => (
                  <div key={i} className="mx-2 flex items-center sm:mx-7 ">
                    <div className="tracking-wider font-thunder-semibold text-lg uppercase sm:text-2xl">
                      {t}
                    </div>
                    <FaDiamond className="mb-1 ml-3 text-[8px] sm:ml-10 sm:text-sm" />
                  </div>
                ))}
              </div>
            </Marquee>
          </motion.div>
        </main>
      </AnimatePresence>
    </Element>
  );
};

export default Hero;
