import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  MonitorSmartphone,
  Cpu,
  ChevronRight,
  ExternalLink,
  Award,
  GraduationCap,
  Database,
  Globe,
} from "lucide-react";
import heroBg from "../assets/images/hero-bg.png";
import certificateImg from "@assets/webdev_1772569018103.jpeg";
import { Button } from "@/components/ui/button";

export default function Home() {
  const services = [
    {
      title: "Custom Web Development",
      description:
        "Building responsive, visually appealing websites tailored to your brand using modern standards and best practices.",
      icon: Layout,
    },
    {
      title: "Dynamic Web Applications",
      description:
        "Developing interactive, dynamic web applications that provide engaging user experiences and robust functionality.",
      icon: MonitorSmartphone,
    },
    {
      title: "Backend & Database Development",
      description:
        "Creating backend functionality, relational database structures, and web services that support scalable applications.",
      icon: Database,
    },
    {
      title: "Technology Integration",
      description:
        "Applying modern frameworks, deployment tools, and current development practices to keep projects efficient and future-ready.",
      icon: Cpu,
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Relational Databases",
    "Web Services",
    "Git & GitHub",
    "Vercel",
  ];

  const credentials = [
    {
      title: "Web & Computer Programming Certificate",
      issuer: "BYU-Idaho",
      meta: "Completed",
      description:
        "Focused on programming fundamentals, dynamic web pages, user interface design, and modern web development best practices.",
      icon: GraduationCap,
      link: null,
    },
    {
      title: "Web Development Program",
      issuer: "BYU-Idaho",
      meta: "All modules completed — certificate pending issuance",
      description:
        "Completed coursework in databases, frontend development, backend development, web services, and full-stack web applications.",
      icon: Globe,
      link: null,
    },
    {
      title: "Next.js App Router Fundamentals",
      issuer: "Vercel",
      meta: "Issued Jul 2025",
      description:
        "Completed certification covering modern Next.js application structure, routing, and App Router fundamentals.",
      credentialId: "dashboard-app",
      icon: Award,
      link: "https://nextjs.org/learn/certificate?course=dashboard-app&user=78766&certId=dashboard-app-78766-1753386775154",
    },
  ];

  const highlights = [
    "Frontend development with HTML, CSS, JavaScript, React, and Next.js",
    "Backend development and full-stack application workflows",
    "Relational database design and implementation",
    "Modern deployment workflows using GitHub and Vercel",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a
            href="#top"
            className="text-xl font-heading font-bold tracking-tighter"
          >
            TM<span className="text-primary">.</span>
          </a>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#skills" className="hover:text-foreground transition-colors">
              Skills
            </a>
            <a href="#credentials" className="hover:text-foreground transition-colors">
              Credentials
            </a>
            <a href="#contact" className="hover:text-foreground transition-colors">
              Contact
            </a>
            <Button asChild className="rounded-full px-6">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="top"
        className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary mb-6">
              <Code2 className="w-4 h-4 mr-2" />
              <span>Available for new projects and junior developer opportunities</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-6">
              Hi, I&apos;m <span className="text-gradient">Tinny Mosimanyana</span>.
              <br />
              Full-Stack Web Developer.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              I build responsive websites and modern web applications using
              JavaScript, React, Next.js, backend technologies, and relational
              databases.
            </p>

            <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-3xl leading-relaxed">
              I completed the Web &amp; Computer Programming Certificate at
              BYU-Idaho, completed all modules in the Web Development program
              with the certificate still pending issuance, and earned the
              Next.js App Router Fundamentals certification from Vercel.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full px-8 h-14 text-base">
                <a href="#credentials">View My Credentials</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-14 text-base glass-panel border-white/10 hover:bg-white/5"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
              What I Do
            </h2>
            <p className="text-muted-foreground max-w-2xl text-lg">
              I combine programming, design, and modern web technologies to build
              digital products that are clean, functional, and user-focused.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel p-8 rounded-3xl hover:bg-white/[0.04] transition-colors group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold font-heading mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
              Technical Skills
            </h2>
            <p className="text-muted-foreground max-w-2xl text-lg">
              My training and project work cover both frontend and backend web
              development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6 items-start">
            <div className="glass-panel p-8 rounded-3xl">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm md:text-base font-medium text-foreground"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="glass-panel p-8 rounded-3xl">
              <h3 className="text-2xl font-bold font-heading mb-5">
                Core Strengths
              </h3>
              <ul className="space-y-4">
                {highlights.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mt-1.5 mr-3 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </div>
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section
        id="credentials"
        className="py-24 bg-white/[0.02] border-y border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
              Credentials
            </h2>
            <p className="text-muted-foreground max-w-3xl text-lg leading-relaxed">
              My formal training includes web programming, dynamic website
              development, databases, backend systems, and modern frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start">
            <div className="space-y-6">
              {credentials.map((credential, index) => (
                <motion.div
                  key={credential.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="glass-panel p-8 rounded-3xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <credential.icon className="w-7 h-7" />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                        <div>
                          <h3 className="text-2xl font-bold font-heading">
                            {credential.title}
                          </h3>
                          <p className="text-sm text-primary font-medium">
                            {credential.issuer}
                          </p>
                        </div>
                        <span className="text-xs md:text-sm rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-primary">
                          {credential.meta}
                        </span>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {credential.description}
                      </p>

                      {credential.credentialId && (
                        <p className="mt-4 text-sm text-foreground/80">
                          Credential ID:{" "}
                          <span className="font-medium">{credential.credentialId}</span>
                        </p>
                      )}

                      {credential.link && (
                        <div className="mt-5">
                          <Button asChild variant="outline" className="rounded-full glass-panel">
                            <a
                              href={credential.link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              View Credential <ExternalLink className="ml-2 w-4 h-4" />
                            </a>
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="glass-panel p-8 rounded-3xl">
                <h3 className="text-2xl font-bold font-heading mb-4">
                  Coursework Highlights
                </h3>
                <ul className="space-y-4">
                  {[
                    "Introduction to Databases",
                    "Web Frontend Development",
                    "Web Backend Development",
                    "Web Services",
                    "Web Full-Stack Development",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mt-1.5 mr-3 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      </div>
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-3xl blur-3xl" />
              <div className="relative glass-panel p-4 rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border-white/10">
                <img
                  src={certificateImg}
                  alt="BYU-Idaho Web and Computer Programming Certificate"
                  className="w-full h-auto rounded-xl filter contrast-125 saturate-110"
                />
              </div>

              <div className="mt-6 glass-panel p-6 rounded-3xl">
                <h3 className="text-xl font-bold font-heading mb-3">
                  Professional Summary
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I am a developer focused on building practical, modern digital
                  experiences with strong foundations in programming, web
                  technologies, backend systems, and continuous learning.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6">
            Ready to start a project?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let&apos;s collaborate to build something exceptional. I&apos;m
            currently open to freelance work, junior developer roles, and
            full-time opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full px-10 h-16 text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-1"
            >
              <a href="mailto:mosimanyanatinny@gmail.com">
                Let&apos;s Talk <ChevronRight className="ml-2 w-5 h-5" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-16 text-base glass-panel border-white/10 hover:bg-white/5"
            >
              <a
                href="https://github.com/tmosimanyana"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Email:{" "}
            <a
              href="mailto:mosimanyanatinny@gmail.com"
              className="text-primary hover:underline"
            >
              mosimanyanatinny@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 text-center text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} Tinny Mosimanyana. All rights reserved.</p>
      </footer>
    </div>
  );
}