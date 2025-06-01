import Image from "next/image";
import Link from "next/link";
import { Element } from "react-scroll";

import { FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

import AceternityIcon from "../common/aceternity-btn";
import { AnimatePresence, motion } from "framer-motion";

const Connect: React.FC = () => {
  const animations = {
    variants: {
      visible: { y: 0, opacity: 1, scale: 1 },
      hidden: { y: 60, opacity: 0, scale: 0.8 },
    },
    whileInView: "visible",
    initial: "hidden",
    transition: {
      duration: 0.8,
    },
    viewport: {
      once: false,
    },
  };

  return (
    <Element
      id="connect"
      name="connect"
      className="relative mb-6 mt-12 px-[4%] sm:px-[6%] "
    >
      <AnimatePresence>
        <div className="relative z-[99] h-full w-full overflow-hidden  ">
          <div className=" h-auto w-full">
            <Image
              src={"/bg-line.svg"}
              alt="image"
              width={1000}
              height={1000}
              className="hidden h-full w-full scale-105 object-cover opacity-50 sm:block"
            />
          </div>
          <div className=" static left-1/2 top-1/2 mb-12 flex flex-col items-center justify-center sm:absolute sm:mb-0 sm:-translate-x-1/2 sm:-translate-y-1/2">
            <motion.div
              {...animations}
              className="hidden max-w-[90vw] text-center font-thunder-semibold text-2xl capitalize tracking-wider sm:block sm:max-w-[80vw] sm:text-4xl"
            >
              If you&apos;re ready to{" "}
              <span className="uppercase text-blue">build</span> something
              amazing,{" "}
              <div className="mt-1.5">
                let&apos;s <span className="uppercase text-blue">connect</span>{" "}
                and <span className="uppercase text-blue">get started</span>.
              </div>
            </motion.div>

            <motion.span
              {...animations}
              className="block max-w-[90vw] text-center font-thunder-semibold text-2xl capitalize tracking-wider sm:hidden sm:max-w-[80vw] sm:text-4xl"
            >
              If you&apos;re ready to{" "}
              <span className="uppercase text-blue">build</span> something
              amazing, let&apos;s{" "}
              <span className="uppercase text-blue">connect</span> and{" "}
              <span className="uppercase text-blue">get started</span>.
            </motion.span>

            <motion.a
              {...animations}
              target="_blank"
              href="mailto:shubhanshusaxena999@gmail.com"
            >
              <AceternityIcon className="mt-4 !text-xs sm:mt-8 sm:!text-sm ">
                Connect Now
                <IoIosArrowForward className="ml-1" />
              </AceternityIcon>
            </motion.a>
          </div>
        </div>

        <motion.div
          {...animations}
          className="flex w-full items-center justify-between pt-5 md:px-16"
        >
          <h1 className="text-left text-xs sm:text-center sm:text-sm">
            developed by{" "}
            <span className="text-blue">
              <span className="text-xs sm:text-sm">@</span>shubhanshu saxena
            </span>
          </h1>
          <ul className="flex gap-4 text-xl">
            <li
              style={{
                background:
                  "radial-gradient(100% 100% at 50% 100%, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 100%) ",
              }}
              className="flex h-[30px] w-[30px] items-center justify-center rounded-lg border  border-[#FFFFFF14] bg-[#05041F14] shadow-deep-inset sm:h-[36px] sm:w-[36px]"
            >
              <Link target="_blank" href="https://twitter.com/Shubhanshu1453">
                <FaTwitter
                  color="#1DA1F2"
                  className="transition-all duration-300 hover:-scale-x-100"
                />
              </Link>
            </li>
            <li
              style={{
                background:
                  "radial-gradient(100% 100% at 50% 100%, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 100%) ",
              }}
              className="flex h-[30px] w-[30px] items-center justify-center rounded-lg border  border-[#FFFFFF14] bg-[#05041F14] shadow-deep-inset sm:h-[36px] sm:w-[36px]"
            >
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/shubhanshu-saxena-902511230/"
              >
                <FaLinkedinIn
                  color="white"
                  className="rounded-sm bg-[#0a66c2] p-[3px] transition-all duration-300 hover:-scale-x-100"
                />
              </Link>
            </li>
            <li
              style={{
                background:
                  "radial-gradient(100% 100% at 50% 100%, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 100%) ",
              }}
              className="flex h-[30px] w-[30px] items-center justify-center rounded-lg border  border-[#FFFFFF14] bg-[#05041F14] shadow-deep-inset sm:h-[36px] sm:w-[36px]"
            >
              <Link target="_blank" href="https://github.com/shubhu2002">
                <FaGithub
                  color="white"
                  className="transition-all duration-300 hover:-scale-x-100"
                />
              </Link>
            </li>
            <li
              style={{
                background:
                  "radial-gradient(100% 100% at 50% 100%, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 100%) ",
              }}
              className="flex h-[30px] w-[30px] items-center justify-center rounded-lg border  border-[#FFFFFF14] bg-[#05041F14] shadow-deep-inset sm:h-[36px] sm:w-[36px]"
            >
              <Link target="_blank" href={"https://wa.me/9074105188"}>
                <FaWhatsapp
                  fill="#25D366"
                  className="transition-all duration-300 hover:-scale-x-100"
                />
              </Link>
            </li>
          </ul>
        </motion.div>
      </AnimatePresence>
    </Element>
  );
};

export default Connect;
