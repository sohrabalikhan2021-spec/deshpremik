import { olympiadFormat } from '../data/bdoaaData'
import './Format.css'

export default function Format() {
  return (
    <section id="format" className="format section">
      <div className="container">
        <h2 className="section-title">
          <span className="section-title-bn">পরীক্ষা পদ্ধতি</span>
          <span className="section-title-en">Olympiad Format</span>
        </h2>

        <div className="format-timeline">
          {olympiadFormat.rounds.map((round, index) => (
            <div key={round.name} className="format-step">
              <div className="format-step-number">{index + 1}</div>
              <div className="format-step-content">
                <div className="format-step-icon">{round.icon}</div>
                <h3>{round.nameBn}</h3>
                <h4>{round.name}</h4>
                <p>{round.descriptionBn}</p>
              </div>
              {index < olympiadFormat.rounds.length - 1 && (
                <div className="format-step-connector"></div>
              )}
            </div>
          ))}
        </div>

        <div className="exam-types">
          <h3 className="exam-types-title">IOAA পরীক্ষার ধরন</h3>
          <div className="exam-types-grid">
            {olympiadFormat.examTypes.map((exam) => (
              <div key={exam.name} className="exam-type-card">
                <h4>{exam.nameBn}</h4>
                <p className="exam-type-en">{exam.name}</p>
                <p>{exam.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
