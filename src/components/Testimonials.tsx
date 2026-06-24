import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import './Testimonials.css'

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const reviews = [
    {
      name: "Alex Rivera",
      goal: "Transformation Physique",
      stars: 5,
      quote: "REVENGE GYM a complètement changé ma vision du fitness. Les coachs soutiennent énormément et la sélection d'équipements est la meilleure de la ville. J'ai pris 8 kg de muscle sec en 10 mois !",
      initials: "AR"
    },
    {
      name: "Jessica Patel",
      goal: "Endurance Athlétique",
      stars: 5,
      quote: "Les cours collectifs ici sont d'un autre niveau. J'adore particulièrement le HIIT et le Yoga. La communauté est super accueillante et la salle est toujours propre et désinfectée. Recommandé à 100% !",
      initials: "JP"
    },
    {
      name: "Chris Evans",
      goal: "Force & Force Athlétique",
      stars: 5,
      quote: "Si vous voulez soulever lourd, c'est l'endroit idéal. Plateaux dédiés, disques de compétition et coachs qui s'y connaissent. Marcus m'a aidé à corriger ma posture au soulevé de terre et à battre mon record en quelques semaines.",
      initials: "CE"
    }
  ]

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))
  }

  const activeReview = reviews[activeIndex]

  return (
    <section id="testimonials" className="testimonials-section">
      <span className="section-subtitle">TÉMOIGNAGES</span>
      <h2>AVIS DE NOS MEMBRES</h2>

      <div className="testimonials-carousel-container card-glass">
        {/* Quote watermark icon */}
        <Quote className="quote-watermark" size={120} />

        {/* Carousel slide */}
        <div className="testimonial-slide animate-fade-in" key={activeIndex}>
          <div className="stars-box">
            {Array.from({ length: activeReview.stars }).map((_, i) => (
              <Star key={i} size={18} className="star-icon" fill="currentColor" />
            ))}
          </div>

          <p className="testimonial-quote">"{activeReview.quote}"</p>

          <div className="testimonial-author">
            <div className="author-avatar">
              <span>{activeReview.initials}</span>
            </div>
            <div>
              <h4 className="author-name">{activeReview.name}</h4>
              <p className="author-goal">{activeReview.goal}</p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="carousel-nav">
          <button className="carousel-nav-btn" onClick={handlePrev} aria-label="Avis précédent">
            <ChevronLeft size={20} />
          </button>
          
          <div className="carousel-indicators">
            {reviews.map((_, i) => (
              <span 
                key={i} 
                className={`indicator-dot ${i === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(i)}
              ></span>
            ))}
          </div>

          <button className="carousel-nav-btn" onClick={handleNext} aria-label="Avis suivant">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
