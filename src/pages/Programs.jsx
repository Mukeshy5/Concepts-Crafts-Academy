import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { SectionHeading } from '../components/Home'
import {
  academyInfo,
  internationalProgram,
  programSupport,
  programs,
  programsIntro,
} from '../data/academy'

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

const Programs = () => {
  return (
    <main className="inner-page programs-page">
      <section className="page-hero">
        <div className="section-shell page-hero-grid">
          <div className="reveal">
            <span className="eyebrow">Programs</span>
            <h1>Programs designed for every stage of learning</h1>
            <p>
              Grade-wise academic programs, international online learning, and
              personalized mentoring for confident student growth.
            </p>
          </div>

          <div className="program-hero-panel reveal reveal-delay-1">
            <strong>20+</strong>
            <span>International students learning online</span>
            <p>{internationalProgram.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Academic Programs"
            title={programsIntro.title}
            text={programsIntro.text}
          />

          <div className="program-page-grid">
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
        </div>
      </section>

      <section className="page-section tinted-section">
        <div className="section-shell">
          <article className="international-card program-page-international reveal">
            <div>
              <span className="eyebrow">International Section</span>
              <h3>{internationalProgram.title}</h3>
              <p>{internationalProgram.subtitle}</p>
              <p>{internationalProgram.description}</p>
              <Link className="btn btn-primary" to="/enroll">
                Enquire for Online Classes
                <Icon name="arrowRight" size={19} />
              </Link>
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

      <section className="page-section">
        <div className="section-shell support-section-grid">
          <div className="story-block reveal">
            <span className="eyebrow">Extra Support Section</span>
            <h2>{programSupport.title}</h2>
            <p>{programSupport.description}</p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/enroll">
                Schedule a Free Assessment
                <Icon name="scan" size={20} />
              </Link>
              <a className="btn btn-secondary" href={`tel:${academyInfo.phone}`}>
                Call {academyInfo.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="support-panel reveal reveal-delay-1">
            <div>
              <h3>What Students Get</h3>
              <CheckList items={programSupport.highlights} />
            </div>
            <div>
              <h3>Subject Support</h3>
              <div className="support-subject-grid">
                {programSupport.subjects.map((subject) => (
                  <span key={subject}>{subject}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Programs
