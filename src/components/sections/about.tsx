import { useEffect, useState } from "react";
import Image from "next/image";
import { Element } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import TiltEffect from "../animations/tilt-effect";
import { SECTION_DATA } from "~/data";

const New = () => {
  const [section, setSection] = useState<"Engineering_Philosophy" | "Approach">(
    "Engineering_Philosophy",
  );

  const tiltOptions = { angle: 10, perspective: 1500 };

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSection((prev) =>
        prev === "Engineering_Philosophy"
          ? "Approach"
          : "Engineering_Philosophy",
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Element
      name="about"
      id="about"
      className="bg-[#fff] py-20 text-left sm:py-16"
    >
      <AnimatePresence>
        <div className="px-[4%] sm:px-[6%] ">
          <div className="flex w-full items-end justify-between">
            <div className="">
              <div
                className="mb-3 flex w-fit items-center gap-1 rounded-[14px] border border-black/30 bg-[#462916] px-3 py-0.5 pt-1 text-sm text-[#fff5f4]"
                h-auto
              >
                About Me
              </div>

              <AnimatePresence mode="wait">
                <motion.h1
                  key={SECTION_DATA[section].title}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="font-cinzel max-w-[500px] text-left text-5xl font-medium"
                >
                  {SECTION_DATA[section].title}
                </motion.h1>
              </AnimatePresence>
            </div>

            <motion.div className="mb-1 flex h-full max-w-[700px] items-center gap-8 font-comfortaa font-normal leading-snug">
              <AnimatePresence mode="wait">
                <motion.p
                  key={SECTION_DATA[section].description}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {SECTION_DATA[section].description}
                </motion.p>
              </AnimatePresence>

              <div className="flex h-full w-[200px] flex-col items-end gap-3 text-3xl">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() =>
                    section === "Approach"
                      ? setSection("Engineering_Philosophy")
                      : setSection("Approach")
                  }
                  className={`cursor-pointer rounded-full bg-white p-1.5 text-[#462916]`}
                >
                  <MdKeyboardDoubleArrowRight
                    size={24}
                    className={`${section !== "Engineering_Philosophy" ? "-scale-x-[1] " : "scale-x-[1]"}`}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="my-9 mb-16 w-full border-[0.5px] border-dashed border-black/30" />

          <div className="flex items-center justify-between gap-8 ">
            {SECTION_DATA[section].cardsData.map((card) => (
              <TiltEffect
                key={card.id}
                {...tiltOptions}
                className={`h-[290px] w-[420px] rounded-[18px] border-[0.5px] border-[#462916]/30 bg-[#fff5f4] p-4 px-6 ${card.id === 2 && "border-none !bg-[#462916] text-white"}`}
              >
                <div>
                  <Image
                    width={999}
                    height={999}
                    alt="img"
                    src={card.card_img}
                    className="w-12"
                  />

                  <h1 className="font-comfortaa py-3 text-2xl mt-2 tracking-wider">
                    {card.card_title}
                  </h1>
                  <p
                    className={`font-comfortaa text-base font-light leading-snug tracking-wider`}
                  >
                    {card.card_description}
                  </p>
                </div>
              </TiltEffect>
            ))}
          </div>
        </div>
      </AnimatePresence>
    </Element>
  );
};

export default New;
