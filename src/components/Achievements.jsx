import { ioaaResults, getTotalMedals } from '../data/bdoaaData'
import './Achievements.css'

const awardEmoji = {
  gold: '🥇',
  silver: '🥈',
  bronze: '🥉',
  honorable: '🏅',
  special: '⭐',
}

const awardLabelBn = {
  gold: 'স্বর্ণ পদক',
  silver: 'রৌপ্য পদক',
  bronze: 'ব্রোঞ্জ পদক',
  honorable: 'সম্মানসূচক উল্লেখ',
  special: 'বিশেষ পুরস্কার',
}

export function getAwardEmoji(type) {
  return awardEmoji[type] || '🏅'
}

export function getAwardLabelBn(type) {
  return awardLabelBn[type] || type
}

export default function Achievements() {
  const medals = getTotalMedals()
  const recentResults = ioaaResults.filter((r) => r.achievements.length > 0)

  return (
    <section id="achievements" className="achievements section">
      <div className="container">
        <h2 className="section-title">
          <span className="section-title-bn">আন্তর্জাতিক অর্জন</span>
          <span className="section-title-en">International Achievements</span>
        </h2>

        <div className="medals-summary">
          <div className="medal-stat">
            <span className="medal-emoji">🥇</span>
            <span className="medal-count">{medals.gold}</span>
            <span className="medal-label">স্বর্ণ</span>
          </div>
          <div className="medal-stat">
            <span className="medal-emoji">🥈</span>
            <span className="medal-count">{medals.silver}</span>
            <span className="medal-label">রৌপ্য</span>
          </div>
          <div className="medal-stat">
            <span className="medal-emoji">🥉</span>
            <span className="medal-count">{medals.bronze}</span>
            <span className="medal-label">ব্রোঞ্জ</span>
          </div>
          <div className="medal-stat">
            <span className="medal-emoji">🏅</span>
            <span className="medal-count">{medals.honorable}</span>
            <span className="medal-label">সম্মানসূচক</span>
          </div>
          <div className="medal-stat">
            <span className="medal-emoji">⭐</span>
            <span className="medal-count">{medals.special}</span>
            <span className="medal-label">বিশেষ</span>
          </div>
        </div>

        <div className="achievements-list">
          {recentResults.map((result) => (
            <div key={result.year} className="achievement-card">
              <div className="achievement-header">
                <div className="achievement-year">{result.year}</div>
                <div className="achievement-info">
                  <h3>{result.edition} IOAA</h3>
                  <p className="achievement-location">{result.location}</p>
                </div>
              </div>
              {result.highlight && (
                <div className="achievement-highlight">{result.highlight}</div>
              )}
              <div className="achievement-awards">
                {result.achievements.map((achievement, idx) => (
                  <div key={idx} className={`award-item award-${achievement.type}`}>
                    <span className="award-emoji">{getAwardEmoji(achievement.type)}</span>
                    <span className="award-name">{achievement.name}</span>
                    <span className="award-type">{getAwardLabelBn(achievement.type)}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
