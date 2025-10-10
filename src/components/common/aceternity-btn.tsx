const AceternityIcon = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={`relative inline-flex bg-pink- font-comfortaa overflow-hidden text-base rounded-[14px] p-[1px] ${className} group active:scale-95 transition-all duration-300`}
    >
      <span
        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#fff4f4_0%,#ffd4b4_50%,#ffd4b4_100%)]"
      />
      <span
        className="inline-flex h-full w-full cursor-pointer items-center justify-center 
        rounded-[14px] bg-[#462916] group-hover:bg-transparent transition-all duration-300 px-6 py-2.5 hover:text-black text-white backdrop-blur-3xl"
      >
        {children}
      </span>
    </button>
  );
};

export default AceternityIcon;
