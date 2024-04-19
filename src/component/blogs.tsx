import { motion } from "framer-motion";
import { NextPage } from "next";

const blogs: NextPage = () => {
  const animations = {
    variants: {
      visible: { opacity: 1 },
      hidden: { opacity: 0 },
    },
    whileInView: "visible",
    initial: "hidden",
  };
  return (
    <section className="my-52 flex w-full items-center justify-center">
      <div className="gradientBg absolute left-4 -z-50 md:left-16"></div>
      <motion.h1
        {...animations}
        transition={{ duration: 2 }}
        className="text-center text-7xl md:text-9xl"
      >
        Coming Soon{" "}
      </motion.h1>
      <div className="gradientBg absolute right-4 -z-50 md:right-16 "></div>
    </section>
  );
};

export default blogs;
