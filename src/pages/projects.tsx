import Image from "next/image";
import Link from "next/link";
import { memo, useMemo, useCallback, useState, useRef, useEffect } from "react";
import {
  FiArrowUpRight,
  FiGithub,
  FiArrowLeft,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import { PROJECTS, FILTERS } from "~/data";
import Layout from "~/layout";

const sortedProjects = [...PROJECTS].sort((a, b) => b.id - a.id);

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = useMemo(
    () =>
      activeFilter === "all"
        ? sortedProjects
        : sortedProjects.filter((p) => p.category.includes(activeFilter)),
    [activeFilter],
  );

  const handleFilter = useCallback((select: string) => {
    setActiveFilter(select);
  }, []);

  return (
    <Layout
      title="All Projects"
      description="A collection of 20+ web applications built across blockchain, AI, and modern web technologies."
    >
      <section className="min-h-screen bg-primary px-4 pb-16 pt-24 md:px-16 md:pb-24 md:pt-28 lg:px-24">
        {/* Header */}
        <div className="mb-8 flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 font-helvetica-light text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-white"
          >
            <FiArrowLeft />
            Back
          </Link>
        </div>

        <h1 className="mb-4 font-thunder-extrabold text-4xl uppercase tracking-wide text-white md:mb-6 md:text-7xl lg:text-8xl">
          All Projects
        </h1>

        <p className="mb-8 max-w-2xl font-helvetica-light text-xs leading-relaxed tracking-wide text-gray-400 md:mb-12 md:text-sm">
          A collection of 20+ web applications built across blockchain, AI, and
          modern web technologies — from livestreaming protocols to DeFi
          dashboards and enterprise platforms.
        </p>

        {/* Filters */}
        <div className="mb-10 flex flex-wrap gap-2 md:mb-16 md:gap-3">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => handleFilter(f.select)}
              className={`rounded-full border px-5 py-2.5 font-helvetica-light text-[11px] uppercase tracking-[0.2em] transition-all duration-300 ${
                activeFilter === f.select
                  ? "border-white bg-white text-black"
                  : "border-white/20 text-muted hover:border-white/40 hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
              <ProjectCard
                key={`${project.id}-${project.heading}`}
                project={project}
                priority={i < 6}
              />
            ))}
        </div>

        {/* Back to home */}
        <div className="mt-20 flex justify-center">
          <Link
            href="/"
            className="group flex h-40 w-40 flex-col items-center justify-center rounded-full bg-white transition-transform duration-500 hover:scale-105 sm:h-48 sm:w-48"
          >
            <span className="mb-2 text-xl text-black transition-transform duration-300 group-hover:-translate-x-1">
              &larr;
            </span>
            <span className="font-thunder-bold text-base uppercase tracking-wider text-black sm:text-lg">
              Back Home
            </span>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

const ProjectCard = memo(({ project, priority = false }: { project: (typeof PROJECTS)[number]; priority?: boolean }) => {
  const [expanded, setExpanded] = useState(false);
  const [descExpanded, setDescExpanded] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = descRef.current;
    if (el) setIsClamped(el.scrollHeight > el.clientHeight);
  }, []);

  const imgSrc = project.image;
  const visible = expanded ? project.tech_used : project.tech_used.slice(0, 3);
  const remaining = project.tech_used.length - 3;

  return (
    <div className="group overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04]">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        {imgSrc ? (
          <Image
            src={imgSrc}
            alt={project.heading}
            fill
            priority={priority}
            loading={priority ? "eager" : "lazy"}
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="smoke-gradient-4 h-full w-full opacity-40" />
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="mb-2 font-thunder-bold text-xl uppercase tracking-wide text-white">
          {project.heading}
        </h3>
        <div className="mb-4">
          <p
            ref={descRef}
            className={`font-helvetica-light text-[11px] leading-relaxed text-white/60 ${
              descExpanded ? "" : "line-clamp-2"
            }`}
          >
            {project.description}
          </p>
          {isClamped && (
            <button
              onClick={() => setDescExpanded((prev) => !prev)}
              className="mt-1.5 flex items-center gap-1 font-helvetica-light text-[9px] uppercase tracking-[0.15em] text-white/40 transition-colors hover:text-white/70"
            >
              {descExpanded ? (
                <>
                  Show less
                  <FiChevronUp className="text-[10px]" />
                </>
              ) : (
                <>
                  Read more
                  <FiChevronDown className="text-[10px]" />
                </>
              )}
            </button>
          )}
        </div>

        {/* Tech pills */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {visible.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-helvetica-light text-[9px] uppercase tracking-[0.12em] text-white/50"
            >
              {tech}
            </span>
          ))}
          {remaining > 0 && !expanded && (
            <button
              onClick={() => setExpanded(true)}
              className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-helvetica-light text-[9px] uppercase tracking-[0.12em] text-white/40 transition-colors hover:border-white/20 hover:text-white/60"
            >
              +{remaining}
            </button>
          )}
          {expanded && (
            <button
              onClick={() => setExpanded(false)}
              className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-helvetica-light text-[9px] uppercase tracking-[0.12em] text-white/40 transition-colors hover:border-white/20 hover:text-white/60"
            >
              −
            </button>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 border-t border-white/[0.06] pt-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-helvetica-light text-[10px] uppercase tracking-[0.15em] text-white/70 transition-colors hover:text-white"
            >
              Live
              <FiArrowUpRight className="text-xs" />
            </a>
          )}
          {project.link2 && (
            <a
              href={project.link2}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-helvetica-light text-[10px] uppercase tracking-[0.15em] text-white/40 transition-colors hover:text-white"
            >
              App
              <FiArrowUpRight className="text-xs" />
            </a>
          )}
          {project.github_link && (
            <a
              href={project.github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-helvetica-light text-[10px] uppercase tracking-[0.15em] text-white/40 transition-colors hover:text-white"
            >
              <FiGithub className="text-xs" />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = "ProjectCard";

export default ProjectsPage;
