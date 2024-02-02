import Link from "next/link";
import { motion } from "framer-motion";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  const animations = {
    variants: {
      visible: { y: 0 },
      hidden: { y: -100 },
    },
    whileInView: "visible",
    initial: "hidden",
  };

  function handleClick() {
    setShow(!show);
  }

  return (
    <motion.div
      transition={{ duration: 0.55 }}
      {...animations}
      className="sticky left-0 right-0 top-3 z-50 w-full p-1 px-4 md:px-8"
    >
      <div className=" relative flex h-20 w-full items-center justify-between rounded-xl  px-5 backdrop-blur-lg md:px-10">
        <div>
          <Link href={`/`}>
            <span className="text-lg font-extrabold md:text-2xl">
              Shubhanshu
            </span>
          </Link>
        </div>
        <div className="hidden items-center gap-4 md:flex ">
          <Link href="/skills" className="linkButton">
            Skills
          </Link>
          <Link href="/works" className="linkButton">
            Work
          </Link>
          <Link href="/blogs" className="linkButton">
            Blogs
          </Link>
          <Link href="/connect" className="linkButton">
            Connect
          </Link>
        </div>
        <div className="block md:hidden">
          {show ? (
            <RxCross2 size={32} onClick={handleClick} />
          ) : (
            <RiMenu3Fill size={32} onClick={handleClick} />
          )}
        </div>
      </div>
      <motion.div
        transition={{ duration: 0.3 }}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: {
            ease: "easeInOut",
            duration: 0.3,
          },
        }}
        exit={{ opacity: 0 }}
        className={`absolute right-6 -z-[99] mt-2 w-[90%] flex-col items-center  gap-2 rounded-xl bg-white  py-4 ${show ? "flex" : "hidden"} bg-opacity-5 backdrop-blur-lg`}
      >
        <Link href="/skills" className="linkButton">
          Skills
        </Link>
        <Link href="/works" className="linkButton">
          Work
        </Link>
        <Link href="/blogs" className="linkButton">
          Blogs
        </Link>
        <Link href="/connect" className="linkButton">
          Connect
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
