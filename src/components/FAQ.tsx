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
      question: "Quelles sont vos heures d'ouverture ?",
      answer: "Nous sommes ouverts de 5h00 à 23h00 en semaine et de 7h00 à 21h00 le week-end. Les membres VIP ont un accès numérique 24h/24 et 7j/7 au plateau musculation."
    },
    {
      question: "Proposez-vous une séance d'essai gratuite ?",
      answer: "Oui ! Nous offrons une séance d'essai gratuite d'une journée pour les résidents locaux. Vous pouvez réserver votre pass d'essai en ligne via notre formulaire de contact ou à la réception."
    },
    {
      question: "Puis-je suspendre mon abonnement ?",
      answer: "Absolument. Les membres Standard et Premium peuvent suspendre leur abonnement une fois par an pendant 3 mois maximum pour des frais de 10 DT. Les abonnés VIP peuvent suspendre gratuitement à tout moment."
    },
    {
      question: "La salle est-elle adaptée aux grands débutants ?",
      answer: "Oui, tout à fait. Nous accueillons tous les niveaux de condition physique. Nos formules Standard et Premium incluent des bilans de forme, et vous pouvez réserver des coachings privés pour apprendre les bons mouvements."
    },
    {
      question: "Comment réserver une séance avec un coach privé ?",
      answer: "Les séances peuvent être réservées directement sur notre application mobile RevengeGym, par e-mail avec votre coach, ou directement à l'accueil."
    },
    {
      question: "Y a-t-il un parking disponible sur place ?",
      answer: "Oui, nous disposons d'un grand parking surveillé et sécurisé. Le stationnement est entièrement gratuit pour tous nos membres actifs pendant leurs entraînements."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="faq-section">
      <span className="section-subtitle">QUESTIONS FRÉQUENTES</span>
      <h2>QUESTIONS FRÉQUEMMENT POSÉES</h2>

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
