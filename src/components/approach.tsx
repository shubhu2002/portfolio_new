import React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import TiltEffect from "./animations/tilt-effect";

const Approach = () => {
  const tiltOptions = { angle: 10, perspective: 1500 };
  return (
    <div className="my-4 flex w-full flex-col gap-4 px-4 py-2">
      <span className="mb-3 text-nowrap font-thunder-semibold text-2xl uppercase tracking-widest text-tertiary">
        My Approach
      </span>
      <div className="grid h-full w-full grid-flow-row flex-col items-start justify-evenly gap-4 sm:grid-flow-col  lg:flex-row">
        <TiltEffect {...tiltOptions}>
          <Card
            id={1}
            title="Planning & Strategy"
            imgSrc={"/assets/planning.svg"}
            backgroundColor="#064e3b"
            des="We'll collaborate to map out your website's goals, target audience, 
          and key functionalities. We'll discuss things like site structure, 
          navigation, and content requirements."
          ></Card>
        </TiltEffect>
        <TiltEffect {...tiltOptions}>
          <Card
            id={2}
            title="Development & Progress Update"
            imgSrc={"/assets/development.svg"}
            backgroundColor="#881337"
            des="Once we agree on the plan, I cue my lofi playlist and dive into
          coding. From initial sketches to polished code, I keep you updated
          every step of the way."
          ></Card>
        </TiltEffect>
        <TiltEffect {...tiltOptions}>
          <Card
            id={3}
            title="Development & Launch"
            imgSrc={"/assets/deply.svg"}
            backgroundColor="#0284c7"
            des="This is where the magic happens! Based on the approved design, 
          I'll translate everything into functional code, building your website
          from the ground up."
          ></Card>
        </TiltEffect>
      </div>
    </div>
  );
};

export default Approach;

const Card = ({
  title,
  des,
  backgroundColor,
  imgSrc,
  id,
}: {
  title: string;
  children?: React.ReactNode;
  des: string;
  backgroundColor: string;
  imgSrc: string;
  id: number;
}) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 60, scale: 0.8, opacity: 0 }}
        whileInView={{ y: 0, scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1 * id }}
        className="relative flex h-full w-full
       max-w-sm items-start  justify-center overflow-hidden rounded-xl border border-[rgba(105,113,162,0.16)] bg-primary p-4 shadow-deep-inset dark:border-white/[0.2]"
        style={{
          background: "rgb(4,7,29)",
          backgroundColor:
            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 h-full w-full"
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-primary" />

          <div
            className={`relative h-full w-full overflow-hidden rounded-xl`}
            style={{ background: backgroundColor }}
          >
            <Image
              src={imgSrc}
              alt={imgSrc}
              width={1000}
              height={1000}
              className="absolute bottom-0 left-0 right-0 top-0 z-[10] scale-[0.7] object-contain opacity-40"
            />
          </div>
        </motion.div>

        <div className="relative z-20 px-2 pt-3">
          <h2 className="relative z-10 mb-3 text-center font-thunder-semibold text-3xl uppercase tracking-widest text-tertiary">
            {title}
          </h2>
          <p
            className="relative z-20 mt-4 -translate-y-2
         px-4 text-center  text-sm text-white
         opacity-100 transition duration-200"
          >
            {des}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export const Icon = ({ className, ...rest }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
