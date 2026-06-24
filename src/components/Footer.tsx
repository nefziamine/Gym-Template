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
            Premium physical performance training center designed to elevate human strength, mobility, and endurance. Build your elite physique with us.
          </p>
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} REVENGE GYM. All rights reserved.
          </p>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="footer-col Links-col">
          <h4>Navigation</h4>
          <ul className="footer-links-list">
            <li><a href="#home" onClick={(e) => { e.preventDefault(); handleLinkClick('home') }}>Home</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); handleLinkClick('about') }}>About</a></li>
            <li><a href="#features" onClick={(e) => { e.preventDefault(); handleLinkClick('features') }}>Why Choose Us</a></li>
            <li><a href="#membership" onClick={(e) => { e.preventDefault(); handleLinkClick('membership') }}>Membership Plans</a></li>
            <li><a href="#services" onClick={(e) => { e.preventDefault(); handleLinkClick('services') }}>Workout Services</a></li>
          </ul>
        </div>

        {/* Col 3: Hours & Support */}
        <div className="footer-col hours-col">
          <h4>Operating Hours</h4>
          <ul className="footer-hours-list">
            <li>
              <span className="day-label">Monday - Friday:</span>
              <span className="time-label">5:00 AM - 11:00 PM</span>
            </li>
            <li>
              <span className="day-label">Saturday - Sunday:</span>
              <span className="time-label">7:00 AM - 9:00 PM</span>
            </li>
            <li className="vip-notice">
              <Dumbbell size={14} style={{ marginRight: '6px', color: 'var(--accent-color)' }} />
              <span>VIP Members: 24/7 Floor Access</span>
            </li>
          </ul>
        </div>

        {/* Col 4: Newsletter Sign-up */}
        <div className="footer-col newsletter-col">
          <h4>Join Our Newsletter</h4>
          <p className="newsletter-pitch">Sign up to get fitness tips, special membership promos, and event announcements.</p>
          
          {subscribed ? (
            <div className="newsletter-success">
              <Check size={16} />
              <span>Subscribed successfully!</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" aria-label="Subscribe to newsletter">
                <Send size={16} />
              </button>
            </form>
          )}
        </div>

      </div>
    </footer>
  )
}
