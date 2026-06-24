import { Shield, Users, Award, Heart } from 'lucide-react'
import './About.css'

export default function About() {
  const points = [
    {
      icon: <Shield size={24} />,
      title: "Our Mission",
      description: "Cultivate a community of strength, high performance, and relentless self-improvement.",
      accent: "#ccff00"
    },
    {
      icon: <Award size={24} />,
      title: "10+ Years",
      description: "A decade of transforming lives, building elite physiques and improving athletic endurance.",
      accent: "#00f0ff"
    },
    {
      icon: <Users size={24} />,
      title: "The Community",
      description: "A tight-knit network of athletes, trainers, and enthusiasts pushing each other every day.",
      accent: "#ff0055"
    },
    {
      icon: <Heart size={24} />,
      title: "Healthy Lifestyle",
      description: "Physical wellness, optimal recovery, and sustainable nutritional habits for life.",
      accent: "#ffa500"
    }
  ]

  const stats = [
    { value: "15K+", label: "Active Members" },
    { value: "50+", label: "Expert Coaches" },
    { value: "24/7", label: "Gym Access" },
    { value: "10+", label: "Years Strong" }
  ]

  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        {/* Left: Narrative */}
        <div className="about-narrative">
          <span className="section-subtitle">WHO WE ARE</span>
          <h2 className="about-heading">ABOUT APEX GYM</h2>
          <h3 className="about-highlight">
            NOT JUST A GYM —<br />
            <span>A BREEDING GROUND FOR GREATNESS.</span>
          </h3>
          <p className="about-text">
            APEX GYM is built for those who seek to optimize their physical potential and mental strength. Whether you're a seasoned competitor or just starting out, we provide the environment, gear, and expertise to help you succeed.
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
