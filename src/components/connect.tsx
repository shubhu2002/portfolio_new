import Image from "next/image";
import { motion } from "framer-motion";
import { LuMoveUpRight } from "react-icons/lu";

import { CONTACTS, animations } from "~/data";

const Connect: React.FC = () => {
  return (
    <section className="mt-10 flex w-full flex-col items-center justify-between px-6 md:flex-row md:px-16">
      <div className="mb-0 flex flex-col items-start gap-3 md:mb-20 md:gap-8">
        <motion.div transition={{ duration: 0.6 }} {...animations}>
          <h1 className="py-2 text-4xl md:text-5xl">
            Ready To Get In Touch <span className="text-orange-400">?</span>{" "}
          </h1>
          <h1 className="py-2 text-4xl md:text-5xl">
            Let&#39;s Connect{" "}
            <span className="text-6xl text-orange-400">.</span>
          </h1>
        </motion.div>
        <motion.div
          transition={{ duration: 0.8 }}
          {...animations}
          className="my-4"
        >
          <motion.a
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.5 }}
            href="mailto:shubhanshusaxena999@gmail.com"
            className="flex items-center gap-2 text-2xl"
          >
            emailMe <LuMoveUpRight />
          </motion.a>
        </motion.div>

        <motion.div
          transition={{ duration: 1 }}
          {...animations}
          className="mt-5 grid w-full grid-flow-col grid-cols-2 grid-rows-3 gap-5 text-lg"
        >
          {CONTACTS.map((contact) => (
            <a
              href={contact.href}
              target="_blank"
              className="relative flex items-center gap-2"
              key={contact.id}
            >
              {contact.tag}
              <motion.span
                transition={{ duration: 0.5 }}
                whileHover={{ rotate: 360, scale: 1.2 }}
              >
                {contact.icon}
              </motion.span>
            </a>
          ))}
        </motion.div>
      </div>
      <motion.div
        transition={{ duration: 0.8 }}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <Image src="/sidetr.png" alt="img" width={600} height={600}></Image>
      </motion.div>
    </section>
  );
};
export default Connect;
