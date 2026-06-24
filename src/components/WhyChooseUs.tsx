import { Dumbbell, ShieldCheck, HeartHandshake, Smile, Tablet, ParkingCircle, Clock, Key } from 'lucide-react'
import './WhyChooseUs.css'

export default function WhyChooseUs() {
  const benefits = [
    { icon: <Dumbbell size={22} />, title: "Équipement Moderne", description: "Marques de premier choix : Hammer Strength, Eleiko, Life Fitness — toujours entretenues." },
    { icon: <ShieldCheck size={22} />, title: "Coachs Certifiés", description: "Coachs certifiés NASM, ISSA et CSCS avec un suivi d'athlètes éprouvé." },
    { icon: <HeartHandshake size={22} />, title: "Cours Collectifs", description: "Plus de 50 cours par semaine — Yoga, HIIT, Musculation, Biking et plus." },
    { icon: <Smile size={22} />, title: "Installations Propres", description: "Désinfection quotidienne rigoureuse. Vous vous entraînez, nous entretenons." },
    { icon: <Tablet size={22} />, title: "Application Mobile", description: "Réservez vos séances, suivez vos progrès et scannez votre entrée depuis votre téléphone." },
    { icon: <ParkingCircle size={22} />, title: "Parking Gratuit", description: "Parking gratuit, sécurisé et surveillé pour tous nos membres actifs." },
    { icon: <Clock size={22} />, title: "Ouvert 24h/24", description: "Accès VIP à la salle à toute heure — entraînez-vous selon votre emploi du temps." },
    { icon: <Key size={22} />, title: "Vestiaires Sécurisés", description: "Casiers à code numérique et vestiaires haut de gamme inclus." }
  ]

  return (
    <section id="features" className="why-section">
      <div className="why-header">
        <span className="section-subtitle">NOS AVANTAGES</span>
        <h2>POURQUOI CHOISIR REVENGEGYM</h2>
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
