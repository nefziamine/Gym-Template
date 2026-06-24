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
  const [activeDay, setActiveDay] = useState('Monday')

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  const scheduleData: Record<string, ClassEvent[]> = {
    Monday: [
      { time: '07:00 AM - 08:00 AM', name: 'Strength Conditioning', trainer: 'Marcus Vance', room: 'Main Gym Floor', intensity: 'High' },
      { time: '09:00 AM - 10:00 AM', name: 'Power Flow Yoga', trainer: 'Sarah Jenkins', room: 'Studio A', intensity: 'Low' },
      { time: '12:00 PM - 01:00 PM', name: 'HIIT Core Burn', trainer: 'David Miller', room: 'Turf Area', intensity: 'High' },
      { time: '05:30 PM - 06:30 PM', name: 'Zumba Dance', trainer: 'Emma Stone', room: 'Studio B', intensity: 'Medium' },
      { time: '07:00 PM - 08:30 PM', name: 'Olympic Weightlifting', trainer: 'Marcus Vance', room: 'Lifting Platform', intensity: 'High' }
    ],
    Tuesday: [
      { time: '08:00 AM - 09:00 AM', name: 'Spin Endurance', trainer: 'Emma Stone', room: 'Cardio Deck', intensity: 'High' },
      { time: '10:00 AM - 11:00 AM', name: 'Pilates Core', trainer: 'Sarah Jenkins', room: 'Studio A', intensity: 'Low' },
      { time: '04:30 PM - 05:30 PM', name: 'Functional Mobility', trainer: 'David Miller', room: 'Turf Area', intensity: 'Medium' },
      { time: '06:00 PM - 07:00 PM', name: 'Power Boxing', trainer: 'Marcus Vance', room: 'Studio B', intensity: 'High' }
    ],
    Wednesday: [
      { time: '07:00 AM - 08:00 AM', name: 'Strength Conditioning', trainer: 'Marcus Vance', room: 'Main Gym Floor', intensity: 'High' },
      { time: '09:00 AM - 10:00 AM', name: 'Mobility & Stretch', trainer: 'Sarah Jenkins', room: 'Studio A', intensity: 'Low' },
      { time: '12:00 PM - 01:00 PM', name: 'HIIT Kettlebell', trainer: 'David Miller', room: 'Turf Area', intensity: 'High' },
      { time: '05:30 PM - 06:30 PM', name: 'Body Pump', trainer: 'Emma Stone', room: 'Studio B', intensity: 'Medium' }
    ],
    Thursday: [
      { time: '08:00 AM - 09:00 AM', name: 'Spin Endurance', trainer: 'Emma Stone', room: 'Cardio Deck', intensity: 'High' },
      { time: '10:00 AM - 11:00 AM', name: 'Gentle Hatha Yoga', trainer: 'Sarah Jenkins', room: 'Studio A', intensity: 'Low' },
      { time: '05:30 PM - 06:30 PM', name: 'Calisthenics Skills', trainer: 'David Miller', room: 'Turf Area', intensity: 'Medium' },
      { time: '07:00 PM - 08:00 PM', name: 'Apex Strength Club', trainer: 'Marcus Vance', room: 'Lifting Platform', intensity: 'High' }
    ],
    Friday: [
      { time: '07:00 AM - 08:00 AM', name: 'Strength Conditioning', trainer: 'Marcus Vance', room: 'Main Gym Floor', intensity: 'High' },
      { time: '09:30 AM - 10:30 AM', name: 'Power Flow Yoga', trainer: 'Sarah Jenkins', room: 'Studio A', intensity: 'Low' },
      { time: '12:00 PM - 01:00 PM', name: 'HIIT Core Burn', trainer: 'David Miller', room: 'Turf Area', intensity: 'High' },
      { time: '05:00 PM - 06:00 PM', name: 'Weekend Warmup Run', trainer: 'Emma Stone', room: 'Cardio Deck', intensity: 'Medium' }
    ],
    Saturday: [
      { time: '09:00 AM - 10:30 AM', name: 'Saturday Boot Camp', trainer: 'David Miller', room: 'Main Floor / Turf', intensity: 'High' },
      { time: '11:00 AM - 12:00 PM', name: 'Vinyasa Release', trainer: 'Sarah Jenkins', room: 'Studio A', intensity: 'Low' },
      { time: '02:00 PM - 03:00 PM', name: 'Intro to Olympic Lifts', trainer: 'Marcus Vance', room: 'Lifting Platform', intensity: 'Medium' }
    ],
    Sunday: [
      { time: '10:00 AM - 11:00 AM', name: 'Sunday Flow & Recover', trainer: 'Sarah Jenkins', room: 'Studio A', intensity: 'Low' },
      { time: '11:30 AM - 12:30 PM', name: 'Full Body Mobility', trainer: 'David Miller', room: 'Turf Area', intensity: 'Medium' }
    ]
  }

  const currentClasses = scheduleData[activeDay] || []

  return (
    <section id="schedule" className="schedule-section">
      <span className="section-subtitle">TIMETABLE</span>
      <h2>WEEKLY CLASS SCHEDULE</h2>

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
                  {item.intensity}
                </span>
              </div>

              {/* CTA */}
              <div className="schedule-cell action-cell">
                <a href="#contact" className="btn btn-secondary schedule-btn">
                  Book Slot
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="no-classes card-glass">No classes scheduled for today.</div>
        )}
      </div>
    </section>
  )
}
