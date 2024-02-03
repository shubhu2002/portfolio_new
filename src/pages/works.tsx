import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { projects } from "~/data/config";
import { motion } from "framer-motion";

const MyWorks: NextPage = () => {
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
    <section className="mb-12 w-full px-6 md:px-16 ">
      <motion.div
        transition={{ duration: 0.5 }}
        {...animations}
        className="relative my-6 flex w-full items-end justify-center"
      >
        <h1 className="text-center text-5xl md:text-7xl">My Works</h1>
        <span className="text-6xl text-orange-500 md:text-8xl ">.</span>
      </motion.div>
      <motion.div
        transition={{ duration: 0.55 }}
        {...animations}
        className="relative my-10 flex w-full justify-center"
      >
        <div className="gradientBg2 -left-2 top-1/2 -translate-y-1/2 md:left-12 md:top-0 md:translate-y-0" />

        <p className="w-full text-2xl md:max-w-[70%] md:text-3xl ">
          Pioneering web development, my projects showcases innovative coding
          for seamless, user-centric functionality. Experience the artistry of
          digital solutions firsthand.
        </p>
      </motion.div>

      <div className="my-3 mt-12 grid w-full justify-items-center gap-y-10 md:my-6 md:mt-24 md:grid-cols-2 md:grid-rows-3 md:gap-20">
        {projects.map((project) => (
          <motion.div
            transition={{ duration: 0.8 }}
            {...animations}
            key={project.id}
            className=" flex w-full cursor-pointer flex-col items-center"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="h-[200px] w-[300px] overflow-hidden rounded-3xl md:h-[350px] md:w-[550px]"
            >
              <Image
                src={project.src}
                alt="projectImage"
                width={1000}
                height={1000}
                className="h-full w-full object-fill "
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1 }}
              initial={{ scale: 0.9 }}
              className="mt-4 "
            >
              <Link
                href={project.link}
                className="inline-flex w-full items-center justify-start gap-3"
              >
                <MdOutlineKeyboardDoubleArrowRight />
                <h2 className="text-lg md:text-2xl">{project.heading}</h2>
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MyWorks;
