import { useState } from 'react'
import styles from './ProjectsSection.module.css'

const projects = [
  {
    id: 1,
    name: 'Lush Engineering',
    description: 'Full website for a Botswana electrical & mechanical engineering company. Features a hero video background, 7-service showcase with modals, compliance registry, project gallery, and a validated contact form.',
    tags: ['HTML/CSS', 'JavaScript', 'Responsive', 'SEO'],
    color: '#c8f03b',
    icon: '⚙️',
    github: 'https://github.com/tmosimanyana/L-engineering',
    demo: 'https://tmosimanyana.github.io/L-engineering/',
  },
  {
    id: 2,
    name: 'Moofar Pty Ltd',
    description: 'Business website for a premium Botswana landscaping & horticulture company. Includes service listings, a photo gallery, structured data for SEO, and mobile-first responsive design. Deployed on Vercel.',
    tags: ['HTML/CSS', 'JavaScript', 'Vercel', 'SEO'],
    color: '#60a5fa',
    icon: '🌿',
    github: 'https://github.com/tmosimanyana',
    demo: 'https://moofar.vercel.app/',
  },
  {
    id: 3,
    name: 'More Coming Soon',
    description: 'Currently building new projects. Open to freelance work — reach out if you need a website for your business.',
    tags: ['In Progress', 'Open to Work'],
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
