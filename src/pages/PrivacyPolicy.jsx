import { academyInfo } from '../data/academy'

const policies = [
  {
    title: 'Information We Collect',
    text: 'We may collect parent name, student class, phone number, subject interest, and enrollment preferences when you contact the academy.',
  },
  {
    title: 'How We Use Information',
    text: 'Information is used to respond to inquiries, plan classes, share academic updates, and support enrollment communication.',
  },
  {
    title: 'Data Sharing',
    text: 'Student and parent details are not sold. Information may be shared only when required for academy operations or legal compliance.',
  },
  {
    title: 'Communication',
    text: 'By contacting the academy, you may receive calls or WhatsApp messages related to classes, enrollment, worksheets, and updates.',
  },
  {
    title: 'Security',
    text: 'Reasonable care is taken to protect submitted information, but no digital communication method is completely risk-free.',
  },
  {
    title: 'Updates',
    text: 'This policy may be updated when academy services, communication methods, or legal requirements change.',
  },
]

const PrivacyPolicy = () => {
  return (
    <main className="inner-page policy-page">
      <section className="page-hero">
        <div className="section-shell narrow-shell reveal">
          <span className="eyebrow">Privacy</span>
          <h1>Privacy Policy</h1>
          <p>Last updated: June 19, 2026</p>
        </div>
      </section>

      <section className="page-section">
        <div className="section-shell narrow-shell policy-card reveal">
          <p>
            {academyInfo.name} respects student and parent privacy. This policy
            explains how basic contact and enrollment information is handled.
          </p>

          {policies.map((item) => (
            <article key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}

          <article>
            <h2>Contact</h2>
            <p>
              For privacy questions, call {academyInfo.phoneDisplay} or contact
              the academy at {academyInfo.address}.
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}

export default PrivacyPolicy
