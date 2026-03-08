import { useState } from 'react'
import styles from './HireSection.module.css'

const services = [
  { icon: '🌐', name: 'Business Websites', desc: 'Professional, fast-loading websites that represent your brand and bring in new customers.' },
  { icon: '🚀', name: 'Landing Pages', desc: 'Focused pages built to convert visitors into paying customers for your product or service.' },
  { icon: '♻️', name: 'Website Redesign', desc: 'Modernize an outdated site with a fresh look, faster performance, and better mobile experience.' },
  { icon: '📱', name: 'Mobile-First Design', desc: "Every site I build looks and works perfectly on phones — because that's where your customers are." },
]

const contacts = [
  { label: 'Email', value: 'mosimanyanatinny@gmail.com', href: 'mailto:mosimanyanatinny@gmail.com', icon: '✉' },
  { label: 'GitHub', value: 'github.com/tmosimanyana', href: 'https://github.com/tmosimanyana', icon: '⬡' },
  { label: 'LinkedIn', value: 'linkedin.com/in/m-tinny', href: 'https://linkedin.com/in/m-tinny', icon: 'in' },
]

export default function HireSection() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('mosimanyanatinny@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="hire" className={styles.wrapper}>
      {/* Services */}
      <div className={styles.services}>
        <div className={styles.inner}>
          <div className={styles.servicesGrid}>
            {/* Left */}
            <div>
              <p className={styles.label}>
                <span className={styles.labelLine} />
                What I Offer
              </p>
              <h2 className={styles.heading}>Services</h2>
              <p className={styles.sub}>
                Simple, effective web solutions built for small businesses that want to grow online.
              </p>
            </div>

            {/* Cards */}
            <div className={styles.cards}>
              {services.map((s, i) => (
                <div
                  key={i}
                  className={styles.serviceCard}
                  onMouseEnter={() => setHoveredService(i)}
                  onMouseLeave={() => setHoveredService(null)}
                  style={{
                    background: hoveredService === i ? '#c8f03b' : '#111',
                    borderColor: hoveredService === i ? '#c8f03b' : '#1e1e1e',
                    transform: hoveredService === i ? 'translateY(-4px)' : 'translateY(0)',
                  }}
                >
                  <span className={styles.serviceIcon}>{s.icon}</span>
                  <h3
                    className={styles.serviceName}
                    style={{ color: hoveredService === i ? '#0a0a0a' : '#fff' }}
                  >
                    {s.name}
                  </h3>
                  <p
                    className={styles.serviceDesc}
                    style={{ color: hoveredService === i ? '#333' : '#666' }}
                  >
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className={styles.cta}>
        <div className={styles.ctaBg} aria-hidden>HIRE</div>
        <div className={styles.inner}>
          <div className={styles.ctaGrid}>
            {/* Left */}
            <div>
              <p className={styles.labelDark}>
                <span className={styles.labelLineDark} />
                Let's Work Together
              </p>
              <h2 className={styles.ctaHeading}>Work With Me</h2>
              <p className={styles.ctaSub}>
                I help small businesses create simple websites that get more customers online.{' '}
                <strong>Available for freelance projects right now.</strong>
              </p>
              <div className={styles.ctaButtons}>
                <a href="mailto:mosimanyanatinny@gmail.com" className={styles.btnHire}>
                  Hire Me →
                </a>
                <button onClick={copyEmail} className={styles.btnCopy}>
                  {copied ? '✓ Copied!' : 'Copy Email'}
                </button>
              </div>
            </div>

            {/* Right — contacts */}
            <div className={styles.contactList}>
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  className={styles.contactItem}
                >
                  <span className={styles.contactIcon}>{c.icon}</span>
                  <div className={styles.contactText}>
                    <span className={styles.contactLabel}>{c.label}</span>
                    <span className={styles.contactValue}>{c.value}</span>
                  </div>
                  <span className={styles.contactArrow}>↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>
          © {new Date().getFullYear()}{' '}
          <span className={styles.footerAccent}>Tinny Mosimanyana</span>
          {' '}· Tinie Systems · Built with care in Botswana 🇧🇼
        </p>
      </footer>
    </section>
  )
}
