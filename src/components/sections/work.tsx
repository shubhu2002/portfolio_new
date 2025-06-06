import { useMemo, useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import { Element } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import {
  LuArrowBigRight,
  LuArrowDownToLine,
  LuArrowUpFromLine,
} from "react-icons/lu";

import { PinContainer } from "../ui/Pin";
import { ANIMATION_CONFIG, PROJECTS } from "~/data";
import useIsMobile from "~/hooks/useIsMobile";

const BREAKPOINTS = {
  DESKTOP: 1024,
  TABLET: 640,
};

const PROJECT_HEIGHTS = {
  DESKTOP: { perRow: 3, height: 550 },
  TABLET: { perRow: 2, height: 480 },
  MOBILE: { perRow: 1, height: 550 },
};

const sortedProjects = PROJECTS?.sort((a, b) => b.id - a.id);

const RecentProjects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef<number>(0);

  const [expand, setExpand] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [isClient, setIsClient] = useState(false);

  const isMobile = useIsMobile();

  // Handle client-side mounting
  useEffect(() => {
    setIsClient(true);
    setScreenWidth(window.innerWidth);
  }, []);

  // Handle window resize
  useEffect(() => {
    if (!isClient) return;
    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setScreenWidth(window.innerWidth);
      }, 100);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, [isClient]);

  const fullHeight = useMemo(() => {
    if (!isClient || !screenWidth) return 2000; // Fallback for SSR

    const config =
      screenWidth >= BREAKPOINTS.DESKTOP
        ? PROJECT_HEIGHTS.DESKTOP
        : screenWidth >= BREAKPOINTS.TABLET
          ? PROJECT_HEIGHTS.TABLET
          : PROJECT_HEIGHTS.MOBILE;

    const rows = Math.ceil(PROJECTS.length / config.perRow);
    return rows * config.height + 200;
  }, [isClient, screenWidth]);

  const collapsedHeight = useMemo(
    () => (isMobile ? "1100px" : "800px"),
    [isMobile],
  );

  const handleScroll = useCallback(() => {
    if (!sectionRef.current || !expand) return;

    const currentScrollY = window.scrollY;
    const isScrollingUp = currentScrollY < lastScrollY.current;

    if (isScrollingUp) {
      const sectionRect = sectionRef.current.getBoundingClientRect();
      if (sectionRect.top > window.innerHeight) {
        setExpand(false);
      }
    }

    lastScrollY.current = currentScrollY;
  }, [expand]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const toggleExpand = useCallback(() => {
    setExpand(prev => !prev);
  }, []);
  
  const gradientAnimation = useMemo(() => ({
    opacity: expand ? 0 : 1,
    transition: { duration: 0.3, ease: "linear" }
  }), [expand]);

  const containerAnimation = useMemo(() => ({
    maxHeight: expand ? `${fullHeight}px` : collapsedHeight,
    transition: { duration: 0.3, ease: "linear" }
  }), [expand, fullHeight, collapsedHeight]);

  return (
    <Element name="works" id="works">
      <AnimatePresence>
        <div ref={sectionRef} className=" my-10 px-[4%] sm:my-20 sm:px-[6%] ">
          <motion.div
            {...ANIMATION_CONFIG}
            className="mb-10 font-thunder-semibold text-4xl tracking-wider sm:mb-16 md:text-6xl "
          >
            My <span className="uppercase text-blue">Works</span>
          </motion.div>
          <motion.div
            animate={containerAnimation}
            className={`relative flex flex-wrap items-center justify-around gap-x-16  overflow-hidden transition-all duration-500`}
          >
            <motion.div
              animate={gradientAnimation}
              className="absolute inset-0 z-[70] h-full w-full bg-gradient-to-b from-transparent via-transparent to-[#020013]"
            />
            {sortedProjects.map((item, idx) => (
              <div
                className={`relative flex h-[29rem] w-[80vw] items-center justify-center sm:w-[300px] lg:min-h-[32rem] ${idx < 2 && isMobile && "z-[80]"} ${idx < 3 && !isMobile && "z-[80]"} ${expand && "z-[80]"}`}
                key={item.id}
              >
                <PinContainer
                  title={item.link || item.github_link}
                  href={item.link || item.github_link}
                >
                  <div className="relative mb-1 flex h-[20vh] w-[80vw] items-center justify-center overflow-hidden sm:w-[300px] lg:h-[220px] ">
                    <div
                      className="relative w-fit overflow-hidden lg:rounded-3xl"
                      style={{ backgroundColor: "#13162D" }}
                    >
                      {item.src.includes("mp4") ? (
                        <>
                          <ReactPlayer
                            url={item.src}
                            width={`100%`}
                            height={`100%`}
                            controls={false}
                            playing={true}
                            loop={true}
                            muted={true}
                            playsinline={true}
                          />
                        </>
                      ) : (
                        <Image
                          src={item.src}
                          alt="projectImage"
                          width={1000}
                          height={1000}
                          className="h-full w-full object-fill "
                        />
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-5 ">
                    <div>
                      <span className="text-base">{item.heading}</span>

                      <p className="mt-3 h-20  overflow-hidden text-center text-xs text-tertiary">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      {item.tech_used.map((icon, index) => (
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
                        {item.category.some((c) => c === "nucast")
                          ? "Nucast Pte. Ltd."
                          : "Personal"}
                      </span>
                    </div>
                  </div>
                </PinContainer>
              </div>
            ))}
          </motion.div>
          <div
            onClick={toggleExpand}
            className="mx-auto mt-5 flex w-fit cursor-pointer items-center gap-1 rounded-lg border border-tertiary/20 px-4 py-1.5 shadow-deep-inset sm:mt-2"
          >
            {expand ? "Show Less" : "Show Full"}

            {!expand ? <LuArrowDownToLine /> : <LuArrowUpFromLine />}
          </div>
        </div>
      </AnimatePresence>
    </Element>
  );
};

export default RecentProjects;
