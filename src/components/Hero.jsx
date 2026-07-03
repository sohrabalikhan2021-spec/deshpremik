import { aboutInfo } from '../data/bdoaaData'
import { getTotalMedals, getYearsOfParticipation } from '../data/bdoaaData'
import './Hero.css'

export default function Hero() {
  const medals = getTotalMedals()
  const years = getYearsOfParticipation()
  const totalAwards = medals.gold + medals.silver + medals.bronze + medals.honorable + medals.special

  return (
    <section id="home" className="hero">
      <div className="hero-stars"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-title-bn">{aboutInfo.nameBn}</span>
          <span className="hero-title-en">{aboutInfo.name}</span>
        </h1>
        <p className="hero-subtitle">
          {aboutInfo.founded} সাল থেকে বাংলাদেশে জ্যোতির্বিদ্যার আলো জ্বালাচ্ছে
        </p>
        <div className="hero-stats">
          <div className="stat-card">
            <span className="stat-number">{aboutInfo.founded}</span>
            <span className="stat-label">প্রতিষ্ঠিত</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{years}</span>
            <span className="stat-label">বার IOAA অংশগ্রহণ</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{totalAwards}</span>
            <span className="stat-label">আন্তর্জাতিক পুরস্কার</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{medals.silver}</span>
            <span className="stat-label">রৌপ্য পদক</span>
          </div>
        </div>
        <div className="hero-cta">
          <a href="#about" className="btn btn-primary">আরো জানুন</a>
          <a href="#achievements" className="btn btn-outline">অর্জনসমূহ দেখুন</a>
        </div>
      </div>
    </section>
  )
}
