import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import HireSection from "@/components/HireSection";

// Simple sticky nav
function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-4"
      style={{
        background: "rgba(10,10,10,0.85)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Logo */}
      <span
        className="font-extrabold text-[1rem] tracking-[-0.03em] text-white"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        <span
          className="px-1 mr-0.5"
          style={{ background: "#c8f03b", color: "#0a0a0a" }}
        >
          T
        </span>
        Tinny Mosimanyana
      </span>

      {/* Links */}
      <ul className="hidden md:flex items-center gap-8 list-none">
        {["Projects", "Services", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase() === "contact" ? "hire" : item.toLowerCase()}`}
              className="text-[0.83rem] font-medium text-[#888] hover:text-white transition-colors duration-200 tracking-wide"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Badge */}
      <span
        className="text-[0.68rem] font-bold tracking-[0.1em] uppercase px-3 py-1.5 rounded-full"
        style={{
          background: "rgba(200,240,59,0.12)",
          color: "#c8f03b",
          border: "1px solid rgba(200,240,59,0.2)",
        }}
      >
        Available for hire
      </span>
    </nav>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#0a0a0a" }}>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <HireSection />
    </div>
  );
}
