import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import { Element } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import {
  LuArrowBigRight,
  LuLoader,
  LuChevronLeft,
  LuChevronRight,
} from "react-icons/lu";

import { PinContainer } from "../ui/Pin";
import { ANIMATION_CONFIG, PROJECTS } from "~/data";
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

const ProjectCard: React.FC<ProjectCardProps> = ({ item, idx, isMobile }) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const cardRef = useRef<HTMLDivElement>(null);

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

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className={`relative flex h-[29rem] w-[80vw] items-center justify-center sm:w-[200px] lg:min-h-[32rem] ${idx < 2 && isMobile && "z-[80]"} ${idx < 3 && !isMobile && "z-[80]"}`}
    >
      <PinContainer
        title={item.link || item.github_link}
        href={item.link || item.github_link}
      >
        <div className="relative mb-1 flex h-[20vh] w-[80vw] items-center justify-center overflow-hidden sm:w-[290px] lg:h-[220px]">
          <div
            className="relative w-fit overflow-hidden lg:rounded-2xl"
            style={{ backgroundColor: "#13162D" }}
          >
            {((isVideoFile && !videoLoaded) ||
              (!isVideoFile && !imageLoaded)) &&
              isVisible && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#13162D]/90 backdrop-blur-sm">
                  <LuLoader className="animate-spin text-2xl text-blue" />
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
        </div>

        <div className="flex flex-col gap-5 mt-3">
          <div>
            <span className="text-base">{item.heading}</span>
            <p className="mt-3 h-20 overflow-hidden text-center text-xs text-tertiary">
              {item.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {item.tech_used.map((icon: string, index: number) => (
              <div
                key={index}
                className="flex items-center rounded-lg border border-white/[.2] bg-black p-1"
              >
                <span className="text-nowrap font-neue-regular text-xs tracking-wider">
                  {icon}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-1 text-left text-xs text-tertiary">
            <LuArrowBigRight /> associated with{" "}
            <span className="text-blue">
              {item.category.some((c: string) => c === "nucast")
                ? item.id === 21
                  ? "Esco/Nucast Pte. Ltd."
                  : "Nucast Pte. Ltd."
                : "Personal"}
            </span>
          </div>
        </div>
      </PinContainer>
    </motion.div>
  );
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const isMobile = useIsMobile();
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = isMobile ? 3 : 4;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const start = Math.max(1, currentPage - 2);
      const end = Math.min(totalPages, start + maxVisible - 1);

      if (start > 1) {
        pages.push(1);
        if (start > 2) pages.push("...");
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (end < totalPages) {
        if (end < totalPages - 1) pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="mt-8 flex items-center justify-center gap-2 text-xs  sm:text-base ">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex cursor-pointer items-center gap-1 rounded-lg border border-tertiary/20 px-3 py-2 transition-colors hover:bg-tertiary/10 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <LuChevronLeft className="text-sm" />
        {!isMobile && "Previous"}
      </button>

      <div className="flex gap-1">
        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === "number" && onPageChange(page)}
            disabled={page === "..."}
            className={`rounded-lg border px-3 py-2 transition-colors  ${
              page === currentPage
                ? "border-blue bg-blue text-white"
                : "border-tertiary/20 hover:bg-tertiary/10"
            } ${page === "..." ? "cursor-default" : ""}`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center gap-1 rounded-lg border border-tertiary/20 px-3 py-2 transition-colors hover:bg-tertiary/10 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {!isMobile && "Next"}
        <LuChevronRight className="text-sm" />
      </button>
    </div>
  );
};

const RecentProjects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const isMobile = useIsMobile();

  const ITEMS_PER_PAGE = isMobile ? 1 : 4;

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
  }, [sortedProjects.length]);

  return (
    <Element name="works" id="works">
      <div ref={sectionRef} className="my-10 px-[4%] sm:my-20 sm:px-[6%]">
        <motion.div
          {...ANIMATION_CONFIG}
          className="mb-10 font-thunder-semibold text-4xl tracking-wider sm:mb-12 md:text-6xl"
        >
          My <span className="uppercase text-blue">Works</span>
        </motion.div>

        {/* Projects count indicator */}
        <div className="mb-10 text-center text-sm text-tertiary sm:mb-4">
          Showing {startIndex + 1}-{Math.min(endIndex, sortedProjects.length)}{" "}
          of {sortedProjects.length} projects
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap items-center justify-around gap-x-16 gap-y-8"
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

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}

        {/* Projects summary */}
        <div className="mt-8 text-center text-xs text-tertiary">
          Page {currentPage} of {totalPages}
        </div>
      </div>
    </Element>
  );
};

export default RecentProjects;
