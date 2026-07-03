import { committees } from '../data/bdoaaData'
import './Team.css'

export function getMemberInitials(name) {
  const parts = name.split(' ').filter((p) => p.length > 0)
  if (parts.length === 0) return '?'
  if (parts.length === 1) return parts[0][0].toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

export default function Team() {
  const committeeOrder = ['executive', 'academic', 'organizing', 'advisory']

  return (
    <section id="team" className="team section">
      <div className="container">
        <h2 className="section-title">
          <span className="section-title-bn">আমাদের টিম</span>
          <span className="section-title-en">Our Team</span>
        </h2>

        {committeeOrder.map((key) => {
          const committee = committees[key]
          return (
            <div key={key} className="committee-section">
              <h3 className="committee-title">
                <span className="committee-title-bn">{committee.titleBn}</span>
                <span className="committee-title-en">{committee.title}</span>
              </h3>
              <div className="committee-members">
                {committee.members.map((member) => (
                  <div key={member.name} className="member-card">
                    <div className="member-avatar">
                      {getMemberInitials(member.name)}
                    </div>
                    <div className="member-info">
                      <span className="member-name">{member.name}</span>
                      <span className="member-role">{member.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
