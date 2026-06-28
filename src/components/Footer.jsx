import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { academyInfo, programs, socials } from '../data/academy'
import Icon from './Icon'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-grid">
        <div className="footer-brand">
          <Link className="brand brand-footer" to="/">
            <img src={logo} alt="Concepts & Crafts Academy logo" />
            <span>
              <strong>{academyInfo.shortName}</strong>
              <small>Academy</small>
            </span>
          </Link>
          <p>{academyInfo.tagline}</p>
          <div className="social-row" aria-label="Social media links">
            {socials.map((social) => (
              <a key={social.label} href={social.href} aria-label={social.label}>
                <Icon name={social.icon} size={19} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-column">
          <h2>Programs</h2>
          {programs.slice(0, 4).map((program) => (
            <Link key={program.title} to="/programs">
              {program.title}
            </Link>
          ))}
        </div>

        <div className="footer-column">
          <h2>Quick Links</h2>
          <Link to="/#about">About Us</Link>
          <Link to="/#approach">Approach</Link>
          <Link to="/#parents">Parents</Link>
          <Link to="/#faq">FAQ</Link>
          <Link to="/news">Latest Updates & News</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/enroll">Enroll</Link>
          <Link to="/developer">Developer</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>

        <div className="footer-column footer-contact">
          <h2>Contact</h2>
          <a href={`tel:${academyInfo.phone}`}>
            <Icon name="phone" size={17} />
            {academyInfo.phoneDisplay}
          </a>
          <a href={academyInfo.whatsapp} target="_blank" rel="noreferrer">
            <Icon name="whatsapp" size={17} />
            WhatsApp
          </a>
          <p>
            <Icon name="mapPin" size={17} />
            {academyInfo.address}
          </p>
        </div>
      </div>

      <div className="footer-bottom section-shell">
        <span>© 2026 Concepts & Crafts Academy. All rights reserved.</span>
        <span>After-School Excellence Program</span>
      </div>
    </footer>
  )
}

export default Footer
