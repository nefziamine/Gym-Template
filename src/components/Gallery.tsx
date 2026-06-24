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
      title: "Olympic Lifting Deck",
      category: "facilities",
      description: "Eleiko barbells, competition plates, and solid oak platforms.",
      details: "Our lifting deck features 8 custom-built stations with full sound reduction flooring, certified barbell lines, and chalk racks.",
      gradient: "linear-gradient(135deg, #12141c 0%, #ccff00 100%)"
    },
    {
      id: 2,
      title: "Recovery Infrared Sauna",
      category: "facilities",
      description: "Full-spectrum infrared heat for cellular muscle recovery.",
      details: "Equipped with state-of-the-art infrared lamps set between 110-130°F, ideal for post-training inflammation reduction.",
      gradient: "linear-gradient(135deg, #12141c 0%, #00f0ff 100%)"
    },
    {
      id: 3,
      title: "Zumba Energy Class",
      category: "events",
      description: "High-intensity weekend dance party workout.",
      details: "Our weekly dance classes bring over 50 members together for choreographic cardio, pulsing lights, and high-energy music.",
      gradient: "linear-gradient(135deg, #12141c 0%, #ffa500 100%)"
    },
    {
      id: 4,
      title: "Functional Turf Area",
      category: "facilities",
      description: "50-meter sprint track, heavy sleds, and tire flips.",
      details: "A dedicated turf field for athletic conditioning, high-intensity sled drives, plyometrics, and functional HIIT workouts.",
      gradient: "linear-gradient(135deg, #12141c 0%, #ff0055 100%)"
    },
    {
      id: 5,
      title: "Annual Powerlift Showdown",
      category: "events",
      description: "Apex's community bench, squat, and deadlift competition.",
      details: "Every December we host our member strength face-off, complete with judges, scoring sheets, food stalls, and active prizes.",
      gradient: "linear-gradient(135deg, #12141c 0%, #7b2cbf 100%)"
    },
    {
      id: 6,
      title: "Yoga Sanctuary",
      category: "facilities",
      description: "Soundproofed ambient heated flow studio.",
      details: "A serene space with natural floorboards, soft lighting, essential oil diffusers, and warm wall panels for Vinyasa and Yin Yoga.",
      gradient: "linear-gradient(135deg, #12141c 0%, #00ff66 100%)"
    }
  ]

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter)

  return (
    <section id="gallery" className="gallery-section">
      <span className="section-subtitle">VISUAL TOUR</span>
      <h2>OUR FACILITIES & EVENTS</h2>

      {/* Filter Tabs */}
      <div className="gallery-filters">
        <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
        <button className={`filter-btn ${filter === 'facilities' ? 'active' : ''}`} onClick={() => setFilter('facilities')}>Facilities</button>
        <button className={`filter-btn ${filter === 'events' ? 'active' : ''}`} onClick={() => setFilter('events')}>Events</button>
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
              <span className="gallery-tag">{item.category}</span>
              <h3 className="gallery-title">{item.title}</h3>
              <p className="gallery-desc">{item.description}</p>
            </div>
            
            <div className="gallery-hover-indicator">
              <Eye size={24} />
              <span>View Details</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Modal */}
      {activeItem && (
        <div className="lightbox-overlay" onClick={() => setActiveItem(null)}>
          <div className="lightbox-modal card-glass" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setActiveItem(null)} aria-label="Close modal">
              <X size={24} />
            </button>
            <div className="lightbox-header" style={{ background: activeItem.gradient }}>
              <ZoomIn size={48} className="lightbox-header-icon" />
            </div>
            <div className="lightbox-body">
              <span className="lightbox-tag">{activeItem.category}</span>
              <h3 className="lightbox-title">{activeItem.title}</h3>
              <p className="lightbox-details">{activeItem.details}</p>
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
                <a href="#contact" className="btn btn-primary" onClick={() => setActiveItem(null)}>Inquire Now</a>
                <button className="btn btn-secondary" onClick={() => setActiveItem(null)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
