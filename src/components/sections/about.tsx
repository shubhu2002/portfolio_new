import Link from "next/link";
import Image from "next/image";
import { Element } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import { SiReaddotcv } from "react-icons/si";

import Approach from "../approach";
import AceternityIcon from "../common/aceternity-btn";
import TiltEffect from "../animations/tilt-effect";
import { ANIMATION_CONFIG } from "~/data";

const AboutMe = () => {
  const tiltOptions = { angle: 10, perspective: 1500 };

  return (
    <Element name="about" id="about" className="mb-20 sm:mb-48">
      <AnimatePresence>
        <div className=" px-[4%] sm:px-[6%] ">
          <motion.div
            {...ANIMATION_CONFIG}
            className="mb-10 font-thunder-semibold text-4xl tracking-wider sm:mb-16 md:text-6xl"
          >
            About <span className="uppercase text-blue">me</span>
          </motion.div>

          <div className="my-4 flex h-full w-full  flex-col items-center gap-4 md:h-[390px] md:flex-row">
            <motion.div
              {...ANIMATION_CONFIG}
              className="flex h-full w-full flex-[0.6] flex-col justify-between gap-5 rounded-xl p-px"
            >
              {/** projects */}
              <TiltEffect {...tiltOptions} className="flex-1">
                <div className="h-[240px] overflow-hidden rounded-xl bg-gradient-to-b from-[rgba(54,55,73,0.43)] via-[rgba(54,55,73,0.49)] to-[rgba(54,55,73,1)] p-px sm:h-full">
                  <div className="relative h-full w-full rounded-xl bg-gradient-to-tr from-[#04071D] to-[#0C0E23]">
                    <Image
                      src={"/assets/skeleton.svg"}
                      alt="grid"
                      width={100}
                      height={100}
                      className="absolute -bottom-3 right-0 z-[100] h-[80%] w-[80%] sm:-bottom-10"
                    />
                    <Image
                      src={"/assets/grid-bg.svg"}
                      alt="grid"
                      width={100}
                      height={100}
                      className="absolute inset-0 z-[100] h-[100%] w-[100%]"
                    />
                    <div className="p-5">
                      <div className=" text-left">
                        <div className="mb-1 text-nowrap font-thunder-semibold text-xl uppercase tracking-widest text-tertiary">
                          PROJECTS
                        </div>
                        <div className="text-lg ">
                          Worked on more than 20+ Projects !
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltEffect>
              {/** experience */}
              <TiltEffect {...tiltOptions} className="flex-1">
                <div className="h-[240px] overflow-hidden rounded-xl bg-gradient-to-b from-[rgba(54,55,73,0.43)] via-[rgba(54,55,73,0.49)] to-[rgba(54,55,73,1)] p-px sm:h-full">
                  <div className="relative h-full w-full rounded-xl bg-gradient-to-tr from-[#04071D] to-[#0C0E23]">
                    <Image
                      src={"/assets/gradient.svg"}
                      alt="grid"
                      width={1000}
                      height={1000}
                      className="absolute inset-0 z-[10] h-full w-full"
                    />
                    <div className="relative z-[20] p-5 ">
                      <div className=" text-left">
                        <div className="mb-1 text-nowrap font-thunder-semibold text-xl uppercase tracking-widest text-tertiary">
                          EXPERIENCE
                        </div>
                        <div className="block text-lg md:hidden ">
                          1+ Years of Professional Experience as SDE at Nucast
                          Pte. Ltd.
                        </div>
                        <div className="hidden break-words text-lg md:block">
                          1+ Years of Professional Experience as
                        </div>
                        <div className="hidden break-words text-lg md:block">
                          SDE at Nucast Pte. Ltd.
                        </div>
                      </div>
                      <Link
                        href="https://drive.google.com/file/d/1aob5c30w7epk3-gYsDg5n7nGYdhgdgU4/view?usp=sharing"
                        target="_blank"
                        className="flex justify-self-start"
                      >
                        <AceternityIcon className="mt-2 flex items-center !text-[12px] leading-[18px]">
                          Resume <SiReaddotcv className="ml-2" />
                        </AceternityIcon>
                      </Link>
                    </div>
                  </div>
                </div>
              </TiltEffect>
            </motion.div>

            {/** Optimization Level */}
            <TiltEffect {...tiltOptions} className="flex-1">
              <motion.div
                {...ANIMATION_CONFIG}
                className="h-[240px] w-full flex-[1.2] overflow-hidden rounded-xl bg-gradient-to-b from-[rgba(54,55,73,0.43)] via-[rgba(54,55,73,0.49)] to-[rgba(54,55,73,1)] p-px sm:h-full"
              >
                <div className="relative flex h-full w-full rounded-xl bg-gradient-to-tr from-[#04071D] to-[#0C0E23]">
                  <Image
                    src={"/assets/grid-bg.svg"}
                    alt="grid"
                    width={1000}
                    height={1000}
                    className="absolute inset-0 z-[100]"
                  />
                  <div className="relative flex h-full p-4 sm:items-center sm:p-0">
                    <div className="absolute flex flex-col justify-center text-left sm:left-[calc(100%+32px)] ">
                      <span className="mb-3 text-nowrap font-thunder-semibold text-xl uppercase tracking-widest text-tertiary">
                        Optimization Level
                      </span>
                      <span className="text-nowrap text-lg sm:text-2xl">
                        Every byte optimized,
                      </span>
                      <span className="text-nowrap text-lg sm:text-2xl">
                        every function pure
                      </span>
                    </div>
                  </div>
                  <div className="relative h-full w-full ">
                    <Image
                      src={"/assets/code.svg"}
                      alt="code"
                      width={1000}
                      height={1000}
                      className="absolute bottom-0 right-0 w-60 md:w-[60%]"
                    />
                  </div>
                </div>
              </motion.div>
            </TiltEffect>
          </div>
          {/** Aprroach */}
          <motion.div
            {...ANIMATION_CONFIG}
            className="h-full flex-1 overflow-hidden rounded-xl bg-gradient-to-b from-[rgba(54,55,73,0.43)] via-[rgba(54,55,73,0.49)] to-[rgba(54,55,73,1)] p-px sm:h-[390px]"
          >
            <div className="relative flex h-full w-full rounded-xl bg-gradient-to-tr from-[#04071D] to-[#0C0E23] ">
              <Image
                src={"/assets/plus-grid.svg"}
                alt="code"
                width={1000}
                height={1000}
                className="absolute -left-1  -top-5 h-[60%] w-full object-cover"
              />
              <Approach />
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    </Element>
  );
};

export default AboutMe;
