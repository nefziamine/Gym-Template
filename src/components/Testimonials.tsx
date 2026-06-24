import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import './Testimonials.css'

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const reviews = [
    {
      name: "Alex Rivera",
      goal: "Body Transformation",
      stars: 5,
      quote: "APEX GYM completely changed my perspective on fitness. The coaches are extremely supportive, and the equipment selection is the best in the city. I've gained 8kg of lean muscle over the last 10 months!",
      initials: "AR"
    },
    {
      name: "Jessica Patel",
      goal: "Athletic Endurance",
      stars: 5,
      quote: "The group classes here are next-level. I specifically love the HIIT and Yoga sessions. The community is incredibly welcoming, and the facility is always clean and sanitized. Highly recommended!",
      initials: "JP"
    },
    {
      name: "Chris Evans",
      goal: "Strength & Powerlifting",
      stars: 5,
      quote: "If you want to lift heavy, this is the place. Dedicated platforms, competition-grade plates, and coaches who know their stuff. Marcus helped me fix my deadlift form and hit a new PR within weeks.",
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
      <span className="section-subtitle">TESTIMONIALS</span>
      <h2>MEMBER REVIEWS</h2>

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
          <button className="carousel-nav-btn" onClick={handlePrev} aria-label="Previous review">
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

          <button className="carousel-nav-btn" onClick={handleNext} aria-label="Next review">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
