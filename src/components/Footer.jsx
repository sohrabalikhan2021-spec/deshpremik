import { aboutInfo } from '../data/bdoaaData'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">✦</span>
            <span className="footer-title">{aboutInfo.shortName}</span>
          </div>
          <p className="footer-text">
            {aboutInfo.nameBn}
          </p>
          <p className="footer-copyright">
            &copy; {currentYear} {aboutInfo.shortName}. সর্বস্বত্ব সংরক্ষিত।
          </p>
        </div>
      </div>
    </footer>
  )
}
