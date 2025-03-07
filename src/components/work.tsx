import Link from "next/link";
import Image from "next/image";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import { useAppStore } from "~/store";
import ReactPlayer from "react-player";
import { useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { FILTERS } from "~/data/config";
import { useQuery } from "@tanstack/react-query";
import { apiInstance } from "~/utils";
import { ProjectProps } from "~/types";

const MyWorks: React.FC = () => {
  const { toggleProjectModal } = useAppStore();
  const [loading, setLoading] = useState<boolean>(true);
  const [category, setCategory] = useState<{ txt: string; activeId: number }>({
    txt: "all",
    activeId: 1,
  });
  const animations = {
    variants: {
      visible: { x: 0, opacity: 1 },
      hidden: { x: -100, opacity: 0 },
    },
    whileInView: "visible",
    initial: "hidden",
    viewport: { once: true },
  };
  const handleClick = (ProjectId: number) => {
    toggleProjectModal(true, ProjectId);
  };

  const { data: projectData } = useQuery({
    queryKey: ["myProjects"],
    queryFn: async ({ signal }) =>
      apiInstance
        .get<{ success: boolean; data: ProjectProps[] }>("/projects/all", {
          signal,
        })
        .then((res) => res.data.data),
  });

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
        <div className="gradientBg2 -left-2 top-1/2 z-50 -translate-y-1/2 md:left-12 md:top-0 md:translate-y-0" />

        <p className="w-full text-2xl md:max-w-[70%] md:text-3xl ">
          Pioneering web development, my projects showcases innovative coding
          for seamless, user-centric functionality. Experience the artistry of
          digital solutions firsthand.
        </p>
      </motion.div>

      <div className="my-3 mt-12 md:my-6 md:mt-24">
        <div className="flex w-full flex-col items-center gap-6 px-4 py-6 md:px-0 ">
          <div className="flex items-center gap-0 rounded-[40px] bg-white/10 p-2 md:gap-4 md:p-4">
            {FILTERS.map((filter) => (
              <span
                key={filter.id}
                className={`relative z-[1] w-auto cursor-pointer rounded-3xl ${category.activeId === filter.id ? "" : ""} px-4 py-3 text-center text-[16px] transition-all duration-300 ${filter.label === "All" ? "px-8" : ""}`}
                onClick={() =>
                  setCategory({ txt: filter.select, activeId: filter.id })
                }
              >
                {filter.label}
                {category.activeId === filter.id && (
                  <motion.div
                    className="absolute inset-0 z-[-1] rounded-full bg-purple-600"
                    layoutId="activeOptionBackground"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </span>
            ))}
          </div>

          <div className="mt-8 grid w-full justify-items-center gap-y-10 md:grid-cols-2 md:grid-rows-3 md:gap-y-16">
            {projectData
              ?.filter(
                (c) => c.category && c.category.includes(`${category.txt}`),
              )
              .reverse()
              .map((project) => (
                <motion.div
                  key={project.id}
                  transition={{ duration: 0.8 }}
                  {...animations}
                  className=" flex w-full cursor-pointer flex-col items-center"
                >
                  <motion.div
                    whileHover={{ scale: 1 }}
                    className="relative h-[90%] w-[90%] overflow-hidden rounded-3xl border border-gray-400/40"
                    onClick={() => handleClick(project.id)}
                  >
                    {project.src.includes("mp4") ? (
                      <motion.div whileHover={{ scale: 1.15 }}>
                        {loading && (
                          <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center">
                            <BiLoaderCircle
                              className="animate-spin"
                              color="#ffffff"
                              size={22}
                            />
                          </div>
                        )}
                        <ReactPlayer
                          onReady={() => setLoading(false)}
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
                      <motion.div whileHover={{ scale: 1.15 }}>
                        <Image
                          src={project.src}
                          alt="projectImage"
                          width={1000}
                          height={1000}
                          className="h-full w-full object-fill "
                        />
                      </motion.div>
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
                      <h2 className="text-lg md:text-2xl">{project.heading}</h2>
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWorks;
