import { useEffect, useState } from "react";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      style={{ fontFamily: "'Syne', sans-serif" }}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background grain + glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(200,240,59,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div className="flex flex-col gap-6">
          {/* Eyebrow */}
          <div
            className="flex items-center gap-3 transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "0.1s",
            }}
          >
            <span className="block w-7 h-px bg-[#c8f03b]" />
            <span
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-[#c8f03b]"
            >
              Web Developer · Founder of Tinie Systems
            </span>
          </div>

          {/* Name */}
          <h1
            className="text-[clamp(3rem,7vw,5.5rem)] font-extrabold leading-[1.02] tracking-[-0.04em] text-white transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transitionDelay: "0.2s",
            }}
          >
            Tinny
            <br />
            <span style={{ color: "#c8f03b" }}>Mosimanyana</span>
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "0.35s",
            }}
            className="text-[1.05rem] leading-[1.75] text-[#999] max-w-[440px] font-light transition-all duration-700"
          >
            I build simple, modern websites that help small businesses attract
            more customers online.{" "}
            <span className="text-white font-normal">
              Clean code. Real results.
            </span>
          </p>

          {/* Buttons */}
          <div
            className="flex gap-3 flex-wrap transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "0.5s",
            }}
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-[3px] font-semibold text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                background: "#c8f03b",
                color: "#0a0a0a",
              }}
            >
              View Projects
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#hire"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-[3px] font-semibold text-sm tracking-wide border border-white/20 text-white hover:border-[#c8f03b] hover:text-[#c8f03b] transition-all duration-200 hover:-translate-y-0.5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Contact Me
            </a>
          </div>

          {/* Available badge */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transitionDelay: "0.65s",
            }}
          >
            <span
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.1em] uppercase px-3 py-1.5 rounded-full"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                background: "rgba(200,240,59,0.12)",
                color: "#c8f03b",
                border: "1px solid rgba(200,240,59,0.25)",
              }}
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c8f03b] animate-pulse" />
              Available for freelance projects
            </span>
          </div>
        </div>

        {/* RIGHT — profile card */}
        <div
          className="hidden lg:flex justify-center items-center transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transitionDelay: "0.4s",
          }}
        >
          <div
            className="relative w-[320px] p-7 rounded-[4px]"
            style={{
              background: "#111",
              border: "1px solid #222",
              boxShadow: "10px 10px 0 #c8f03b",
            }}
          >
            <p
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[#c8f03b] mb-5"
            >
              Developer Profile
            </p>
            {[
              ["Location", "Botswana 🇧🇼"],
              ["Speciality", "Web Development"],
              ["Brand", "Tinie Systems"],
              ["GitHub", "tmosimanyana"],
              ["Focus", "Small Businesses"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex justify-between items-center py-2.5 border-b border-white/5 last:border-none"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <span className="text-[0.82rem] text-[#666]">{label}</span>
                <span className="text-[0.82rem] font-semibold text-white">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700"
        style={{ opacity: visible ? 0.4 : 0, transitionDelay: "1s" }}
      >
        <span
          style={{ fontFamily: "'DM Sans', sans-serif" }}
          className="text-[0.65rem] tracking-[0.2em] uppercase text-white"
        >
          Scroll
        </span>
        <div className="w-px h-8 bg-white/30 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-full bg-[#c8f03b]"
            style={{ animation: "scrollDrop 1.6s ease-in-out infinite" }}
          />
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
        @keyframes scrollDrop {
          0%   { transform: translateY(-100%); }
          50%  { transform: translateY(100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
}
