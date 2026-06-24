import { Award, Mail, Share2, Globe } from 'lucide-react'
import './Trainers.css'

export default function Trainers() {
  const trainerList = [
    {
      name: "Marcus Vance",
      role: "Head Coach & Fondateur",
      specialty: "Musculation & Force Athlétique",
      certs: ["CSCS", "NASM-PES", "CPR/AED"],
      bio: "Plus de 12 ans d'expérience à coacher des athlètes d'élite et à développer la force structurelle de nos membres.",
      initials: "MV",
      gradient: "linear-gradient(135deg, #1f2028 0%, #ccff00 100%)"
    },
    {
      name: "Sarah Jenkins",
      role: "Directrice Mobilité & Yoga",
      specialty: "Yoga Vinyasa & Mobilité Articulaire",
      certs: ["RYT-500", "FRCms Mobility Specialist"],
      bio: "Dédiée à l'amélioration de la souplesse athlétique, de la stabilité des articulations et du bien-être mental.",
      initials: "SJ",
      gradient: "linear-gradient(135deg, #1f2028 0%, #00f0ff 100%)"
    },
    {
      name: "David Miller",
      role: "Coach Entraînement Fonctionnel",
      specialty: "HIIT Métabolique & Kettlebells",
      certs: ["CrossFit Level 2", "ISSA-CPT"],
      bio: "Spécialisé dans la vitesse explosive, le conditionnement physique et le mouvement fonctionnel dynamique.",
      initials: "DM",
      gradient: "linear-gradient(135deg, #1f2028 0%, #ff0055 100%)"
    },
    {
      name: "Emma Stone",
      role: "Responsable Cardio & Spinning",
      specialty: "Perte de Poids & Endurance Aérobie",
      certs: ["NASM-CPT", "Schwinn Cycling Certified"],
      bio: "Coache passionnée visant à maximiser l'endurance cardiovasculaire et maintenir une motivation extrême.",
      initials: "ES",
      gradient: "linear-gradient(135deg, #1f2028 0%, #ffa500 100%)"
    }
  ]

  return (
    <section id="trainers" className="trainers-section">
      <span className="section-subtitle">COACHS D'ÉLITE</span>
      <h2>RENCONTREZ NOS ENTRAÎNEURS EXPERTS</h2>

      <div className="grid-4 trainers-grid">
        {trainerList.map((trainer, index) => (
          <div key={index} className="trainer-card card-glass">
            {/* Stylized Avatar Frame */}
            <div className="trainer-avatar-frame" style={{ background: trainer.gradient }}>
              <span className="trainer-avatar-text">{trainer.initials}</span>
              
              {/* Overlay on hover */}
              <div className="trainer-overlay">
                <div className="trainer-overlay-content">
                  <p className="trainer-bio">{trainer.bio}</p>
                  
                  <div className="trainer-certs-box">
                    <span className="certs-label">
                      <Award size={14} style={{ marginRight: '4px' }} /> Certifications :
                    </span>
                    <ul className="trainer-certs-list">
                      {trainer.certs.map((c, cIdx) => (
                        <li key={cIdx}>{c}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Info details */}
            <div className="trainer-info">
              <h3 className="trainer-name">{trainer.name}</h3>
              <p className="trainer-role">{trainer.role}</p>
              <span className="trainer-specialty">{trainer.specialty}</span>
              
              {/* Social icons */}
              <div className="trainer-socials">
                <a href="#contact" aria-label="Email Coach"><Mail size={16} /></a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Share2 size={16} /></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><Globe size={16} /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
