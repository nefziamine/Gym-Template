import { Dumbbell, ShieldCheck, HeartHandshake, Smile, Tablet, ParkingCircle, Clock, Key } from 'lucide-react'
import './WhyChooseUs.css'

export default function WhyChooseUs() {
  const benefits = [
    { icon: <Dumbbell size={22} />, title: "Modern Equipment", description: "Top-tier brands: Hammer Strength, Eleiko, Life Fitness — always maintained." },
    { icon: <ShieldCheck size={22} />, title: "Certified Trainers", description: "NASM, ISSA, and CSCS certified coaches with proven athlete track records." },
    { icon: <HeartHandshake size={22} />, title: "Group Classes", description: "50+ weekly classes — Yoga, HIIT, Strength, Cycling and more." },
    { icon: <Smile size={22} />, title: "Clean Facilities", description: "Rigorous daily sanitization. You train, we maintain." },
    { icon: <Tablet size={22} />, title: "Mobile App", description: "Book sessions, track progress, and scan entry all from your phone." },
    { icon: <ParkingCircle size={22} />, title: "Free Parking", description: "Secure, monitored, and free parking for all active members." },
    { icon: <Clock size={22} />, title: "Open 24/7", description: "VIP floor access around the clock — train on your schedule." },
    { icon: <Key size={22} />, title: "Secure Lockers", description: "Digital passcode lockers and premium changing rooms included." }
  ]

  return (
    <section id="features" className="why-section">
      <div className="why-header">
        <span className="section-subtitle">OUR ADVANTAGES</span>
        <h2>WHY CHOOSE APEX</h2>
      </div>

      <div className="why-list">
        {benefits.map((b, i) => (
          <div key={i} className="why-item">
            <span className="why-number">0{i + 1}</span>
            <div className="why-icon-box">{b.icon}</div>
            <div className="why-text">
              <h3 className="why-title">{b.title}</h3>
              <p className="why-desc">{b.description}</p>
            </div>
            <div className="why-line"></div>
          </div>
        ))}
      </div>
    </section>
  )
}
