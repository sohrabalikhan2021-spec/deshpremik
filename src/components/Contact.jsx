import { aboutInfo } from '../data/bdoaaData'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">
          <span className="section-title-bn">যোগাযোগ</span>
          <span className="section-title-en">Contact</span>
        </h2>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">📧</div>
            <h3>ইমেইল</h3>
            <a href={`mailto:${aboutInfo.email}`}>{aboutInfo.email}</a>
          </div>
          <div className="contact-card">
            <div className="contact-icon">🌐</div>
            <h3>ওয়েবসাইট</h3>
            <a href={aboutInfo.website} target="_blank" rel="noopener noreferrer">
              bdoaa.org
            </a>
          </div>
          <div className="contact-card">
            <div className="contact-icon">📱</div>
            <h3>সোশ্যাল মিডিয়া</h3>
            <div className="social-links">
              <a
                href="https://www.facebook.com/bdoaa.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/bdoaa_official/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://github.com/BDOAA"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.youtube.com/@bdoaa"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
