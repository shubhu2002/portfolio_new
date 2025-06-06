import { Element } from "react-scroll";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { ANIMATION_CONFIG, SKILLSIMAGEPROPS } from "~/data";

const Skills = () => {
  return (
    <Element name="skills" id="skills" className="my-24">
      <AnimatePresence>
        <div className="px-[4%] sm:px-[6%] ">
          <motion.div
            {...ANIMATION_CONFIG}
            className="font-thunder-semibold text-4xl tracking-wider md:text-6xl"
          >
            My <span className="uppercase text-blue">Tech skills</span>
          </motion.div>
          <div className="relative mt-8 flex h-full w-full items-center justify-center">
            <div className="absolute bottom-0 left-[2vw] right-[2vw] top-0 md:left-[2vh] md:right-[2vh]">
              {/* top left */}
              <div
                className={`absolute left-0 top-0 h-[2px] w-3 rounded-full bg-tertiary/40`}
              />
              <div
                className={`absolute left-0 top-0 h-3 w-[2px] rounded-full bg-tertiary/40`}
              />
              {/* top right */}
              <div
                className={`absolute right-0 top-0 h-[2px] w-3 rounded-full bg-tertiary/40`}
              />
              <div
                className={`absolute right-0 top-0 h-3 w-[2px] rounded-full bg-tertiary/40`}
              />
              {/* bottom right */}
              <div
                className={`absolute bottom-0 right-0 h-[2px] w-3 rounded-full bg-tertiary/40`}
              />
              <div
                className={`absolute bottom-0 right-0 h-3 w-[2px] rounded-full bg-tertiary/40`}
              />
              {/* bottom left */}
              <div
                className={`absolute bottom-0 left-0 h-[2px] w-3 rounded-full bg-tertiary/40`}
              />
              <div
                className={`absolute bottom-0 left-0 h-3 w-[2px] rounded-full bg-tertiary/40`}
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
                      className="h-[40px] w-[40px] object-contain mix-blend-luminosity transition-none delay-0 duration-0 md:h-[60px] md:w-[60px]"
                    />
                    <span className="text-nowrap text-[10px] md:text-base">
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
