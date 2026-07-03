import { ioaaResults, ioaaJuniorResults, owaoResults } from '../data/bdoaaData'
import { getAwardEmoji } from './Achievements'
import './IOAAHistory.css'

export function formatTeamList(members) {
  if (members.length === 0) return ''
  return members.join(', ')
}

export default function IOAAHistory() {
  const allResults = [
    ...ioaaResults.map((r) => ({ ...r, category: 'IOAA' })),
    ...ioaaJuniorResults.map((r) => ({ ...r, category: 'IOAAjr' })),
    ...owaoResults.map((r) => ({ ...r, category: 'OWAO' })),
  ].sort((a, b) => b.year - a.year)

  return (
    <section id="ioaa" className="ioaa-history section">
      <div className="container">
        <h2 className="section-title">
          <span className="section-title-bn">IOAA-তে বাংলাদেশ</span>
          <span className="section-title-en">Bangladesh in IOAA</span>
        </h2>
        <p className="section-subtitle">
          ২০০৭ সাল থেকে বাংলাদেশ আন্তর্জাতিক জ্যোতির্বিদ্যা ও জ্যোতিঃপদার্থবিদ্যা
          অলিম্পিয়াডে নিয়মিত অংশগ্রহণ করে আসছে
        </p>

        <div className="ioaa-timeline">
          {allResults.map((result) => (
            <div key={`${result.year}-${result.edition}`} className="ioaa-entry">
              <div className="ioaa-entry-marker">
                <div className="ioaa-entry-year">{result.year}</div>
                <div className="ioaa-entry-dot"></div>
              </div>
              <div className="ioaa-entry-card">
                <div className="ioaa-entry-header">
                  <h3>{result.edition} {result.category}</h3>
                  <span className="ioaa-entry-location">{result.location}</span>
                </div>

                <div className="ioaa-entry-team">
                  <h4>দলের সদস্য:</h4>
                  <p>{formatTeamList(result.teamMembers)}</p>
                </div>

                {result.teamLeaders.length > 0 && (
                  <div className="ioaa-entry-leaders">
                    <h4>দলনেতা:</h4>
                    <p>{formatTeamList(result.teamLeaders)}</p>
                  </div>
                )}

                {result.achievements.length > 0 && (
                  <div className="ioaa-entry-achievements">
                    {result.achievements.map((a, idx) => (
                      <span key={idx} className={`ioaa-award ioaa-award-${a.type}`}>
                        {getAwardEmoji(a.type)} {a.name} — {a.award}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
