import Image from "next/image";
import Link from "next/link";
import { Element } from "react-scroll";
import { PROJECTS } from "~/data";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import useIsMobile from "~/hooks/useIsMobile";

const Gallery = () => {
  const isMobile = useIsMobile();
  const getProject = (id: number) => PROJECTS.find((p) => p.id === id);

  const p1 = getProject(22);
  const p2 = getProject(21);
  const p3 = getProject(12);
  const p4 = getProject(20);
  const p5 = getProject(8);
  const p6 = getProject(14);

  return (
    <Element name="works" id="works">
      <section className="bg-primary px-4 py-16 md:px-16 md:py-28 lg:px-24">
        <div className="mb-10 flex items-end justify-between md:mb-16">
          <h2 className="font-thunder-extrabold text-4xl uppercase tracking-wide text-white md:text-7xl lg:text-8xl">
            Selected
            <br />
            Projects
          </h2>
          <Link
            href="/projects"
            className="group flex items-center gap-2 font-helvetica-light text-[11px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-white md:text-sm"
          >
            View All
            <FiArrowUpRight className="text-sm transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="flex flex-col gap-6">
          {/* Row 1: 1 tall left + 2 stacked right */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
            <div className="md:col-span-3">
              {p1 && (
                <ProjectCard project={p1} className="h-full" aspectClass="" />
              )}
            </div>
            <div className="flex flex-col gap-6 md:col-span-2">
              {p1 && p2 && (
                <ProjectCard
                  project={isMobile ? p1 : p2}
                  aspectClass="aspect-[16/9]"
                />
              )}
              {p2 && p3 && (
                <ProjectCard
                  project={isMobile ? p2 : p3}
                  aspectClass="aspect-[16/9]"
                />
              )}
            </div>
          </div>

          {/* Row 2: 2 stacked left + 1 tall right */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
            <div className="flex flex-col gap-6 md:col-span-2">
              {p4 && <ProjectCard project={p4} aspectClass="aspect-[16/9]" />}
              {p5 && <ProjectCard project={p5} aspectClass="aspect-[16/9]" />}
            </div>
            <div className="md:col-span-3">
              {p6 && (
                <ProjectCard project={p6} className="h-full" aspectClass="" />
              )}
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

interface ProjectCardProps {
  project: (typeof PROJECTS)[number];
  className?: string;
  aspectClass?: string;
}

const ProjectCard = ({
  project,
  className = "",
  aspectClass = "aspect-[4/3]",
}: ProjectCardProps) => {
  const imgSrc = project.image;

  return (
    <div
      className={`group relative ${aspectClass} overflow-hidden rounded-2xl transition-transform duration-500 hover:scale-[1.01] ${className} border border-muted/20`}
    >
      {imgSrc && (
        <Image
          src={imgSrc}
          alt={project.heading}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 60vw"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/10 transition-opacity duration-500 group-hover:from-black/95" />

      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        {/* <div className="flex flex-wrap gap-2">
          {project.tech_used.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/20 bg-black/40 px-3 py-1 font-helvetica-light text-[10px] uppercase tracking-[0.15em] text-white/80 backdrop-blur-md"
            >
              {tech}
            </span>
          ))}
        </div> */}

        <div>
          <h3 className="mb-1 font-thunder-bold text-2xl uppercase tracking-wide text-white md:text-3xl">
            {project.heading}
          </h3>
          <p className="mb-2.5 line-clamp-2 max-w-lg font-helvetica-light text-xs leading-relaxed text-white/60">
            {project.description}
          </p>
          <div className="flex items-center gap-4">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-helvetica-light text-[11px] uppercase tracking-[0.2em] text-white transition-colors hover:text-white/80"
              >
                Live Demo
                <FiArrowUpRight className="text-sm" />
              </a>
            )}
            {project.link2 && (
              <a
                href={project.link2}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-helvetica-light text-[11px] uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white"
              >
                App
                <FiArrowUpRight className="text-sm" />
              </a>
            )}
            {project.github_link && (
              <a
                href={project.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-helvetica-light text-[11px] uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white"
              >
                <FiGithub className="text-sm" />
                Source
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
