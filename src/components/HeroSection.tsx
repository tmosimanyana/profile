import { useEffect, useState } from 'react'
import styles from './HeroSection.module.css'

const stats = [
  ['Location', 'Botswana 🇧🇼'],
  ['Speciality', 'Web Development'],
  ['Brand', 'Tinie Systems'],
  ['GitHub', 'tmosimanyana'],
  ['Focus', 'Small Businesses'],
]

export default function HeroSection() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className={styles.hero} id="home">
      {/* Background glow */}
      <div className={styles.glow} />
      <div className={styles.grain} />

      <div className={styles.inner}>
        {/* LEFT */}
        <div className={styles.left}>
          <div className={`${styles.eyebrow} ${visible ? styles.visible : ''}`}>
            <span className={styles.eyebrowLine} />
            Web Developer · Founder of Tinie Systems
          </div>

          <h1 className={`${styles.name} ${visible ? styles.visible : ''}`} style={{ transitionDelay: '0.15s' }}>
            Tinny<br />
            <span className={styles.nameAccent}>Mosimanyana</span>
          </h1>

          <p className={`${styles.tagline} ${visible ? styles.visible : ''}`} style={{ transitionDelay: '0.3s' }}>
            I build simple, modern websites that help small businesses attract
            more customers online.{' '}
            <strong>Clean code. Real results.</strong>
          </p>

          <div className={`${styles.buttons} ${visible ? styles.visible : ''}`} style={{ transitionDelay: '0.45s' }}>
            <a href="#projects" className={styles.btnPrimary}>
              View Projects <span className={styles.arrow}>→</span>
            </a>
            <a href="#hire" className={styles.btnSecondary}>
              Contact Me
            </a>
          </div>

          <div className={`${styles.availBadge} ${visible ? styles.visible : ''}`} style={{ transitionDelay: '0.6s' }}>
            <span className={styles.dot} />
            Available for freelance projects
          </div>
        </div>

        {/* RIGHT — profile card */}
        <div className={`${styles.right} ${visible ? styles.visible : ''}`} style={{ transitionDelay: '0.35s' }}>
          <div className={styles.card}>
            <p className={styles.cardLabel}>Developer Profile</p>
            {stats.map(([label, value]) => (
              <div key={label} className={styles.stat}>
                <span className={styles.statLabel}>{label}</span>
                <span className={styles.statValue}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className={`${styles.scrollHint} ${visible ? styles.scrollVisible : ''}`}>
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLine}>
          <div className={styles.scrollDrop} />
        </div>
      </div>
    </section>
  )
}
