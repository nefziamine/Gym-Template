import React, { useState } from 'react'
import { Phone, Mail, MapPin, Send, MessageSquare, Share2, Users, Video } from 'lucide-react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    plan: 'basic',
    message: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear errors when typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    } else {
      setSubmitted(true)
      // Reset form
      setFormData({ name: '', email: '', plan: 'basic', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  return (
    <section id="contact" className="contact-section">
      <span className="section-subtitle">GET IN TOUCH</span>
      <h2>CONTACT US</h2>

      <div className="grid-2 contact-grid">
        {/* Left Column: Form */}
        <div className="contact-form-container card-glass">
          <h3>Send Us a Message</h3>
          <p className="form-subtitle">Have questions or want to book a free trial? Let us know below.</p>
          
          {submitted ? (
            <div className="submit-success-banner">
              <MessageSquare className="success-icon" size={24} />
              <div>
                <h4>Message Sent!</h4>
                <p>Thank you for reaching out. We will get back to you within 24 hours.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={errors.name ? 'input-error' : ''}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="johndoe@example.com"
                  className={errors.email ? 'input-error' : ''}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="plan">Interested Plan</label>
                <select
                  id="plan"
                  name="plan"
                  value={formData.plan}
                  onChange={handleChange}
                >
                  <option value="trial">Free Trial Pass</option>
                  <option value="basic">Basic Membership</option>
                  <option value="standard">Standard Membership</option>
                  <option value="premium">Premium Membership</option>
                  <option value="vip">VIP Membership</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows={4}
                  className={errors.message ? 'input-error' : ''}
                ></textarea>
                {errors.message && <span className="error-text">{errors.message}</span>}
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Send Message <Send size={16} />
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Info & Map Placeholder */}
        <div className="contact-info-container">
          <div className="info-cards-stack">
            <div className="info-item-card card-glass">
              <Phone className="info-icon" size={20} />
              <div>
                <h4>Call Us</h4>
                <p>+1 (555) 987-6543</p>
              </div>
            </div>

            <div className="info-item-card card-glass">
              <Mail className="info-icon" size={20} />
              <div>
                <h4>Email Us</h4>
                <p>info@apexgym.com</p>
              </div>
            </div>

            <div className="info-item-card card-glass">
              <MapPin className="info-icon" size={20} />
              <div>
                <h4>Location</h4>
                <p>789 Performance Way, Metro City, NY 10018</p>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="map-container card-glass">
            <div className="map-header">
              <MapPin size={16} className="map-pin-accent" />
              <span>REVENGE GYM LOCATION</span>
            </div>
            <div className="map-iframe-wrapper">
              <iframe
                title="REVENGE GYM Location"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDPNvdTmK-DHdwwLszjAk7bsHbJMWfEdy8&q=789+Performance+Way,+New+York,+NY+10018&zoom=15&maptype=roadmap"
                width="100%"
                height="280"
                style={{ border: 0, borderRadius: '4px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="map-footer">
              <p>Valet &amp; free parking deck accessible via Rear Entrance A.</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="contact-socials-box">
            <h4>Follow Our Channels</h4>
            <div className="socials-row">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-circle" aria-label="Instagram"><Share2 size={20} /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-circle" aria-label="Facebook"><Users size={20} /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-circle" aria-label="Youtube"><Video size={20} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
