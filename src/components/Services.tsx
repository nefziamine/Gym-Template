import { Dumbbell, Activity, Heart, ShieldAlert, Users, Compass, Zap, Apple, RefreshCw } from 'lucide-react'
import './Services.css'

export default function Services() {
  const serviceList = [
    {
      icon: <Dumbbell size={24} />,
      title: "Force & Conditionnement",
      desc: "Zone de musculation lourde, poids libres, plateaux d'haltérophilie olympiques et coaching professionnel."
    },
    {
      icon: <Activity size={24} />,
      title: "Zones Cardio",
      desc: "Tapis de course haut de gamme, simulateurs d'escalier, rameurs et vélos d'appartement connectés."
    },
    {
      icon: <Compass size={24} />,
      title: "Entraînement Fonctionnel",
      desc: "Kettlebells, cordes ondulatoires, médecine-balls, traîneaux et zones synthétiques pour l'entraînement athlétique."
    },
    {
      icon: <ShieldAlert size={24} />,
      title: "Coaching Privé",
      desc: "Coaching personnalisé axé sur vos objectifs, suivi des postures et accompagnement sur mesure."
    },
    {
      icon: <Users size={24} />,
      title: "Cours Collectifs",
      desc: "Séances de groupe énergisantes, du spinning au renforcement musculaire, adaptées à tous les niveaux."
    },
    {
      icon: <Heart size={24} />,
      title: "Yoga & Relaxation",
      desc: "Cours de stretching, Vinyasa et yoga restaurateur pour améliorer la mobilité et réduire le stress."
    },
    {
      icon: <Zap size={24} />,
      title: "HIIT Haute Intensité",
      desc: "Intervalles métaboliques intenses pour brûler un maximum de calories en un minimum de temps."
    },
    {
      icon: <Apple size={24} />,
      title: "Accompagnement Nutritionnel",
      desc: "Plans alimentaires personnalisés, suivi de la composition corporelle et conseils en suppléments."
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Récupération & Sauna",
      desc: "Saunas infrarouges, bains froids, massages sportifs et équipements de récupération de pointe."
    }
  ]

  return (
    <section id="services" className="services-section">
      <span className="section-subtitle">CE QUE NOUS OFFRONS</span>
      <h2>NOS SERVICES D'ENTRAÎNEMENT</h2>
      
      <div className="grid-3 services-grid">
        {serviceList.map((service, index) => (
          <div key={index} className="service-card card-glass">
            <div className="service-icon-wrapper">
              {service.icon}
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
