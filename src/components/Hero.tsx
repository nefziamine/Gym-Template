import { ArrowRight, Play } from 'lucide-react'
import heroImg from '../assets/gym_hero_bg.png'
import './Hero.css'

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header id="home" className="hero-section" style={{ backgroundImage: `linear-gradient(to bottom, rgba(10, 11, 13, 0.4), rgba(10, 11, 13, 0.95)), url(${heroImg})` }}>
      <div className="hero-content animate-slide-up">
        <span className="hero-badge">MUSCULATION & PERFORMANCE ATHLÉTIQUE</span>
        <h1 className="hero-title">
          REDÉFINISSEZ VOS <br />
          <span>LIMITES</span>
        </h1>
        <p className="hero-description">
          Bienvenue chez REVENGE GYM, l'ultime centre d'entraînement conçu pour repousser vos limites. Profitez de coachs d'élite, d'équipements de pointe et d'une communauté sportive incomparable.
        </p>

        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => handleScrollTo('membership')}>
            S'abonner <ArrowRight size={18} />
          </button>
          <button className="btn btn-secondary" onClick={() => handleScrollTo('contact')}>
            Essai Gratuit <Play size={16} fill="currentColor" />
          </button>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <h3>15K+</h3>
            <p>Membres Actifs</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Coachs Certifiés</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Accès au Club</p>
          </div>
        </div>
      </div>
    </header>
  )
}
