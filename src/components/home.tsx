import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { LuLoader, LuMoveUpRight } from "react-icons/lu";

import { open_link } from "~/utils";
import { animations, PROJECTS } from "~/data";

const HomePage: React.FC = () => {

  return (
    <>
      {/* side Image */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className=" absolute right-6 top-0 -z-40 block h-[180px] w-[130px] md:h-[500px] md:w-[350px]"
      >
        <Image src={`/b3.png`} alt="sideBanner" width={350} height={500} />
      </motion.div>

      <main className="relative mt-5 flex flex-col gap-4 px-6 md:px-16  ">
        {/* greet heading */}
        <motion.div
          {...animations}
          transition={{ duration: 0.6 }}
          className="justify- mt-4 flex w-full md:mt-0"
        >
          <h1 className="text-3xl md:text-5xl">&#123; Namaste &#125;</h1>
        </motion.div>

        <motion.div
          {...animations}
          transition={{ duration: 0.7 }}
          className="my-5 flex w-full justify-start md:my-8"
        >
          <p className=" text-xl md:max-w-[72%] md:text-3xl">
            Immerse yourself in the wonders of modern technology as I, an
            experienced Full Stack Web Developer from India, explore the latest
            advancements and innovations in the field.
          </p>
        </motion.div>

        {/* tag line*/}
        <motion.div
          {...animations}
          transition={{ duration: 0.8 }}
          className="relative flex w-full flex-col gap-2 md:gap-4 "
        >
          <div
            className="gradientBg2 left-2 top-1/2 -translate-y-1/2  md:top-0 md:translate-y-0"
            style={{ width: "20vw", height: "20vh" }}
          />

          <h1 className="text-4xl md:text-5xl">Creative</h1>
          <h1 className="text-5xl md:text-6xl">
            Software Developer <span className="text-orange-400">.</span>
          </h1>
        </motion.div>

        {/* resume link */}
        <motion.div {...animations} transition={{ duration: 0.8 }}>
          <Link
            href="https://drive.google.com/file/d/1aob5c30w7epk3-gYsDg5n7nGYdhgdgU4/view?usp=sharing"
            className="btn ripple flex w-36 items-center gap-2 transition-[background] duration-500"
            target="_blank"
          >
            Resume <LuMoveUpRight size={20} />
          </Link>
        </motion.div>

        <div className="mx-auto mt-12 h-[1px] w-full bg-white/15" />

        {/* experience */}
        <div className="mt-5 flex w-full flex-col items-center justify-around gap-3 md:mt-10  md:flex-row">
          <motion.div
            transition={{ duration: 0.8 }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full text-center md:w-auto md:text-justify"
          >
            <p className="text-lg font-extrabold">
              Currently Works @ Nucast Pte. Ltd.
            </p>
            <p className=" mt-1 text-lg">as Full Stack Developer</p>
          </motion.div>
          <motion.div
            transition={{ duration: 0.8 }}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Image src={`/nucast.jpg`} alt="nucast" height={150} width={150} />
          </motion.div>
        </div>

        <div className="mx-auto mt-5 h-[1px] w-full bg-white/15 md:mt-10" />

        {/* projects */}
        <>
        <h1 className="text-4xl md:text-5xl text-center my-12">
            Featured Works <span className="text-orange-400">.</span>
          </h1>
        </>
        {PROJECTS ? (
          <div className=" grid w-full grid-cols-1 justify-items-center gap-6 md:my-6 md:grid-flow-row md:grid-cols-2 md:gap-y-10 ">
            {PROJECTS
              .filter((p) => [6, 8, 14, 19].includes(p.id))
              .map((project) => (
                <motion.div
                  transition={{ duration: 0.8 }}
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  key={project.id}
                  onClick={() => open_link(project.link)}
                  className=" flex w-full cursor-pointer flex-col items-center"
                >
                  <motion.div className="h-[90%] w-[90%] overflow-hidden rounded-3xl border border-gray-400/40">
                    {project.src.includes("mp4") ? (
                      <motion.div whileHover={{ scale: 1.15 }}>
                        <ReactPlayer
                          url={project.src}
                          width={`100%`}
                          height={`100%`}
                          controls={false}
                          playing={true}
                          loop={true}
                          muted={true}
                          playsinline={true}
                        />
                      </motion.div>
                    ) : (
                      <>
                        <Image
                          src={project.src}
                          alt="projectImage"
                          width={1000}
                          height={1000}
                          className="h-full w-full object-fill "
                        />
                      </>
                    )}
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1, color: "#6b1cdd" }}
                    initial={{ scale: 0.9 }}
                    className="mt-4 "
                  >
                    <Link
                      href={project.link ?? ""}
                      className="inline-flex w-full items-center justify-start gap-3"
                      target="_blank"
                    >
                      <MdOutlineKeyboardDoubleArrowRight />
                      <h2 className=" text-lg md:text-2xl">
                        {project.heading}
                      </h2>
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
          </div>
        ) : (
          <div className="flex w-full items-center justify-center">
            <LuLoader size={32} className="my-32 animate-spin opacity-50" />
          </div>
        )}
        {PROJECTS && (
          <div className="relative my-3 flex w-full justify-center md:my-6">
            <Link
              href={`/works`}
              className="btn ripple border transition-[background] duration-500"
            >
              Explore More
            </Link>
          </div>
        )}
        <motion.div transition={{ duration: 0.8 }} {...animations}>
          <p className="tex-xl w-full text-justify md:text-2xl">
            As an accomplished software engineer, I am a virtuoso using
            cutting-edge technologies to create pixel-perfect masterpieces.
            Bringing creativity and elegance to each project, my track record
            demonstrates my constant commitment to quality. I work tirelessly to
            produce digital masterpieces that go beyond typical limitations, and
            I thrive on challenging tasks.
          </p>
        </motion.div>

        {/* Banner */}
        <motion.div
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          className="relative my-12 h-auto w-full overflow-hidden rounded-3xl md:h-[500px]"
        >
          <Image
            src="/b1.jpg"
            alt="banner"
            height={1000}
            width={1000}
            className="h-full w-full object-fill "
          />
        </motion.div>
      </main>
    </>
  );
};

export default HomePage;
