import { useState } from 'react'
import { Check, Info } from 'lucide-react'
import './Membership.css'

export default function Membership() {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      name: "Basic",
      monthlyPrice: 29,
      yearlyPrice: 23,
      description: "Ideal for self-guided training",
      features: [
        "Gym floor access",
        "Standard locker room access",
        "Free on-site parking",
        "Apex mobile app access"
      ],
      cta: "Get Basic",
      popular: false
    },
    {
      name: "Standard",
      monthlyPrice: 49,
      yearlyPrice: 39,
      description: "Great for class enthusiasts",
      features: [
        "All Basic features",
        "Unlimited group classes",
        "1 Guest pass per month",
        "1 Fitness assessment per month"
      ],
      cta: "Get Standard",
      popular: false
    },
    {
      name: "Premium",
      monthlyPrice: 79,
      yearlyPrice: 63,
      description: "For maximum performance goals",
      features: [
        "All Standard features",
        "1 Personal Trainer session/mo",
        "Premium towel service",
        "Sauna & recovery zone access"
      ],
      cta: "Get Premium",
      popular: true
    },
    {
      name: "VIP",
      monthlyPrice: 149,
      yearlyPrice: 119,
      description: "The ultimate luxury fitness pass",
      features: [
        "All Premium features",
        "Unlimited Personal Training",
        "Customized nutrition plans",
        "VIP lounge & private changing rooms"
      ],
      cta: "Get VIP",
      popular: false
    }
  ]

  return (
    <section id="membership" className="membership-section">
      <span className="section-subtitle">MEMBERSHIP OPTIONS</span>
      <h2>CHOOSE YOUR PLAN</h2>
      
      {/* Billing Cycle Switch */}
      <div className="billing-toggle-container">
        <span className={`billing-label ${!isYearly ? 'active' : ''}`}>Monthly</span>
        <button 
          className={`billing-switch ${isYearly ? 'yearly' : ''}`} 
          onClick={() => setIsYearly(!isYearly)}
          aria-label="Toggle billing cycle"
        >
          <span className="billing-switch-handle"></span>
        </button>
        <span className={`billing-label ${isYearly ? 'active' : ''}`}>
          Yearly <span className="discount-tag">Save 20%</span>
        </span>
      </div>

      <div className="grid-4 pricing-grid">
        {plans.map((plan, index) => (
          <div key={index} className={`pricing-card card-glass ${plan.popular ? 'popular' : ''}`}>
            {plan.popular && <span className="popular-badge">Most Popular</span>}
            <div className="pricing-header">
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
            </div>
            
            <div className="plan-price-box">
              <span className="currency">$</span>
              <span className="price-amount">{isYearly ? plan.yearlyPrice : plan.monthlyPrice}</span>
              <span className="price-period">/mo</span>
            </div>

            <div className="billing-type">
              {isYearly ? "Billed annually" : "Billed monthly"}
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
        All plans are subject to a one-time sign-up fee of $30. Membership terms and conditions apply.
      </p>
    </section>
  )
}
