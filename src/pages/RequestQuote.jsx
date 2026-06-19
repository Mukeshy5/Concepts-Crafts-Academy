import { useState } from 'react'
import Icon from '../components/Icon'
import { QRCode } from '../components/Home'
import { academyInfo, programs } from '../data/academy'

const initialForm = {
  parentName: '',
  phone: '',
  studentClass: '',
  program: programs[0].title,
}

const RequestQuote = () => {
  const [form, setForm] = useState(initialForm)

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const message = `Hello Concepts & Crafts Academy, I want to enroll. Parent Name: ${form.parentName || 'Not shared'}, Phone: ${form.phone || 'Not shared'}, Student Class: ${form.studentClass || 'Not shared'}, Program: ${form.program}.`
    window.open(`${academyInfo.whatsapp}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <main className="inner-page">
      <section className="page-hero enroll-hero">
        <div className="section-shell page-hero-grid">
          <div className="reveal">
            <span className="eyebrow">Enrollment</span>
            <h1>Start your child&apos;s after-school excellence program</h1>
            <p>
              Share basic details and connect directly with the academy on
              WhatsApp for class availability and next steps.
            </p>
          </div>
          <div className="enroll-side-panel reveal reveal-delay-1">
            <QRCode />
            <h2>Scan to Enroll Now</h2>
            <p>{academyInfo.phoneDisplay}</p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-shell enroll-grid">
          <form className="enroll-form reveal" onSubmit={handleSubmit}>
            <label>
              Parent Name
              <input
                name="parentName"
                type="text"
                value={form.parentName}
                onChange={updateField}
                placeholder="Enter parent name"
              />
            </label>

            <label>
              Phone Number
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={updateField}
                placeholder="+91 9953561600"
              />
            </label>

            <label>
              Student Class
              <input
                name="studentClass"
                type="text"
                value={form.studentClass}
                onChange={updateField}
                placeholder="Example: Class 8"
              />
            </label>

            <label>
              Program Interest
              <select name="program" value={form.program} onChange={updateField}>
                {programs.map((program) => (
                  <option key={program.title} value={program.title}>
                    {program.title}
                  </option>
                ))}
              </select>
            </label>

            <button className="btn btn-primary form-button" type="submit">
              Send on WhatsApp
              <Icon name="whatsapp" size={20} />
            </button>
          </form>

          <div className="steps-panel reveal reveal-delay-1">
            <span className="eyebrow">Admission Flow</span>
            <h2>Simple enrollment process</h2>
            <div className="step-list">
              <div>
                <strong>01</strong>
                <span>Share student class and subject requirement</span>
              </div>
              <div>
                <strong>02</strong>
                <span>Discuss online or offline class preference</span>
              </div>
              <div>
                <strong>03</strong>
                <span>Begin with concept mapping and worksheet practice</span>
              </div>
            </div>
            <a className="btn btn-secondary" href={`tel:${academyInfo.phone}`}>
              Call {academyInfo.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default RequestQuote
