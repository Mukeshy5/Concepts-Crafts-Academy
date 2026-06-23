import logo from '../assets/logo.png'
import Icon from '../components/Icon'
import { SectionHeading } from '../components/Home'
import {
  academyInfo,
  approachSteps,
  excellencePillars,
  missionVision,
  whyChooseUs,
} from '../data/academy'

const AboutUs = () => {
  return (
    <main className="inner-page">
      <section className="page-hero">
        <div className="section-shell page-hero-grid">
          <div className="reveal">
            <span className="eyebrow">About Us</span>
            <h1>Education that prepares students for exams and for life</h1>
            <p>
              {academyInfo.name} combines academic guidance with essential
              future-ready skills so students grow as confident, curious, and
              disciplined learners.
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
            <span className="eyebrow">Our Belief</span>
            <h2>We do not simply teach subjects. We mentor students.</h2>
            <p>
              Most students spend years studying but never learn how to think
              independently, solve problems confidently, or communicate
              effectively.
            </p>
            <p>
              At {academyInfo.name}, education is designed to build academic
              strength, personal growth, communication, and confidence.
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

      <section className="page-section tinted-section">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Why Parents Choose Us"
            title="Personalized learning with regular progress tracking"
            text="Parents choose us for concept-based teaching, mentorship, small group learning, and confidence-building activities."
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
            eyebrow="Excellence Framework"
            title="The 5 pillars of student success"
            text="Our framework balances academic mastery with thinking, communication, creativity, character, and confidence."
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

      <section className="page-section tinted-section">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Learning Method"
            title="How learning happens at Concepts & Crafts"
            text="Students are assessed, guided through a personalized plan, taught interactively, and reviewed regularly."
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
    </main>
  )
}

export default AboutUs
