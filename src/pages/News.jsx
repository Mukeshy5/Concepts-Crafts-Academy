import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { academyInfo, educationUpdates, internationalProgram } from '../data/academy'

const News = () => {
  return (
    <main className="inner-page news-page">
      <section className="page-hero">
        <div className="section-shell narrow-shell reveal">
          <span className="eyebrow">Updates & News</span>
          <h1>Latest Educational Updates & News</h1>
          <p>
            Academy updates, learning focus areas, and helpful education notes
            for parents and students.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="section-shell">
          <div className="news-highlight reveal">
            <span className="eyebrow">International Learning</span>
            <h2>{internationalProgram.title}</h2>
            <p>{internationalProgram.subtitle}</p>

            <div className="news-highlight-grid">
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
          </div>

          <div className="news-grid">
            {educationUpdates.map((item, index) => (
              <article
                className="news-card reveal"
                key={item.title}
                style={{ '--delay': `${index * 80}ms` }}
              >
                <span>{item.category}</span>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section tinted-section">
        <div className="section-shell contact-grid">
          <div className="contact-copy reveal">
            <span className="eyebrow">Stay Connected</span>
            <h2>Want updates for your child&apos;s grade or curriculum?</h2>
            <p>
              Connect with the academy for program updates, subject support, and
              learning guidance.
            </p>
          </div>
          <div className="contact-card reveal reveal-delay-1">
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
            <Link className="btn btn-primary form-button" to="/enroll">
              Schedule a Free Assessment
              <Icon name="arrowRight" size={19} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default News
