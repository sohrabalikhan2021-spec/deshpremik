import { aboutInfo } from '../data/bdoaaData'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">
          <span className="section-title-bn">সম্পর্কে</span>
          <span className="section-title-en">About BDOAA</span>
        </h2>
        <div className="about-grid">
          <div className="about-card">
            <div className="about-card-icon">🔭</div>
            <h3>আমাদের সম্পর্কে</h3>
            <p>{aboutInfo.descriptionBn}</p>
            <p className="about-en">{aboutInfo.description}</p>
          </div>
          <div className="about-card">
            <div className="about-card-icon">🎯</div>
            <h3>আমাদের লক্ষ্য</h3>
            <p>{aboutInfo.missionBn}</p>
            <p className="about-en">{aboutInfo.mission}</p>
          </div>
          <div className="about-card">
            <div className="about-card-icon">📅</div>
            <h3>ইতিহাস</h3>
            <p>
              বাংলাদেশে জ্যোতির্বিদ্যা অলিম্পিয়াড কার্যক্রম আনুষ্ঠানিকভাবে {aboutInfo.founded} সালে শুরু হয়।
              প্রথম IOAA-তে বাংলাদেশ অংশগ্রহণ করে {aboutInfo.founded} সালে থাইল্যান্ডের চিয়াং মাই-এ।
              তখন থেকে বাংলাদেশ নিয়মিতভাবে আন্তর্জাতিক অলিম্পিয়াডে অংশগ্রহণ করে আসছে।
            </p>
          </div>
          <div className="about-card">
            <div className="about-card-icon">🌐</div>
            <h3>আন্তর্জাতিক সংযোগ</h3>
            <p>
              BDOAA আন্তর্জাতিক জ্যোতির্বিদ্যা ও জ্যোতিঃপদার্থবিদ্যা অলিম্পিয়াড (IOAA),
              IOAAjr (জুনিয়র), GeCAA এবং OWAO-তে বাংলাদেশের প্রতিনিধিত্বকারী দল প্রেরণের
              দায়িত্বপ্রাপ্ত সংস্থা। বিশ্বের ৫০টিরও বেশি দেশ এসব প্রতিযোগিতায় অংশ নেয়।
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
