import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import qrEnrolled from '../assets/QREnrolled.png'
import {
  academyInfo,
  benefits,
  countries,
  heroHighlights,
  programs,
  whyChooseUs,
} from '../data/academy'
import Icon from './Icon'

const SectionHeading = ({ eyebrow, title, text }) => (
  <div className="section-heading reveal">
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {text ? <p>{text}</p> : null}
  </div>
)

const QRCode = () => (
  <img
    className="qr-image"
    src={qrEnrolled}
    alt="Scan QR to enroll at Concepts & Crafts Academy"
    loading="lazy"
  />
)

const Home = () => {
  return (
    <main>
      <section className="hero-section">
        <div className="section-shell hero-grid">
          <div className="hero-copy reveal">
            <span className="eyebrow hero-eyebrow">{academyInfo.program}</span>
            <h1>{academyInfo.headline}</h1>
            <p>{academyInfo.tagline}</p>

            <div className="hero-highlights">
              {heroHighlights.map((item) => (
                <div className="highlight-pill" key={item.title}>
                  <Icon name={item.icon} size={20} />
                  <span>{item.title}</span>
                </div>
              ))}
            </div>

            <div className="hero-actions">
              <Link className="btn btn-primary" to="/enroll">
                Scan to Enroll Now
                <Icon name="scan" size={20} />
              </Link>
              <a className="btn btn-secondary" href={`tel:${academyInfo.phone}`}>
                Call {academyInfo.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="hero-visual reveal reveal-delay-1">
            <div className="logo-showcase">
              <img src={logo} alt="Concepts & Crafts Academy education logo" />
            </div>
            <div className="hero-tagline">
              <strong>{academyInfo.tagline}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-band" aria-label="Academy benefits">
        <div className="section-shell benefits-row">
          {benefits.map((benefit, index) => (
            <div
              className="benefit-badge reveal"
              key={benefit}
              style={{ '--delay': `${index * 90}ms` }}
            >
              <Icon name="check" size={18} />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section" id="programs">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Programs Offered"
            title="Age-wise support for every learning stage"
            text="Focused after-school coaching with strong fundamentals, guided practice, and regular revision."
          />

          <div className="program-grid">
            {programs.map((program, index) => (
              <article
                className="program-card reveal"
                key={program.title}
                style={{ '--delay': `${index * 80}ms` }}
              >
                <div className="card-icon">
                  <Icon name={program.icon} size={30} />
                </div>
                <span>{program.subtitle}</span>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section tinted-section" id="why-us">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="A disciplined system for confident learners"
            text="Each class is planned around concept clarity, consistent practice, and mentor-led progress."
          />

          <div className="why-timeline">
            {whyChooseUs.map((item, index) => (
              <article
                className="why-card reveal"
                key={item.title}
                style={{ '--delay': `${index * 100}ms` }}
              >
                <div className="timeline-dot">
                  <Icon name={item.icon} size={24} />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="global-section">
        <div className="section-shell global-panel reveal">
          <div>
            <span className="eyebrow">Global Reach</span>
            <h2>Now Teaching Students Across:</h2>
          </div>
          <div className="flag-row">
            {countries.map((country, index) => (
              <div
                className="flag-card"
                key={country.name}
                style={{ '--delay': `${index * 120}ms` }}
              >
                <span aria-hidden="true">{country.flag}</span>
                <strong>{country.name}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section contact-section" id="contact">
        <div className="section-shell contact-grid">
          <div className="contact-copy reveal">
            <span className="eyebrow">Contact</span>
            <h2>Start with a focused learning plan</h2>
            <p>
              Connect with the academy for online and offline classes, program
              details, and enrollment support.
            </p>
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
                Call Now
                <Icon name="phone" size={20} />
              </a>
            </div>
          </div>

          <div className="contact-card reveal reveal-delay-1">
            <div className="contact-line">
              <Icon name="phone" />
              <div>
                <span>Phone Number</span>
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
            <div className="qr-area">
              <QRCode />
              <Link className="btn btn-primary" to="/enroll">
                Scan to Enroll Now
                <Icon name="scan" size={19} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export { QRCode, SectionHeading }
export default Home
