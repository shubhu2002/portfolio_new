import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import { Element } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import { LuLoader, LuChevronLeft, LuChevronRight } from "react-icons/lu";

import { PROJECTS } from "~/data";
import useIsMobile from "~/hooks/useIsMobile";
import { ProjectProps } from "~/types";

interface ProjectCardProps {
  item: ProjectProps;
  idx: number;
  isMobile: boolean;
}

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const sortedProjects: ProjectProps[] =
  PROJECTS?.sort((a, b) => b.id - a.id) || [];

const NewWorks: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const isMobile = useIsMobile();

  const ITEMS_PER_PAGE = isMobile ? 1 : 3;

  // Pagination calculations
  const totalPages = Math.ceil(sortedProjects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProjects = sortedProjects.slice(startIndex, endIndex);

  const handlePageChange = useCallback((page: number): void => {
    setCurrentPage(page);

    // Scroll to top of projects section
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, []);

  // Reset to first page when projects change
  useEffect(() => {
    setCurrentPage(1);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <Element name="works" id="works" className="bg-[#fff4f4]">
      <div
        ref={sectionRef}
        className="px-[4%] py-10 sm:px-[6%] sm:py-20"
        suppressHydrationWarning={true}
      >
        <div className="flex flex-row-reverse w-full items-end justify-between">
          <div className="">
            <div
              className="mb-3 flex w-fit justify-self-end items-center gap-1 rounded-[14px] border border-black/30 bg-[#462916] px-3 py-0.5 pt-1 text-sm text-[#fff5f4]"
              h-auto
            >
              Recent Projects
            </div>

            <AnimatePresence mode="wait">
              <div>
                <motion.h1
                key={"title_work"}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="max-w-[500px] text-right font-cinzel text-5xl font-medium capitalize"
              >
                The Latest  
              </motion.h1>
              <motion.h1
                key={"title_work"}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w- text-nowrap text-right font-cinzel text-5xl font-medium capitalize"
              >
                 Builds in Action
              </motion.h1>
              </div>
            </AnimatePresence>
          </div>

          <motion.div className="mb-1 flex h-full max-w-[700px] items-center gap-8 font-comfortaa font-normal leading-snug">
            <AnimatePresence mode="wait">
              <motion.p
                key="anything"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-left font-comfortaa text-base font-light leading-snug tracking-wider"
              >
                A glimpse into what I’ve been building lately — a blend of
                personal passion projects and collaborative work created
                alongside my current company. Each project reflects my
                curiosity, creativity, and drive to craft meaningful digital
                experiences that blend design, technology, and purpose.
              </motion.p>
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="my-9 mb-16 w-full border-[0.5px] border-dashed border-black/30" />

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            suppressHydrationWarning={true}
            className="flex w-full flex-wrap justify-between"
          >
            {currentProjects.map((item: ProjectProps, idx: number) => (
              <ProjectCard
                key={item.id}
                item={item}
                idx={idx}
                isMobile={isMobile}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="my-10 flex w-full items-center justify-between gap-4">
          <div className="text-nowrap font-comfortaa text-base ">
            {currentPage} / {totalPages}
          </div>

          <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-black/10">
            <motion.div
              className="absolute left-0 top-0 h-full bg-[#462916]"
              initial={{ width: "0%" }}
              animate={{ width: `${(currentPage / totalPages) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </Element>
  );
};

export default NewWorks;

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className=" flex items-center justify-center gap-2 text-xs  sm:text-base ">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`flex items-center justify-center rounded-full bg-[#ffd4b4] p-3 text-black duration-300  disabled:bg-[white] ${currentPage !== 1 && "hover:scale-105 active:scale-95"}`}
      >
        <LuChevronLeft className="text-2xl" />
      </button>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`flex items-center justify-center rounded-full bg-[#ffd4b4] p-3 text-black duration-300 hover:scale-105 disabled:bg-[white] ${currentPage !== totalPages && "hover:scale-105 active:scale-95"}`}
      >
        <LuChevronRight className="text-2xl" />
      </button>
    </div>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({ item, idx, isMobile }) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const descriptionRef = useRef(null);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const isVideoFile = item.src.includes("mp4");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry!.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "100px" },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const finallyVideoLoaded =
    ((isVideoFile && !videoLoaded) || (!isVideoFile && !imageLoaded)) &&
    isVisible;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className={`relative flex h-full w-[400px] flex-col items-start justify-start gap-3 overflow-hidden rounded-xl bg-black/0 ${idx < 2 && isMobile && "z-[80]"} ${idx < 3 && !isMobile && "z-[80]"}`}
    >
      <div
        className={`relative h-[240px] w-fit overflow-hidden rounded-xl 
            ${finallyVideoLoaded && "w-[400px]"}
            `}
        style={{ backgroundColor: "transparent" }}
      >
        {finallyVideoLoaded && (
          <div className="absolute inset-0 z-10  flex items-center justify-center bg-[#462916]/10 backdrop-blur-sm">
            <LuLoader className="animate-spin text-2xl text-black" />
          </div>
        )}

        {isVideoFile ? (
          <ReactPlayer
            url={item.src}
            width={`100%`}
            height={`100%`}
            controls={false}
            playing={isVisible}
            loop={true}
            muted={true}
            playsinline={true}
            onReady={() => setVideoLoaded(true)}
            onStart={() => setVideoLoaded(true)}
            onBuffer={() => setVideoLoaded(false)}
            onBufferEnd={() => setVideoLoaded(true)}
            config={{
              file: {
                attributes: {
                  preload: "metadata",
                  onLoadStart: () => setVideoLoaded(false),
                  onCanPlay: () => setVideoLoaded(true),
                },
              },
            }}
            style={{
              opacity: videoLoaded ? 1 : 0.3,
              transition: "opacity 0.3s ease",
            }}
          />
        ) : (
          <Image
            src={item.src}
            alt="projectImage"
            width={1000}
            height={1000}
            className="h-full w-full object-fill"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            onLoad={() => setImageLoaded(true)}
            onLoadStart={() => setImageLoaded(false)}
            style={{
              opacity: imageLoaded ? 1 : 0.3,
              transition: "opacity 0.3s ease",
            }}
          />
        )}
      </div>

      <div className="px-1 text-left font-comfortaa ">
        <h1 className="font-cinzel text-2xl font-medium capitalize tracking-[0.005em]">
          {item.heading}
        </h1>

        <div className="flex items-center gap-1 pl-0.5 text-left text-xs text-black">
          associated with{" "}
          <span className="text-blue">
            {item.category.some((c: string) => c === "nucast")
              ? item.id === 21
                ? "Esco/Trivolve Tech"
                : "Nucast Pte. Ltd."
              : "Personal"}
          </span>
        </div>

        {/* <p className="my-3  overflow-hidden pl-0.5 text-left text-xs leading-snug text-black">
          {item.description}
        </p> */}

        <div
          ref={descriptionRef}
          className="relative my-3 pl-0.5 text-left text-xs leading-snug text-black"
          onMouseEnter={() => setIsDescriptionExpanded(true)}
          onMouseLeave={() => setIsDescriptionExpanded(false)}
        >
          <p
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{
              maxHeight: isDescriptionExpanded ? '500px' : '4.2em',
              display: '-webkit-box',
              WebkitLineClamp: isDescriptionExpanded ? 'unset' : 3,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {item.description}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {item.tech_used.map((icon: string, index: number) => (
            <div
              key={index}
              className=" flex items-center rounded-lg border border-white/[.2] bg-[#462916] p-1 px-1.5 text-white"
            >
              <span className="text-nowrap text-[10px] ">{icon}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
