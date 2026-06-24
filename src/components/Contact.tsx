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
    
    if (!formData.name.trim()) newErrors.name = 'Le nom est requis'
    if (!formData.email.trim()) {
      newErrors.email = "L'adresse e-mail est requise"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "L'adresse e-mail n'est pas valide"
    }
    if (!formData.message.trim()) newErrors.message = 'Le message est requis'

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
      <span className="section-subtitle">NOUS CONTACTER</span>
      <h2>CONTACTEZ-NOUS</h2>

      <div className="grid-2 contact-grid">
        {/* Left Column: Form */}
        <div className="contact-form-container card-glass">
          <h3>Envoyez-nous un message</h3>
          <p className="form-subtitle">Des questions ou envie de réserver un essai gratuit ? Contactez-nous ci-dessous.</p>
          
          {submitted ? (
            <div className="submit-success-banner">
              <MessageSquare className="success-icon" size={24} />
              <div>
                <h4>Message envoyé !</h4>
                <p>Merci de nous avoir contactés. Nous vous répondrons sous 24 heures.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Votre Nom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ex: Mohamed Ali"
                  className={errors.name ? 'input-error' : ''}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Votre E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Ex: mohamed.ali@email.com"
                  className={errors.email ? 'input-error' : ''}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="plan">Formule souhaitée</label>
                <select
                  id="plan"
                  name="plan"
                  value={formData.plan}
                  onChange={handleChange}
                >
                  <option value="trial">Séance d'essai gratuite</option>
                  <option value="basic">Abonnement Basic</option>
                  <option value="standard">Abonnement Standard</option>
                  <option value="premium">Abonnement Premium</option>
                  <option value="vip">Abonnement VIP</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Votre Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Comment pouvons-nous vous aider ?"
                  rows={4}
                  className={errors.message ? 'input-error' : ''}
                ></textarea>
                {errors.message && <span className="error-text">{errors.message}</span>}
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Envoyer le message <Send size={16} />
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
                <h4>Appelez-nous</h4>
                <p>+216 51 025 738</p>
              </div>
            </div>

            <div className="info-item-card card-glass">
              <Mail className="info-icon" size={20} />
              <div>
                <h4>Écrivez-nous</h4>
                <p>contact@revengegym.com</p>
              </div>
            </div>

            <div className="info-item-card card-glass">
              <MapPin className="info-icon" size={20} />
              <div>
                <h4>Adresse</h4>
                <p>Rue Ibn Kholdoun, Cité Ettadhamen, 2041</p>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="map-container card-glass">
            <div className="map-header">
              <MapPin size={16} className="map-pin-accent" />
              <span>LOCALISATION REVENGE GYM</span>
            </div>
            <div className="map-iframe-wrapper">
              <iframe
                title="REVENGE GYM Location"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDPNvdTmK-DHdwwLszjAk7bsHbJMWfEdy8&q=Rue+Ibn+Kholdoun,+Cite+Ettadhamen,+Tunis&zoom=15&maptype=roadmap"
                width="100%"
                height="280"
                style={{ border: 0, borderRadius: '4px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="map-footer">
              <p>Parking gratuit sécurisé disponible pour tous nos membres.</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="contact-socials-box">
            <h4>Suivez-nous sur les réseaux</h4>
            <div className="socials-row">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-circle" aria-label="Instagram"><Share2 size={20} /></a>
              <a href="https://www.facebook.com/people/Revenge-Gym/61581708511527/" target="_blank" rel="noreferrer" className="social-circle" aria-label="Facebook"><Users size={20} /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-circle" aria-label="Youtube"><Video size={20} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
