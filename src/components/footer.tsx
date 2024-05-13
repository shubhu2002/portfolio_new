import Link from "next/link";
import { FaArrowUp } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const isBrowser = () => typeof window !== "undefined";
  function handleClick() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const animations = {
    variants: {
      visible: { x: 0, opacity: 1 },
      hidden: { x: -100, opacity: 0 },
    },
    whileInView: "visible",
    initial: "hidden",
    transition: {
      duration: 1,
    },
    viewport: {
      once: true,
    },
  };

  return (
    <motion.footer
      {...animations}
      className="bottom-0 flex items-center justify-around px-6 py-10  md:px-16"
    >
      <div className="grid gap-0 md:gap-2">
        <h1 className="text-xl md:text-4xl">Connect & </h1>
        <h1 className="text-xl md:text-4xl">Develop With Me</h1>
        <span className="text-lg md:text-xl">Shubhanshu Saxena</span>
        <div className="relative">
          <button
            className="btn ripple rounded-!full mt-4 items-center gap-1 border transition-[background] duration-500 "
            onClick={handleClick}
          >
            Scroll
            <FaArrowUp size={20} />
          </button>
        </div>
      </div>
      <div className="scale-[0.9] md:scale-100">
        <ul className="grid gap-2">
          <li>
            <Link href="/skills">Skill</Link>
          </li>
          <li>
            <Link href="/works">Work</Link>
          </li>
{/*           <li>
            <Link href="/blogs">Blog</Link>
          </li> */}
          <li>
            <Link href="/connect">Connect</Link>
          </li>
        </ul>
      </div>
      <div className="scale-[0.9] md:scale-100">
        <ul className="grid gap-2 text-right md:text-left">
          <li>
            <a href="https://twitter.com/Shubhanshu1453">Twitter</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/shubhanshu-saxena-902511230/">
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/hey.subhuu/">Instagram</a>
          </li>
          <li>
            <a href="https://github.com/shubhu2002">Github</a>
          </li>
        </ul>
      </div>
    </motion.footer>
  );
};

export default Footer;
