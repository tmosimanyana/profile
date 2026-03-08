import { useState } from "react";

const projects = [
  {
    id: 1,
    name: "Restaurant Website Demo",
    description:
      "A modern restaurant website with digital menu, online reservation system, and mobile-first design to bring in more diners.",
    tags: ["HTML/CSS", "JavaScript", "Responsive"],
    color: "#c8f03b",
    icon: "🍽️",
    github: "https://github.com/tmosimanyana",
    demo: "#",
    accent: "rgba(200,240,59,0.08)",
    border: "rgba(200,240,59,0.2)",
  },
  {
    id: 2,
    name: "Small Business Website",
    description:
      "Clean, professional business site with services listing, about page, and contact form to help local businesses get found online.",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    color: "#60a5fa",
    icon: "🏢",
    github: "https://github.com/tmosimanyana",
    demo: "#",
    accent: "rgba(96,165,250,0.08)",
    border: "rgba(96,165,250,0.2)",
  },
  {
    id: 3,
    name: "Product Landing Page",
    description:
      "High-converting landing page with bold hero, feature highlights, testimonials, and clear call-to-action to drive sign-ups.",
    tags: ["React", "CSS Modules", "Animations"],
    color: "#f472b6",
    icon: "🚀",
    github: "https://github.com/tmosimanyana",
    demo: "#",
    accent: "rgba(244,114,182,0.08)",
    border: "rgba(244,114,182,0.2)",
  },
];

function MockupScreen({ color }: { color: string }) {
  return (
    <div
      className="w-full rounded-[3px] overflow-hidden"
      style={{ background: "#0d0d0d", border: "1px solid #1f1f1f" }}
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-1.5 px-3 py-2"
        style={{ background: "#161616", borderBottom: "1px solid #1f1f1f" }}
      >
        <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
        <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
        <span className="w-2 h-2 rounded-full bg-[#28ca41]" />
        <div
          className="flex-1 ml-2 h-3.5 rounded-sm"
          style={{ background: "#222" }}
        />
      </div>
      {/* Screen content */}
      <div className="p-4 flex flex-col gap-2">
        <div className="h-3 rounded-sm w-2/5" style={{ background: color, opacity: 0.7 }} />
        <div className="h-2 rounded-sm w-3/4" style={{ background: "#2a2a2a" }} />
        <div className="h-2 rounded-sm w-1/2" style={{ background: "#222" }} />
        <div className="mt-1 flex gap-2">
          <div className="h-12 flex-1 rounded-sm" style={{ background: "#1a1a1a" }} />
          <div className="h-12 flex-1 rounded-sm" style={{ background: "#1a1a1a" }} />
          <div className="h-12 flex-1 rounded-sm" style={{ background: "#1a1a1a" }} />
        </div>
        <div className="h-2 rounded-sm w-4/5" style={{ background: "#222" }} />
        <div className="h-2 rounded-sm w-2/3" style={{ background: "#1e1e1e" }} />
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="relative py-28 px-6 md:px-16 overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* Top border line */}
      <div
        className="absolute top-0 left-16 right-16 h-px"
        style={{ background: "linear-gradient(to right, transparent, #c8f03b33, transparent)" }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p
            className="text-[0.68rem] font-bold tracking-[0.2em] uppercase mb-3 flex items-center gap-3"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "#c8f03b" }}
          >
            <span className="block w-6 h-px bg-[#c8f03b]" />
            Selected Work
          </p>
          <h2
            className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.04em] text-white mb-3"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Projects
          </h2>
          <p
            className="text-[#666] text-[0.95rem] font-light max-w-md leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Real websites built with care. Every project ships clean, fast, and
            mobile-ready.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <div
              key={p.id}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              className="flex flex-col rounded-[4px] overflow-hidden transition-all duration-300"
              style={{
                background: "#111",
                border: `1px solid ${hovered === p.id ? p.border : "#1e1e1e"}`,
                transform: hovered === p.id ? "translateY(-5px)" : "translateY(0)",
                boxShadow: hovered === p.id ? `0 20px 40px rgba(0,0,0,0.4)` : "none",
              }}
            >
              {/* Screenshot area */}
              <div
                className="p-5"
                style={{
                  background: p.accent,
                  borderBottom: "1px solid #1e1e1e",
                }}
              >
                <MockupScreen color={p.color} />
              </div>

              {/* Body */}
              <div className="flex flex-col gap-3 p-5 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3
                    className="text-white font-bold text-[0.98rem] leading-snug"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {p.name}
                  </h3>
                  <span className="text-xl">{p.icon}</span>
                </div>

                <p
                  className="text-[#666] text-[0.83rem] leading-relaxed font-light flex-1"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {p.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.68rem] font-semibold tracking-wide px-2.5 py-1 rounded-full"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        background: "#1a1a1a",
                        color: "#888",
                        border: "1px solid #2a2a2a",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2 pt-1">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-2 rounded-[2px] text-[0.78rem] font-semibold transition-all duration-200"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      background: "#1a1a1a",
                      color: "#888",
                      border: "1px solid #2a2a2a",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.borderColor = p.color;
                      (e.target as HTMLElement).style.color = p.color;
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.borderColor = "#2a2a2a";
                      (e.target as HTMLElement).style.color = "#888";
                    }}
                  >
                    ⬡ GitHub
                  </a>
                  <a
                    href={p.demo}
                    className="flex-1 text-center py-2 rounded-[2px] text-[0.78rem] font-bold transition-all duration-200 hover:brightness-110"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      background: p.color,
                      color: "#0a0a0a",
                    }}
                  >
                    ↗ Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
