import { useMemo, useEffect, useRef, useState } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import { Element } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import { LuArrowBigRight, LuArrowDownToLine, LuArrowUpFromLine } from "react-icons/lu";

import { PinContainer } from "../ui/Pin";
import { PROJECTS } from "~/data";
import useIsMobile from "~/hooks/useIsMobile";

const RecentProjects = () => {
    const animations = {
    variants: {
      visible: { y: 0, opacity: 1, scale: 1 },
      hidden: { y: 60, opacity: 0, scale: 0.8 },
    },
    whileInView: "visible",
    initial: "hidden",
    transition: {
      duration: 1,
    },
    viewport: {
      once: false,
    },
  };

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

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isClient]);

  const fullHeight = useMemo(() => {
    if (!isClient || !screenWidth) return 2000; // Fallback for SSR

    let projectsPerRow: number;
    let heightPerProject: number;

    // More accurate breakpoints and heights
    if (screenWidth >= 1024) {
      // Desktop: 3 projects per row
      projectsPerRow = 3;
      heightPerProject = 550; // lg:min-h-[30rem] + gaps
    } else if (screenWidth >= 640) {
      // Tablet: 2 projects per row
      projectsPerRow = 2;
      heightPerProject = 480; // Smaller height for tablet
    } else {
      // Mobile: 1 project per row
      projectsPerRow = 1;
      heightPerProject = 550; // h-[25rem] + gaps for mobile
    }

    const rows = Math.ceil(PROJECTS.length / projectsPerRow);
    const calculatedHeight = rows * heightPerProject;

    // Add some buffer for gaps and margins
    return calculatedHeight + 200;
  }, [isClient, screenWidth]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !expand) return;

      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollY.current;

      // Only check for collapse when scrolling UP
      if (isScrollingUp) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const sectionTop = sectionRect.top;

        // If scrolled up and section top is below the viewport (meaning we scrolled above it)
        if (sectionTop > window.innerHeight) {
          setExpand(false);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [expand]);

  return (
    <Element name="works" id="works">
      <AnimatePresence>
        <div ref={sectionRef} className=" my-10 sm:my-20 px-[4%] sm:px-[6%] ">
          <motion.div
            {...animations}
            className="mb-10 font-thunder-semibold text-4xl tracking-wider sm:mb-16 md:text-6xl "
          >
            My <span className="uppercase text-blue">Works</span>
          </motion.div>
          <motion.div
            animate={{
              maxHeight: expand
                ? `${fullHeight}px`
                : isMobile
                  ? "1100px"
                  : "800px",
            }}
            transition={{
              duration: 0.3,
              ease: "linear",
            }}
            className={`relative flex flex-wrap items-center justify-around gap-x-16  overflow-hidden transition-all duration-500`}
          >
            <motion.div
              animate={{
                opacity: expand ? 0 : 1,
              }}
              transition={{
                duration: 0.3,
                ease: "linear",
              }}
              className="absolute inset-0 z-[70] h-full w-full bg-gradient-to-b from-transparent via-transparent to-[#020013]"
            />
            {PROJECTS?.sort((a, b) => b.id - a.id).map((item, idx) => (
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

                    <div className="text-left text-xs text-tertiary flex items-center gap-1">
                      <LuArrowBigRight/> associated with{" "}
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
            onClick={() => setExpand(!expand)}
            className="mx-auto mt-5 sm:mt-2 flex w-fit cursor-pointer items-center gap-1 rounded-lg border border-tertiary/20 px-4 py-1.5 shadow-deep-inset"
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
