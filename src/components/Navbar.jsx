import { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { href: '#home', label: 'হোম' },
    { href: '#about', label: 'সম্পর্কে' },
    { href: '#format', label: 'পরীক্ষা পদ্ধতি' },
    { href: '#achievements', label: 'অর্জন' },
    { href: '#ioaa', label: 'IOAA ফলাফল' },
    { href: '#team', label: 'টিম' },
    { href: '#contact', label: 'যোগাযোগ' },
  ]

  return (
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <div className="navbar-brand">
        <a href="#home">
          <span className="navbar-logo">✦</span>
          <span className="navbar-title">BDOAA</span>
        </a>
      </div>
      <button
        className={`navbar-toggle ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
