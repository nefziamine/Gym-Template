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
        <span className="hero-badge">AESTHETIC & PERFORMANCE ATHLETICS</span>
        <h1 className="hero-title">
          REDEFINE YOUR <br />
          <span>LIMITS</span>
        </h1>
        <p className="hero-description">
          Welcome to APEX GYM, the ultimate training facility designed to push your boundaries. Experience world-class coaches, cutting-edge equipment, and an elite fitness community.
        </p>

        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => handleScrollTo('membership')}>
            Join Now <ArrowRight size={18} />
          </button>
          <button className="btn btn-secondary" onClick={() => handleScrollTo('contact')}>
            Book Free Trial <Play size={16} fill="currentColor" />
          </button>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <h3>15K+</h3>
            <p>Active Members</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Certified Coaches</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Gym Floor Access</p>
          </div>
        </div>
      </div>
    </header>
  )
}
