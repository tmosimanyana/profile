import { motion } from "framer-motion";
import { Code2, Layout, MonitorSmartphone, Cpu, Terminal, ChevronRight, ExternalLink } from "lucide-react";
import heroBg from "../assets/images/hero-bg.png";
import certificateImg from "@assets/webdev_1772569018103.jpeg";
import { Button } from "@/components/ui/button";

export default function Home() {
  const services = [
    {
      title: "Custom Web Development",
      description: "Building responsive, visually appealing websites tailored to your brand using modern standards and best practices.",
      icon: Layout,
    },
    {
      title: "Dynamic Web Applications",
      description: "Developing interactive, dynamic web applications that provide engaging user experiences and robust functionality.",
      icon: MonitorSmartphone,
    },
    {
      title: "Software Programming",
      description: "Writing clean, efficient programs to accomplish meaningful tasks across a variety of domains and platforms.",
      icon: Terminal,
    },
    {
      title: "Technology Integration",
      description: "Learning and applying the latest technologies and techniques to ensure your projects are future-proof.",
      icon: Cpu,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-heading font-bold tracking-tighter">
            TM<span className="text-primary">.</span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#credentials" className="hover:text-foreground transition-colors">Credentials</a>
            <Button className="rounded-full px-6">Get in Touch</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
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
            className="max-w-3xl"
          >
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary mb-6">
              <Code2 className="w-4 h-4 mr-2" />
              <span>Available for new projects</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-6">
              Hi, I'm <span className="text-gradient">Tinny Mosimanyana</span>.<br/>
              Web & Computer Programmer.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Certified by Brigham Young University-Idaho. I specialize in designing visually appealing websites, developing dynamic web pages, and writing programs that accomplish meaningful tasks.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full px-8 h-14 text-base">
                View My Services
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base glass-panel border-white/10 hover:bg-white/5">
                Contact Me
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">What I Do</h2>
            <p className="text-muted-foreground max-w-2xl text-lg">
              Leveraging my education and skills to build robust, scalable, and beautiful digital experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel p-8 rounded-3xl hover:bg-white/[0.04] transition-colors group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold font-heading mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section id="credentials" className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Verified Expertise</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I hold a certificate in Web and Computer Programming from Brigham Young University-Idaho, demonstrating my commitment to learning and applying modern technology standards.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Write programs to accomplish meaningful tasks",
                  "Design websites that are visually appealing",
                  "Develop dynamic webpages following best practices",
                  "Learn and apply new technology in programming"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mt-1.5 mr-3 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </div>
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant="outline" className="rounded-full px-6 glass-panel">
                Verify Credential <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
            
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
                  alt="BYU-Idaho Certificate in Web and Computer Programming" 
                  className="w-full h-auto rounded-xl filter contrast-125 saturate-110"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6">Ready to start a project?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let's collaborate to build something exceptional. I'm currently available for freelance work and full-time opportunities.
          </p>
          <Button size="lg" className="rounded-full px-10 h-16 text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-1">
            Let's Talk <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-white/5 py-12 text-center text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} Tinny Mosimanyana. All rights reserved.</p>
      </footer>
    </div>
  );
}
