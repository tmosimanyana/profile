import { useState } from "react";

const services = [
  {
    icon: "🌐",
    name: "Business Websites",
    desc: "Professional, fast-loading websites that represent your brand and bring in new customers.",
  },
  {
    icon: "🚀",
    name: "Landing Pages",
    desc: "Focused pages built to convert visitors into paying customers for your product or service.",
  },
  {
    icon: "♻️",
    name: "Website Redesign",
    desc: "Modernize an outdated site with a fresh look, faster performance, and better mobile experience.",
  },
  {
    icon: "📱",
    name: "Mobile-First Design",
    desc: "Every site I build looks and works perfectly on phones — because that's where your customers are.",
  },
];

const contacts = [
  {
    label: "Email",
    value: "mosimanyanatinny@gmail.com",
    href: "mailto:mosimanyanatinny@gmail.com",
    icon: "✉",
  },
  {
    label: "GitHub",
    value: "github.com/tmosimanyana",
    href: "https://github.com/tmosimanyana",
    icon: "⬡",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/m-tinny",
    href: "https://linkedin.com/in/m-tinny",
    icon: "in",
  },
];

export default function HireSection() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mosimanyanatinny@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hire"
      className="relative overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* Services strip */}
      <div
        className="py-24 px-6 md:px-16 relative"
        style={{ borderTop: "1px solid #1a1a1a" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left label */}
            <div>
              <p
                className="text-[0.68rem] font-bold tracking-[0.2em] uppercase mb-3 flex items-center gap-3"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "#c8f03b" }}
              >
                <span className="block w-6 h-px bg-[#c8f03b]" />
                What I Offer
              </p>
              <h2
                className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.04em] text-white mb-4"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Services
              </h2>
              <p
                className="text-[#555] text-[0.95rem] leading-relaxed font-light max-w-sm"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Simple, effective web solutions built for small businesses that
                want to grow online.
              </p>
            </div>

            {/* Services grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((s, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredService(i)}
                  onMouseLeave={() => setHoveredService(null)}
                  className="p-5 rounded-[3px] transition-all duration-250 cursor-default"
                  style={{
                    background: hoveredService === i ? "#c8f03b" : "#111",
                    border: `1px solid ${hoveredService === i ? "#c8f03b" : "#1e1e1e"}`,
                    transform: hoveredService === i ? "translateY(-3px)" : "none",
                  }}
                >
                  <span className="text-2xl block mb-3">{s.icon}</span>
                  <h3
                    className="font-bold text-[0.95rem] mb-1.5 transition-colors duration-200"
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      color: hoveredService === i ? "#0a0a0a" : "#fff",
                    }}
                  >
                    {s.name}
                  </h3>
                  <p
                    className="text-[0.8rem] leading-relaxed font-light transition-colors duration-200"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: hoveredService === i ? "#333" : "#666",
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA / Hire block */}
      <div
        className="relative py-24 px-6 md:px-16 overflow-hidden"
        style={{ background: "#c8f03b" }}
      >
        {/* Decorative large text */}
        <div
          className="pointer-events-none select-none absolute -top-6 right-0 text-[12rem] font-black leading-none opacity-[0.07] tracking-tighter"
          style={{ fontFamily: "'Syne', sans-serif", color: "#0a0a0a" }}
          aria-hidden
        >
          HIRE
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <p
                className="text-[0.68rem] font-bold tracking-[0.2em] uppercase mb-3 text-[#333] flex items-center gap-3"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <span className="block w-6 h-px bg-[#333]" />
                Let's Work Together
              </p>
              <h2
                className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-0.04em] text-[#0a0a0a] mb-4 leading-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Work With Me
              </h2>
              <p
                className="text-[#333] text-[1rem] leading-[1.75] font-light mb-8 max-w-md"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                I help small businesses create simple websites that get more
                customers online.{" "}
                <strong className="font-semibold text-[#0a0a0a]">
                  Available for freelance projects right now.
                </strong>
              </p>

              {/* Hire button */}
              <div className="flex gap-3 flex-wrap">
                <a
                  href="mailto:mosimanyanatinny@gmail.com"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-[3px] font-bold text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    background: "#0a0a0a",
                    color: "#c8f03b",
                  }}
                >
                  Hire Me
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-[3px] font-semibold text-sm tracking-wide border border-[#0a0a0a]/20 text-[#0a0a0a] hover:bg-[#0a0a0a]/10 transition-all duration-200"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {copied ? "✓ Copied!" : "Copy Email"}
                </button>
              </div>
            </div>

            {/* Right — contact cards */}
            <div className="flex flex-col gap-3">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-[3px] transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "rgba(10,10,10,0.08)",
                    border: "1px solid rgba(10,10,10,0.12)",
                  }}
                >
                  <span
                    className="w-9 h-9 flex items-center justify-center rounded-[2px] font-bold text-sm flex-shrink-0 transition-colors duration-200"
                    style={{
                      background: "#0a0a0a",
                      color: "#c8f03b",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {c.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-[0.68rem] font-bold tracking-[0.12em] uppercase text-[#333] mb-0.5"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {c.label}
                    </p>
                    <p
                      className="text-[0.85rem] font-medium text-[#0a0a0a] truncate group-hover:underline"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {c.value}
                    </p>
                  </div>
                  <span className="text-[#0a0a0a]/40 group-hover:text-[#0a0a0a] transition-colors duration-200 text-sm">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="py-6 px-6 md:px-16 text-center"
        style={{ background: "#050505", borderTop: "1px solid #111" }}
      >
        <p
          className="text-[0.75rem] tracking-[0.06em]"
          style={{ fontFamily: "'DM Sans', sans-serif", color: "#333" }}
        >
          © {new Date().getFullYear()}{" "}
          <span style={{ color: "#c8f03b" }}>Tinny Mosimanyana</span> · Tinie
          Systems · Built with care in Botswana 🇧🇼
        </p>
      </footer>
    </section>
  );
}
