import { useState } from 'react'
import { Check, Info } from 'lucide-react'
import './Membership.css'

export default function Membership() {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      name: "Basic",
      monthlyPrice: 50,
      yearlyPrice: 40,
      description: "Idéal pour l'entraînement en autonomie",
      features: [
        "Accès libre au plateau musculation",
        "Accès aux vestiaires standards",
        "Parking gratuit surveillé",
        "Accès à l'application mobile RevengeGym"
      ],
      cta: "Choisir Basic",
      popular: false
    },
    {
      name: "Standard",
      monthlyPrice: 80,
      yearlyPrice: 64,
      description: "Parfait pour les adeptes des cours collectifs",
      features: [
        "Tous les avantages du pack Basic",
        "Cours collectifs illimités",
        "1 Pass invité par mois",
        "1 Bilan de forme par mois"
      ],
      cta: "Choisir Standard",
      popular: false
    },
    {
      name: "Premium",
      monthlyPrice: 120,
      yearlyPrice: 96,
      description: "Pour des objectifs de performance maximaux",
      features: [
        "Tous les avantages du pack Standard",
        "1 Séance de coaching privé / mois",
        "Service de serviettes premium",
        "Accès au sauna & zone de récupération"
      ],
      cta: "Choisir Premium",
      popular: true
    },
    {
      name: "VIP",
      monthlyPrice: 250,
      yearlyPrice: 200,
      description: "Le pass fitness haut de gamme ultime",
      features: [
        "Tous les avantages du pack Premium",
        "Coaching privé personnalisé illimité",
        "Plans nutritionnels sur mesure",
        "Accès au salon VIP & vestiaires privés"
      ],
      cta: "Choisir VIP",
      popular: false
    }
  ]

  return (
    <section id="membership" className="membership-section">
      <span className="section-subtitle">NOS FORMULES D'ABONNEMENT</span>
      <h2>CHOISISSEZ VOTRE PACK</h2>
      
      {/* Billing Cycle Switch */}
      <div className="billing-toggle-container">
        <span className={`billing-label ${!isYearly ? 'active' : ''}`}>Mensuel</span>
        <button 
          className={`billing-switch ${isYearly ? 'yearly' : ''}`} 
          onClick={() => setIsYearly(!isYearly)}
          aria-label="Changer le cycle de facturation"
        >
          <span className="billing-switch-handle"></span>
        </button>
        <span className={`billing-label ${isYearly ? 'active' : ''}`}>
          Annuel <span className="discount-tag">Économisez 20%</span>
        </span>
      </div>

      <div className="grid-4 pricing-grid">
        {plans.map((plan, index) => (
          <div key={index} className={`pricing-card card-glass ${plan.popular ? 'popular' : ''}`}>
            {plan.popular && <span className="popular-badge">Le Plus Populaire</span>}
            <div className="pricing-header">
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
            </div>
            
            <div className="plan-price-box">
              <span className="price-amount">{isYearly ? plan.yearlyPrice : plan.monthlyPrice}</span>
              <span className="currency">DT</span>
              <span className="price-period">/mois</span>
            </div>

            <div className="billing-type">
              {isYearly ? "Facturé annuellement" : "Facturé mensuellement"}
            </div>

            <ul className="plan-features">
              {plan.features.map((feature, fIndex) => (
                <li key={fIndex}>
                  <Check className="check-icon" size={16} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} cta-btn`}>
              {plan.cta}
            </button>
          </div>
        ))}
      </div>

      <p className="pricing-disclaimer">
        <Info size={14} style={{ marginRight: '5px', verticalAlign: 'middle' }} />
        Toutes les formules sont soumises à des frais d'inscription uniques de 30 DT. Les conditions générales d'adhésion s'appliquent.
      </p>
    </section>
  )
}
