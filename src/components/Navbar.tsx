import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import './Navbar.css'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'features', label: 'Features' },
  { id: 'membership', label: 'Plans' },
  { id: 'services', label: 'Services' },
  { id: 'schedule', label: 'Schedule' },
  { id: 'trainers', label: 'Trainers' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'testimonials', label: 'Reviews' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' }
]

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      // Background scroll style
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Scroll Spy logic
      const scrollPosition = window.scrollY + 100
      for (const link of navLinks) {
        const el = document.getElementById(link.id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id)
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (id: string) => {
    setIsOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); handleLinkClick('home') }}>
          APEX<span>GYM</span>
        </a>

        {/* Desktop Links */}
        <ul className="nav-menu">
          {navLinks.map((link) => (
            <li key={link.id} className="nav-item">
              <a
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.id) }}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions (Theme toggle + CTA) */}
        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button className="btn btn-primary nav-cta" onClick={() => handleLinkClick('membership')}>
            Join Now
          </button>

          {/* Hamburger Menu Icon */}
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <ul className="mobile-menu-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.id) }}
                className={activeSection === link.id ? 'active' : ''}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }} onClick={() => handleLinkClick('membership')}>
              Join Now
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
