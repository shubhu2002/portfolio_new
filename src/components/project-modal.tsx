import React from "react";
import Link from "next/link";

import { motion } from "framer-motion";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { RxCrossCircled } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { IoIosLink } from "react-icons/io";

import { useAppStore } from "~/store";
import { getColorName } from "~/data/colors";

const ProjectModal: React.FC = () => {
  const {
    toggleProjectModal,
    activeProjectId,
    setActiveProjectId,
    myProjects,
  } = useAppStore();

  const prevProject = () => {
    if (activeProjectId > 1) {
      setActiveProjectId(activeProjectId - 1);
    }
  };

  const nextProject = () => {
    if (activeProjectId < 14) {
      setActiveProjectId(activeProjectId + 1);
    }
  };

  return (
    <motion.div
      transition={{ duration: 0.2 }}
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      className="fixed bottom-0 left-0 right-0 top-0 z-50 min-h-screen w-full backdrop-blur-lg"
    >
      <div className="flex h-full w-full items-center justify-center ">
        {myProjects
          ?.filter((project) => project.id === activeProjectId)
          ?.map((pr) => (
            <div
              className="relative h-auto w-[90vw] rounded-xl border border-white/5 bg-black/85 p-3 md:h-[85vh] md:w-[700px] md:p-6 "
              key={pr.id}
            >
              <div
                className=" flex h-full w-full flex-col px-2 "
                data-lenis-prevent
              >
                <div className="mb-2 flex w-full justify-between">
                  <div className="inline-flex gap-6">
                    <button
                      onClick={prevProject}
                      disabled={activeProjectId <= 1}
                      className="opacity-85 disabled:opacity-35"
                    >
                      <FaArrowLeftLong size={26} />
                    </button>
                    <button
                      onClick={nextProject}
                      disabled={activeProjectId >= 13}
                      className="opacity-85 disabled:opacity-35"
                    >
                      <FaArrowRightLong size={26} />
                    </button>
                  </div>
                  <button
                    onClick={() => toggleProjectModal(false)}
                    className="opacity-75"
                  >
                    <RxCrossCircled size={42} />
                  </button>
                </div>
                <div className="mb-6 flex w-full justify-center md:mb-10 ">
                  <span className="w-full max-w-[95%] text-center text-[7vw] md:text-[2.5vw]">
                    {pr.heading}
                  </span>
                </div>
                {/* {pr.description && (
                  <div className="mb-6 text-[4.5vw] md:mb-10 md:text-[1.5vw] ">
                    {pr.description}
                  </div>
                )} */}

                {pr.link && (
                  <div className="mb-6 flex flex-col gap-1 text-[4.5vw] md:mb-10 md:flex-row md:items-center md:gap-3 md:text-[1.5vw] ">
                    <div className="flex items-center gap-2 ">
                      <IoIosLink />
                      Deploy Link :
                    </div>
                    <Link
                      href={pr.link ?? ""}
                      target="_blank"
                      className="text-orange-400 "
                    >
                      {pr.link}
                    </Link>
                  </div>
                )}

                <div className="mb-6 flex flex-col gap-1 text-[4.5vw] md:mb-10 md:flex-row md:items-center md:gap-3 md:text-[1.5vw]  ">
                  <div className="flex items-center gap-2 ">
                    <FaGithub />
                    Github Link :
                  </div>
                  {pr.github_link ? (
                    <Link
                      href={pr.github_link ?? ""}
                      className="text-orange-400"
                      target="_blank"
                    >
                      {pr.github_link}
                    </Link>
                  ) : (
                    <span className="text-orange-400">Unauthorized</span>
                  )}
                </div>

                <div className="mb-6 flex w-full flex-col gap-5 md:mb-10">
                  <div className="flex items-center gap-2">
                    <GrTechnology size={24} />
                    <h1 className="text-[4.5vw] md:text-[1.5vw]">
                      Techs Used :
                    </h1>
                  </div>
                  <div className="flex flex-wrap gap-4 gap-y-5 ">
                    {pr.tech_used.map((st, index: number) => (
                      <span
                        className={`rounded-3xl bg-black px-3 py-2 font-mono tracking-wider `}
                        style={{
                          color: `${getColorName(st)}`,
                          border: `1px solid ${getColorName(st)}`,
                        }}
                        key={index}
                      >
                        {st}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </motion.div>
  );
};

export default ProjectModal;
