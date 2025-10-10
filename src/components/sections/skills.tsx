import { Element } from "react-scroll";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { ANIMATION_CONFIG, SKILLSIMAGEPROPS } from "~/data";

const Skills = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <Element name="skills" id="skills" className="bg-[] py-24">
      <AnimatePresence>
        <div className="px-[4%] sm:px-[6%] ">
          {/* <motion.div
            {...ANIMATION_CONFIG}
            className="font-thunder-semibold text-4xl tracking-wider md:text-6xl"
          >
            My <span className="uppercase text-blue">Tech skills</span>
          </motion.div> */}

          <div className="flex w-full items-end justify-between">
            <div className="">
              <div
                className="mb-3 flex w-fit items-center gap-1 justify-self-start rounded-[14px] border border-black/30 bg-[#462916] px-3 py-0.5 pt-1 text-sm text-[#fff5f4]"
                h-auto
              >
                Skills
              </div>

              <AnimatePresence mode="wait">
                <div>
                  <motion.h1
                    key={"title_work"}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="max-w-[700px] text-left font-cinzel text-5xl font-medium capitalize"
                  >
                    Behind the Code
                  </motion.h1>
                 
                </div>
              </AnimatePresence>
            </div>

            <motion.div className="mb-1 flex h-full max-w-[700px] items-center gap-8 font-comfortaa font-normal leading-snug">
              <AnimatePresence mode="wait">
                <motion.p
                  key="anything"
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="text-left font-comfortaa text-base font-light leading-snug tracking-wider"
                >
                  I’ve built a versatile skill set that bridges design and
                  development. Working with Next.js, React, and TypeScript, I
                  focus on crafting fast, scalable web applications with refined
                  UI and reliable performance.
                </motion.p>
              </AnimatePresence>
            </motion.div>
          </div>

          <div className="relative mt-8 flex h-full w-full items-center justify-center">
            <div className="absolute bottom-0 left-[2vw] right-[2vw] top-0 md:left-[2vh] md:right-[2vh]">
              {/* top left */}
              <div
                className={`absolute left-0 top-0 h-[2px] w-3 rounded-full bg-black/60`}
              />
              <div
                className={`absolute left-0 top-0 h-3 w-[2px] rounded-full bg-black/60`}
              />
              {/* top right */}
              <div
                className={`absolute right-0 top-0 h-[2px] w-3 rounded-full bg-black/60`}
              />
              <div
                className={`absolute right-0 top-0 h-3 w-[2px] rounded-full bg-black/60`}
              />
              {/* bottom right */}
              <div
                className={`absolute bottom-0 right-0 h-[2px] w-3 rounded-full bg-black/60`}
              />
              <div
                className={`absolute bottom-0 right-0 h-3 w-[2px] rounded-full bg-black/60`}
              />
              {/* bottom left */}
              <div
                className={`absolute bottom-0 left-0 h-[2px] w-3 rounded-full bg-black/60`}
              />
              <div
                className={`absolute bottom-0 left-0 h-3 w-[2px] rounded-full bg-black/60`}
              />
            </div>
            <div className="relative top-[2vw] flex w-full justify-between py-8 md:top-auto">
              <div className="hide-scroll grid h-full w-full grid-flow-row grid-cols-3 justify-between gap-y-12 sm:grid-cols-6 sm:gap-y-20">
                {SKILLSIMAGEPROPS.map((img, id) => (
                  <motion.div
                    initial={{ y: 30, scale: 0.8, opacity: 0 }}
                    whileInView={{ y: 0, scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.04 * id }}
                    className="flex flex-col items-center gap-2"
                    key={id}
                  >
                    <Image
                      src={img.src}
                      alt={img.name}
                      width={1000}
                      height={1000}
                      onDragStart={(e) => e.preventDefault()}
                      className="h-[40px] w-[40px] object-contain transition-none delay-0 duration-0 md:h-[60px] md:w-[60px]"
                    />
                    <span className="text-nowrap text-[10px] md:text-base ">
                      {img.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatePresence>
    </Element>
  );
};

export default Skills;
