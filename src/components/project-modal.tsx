import React from "react";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import { RxCrossCircled } from "react-icons/rx";
import { CiLink } from "react-icons/ci";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import { projects } from "~/data/config";
import { useAppStore } from "~/store";

const ProjectModal: React.FC = () => {
  const { toggleProjectModal, activeProjectId, setActiveProjectId } =
    useAppStore();

  const prevProject = () => {
    if (activeProjectId > 1) {
      setActiveProjectId(activeProjectId - 1);
    }
  };

  const nextProject = () => {
    if (activeProjectId < 7) {
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
      <div className="flex h-full w-full items-center justify-center">
        {projects
          .filter((project) => project.id === activeProjectId)
          .map((pr) => (
            <div className="relative h-[85vh] w-[90vw] rounded-xl border border-white/5 bg-black/85 p-3 md:w-[80vw] md:p-6 " key={pr.id} >
              <div className=" flex h-full w-full flex-col overflow-y-scroll px-2 " data-lenis-prevent>
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
                      disabled={activeProjectId >= 7}
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
                <div className="mb-6 w-full text-center text-[7vw] md:mb-10 md:text-[2.5vw]">
                  {pr.heading}
                </div>
                <div className="mb-6 text-[4.5vw] md:mb-10 md:text-[1.5vw] ">
                  {pr.description}
                </div>
                <div className="mb-6 inline-flex gap-2 text-[4.5vw] md:mb-10 md:text-[1.5vw] ">
                  <CiLink size={32} />
                  <Link href={pr.link} className="hover:text-orange-400">
                    {pr.link}
                  </Link>
                </div>

                <div className="mb-6 flex w-full flex-wrap gap-3 md:mb-10">
                  {pr.stacks.map((st,index:number) => (
                    <span className="rounded-3xl bg-gray-500/15 px-4 py-2.5 tracking-wider"key={index}>
                      {st}
                    </span>
                  ))}
                </div>
                <div className="mb-6 grid w-full grid-flow-row justify-center gap-5 md:mb-10 md:grid-cols-2  ">
                  {pr.images.map((img,index:number) => (
                    <Image
                      src={img}
                      alt="img"
                      width={1000}
                      height={1000}
                      className=" w-[1000px] rounded-xl border border-white/5 md:h-[300px] "
                      key={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </motion.div>
  );
};

export default ProjectModal;
