import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import './FAQ.css'

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      question: "What are your operating hours?",
      answer: "We are open from 5:00 AM to 11:00 PM on weekdays, and 7:00 AM to 9:00 PM on weekends. VIP members have full 24/7 digital keycard access to the gym floor."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes! We offer a complimentary 1-day pass for local residents. You can book your free trial pass online via our contact form or visit the reception desk."
    },
    {
      question: "Can I freeze my membership plan?",
      answer: "Absolutely. Standard and Premium members can freeze their membership once a year for up to 3 months for a $10 fee. VIP memberships can be frozen at any time for free."
    },
    {
      question: "Is the gym suitable for absolute beginners?",
      answer: "Yes, definitely. We welcome all fitness levels. Our Standard and Premium plans include intro assessments, and you can book personal training to learn proper form."
    },
    {
      question: "How do I book a session with a Personal Trainer?",
      answer: "Sessions can be booked directly through our RevengeGym Mobile App, by emailing your coach, or by speaking with our front desk team during staffed hours."
    },
    {
      question: "Is parking available at the facility?",
      answer: "Yes, we have a spacious, secure, monitored parking lot on-site. Parking is entirely free of charge for all active gym members while they train."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="faq-section">
      <span className="section-subtitle">COMMON QUESTIONS</span>
      <h2>FREQUENTLY ASKED QUESTIONS</h2>

      <div className="faq-list">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index
          return (
            <div key={index} className={`faq-item card-glass ${isOpen ? 'open' : ''}`}>
              <button 
                className="faq-question-btn" 
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
              >
                <div className="faq-question-text">
                  <HelpCircle className="faq-question-icon" size={18} />
                  <span>{faq.question}</span>
                </div>
                <ChevronDown className="faq-arrow-icon" size={18} />
              </button>

              <div className="faq-answer-wrapper">
                <p className="faq-answer-content">{faq.answer}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
