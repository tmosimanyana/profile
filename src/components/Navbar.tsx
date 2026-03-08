import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      {/* Logo */}
      <a href="#home" className={styles.logo}>
        <span className={styles.logoAccent}>T</span>
        Tinny Mosimanyana
      </a>

      {/* Desktop links */}
      <ul className={styles.links}>
        {[['Projects', '#projects'], ['Services', '#hire'], ['Contact', '#hire']].map(([label, href]) => (
          <li key={label}>
            <a href={href} className={styles.link}>{label}</a>
          </li>
        ))}
      </ul>

      {/* Badge */}
      <span className={styles.badge}>● Available for hire</span>

      {/* Mobile hamburger */}
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={menuOpen ? styles.barOpen : styles.bar} />
        <span className={menuOpen ? styles.barMidOpen : styles.bar} />
        <span className={menuOpen ? styles.barOpen : styles.bar} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {[['Projects', '#projects'], ['Services', '#hire'], ['Contact', '#hire']].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
