import { useState } from 'react'
import styles from './ProjectsSection.module.css'

const projects = [
  {
    id: 1,
    name: 'Restaurant Website Demo',
    description: 'A modern restaurant website with digital menu, online reservation system, and mobile-first design to bring in more diners.',
    tags: ['HTML/CSS', 'JavaScript', 'Responsive'],
    color: '#c8f03b',
    icon: '🍽️',
    github: 'https://github.com/tmosimanyana',
    demo: '#',
  },
  {
    id: 2,
    name: 'Small Business Website',
    description: 'Clean, professional business site with services listing, about page, and contact form to help local businesses get found online.',
    tags: ['Next.js', 'Tailwind', 'TypeScript'],
    color: '#60a5fa',
    icon: '🏢',
    github: 'https://github.com/tmosimanyana',
    demo: '#',
  },
  {
    id: 3,
    name: 'Product Landing Page',
    description: 'High-converting landing page with bold hero, feature highlights, testimonials, and clear CTA to drive sign-ups.',
    tags: ['React', 'CSS Modules', 'Animations'],
    color: '#f472b6',
    icon: '🚀',
    github: 'https://github.com/tmosimanyana',
    demo: '#',
  },
]

function Mockup({ color }: { color: string }) {
  return (
    <div className={styles.mockup}>
      <div className={styles.mockupBar}>
        <span className={`${styles.dot} ${styles.dotRed}`} />
        <span className={`${styles.dot} ${styles.dotYellow}`} />
        <span className={`${styles.dot} ${styles.dotGreen}`} />
        <div className={styles.mockupUrl} />
      </div>
      <div className={styles.mockupScreen}>
        <div className={styles.mockupLine} style={{ background: color, opacity: 0.75, width: '40%' }} />
        <div className={styles.mockupLine} style={{ width: '70%' }} />
        <div className={styles.mockupLine} style={{ width: '50%' }} />
        <div className={styles.mockupRow}>
          <div className={styles.mockupBlock} />
          <div className={styles.mockupBlock} />
          <div className={styles.mockupBlock} />
        </div>
        <div className={styles.mockupLine} style={{ width: '80%' }} />
        <div className={styles.mockupLine} style={{ width: '60%' }} />
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className={styles.section} id="projects">
      <div className={styles.topBorder} />
      <div className={styles.inner}>
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.label}>
            <span className={styles.labelLine} />
            Selected Work
          </p>
          <h2 className={styles.heading}>Projects</h2>
          <p className={styles.sub}>
            Real websites built with care. Every project ships clean, fast, and mobile-ready.
          </p>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {projects.map((p) => (
            <div
              key={p.id}
              className={styles.card}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                borderColor: hovered === p.id ? p.color + '44' : '#1e1e1e',
                transform: hovered === p.id ? 'translateY(-6px)' : 'translateY(0)',
              }}
            >
              {/* Screenshot */}
              <div
                className={styles.screenshot}
                style={{ background: p.color + '10' }}
              >
                <Mockup color={p.color} />
              </div>

              {/* Body */}
              <div className={styles.body}>
                <div className={styles.titleRow}>
                  <h3 className={styles.projectName}>{p.name}</h3>
                  <span className={styles.icon}>{p.icon}</span>
                </div>
                <p className={styles.desc}>{p.description}</p>

                <div className={styles.tags}>
                  {p.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>

                <div className={styles.links}>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.linkGh}
                    style={hovered === p.id ? { borderColor: p.color, color: p.color } : {}}
                  >
                    ⬡ GitHub
                  </a>
                  <a
                    href={p.demo}
                    className={styles.linkDemo}
                    style={{ background: p.color }}
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
  )
}
