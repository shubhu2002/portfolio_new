import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Element, Link as ScrollLink } from "react-scroll";
import Marquee from "react-fast-marquee";
import { FaDiamond } from "react-icons/fa6";
import AceternityIcon from "~/components/common/aceternity-btn";
import useIsMobile from "~/hooks/useIsMobile";
import { ANIMATION_CONFIG, TAGS } from "~/data";

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <Element name="hero" id="hero">
      <AnimatePresence>
        <main className="relative flex min-h-screen flex-col items-center gap-7 bg-gradient-to-b from-[#e8dfdd] via-[#e1c4d3] to-[#98b3d5] pt-24 sm:justify-center sm:pt-0">
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
            {...ANIMATION_CONFIG}
            layout
            className="relative mt-0 flex w-full flex-col items-center justify-center gap-3 px-[4%] sm:mt-16 sm:px-[6%]"
          >
            <div
              style={{
                background:
                  "radial-gradient(100% 100% at 50% 100%, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0) 100%) ",
              }}
              className="mb-4 rounded-lg border border-[rgba(105,113,162,0.33)] px-2.5 py-[5px] text-sm text-black font-comfortaa text-opacity-80 shadow-deep-inset sm:text-lg"
            >
              🚀 20+ Web Applications In Production
            </div>
            <div className="flex font-cinzel text-5xl font-medium capitalize text-center flex-col sm:max-w-[80vw] md:text-6xl">
              <span className="">
                Software Engineer Crafting{" "}
              </span>
              <div className="mt-2">
                <span className="uppercase text-[#462916] font-semibold">Next-Gen</span>{" "}
                Digital Experiences
              </div>
            </div>

            <p className=" max-w-[90vw] text-lg text-black md:max-w-[60vw] font-comfortaa">
              Web Developer building modern web applications powered by AI
              technology and blockchain integration. Transforming ideas into
              intelligent digital solutions.
            </p>
          </motion.div>

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

          <div className="clipbg mt-12 flex w-[93vw] justify-self-center bg-[#462916] pt-1 sm:mt-28 py-1 sm:pt-1.5  ">
            <Marquee
              speed={100}
              gradient={true}
              gradientColor={"#462916"}
              gradientWidth={isMobile ? 180 : 430}
            >
              <div className="flex w-full grid-flow-col items-center justify-between  text-white">
                {TAGS.map((t, i) => (
                  <div key={i} className="mx-2 flex items-center sm:mx-7 ">
                    <div className="font-cinzel  text-lg uppercase tracking-wider sm:text-xl">
                      {t}
                    </div>
                    <FaDiamond className=" ml-3 text-[8px] sm:ml-10 sm:text-sm" />
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </main>
      </AnimatePresence>
    </Element>
  );
};

export default Hero;
