import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { QRCode } from '../components/Home'
import { academyInfo } from '../data/academy'

const Contect = () => {
  return (
    <main className="inner-page">
      <section className="page-hero contact-hero">
        <div className="section-shell page-hero-grid">
          <div className="reveal">
            <span className="eyebrow">Contact</span>
            <h1>Speak with Concepts & Crafts Academy</h1>
            <p>
              Connect for enrollment details, class mode, subject support, and a
              learning plan for your child.
            </p>
          </div>
          <div className="contact-mini-card reveal reveal-delay-1">
            <Icon name="phone" size={32} />
            <span>Phone Number</span>
            <a href={`tel:${academyInfo.phone}`}>{academyInfo.phoneDisplay}</a>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-shell contact-page-grid">
          <div className="contact-card large-contact-card reveal">
            <div className="contact-line">
              <Icon name="whatsapp" />
              <div>
                <span>WhatsApp</span>
                <a href={academyInfo.whatsapp} target="_blank" rel="noreferrer">
                  Message on WhatsApp
                </a>
              </div>
            </div>
            <div className="contact-line">
              <Icon name="phone" />
              <div>
                <span>Call</span>
                <a href={`tel:${academyInfo.phone}`}>{academyInfo.phoneDisplay}</a>
              </div>
            </div>
            <div className="contact-line">
              <Icon name="mapPin" />
              <div>
                <span>Address</span>
                <p>{academyInfo.address}</p>
              </div>
            </div>
            <div className="contact-actions">
              <a
                className="btn btn-primary"
                href={academyInfo.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
                <Icon name="whatsapp" size={20} />
              </a>
              <a className="btn btn-secondary" href={`tel:${academyInfo.phone}`}>
                Call Button
                <Icon name="phone" size={20} />
              </a>
            </div>
          </div>

          <div className="enroll-side-panel reveal reveal-delay-1">
            <QRCode />
            <h2>Scan to Enroll Now</h2>
            <p>
              Quick enrollment support is available for online and offline
              classes.
            </p>
            <Link className="btn btn-primary" to="/enroll">
              Open Enrollment Page
              <Icon name="arrowRight" size={19} />
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section tinted-section">
        <div className="section-shell map-panel reveal">
          <div>
            <span className="eyebrow">Visit Us</span>
            <h2>A5/607 Tulip Lemon, Sector 69, Gurugram</h2>
            <p>
              Offline classes and parent discussions are available at the
              academy address.
            </p>
          </div>
          <div className="map-placeholder" aria-label="Academy location map">
            <Icon name="mapPin" size={52} />
            <span>Sector 69, Gurugram</span>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contect
