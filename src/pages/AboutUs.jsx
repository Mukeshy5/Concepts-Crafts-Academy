import logo from '../assets/logo.png'
import Icon from '../components/Icon'
import { SectionHeading } from '../components/Home'
import { academyInfo, benefits, programs, whyChooseUs } from '../data/academy'

const AboutUs = () => {
  return (
    <main className="inner-page">
      <section className="page-hero">
        <div className="section-shell page-hero-grid">
          <div className="reveal">
            <span className="eyebrow">About Us</span>
            <h1>Concept-focused after-school learning for confident results</h1>
            <p>
              {academyInfo.name} helps students build strong concepts, better
              study discipline, and the confidence to perform well in school.
            </p>
          </div>
          <div className="page-hero-logo reveal reveal-delay-1">
            <img src={logo} alt="Concepts & Crafts Academy logo" />
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-shell split-layout">
          <div className="story-block reveal">
            <span className="eyebrow">Our Approach</span>
            <h2>Clear teaching, regular practice, visible progress</h2>
            <p>
              The academy is designed for parents who want reliable academic
              support after school without overwhelming the child. Each learner
              gets topic-wise explanation, worksheet practice, revision, and
              guidance for school assessments.
            </p>
            <p>
              Classes are available online and offline, with programs for early
              learners, primary classes, secondary science and English, and
              senior secondary Biology and Chemistry.
            </p>
          </div>

          <div className="metric-grid reveal reveal-delay-1">
            <div>
              <strong>UKG-12</strong>
              <span>Academic levels</span>
            </div>
            <div>
              <strong>5+</strong>
              <span>Global regions</span>
            </div>
            <div>
              <strong>Online</strong>
              <span>Flexible access</span>
            </div>
            <div>
              <strong>Offline</strong>
              <span>Gurugram classes</span>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section tinted-section">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Learning Promise"
            title="Everything is built around stronger fundamentals"
            text="Students are guided through concepts, practice, assessment, and feedback with a structured routine."
          />
          <div className="why-timeline compact-timeline">
            {whyChooseUs.map((item, index) => (
              <article
                className="why-card reveal"
                key={item.title}
                style={{ '--delay': `${index * 90}ms` }}
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

      <section className="page-section">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Programs"
            title="Learning support from early years to board classes"
            text="Each program is designed with age-appropriate teaching methods and practice material."
          />
          <div className="program-grid">
            {programs.map((program, index) => (
              <article
                className="program-card reveal"
                key={program.title}
                style={{ '--delay': `${index * 70}ms` }}
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

      <section className="benefits-band inner-benefits">
        <div className="section-shell benefits-row">
          {benefits.map((benefit) => (
            <div className="benefit-badge reveal" key={benefit}>
              <Icon name="check" size={18} />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default AboutUs
