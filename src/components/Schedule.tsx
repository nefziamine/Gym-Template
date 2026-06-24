import { useState } from 'react'
import { Clock, User, MapPin, Zap } from 'lucide-react'
import './Schedule.css'

interface ClassEvent {
  time: string;
  name: string;
  trainer: string;
  room: string;
  intensity: 'Low' | 'Medium' | 'High';
}

export default function Schedule() {
  const [activeDay, setActiveDay] = useState('Lundi')

  const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']

  const scheduleData: Record<string, ClassEvent[]> = {
    Lundi: [
      { time: '07:00 - 08:00', name: 'Conditionnement & Force', trainer: 'Marcus Vance', room: 'Plateau Musculation', intensity: 'High' },
      { time: '09:00 - 10:00', name: 'Yoga Power Flow', trainer: 'Sarah Jenkins', room: 'Studio A', intensity: 'Low' },
      { time: '12:00 - 13:00', name: 'HIIT Brûle-Graisses', trainer: 'David Miller', room: 'Zone Synthétique (Turf)', intensity: 'High' },
      { time: '17:30 - 18:30', name: 'Danse Zumba', trainer: 'Emma Stone', room: 'Studio B', intensity: 'Medium' },
      { time: '19:00 - 20:30', name: 'Haltérophilie Olympique', trainer: 'Marcus Vance', room: 'Plateau Haltérophilie', intensity: 'High' }
    ],
    Mardi: [
      { time: '08:00 - 09:00', name: 'Spinning Endurance', trainer: 'Emma Stone', room: 'Espace Cardio', intensity: 'High' },
      { time: '10:00 - 11:00', name: 'Pilates Abdos', trainer: 'Sarah Jenkins', room: 'Studio A', intensity: 'Low' },
      { time: '16:30 - 17:30', name: 'Mobilité Fonctionnelle', trainer: 'David Miller', room: 'Zone Synthétique (Turf)', intensity: 'Medium' },
      { time: '18:00 - 19:00', name: 'Boxe Power', trainer: 'Marcus Vance', room: 'Studio B', intensity: 'High' }
    ],
    Mercredi: [
      { time: '07:00 - 08:00', name: 'Conditionnement & Force', trainer: 'Marcus Vance', room: 'Plateau Musculation', intensity: 'High' },
      { time: '09:00 - 10:00', name: 'Mobilité & Étirements', trainer: 'Sarah Jenkins', room: 'Studio A', intensity: 'Low' },
      { time: '12:00 - 13:00', name: 'HIIT Kettlebell', trainer: 'David Miller', room: 'Zone Synthétique (Turf)', intensity: 'High' },
      { time: '17:30 - 18:30', name: 'Body Pump', trainer: 'Emma Stone', room: 'Studio B', intensity: 'Medium' }
    ],
    Jeudi: [
      { time: '08:00 - 09:00', name: 'Spinning Endurance', trainer: 'Emma Stone', room: 'Espace Cardio', intensity: 'High' },
      { time: '10:00 - 11:00', name: 'Yoga Hatha Doux', trainer: 'Sarah Jenkins', room: 'Studio A', intensity: 'Low' },
      { time: '17:30 - 18:30', name: 'Street Workout & Calisthénie', trainer: 'David Miller', room: 'Zone Synthétique (Turf)', intensity: 'Medium' },
      { time: '19:00 - 20:00', name: 'Club de Force Revenge', trainer: 'Marcus Vance', room: 'Plateau Haltérophilie', intensity: 'High' }
    ],
    Vendredi: [
      { time: '07:00 - 08:00', name: 'Conditionnement & Force', trainer: 'Marcus Vance', room: 'Plateau Musculation', intensity: 'High' },
      { time: '09:30 - 10:30', name: 'Yoga Power Flow', trainer: 'Sarah Jenkins', room: 'Studio A', intensity: 'Low' },
      { time: '12:00 - 13:00', name: 'HIIT Brûle-Graisses', trainer: 'David Miller', room: 'Zone Synthétique (Turf)', intensity: 'High' },
      { time: '17:00 - 18:00', name: 'Course d\'Échauffement', trainer: 'Emma Stone', room: 'Espace Cardio', intensity: 'Medium' }
    ],
    Samedi: [
      { time: '09:00 - 10:30', name: 'Boot Camp du Samedi', trainer: 'David Miller', room: 'Plateau Principal / Turf', intensity: 'High' },
      { time: '11:00 - 12:00', name: 'Yoga Vinyasa', trainer: 'Sarah Jenkins', room: 'Studio A', intensity: 'Low' },
      { time: '14:00 - 15:00', name: 'Initiation Haltérophilie', trainer: 'Marcus Vance', room: 'Plateau Haltérophilie', intensity: 'Medium' }
    ],
    Dimanche: [
      { time: '10:00 - 11:00', name: 'Flow Dominical & Récup', trainer: 'Sarah Jenkins', room: 'Studio A', intensity: 'Low' },
      { time: '11:30 - 12:30', name: 'Mobilité Corps Complet', trainer: 'David Miller', room: 'Zone Synthétique (Turf)', intensity: 'Medium' }
    ]
  }

  const currentClasses = scheduleData[activeDay] || []

  const intensityLabel = (intensity: string) => {
    switch (intensity) {
      case 'High': return 'Élevé';
      case 'Medium': return 'Moyen';
      case 'Low': return 'Faible';
      default: return intensity;
    }
  }

  return (
    <section id="schedule" className="schedule-section">
      <span className="section-subtitle">EMPLOI DU TEMPS</span>
      <h2>PLANNING DES COURS</h2>

      {/* Day Select Tabs */}
      <div className="day-tabs-container">
        {days.map((day) => (
          <button
            key={day}
            className={`day-tab-btn ${activeDay === day ? 'active' : ''}`}
            onClick={() => setActiveDay(day)}
          >
            {day.substring(0, 3)}
          </button>
        ))}
      </div>

      {/* Classes List */}
      <div className="schedule-list">
        {currentClasses.length > 0 ? (
          currentClasses.map((item, index) => (
            <div key={index} className="schedule-row card-glass">
              {/* Time block */}
              <div className="schedule-cell time-cell">
                <Clock size={16} className="schedule-cell-icon" />
                <span>{item.time}</span>
              </div>
              
              {/* Class name */}
              <div className="schedule-cell name-cell">
                <h4>{item.name}</h4>
              </div>

              {/* Trainer */}
              <div className="schedule-cell trainer-cell">
                <User size={16} className="schedule-cell-icon" />
                <span>{item.trainer}</span>
              </div>

              {/* Location */}
              <div className="schedule-cell room-cell">
                <MapPin size={16} className="schedule-cell-icon" />
                <span>{item.room}</span>
              </div>

              {/* Intensity level */}
              <div className="schedule-cell intensity-cell">
                <span className={`intensity-badge ${item.intensity.toLowerCase()}`}>
                  <Zap size={12} style={{ marginRight: '4px' }} />
                  {intensityLabel(item.intensity)}
                </span>
              </div>

              {/* CTA */}
              <div className="schedule-cell action-cell">
                <a href="#contact" className="btn btn-secondary schedule-btn">
                  Réserver
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="no-classes card-glass">Aucun cours prévu pour aujourd'hui.</div>
        )}
      </div>
    </section>
  )
}
