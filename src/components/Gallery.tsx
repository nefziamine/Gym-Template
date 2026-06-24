import { useState } from 'react'
import { Eye, X, ZoomIn } from 'lucide-react'
import './Gallery.css'

interface GalleryItem {
  id: number;
  title: string;
  category: 'facilities' | 'events';
  description: string;
  details: string;
  gradient: string;
}

export default function Gallery() {
  const [filter, setFilter] = useState<'all' | 'facilities' | 'events'>('all')
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null)

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Espace Haltérophilie Olympique",
      category: "facilities",
      description: "Barres Eleiko, disques de compétition et plateaux en chêne massif.",
      details: "Notre espace d'haltérophilie comprend 8 stations conçues sur mesure avec un revêtement de sol insonorisé, des barres certifiées et des racks à magnésie.",
      gradient: "linear-gradient(135deg, #12141c 0%, #ccff00 100%)"
    },
    {
      id: 2,
      title: "Sauna Infrarouge de Récupération",
      category: "facilities",
      description: "Chaleur infrarouge à spectre complet pour la régénération musculaire cellulaire.",
      details: "Équipé de lampes infrarouges de pointe réglées entre 43°C et 55°C, idéal pour réduire l'inflammation après l'entraînement.",
      gradient: "linear-gradient(135deg, #12141c 0%, #00f0ff 100%)"
    },
    {
      id: 3,
      title: "Cours Énergique de Zumba",
      category: "events",
      description: "Séance de danse et cardio intense pour le week-end.",
      details: "Nos cours de danse hebdomadaires rassemblent plus de 50 membres pour du cardio chorégraphié, des jeux de lumières et des musiques rythmées.",
      gradient: "linear-gradient(135deg, #12141c 0%, #ffa500 100%)"
    },
    {
      id: 4,
      title: "Zone Synthétique Fonctionnelle (Turf)",
      category: "facilities",
      description: "Piste de sprint de 50 mètres, traîneaux lourds et pneus à retourner.",
      details: "Un terrain synthétique dédié à la préparation athlétique, au tirage de traîneaux, à la pliométrie et aux entraînements fonctionnels HIIT.",
      gradient: "linear-gradient(135deg, #12141c 0%, #ff0055 100%)"
    },
    {
      id: 5,
      title: "Compétition Annuelle de Force",
      category: "events",
      description: "Compétition interne de développé couché, squat et soulevé de terre chez RevengeGym.",
      details: "Chaque mois de décembre, nous organisons une compétition de force pour nos membres avec des juges, un classement officiel, des stands de nourriture et des récompenses.",
      gradient: "linear-gradient(135deg, #12141c 0%, #7b2cbf 100%)"
    },
    {
      id: 6,
      title: "Sanctuaire de Yoga",
      category: "facilities",
      description: "Studio chauffé et insonorisé dans une ambiance zen.",
      details: "Un espace serein avec parquet naturel, lumières tamisées, diffuseurs d'huiles essentielles et panneaux muraux chauffants pour le Vinyasa et le Yin Yoga.",
      gradient: "linear-gradient(135deg, #12141c 0%, #00ff66 100%)"
    }
  ]

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter)

  return (
    <section id="gallery" className="gallery-section">
      <span className="section-subtitle">GALERIE PHOTOS</span>
      <h2>NOS INSTALLATIONS & ÉVÉNEMENTS</h2>

      {/* Filter Tabs */}
      <div className="gallery-filters">
        <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>Tout</button>
        <button className={`filter-btn ${filter === 'facilities' ? 'active' : ''}`} onClick={() => setFilter('facilities')}>Installations</button>
        <button className={`filter-btn ${filter === 'events' ? 'active' : ''}`} onClick={() => setFilter('events')}>Événements</button>
      </div>

      {/* Gallery Grid */}
      <div className="grid-3 gallery-grid">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="gallery-card card-glass" 
            style={{ minHeight: '260px', background: item.gradient }}
            onClick={() => setActiveItem(item)}
          >
            <div className="gallery-card-content">
              <span className="gallery-tag">{item.category === 'facilities' ? 'Installations' : 'Événements'}</span>
              <h3 className="gallery-title">{item.title}</h3>
              <p className="gallery-desc">{item.description}</p>
            </div>
            
            <div className="gallery-hover-indicator">
              <Eye size={24} />
              <span>Voir les détails</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Modal */}
      {activeItem && (
        <div className="lightbox-overlay" onClick={() => setActiveItem(null)}>
          <div className="lightbox-modal card-glass" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setActiveItem(null)} aria-label="Fermer la modal">
              <X size={24} />
            </button>
            <div className="lightbox-header" style={{ background: activeItem.gradient }}>
              <ZoomIn size={48} className="lightbox-header-icon" />
            </div>
            <div className="lightbox-body">
              <span className="lightbox-tag">{activeItem.category === 'facilities' ? 'Installations' : 'Événements'}</span>
              <h3 className="lightbox-title">{activeItem.title}</h3>
              <p className="lightbox-details">{activeItem.details}</p>
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
                <a href="#contact" className="btn btn-primary" onClick={() => setActiveItem(null)}>S'informer</a>
                <button className="btn btn-secondary" onClick={() => setActiveItem(null)}>Fermer</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
