import { useState } from 'react'
import { Dumbbell, Send, Check } from 'lucide-react'
import logo from '../assets/gymlogo.jpg'
import './Footer.css'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim() && /\S+@\S+\.\S+/.test(email)) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 5000)
    }
  }

  const handleLinkClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Col 1: Brand Info */}
        <div className="footer-col brand-col">
          <a href="#home" className="footer-logo" onClick={(e) => { e.preventDefault(); handleLinkClick('home') }}>
            <img src={logo} alt="RevengeGym Logo" style={{ height: '40px', width: 'auto' }} />
          </a>
          <p className="brand-pitch">
            Centre d'entraînement premium conçu pour élever votre force, votre mobilité et votre endurance. Forgez votre physique d'élite avec nous.
          </p>
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} REVENGE GYM. Tous droits réservés.
          </p>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="footer-col Links-col">
          <h4>Navigation</h4>
          <ul className="footer-links-list">
            <li><a href="#home" onClick={(e) => { e.preventDefault(); handleLinkClick('home') }}>Accueil</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); handleLinkClick('about') }}>À propos</a></li>
            <li><a href="#features" onClick={(e) => { e.preventDefault(); handleLinkClick('features') }}>Avantages</a></li>
            <li><a href="#membership" onClick={(e) => { e.preventDefault(); handleLinkClick('membership') }}>Tarifs &amp; Packs</a></li>
            <li><a href="#services" onClick={(e) => { e.preventDefault(); handleLinkClick('services') }}>Nos Services</a></li>
          </ul>
        </div>

        {/* Col 3: Hours & Support */}
        <div className="footer-col hours-col">
          <h4>Horaires d'Ouverture</h4>
          <ul className="footer-hours-list">
            <li>
              <span className="day-label">Lundi - Vendredi :</span>
              <span className="time-label">05h00 - 23h00</span>
            </li>
            <li>
              <span className="day-label">Samedi - Dimanche :</span>
              <span className="time-label">07h00 - 21h00</span>
            </li>
            <li className="vip-notice">
              <Dumbbell size={14} style={{ marginRight: '6px', color: 'var(--accent-color)' }} />
              <span>Membres VIP : Accès Libre 24h/24</span>
            </li>
          </ul>
        </div>

        {/* Col 4: Newsletter Sign-up */}
        <div className="footer-col newsletter-col">
          <h4>Newsletter</h4>
          <p className="newsletter-pitch">Inscrivez-vous pour recevoir des conseils fitness, des offres exclusives et nos actualités.</p>
          
          {subscribed ? (
            <div className="newsletter-success">
              <Check size={16} />
              <span>Inscription réussie !</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                placeholder="Entrez votre e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" aria-label="S'inscrire à la newsletter">
                <Send size={16} />
              </button>
            </form>
          )}
        </div>

      </div>
    </footer>
  )
}
