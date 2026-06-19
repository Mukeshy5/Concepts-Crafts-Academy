import { academyInfo } from '../data/academy'

const terms = [
  {
    title: 'Enrollment',
    text: 'Admission is confirmed after class availability, program fit, and parent confirmation are completed.',
  },
  {
    title: 'Classes',
    text: 'Online and offline classes follow a structured learning plan. Schedule changes are communicated by the academy team.',
  },
  {
    title: 'Worksheets and Practice',
    text: 'Worksheets, notes, and practice material are provided for enrolled students and should be used for personal academic practice only.',
  },
  {
    title: 'Attendance',
    text: 'Regular attendance is expected so the student can maintain continuity in concepts, revision, and assessments.',
  },
  {
    title: 'Assessments',
    text: 'Regular assessments help track progress. Results are intended for academic guidance and improvement planning.',
  },
  {
    title: 'Communication',
    text: 'Parents may contact the academy through the listed phone or WhatsApp number for class updates and enrollment support.',
  },
]

const Terms = () => {
  return (
    <main className="inner-page policy-page">
      <section className="page-hero">
        <div className="section-shell narrow-shell reveal">
          <span className="eyebrow">Terms</span>
          <h1>Terms and Conditions</h1>
          <p>Last updated: June 19, 2026</p>
        </div>
      </section>

      <section className="page-section">
        <div className="section-shell narrow-shell policy-card reveal">
          <p>
            These terms apply to the learning programs, enrollment discussions,
            worksheets, and academic support provided by {academyInfo.name}.
          </p>

          {terms.map((item) => (
            <article key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}

          <article>
            <h2>Contact</h2>
            <p>
              For questions about these terms, call {academyInfo.phoneDisplay}
              or visit {academyInfo.address}.
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}

export default Terms
