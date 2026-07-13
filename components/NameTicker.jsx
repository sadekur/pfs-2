const keywords = [
  "React", "Next.js", "Node.js", "MongoDB", "WordPress", "REST API",
  "MERN Stack", "Tailwind CSS", "JavaScript", "PHP", "MySQL", "Git",
  "CI/CD", "Docker", "Frontend", "Backend", "Full Stack", "Plugin Dev",
];

const TickerColumn = ({ items, duration, className }) => (
  <div className={`overflow-hidden ticker-mask ${className}`}>
    <div
      className="flex flex-col whitespace-nowrap will-change-transform"
      style={{ animation: `ticker-scroll ${duration}s linear infinite` }}
    >
      {[...items, ...items].map((word, i) => (
        <span key={i} className="py-2 tracking-wide">
          {word}
        </span>
      ))}
    </div>
  </div>
);

export default function NameTicker() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
    >
      <TickerColumn
        items={keywords}
        duration={34}
        className="absolute right-4 top-0 h-full w-[180px] text-right text-white/10 text-sm hidden md:block"
      />
      <TickerColumn
        items={[...keywords].reverse()}
        duration={24}
        className="absolute right-[190px] top-0 h-full w-[220px] text-right text-white/[0.06] text-lg font-semibold hidden lg:block"
      />
    </div>
  );
}
