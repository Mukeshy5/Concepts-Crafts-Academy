import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import qrEnrolled from '../assets/QREnrolled.png'
import {
  academyInfo,
  approachSteps,
  benefits,
  excellencePillars,
  faqs,
  heroHighlights,
  internationalProgram,
  missionVision,
  parentUpdates,
  programs,
  programsIntro,
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

const CheckList = ({ items }) => (
  <ul className="check-list">
    {items.map((item) => (
      <li key={item}>
        <Icon name="check" size={16} />
        <span>{item}</span>
      </li>
    ))}
  </ul>
)

const Home = () => {
  return (
    <main>
      <section className="hero-section">
        <div className="section-shell hero-grid">
          <div className="hero-copy reveal">
            <span className="eyebrow hero-eyebrow">{academyInfo.program}</span>
            <h1>{academyInfo.headline}</h1>
            <p>
              Most students spend years studying but never learn how to think
              independently, solve problems confidently, or communicate
              effectively.
            </p>
            <p>
              At {academyInfo.name}, education prepares students not only for
              exams but also for life.
            </p>

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
                Schedule a Free Assessment
                <Icon name="arrowRight" size={20} />
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

      <section className="benefits-band" aria-label="Academy excellence pillars">
        <div className="section-shell benefits-row">
          {benefits.map((benefit, index) => (
            <div
              className="benefit-badge reveal"
              key={benefit}
              style={{ '--delay': `${index * 80}ms` }}
            >
              <Icon name="check" size={18} />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section" id="about">
        <div className="section-shell split-layout">
          <div className="story-block reveal">
            <span className="eyebrow">More Than Subject Teaching</span>
            <h2>We do not simply teach subjects. We mentor students.</h2>
            <p>
              Our After-School Excellence Program combines academic guidance
              with essential future-ready skills, helping students become
              confident, curious, disciplined, and successful learners.
            </p>
          </div>

          <div className="info-grid reveal reveal-delay-1">
            {missionVision.map((item) => (
              <article className="info-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section tinted-section" id="why-us">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Why Parents Choose Us"
            title="More than a tuition centre"
            text="Every student receives guidance for academics, learning habits, confidence, and personal growth."
          />

          <div className="feature-grid">
            {whyChooseUs.map((item, index) => (
              <article
                className="feature-card reveal"
                key={item.title}
                style={{ '--delay': `${index * 70}ms` }}
              >
                <div className="card-icon">
                  <Icon name={item.icon} size={28} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Our Excellence Framework"
            title="The 5 pillars of student success"
            text="A balanced framework that develops academic strength, thinking skills, expression, creativity, and confidence."
          />

          <div className="pillar-grid">
            {excellencePillars.map((pillar, index) => (
              <article
                className="pillar-card reveal"
                key={pillar.title}
                style={{ '--delay': `${index * 80}ms` }}
              >
                <Icon name={pillar.icon} size={30} />
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section tinted-section" id="programs">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Programs"
            title={programsIntro.title}
            text={programsIntro.text}
          />

          <div className="section-actions reveal">
            <Link className="btn btn-secondary" to="/programs">
              View Complete Programs Page
              <Icon name="arrowRight" size={19} />
            </Link>
          </div>

          <div className="program-grid detailed-program-grid">
            {programs.map((program, index) => (
              <article
                className="program-card detailed-program-card reveal"
                key={program.title}
                style={{ '--delay': `${index * 70}ms` }}
              >
                <div className="card-icon">
                  <Icon name={program.icon} size={30} />
                </div>
                <span>{program.subtitle}</span>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <h4>Focus Areas</h4>
                <CheckList items={program.focusAreas} />
                <p className="outcome-text">
                  <strong>Outcome:</strong> {program.outcome}
                </p>
              </article>
            ))}
          </div>

          <article className="international-card reveal reveal-delay-1">
            <div>
              <span className="eyebrow">International Program</span>
              <h3>{internationalProgram.title}</h3>
              <p>{internationalProgram.subtitle}</p>
              <p>{internationalProgram.description}</p>
            </div>

            <div className="international-details">
              <div>
                <strong>Teaching Across</strong>
                <div className="tag-row">
                  {internationalProgram.locations.map((location) => (
                    <span key={location}>{location}</span>
                  ))}
                  <span>Etc</span>
                </div>
              </div>
              <div>
                <strong>Subjects</strong>
                <ul className="subject-list">
                  {internationalProgram.subjects.map((subject) => (
                    <li key={subject}>{subject}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="page-section" id="approach">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Our Approach"
            title="How learning happens at Concepts & Crafts"
            text="Each student moves through assessment, planning, interactive learning, practice, and progress tracking."
          />

          <div className="steps-grid">
            {approachSteps.map((step, index) => (
              <article
                className="step-card reveal"
                key={step.title}
                style={{ '--delay': `${index * 80}ms` }}
              >
                <strong>{String(index + 1).padStart(2, '0')}</strong>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section tinted-section" id="parents">
        <div className="section-shell split-layout">
          <div className="story-block reveal">
            <span className="eyebrow">Parents</span>
            <h2>A partnership for your child&apos;s success</h2>
            <p>
              We believe parents play a crucial role in a child&apos;s
              educational journey. That&apos;s why we maintain regular
              communication regarding progress, goals, assessments, strengths,
              and improvement areas. Together, we create the best possible
              learning environment for every student.
            </p>
          </div>

          <div className="parents-panel reveal reveal-delay-1">
            <h3>Regular communication includes</h3>
            <CheckList items={parentUpdates} />
          </div>
        </div>
      </section>

      <section className="page-section" id="faq">
        <div className="section-shell">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions parents often ask"
            text="Clear answers about our program model, grades, curriculum, class modes, assessment, and mentoring."
          />

          <div className="faq-grid">
            {faqs.map((item, index) => (
              <article
                className="faq-card reveal"
                key={item.question}
                style={{ '--delay': `${index * 70}ms` }}
              >
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section contact-section" id="contact">
        <div className="section-shell contact-grid">
          <div className="contact-copy reveal">
            <span className="eyebrow">Contact</span>
            <h2>Let&apos;s build your child&apos;s future together</h2>
            <p>
              Whether your child needs academic support, confidence building, or
              a structured learning environment, we are here to help.
            </p>
            <div className="contact-actions">
              <Link className="btn btn-primary" to="/enroll">
                Schedule a Free Assessment Session
                <Icon name="scan" size={20} />
              </Link>
              <a
                className="btn btn-secondary"
                href={academyInfo.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                Call / WhatsApp
                <Icon name="whatsapp" size={20} />
              </a>
            </div>
          </div>

          <div className="contact-card reveal reveal-delay-1">
            <div className="contact-line">
              <Icon name="phone" />
              <div>
                <span>Call / WhatsApp</span>
                <a href={`tel:${academyInfo.phone}`}>{academyInfo.phoneDisplay}</a>
              </div>
            </div>
            <div className="contact-line">
              <Icon name="monitor" />
              <div>
                <span>Class Mode</span>
                <p>Offline & Online Programs Available</p>
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
