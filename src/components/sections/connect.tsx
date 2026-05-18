import { FiArrowUpRight } from "react-icons/fi";

const Connect = () => {
  return (
    <section className="bg-primary px-4 py-16 md:px-16 md:py-24 lg:px-24">
      <div className="flex flex-col items-center justify-center gap-6">
        <p className="font-helvetica-light text-sm uppercase tracking-[0.25em] text-muted">
          Have a project in mind?
        </p>
        <a
          href="https://www.linkedin.com/in/shubhanshu-saxena-902511230/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-48 w-48 flex-col items-center justify-center rounded-full bg-white transition-transform duration-500 hover:scale-105 sm:h-56 sm:w-56 md:h-64 md:w-64"
        >
          <FiArrowUpRight className="mb-2 text-2xl text-black transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          <span className="font-thunder-bold text-lg uppercase tracking-wider text-black sm:text-xl">
            Let&apos;s
          </span>
          <span className="font-thunder-bold text-lg uppercase tracking-wider text-black sm:text-xl">
            Connect
          </span>
        </a>
      </div>
    </section>
  );
};

export default Connect;
