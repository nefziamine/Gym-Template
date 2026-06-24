import { Shield, Users, Award, Heart } from 'lucide-react'
import './About.css'

export default function About() {
  const points = [
    {
      icon: <Shield size={24} />,
      title: "Notre Mission",
      description: "Cultiver une communauté de force, de haute performance et de dépassement de soi continu.",
      accent: "#ccff00"
    },
    {
      icon: <Award size={24} />,
      title: "Plus de 10 Ans",
      description: "Une décennie à transformer des vies, sculpter des physiques d'élite et booster l'endurance athlétique.",
      accent: "#00f0ff"
    },
    {
      icon: <Users size={24} />,
      title: "La Communauté",
      description: "Un réseau soudé d'athlètes, de coachs et de passionnés qui s'encouragent chaque jour.",
      accent: "#ff0055"
    },
    {
      icon: <Heart size={24} />,
      title: "Mode de Vie Sain",
      description: "Bien-être physique, récupération optimale et habitudes nutritionnelles durables pour la vie.",
      accent: "#ffa500"
    }
  ]

  const stats = [
    { value: "15K+", label: "Membres Actifs" },
    { value: "50+", label: "Coachs Experts" },
    { value: "24/7", label: "Accès au Club" },
    { value: "10+", label: "Années d'Expérience" }
  ]

  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        {/* Left: Narrative */}
        <div className="about-narrative">
          <span className="section-subtitle">QUI SOMMES-NOUS</span>
          <h2 className="about-heading">À PROPOS DE REVENGE GYM</h2>
          <h3 className="about-highlight">
            NOUS TRANSFORMONS<br />
            <span>LA COLÈRE EN PERFORMANCE. 🔥</span>
          </h3>
          <p className="about-text">
            REVENGE GYM est conçu pour ceux qui cherchent à optimiser leur potentiel physique et leur force mentale. Notre philosophie est claire : <strong>Train hard, rise harder</strong> (Entraînez-vous dur, élevez-vous encore plus haut). Trouvez votre paix, libérez votre force et dépassez-vous au quotidien.
          </p>

          {/* Stats Row */}
          <div className="about-stats-row">
            {stats.map((stat, i) => (
              <div key={i} className="about-stat">
                <span className="about-stat-value">{stat.value}</span>
                <span className="about-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Glowing Value Cards */}
        <div className="about-cards-grid">
          {points.map((point, index) => (
            <div
              key={index}
              className="about-card"
              style={{ '--card-accent': point.accent } as React.CSSProperties}
            >
              <div className="about-card-icon">{point.icon}</div>
              <h4 className="about-card-title">{point.title}</h4>
              <p className="about-card-desc">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
