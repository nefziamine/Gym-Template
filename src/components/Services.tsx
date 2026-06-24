import { Dumbbell, Activity, Heart, ShieldAlert, Users, Compass, Zap, Apple, RefreshCw } from 'lucide-react'
import './Services.css'

export default function Services() {
  const serviceList = [
    {
      icon: <Dumbbell size={24} />,
      title: "Strength & Conditioning",
      desc: "Heavy weightlifting area, free weights, Olympic lifting platforms, and professional coaching."
    },
    {
      icon: <Activity size={24} />,
      title: "Cardio Zones",
      desc: "Top-tier treadmills, climbmills, rowing machines, and stationary bikes with screen integrations."
    },
    {
      icon: <Compass size={24} />,
      title: "Functional Training",
      desc: "Kettlebells, battle ropes, medicine balls, sleds, and turf zones for athletic training."
    },
    {
      icon: <ShieldAlert size={24} />,
      title: "Personal Training",
      desc: "1-on-1 goal-oriented coaching with custom workouts, form tracking, and accountability."
    },
    {
      icon: <Users size={24} />,
      title: "Group Classes",
      desc: "Energizing group workouts ranging from spinning to strength, suited for all fitness levels."
    },
    {
      icon: <Heart size={24} />,
      title: "Yoga & Mindfulness",
      desc: "Restorative flow, Vinyasa, and stretching classes to improve mobility and reduce stress."
    },
    {
      icon: <Zap size={24} />,
      title: "High-Intensity HIIT",
      desc: "High-intensity metabolic conditioning intervals designed to burn maximum calories."
    },
    {
      icon: <Apple size={24} />,
      title: "Nutrition Coaching",
      desc: "Customized meal templates, body composition tracking, and supplement consultations."
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Recovery & Sauna",
      desc: "Infrared saunas, cold plunge baths, sports massage, and recovery device rentals."
    }
  ]

  return (
    <section id="services" className="services-section">
      <span className="section-subtitle">WHAT WE OFFER</span>
      <h2>OUR WORKOUT SERVICES</h2>
      
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
