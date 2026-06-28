import { useState } from 'react'
import logo from '../assets/logo.png'
import Icon from '../components/Icon'

const features = [
  {
    icon: 'lightbulb',
    title: 'Modern Design',
    text: 'Sharp, clean, and professional website experiences.',
  },
  {
    icon: 'monitor',
    title: 'Fully Responsive',
    text: 'Flawless layouts across mobile, tablet, and desktop.',
  },
  {
    icon: 'shield',
    title: 'Secure & Reliable',
    text: 'Built with practical security and stability in mind.',
  },
  {
    icon: 'route',
    title: 'Built for Growth',
    text: 'SEO-ready structure made to support business growth.',
  },
]

const services = [
  {
    icon: 'monitor',
    title: 'Website Development',
    text: 'Custom, responsive & fast websites for your business.',
  },
  {
    icon: 'briefcase',
    title: 'E-Commerce Solutions',
    text: 'Secure, scalable online stores with easy management.',
  },
  {
    icon: 'worksheet',
    title: 'CMS Development',
    text: 'WordPress, custom CMS & headless CMS solutions.',
  },
  {
    icon: 'code',
    title: 'Frontend Development',
    text: 'Pixel-perfect, responsive UI with modern frameworks.',
  },
  {
    icon: 'server',
    title: 'Backend Development',
    text: 'Robust APIs, databases & secure server-side logic.',
  },
  {
    icon: 'briefcase',
    title: 'Web Application Development',
    text: 'Powerful web apps for businesses & startups.',
  },
  {
    icon: 'code',
    title: 'API Development & Integration',
    text: 'Seamless API development & third-party integrations.',
  },
  {
    icon: 'server',
    title: 'Database Design & Management',
    text: 'Optimized, secure & scalable database solutions.',
  },
  {
    icon: 'lightbulb',
    title: 'UI/UX Design',
    text: 'User-friendly, modern & responsive design experiences.',
  },
  {
    icon: 'monitor',
    title: 'Responsive Design',
    text: 'Flawless experience across all devices & screen sizes.',
  },
  {
    icon: 'shield',
    title: 'Website Maintenance & Updates',
    text: 'Ongoing security, backups & performance.',
  },
  {
    icon: 'route',
    title: 'SEO Optimization',
    text: 'SEO-ready, optimized & fast websites.',
  },
  {
    icon: 'trophy',
    title: 'Speed Optimization',
    text: 'Lightning-fast websites for better user experience.',
  },
  {
    icon: 'shield',
    title: 'Security & Website Protection',
    text: 'Secure websites with SSL, security audits & protection.',
  },
  {
    icon: 'server',
    title: 'Hosting & Deployment',
    text: 'Reliable hosting, deployment & domain management.',
  },
  {
    icon: 'clipboard',
    title: 'Analytics & Reporting',
    text: 'Track performance, traffic & business growth.',
  },
]

const outcomes = [
  'More Traffic',
  'Better Rankings',
  'Stronger Security',
  'Higher Conversions',
]

const clientReasons = [
  'Fast Delivery',
  'Quality Assured',
  '24/7 Support',
  'Affordable Pricing',
]

const heroMetrics = [
  { value: 'Traffic', label: 'Websites designed to attract more visitors' },
  { value: 'Rankings', label: 'SEO-ready foundations for stronger visibility' },
  { value: 'Security', label: 'Protected structure for business confidence' },
  { value: 'Growth', label: 'Conversion-focused experiences that scale' },
]

const developerEmail = 'my8052344204@gmail.com'
const developerWhatsappNumber = '918052344204'

const Developer = () => {
  const [isDark, setIsDark] = useState(true)
  const [queryForm, setQueryForm] = useState({
    name: '',
    phone: '',
    query: '',
  })
  const pageTheme = isDark ? 'developer-dark' : 'developer-light'

  const handleQueryChange = (event) => {
    const { name, value } = event.target

    setQueryForm((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleQuerySubmit = (event) => {
    event.preventDefault()

    const message = [
      'Website query from Developer page',
      queryForm.name && `Name: ${queryForm.name}`,
      queryForm.phone && `Phone: ${queryForm.phone}`,
      `Query: ${queryForm.query}`,
    ]
      .filter(Boolean)
      .join('\n')

    window.open(
      `https://wa.me/${developerWhatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <main className={`developer-page ${pageTheme}`}>
      <section className="developer-hero" id="top">
        <div className="developer-floating-tech" aria-hidden="true">
          {['Design', 'SEO', 'Speed', 'Security', 'CMS', 'API'].map((item, index) => (
            <span key={item} style={{ '--delay': `${index * 420}ms` }}>
              {item}
            </span>
          ))}
        </div>

        <div className="section-shell developer-hero-shell">
          <div>
            <div className="developer-hero-top">
              <div className="developer-status">
                <span />
                Custom Web Solutions for Every Need
              </div>
              <button
                className="developer-theme-toggle"
                type="button"
                onClick={() => setIsDark((current) => !current)}
              >
                <Icon name={isDark ? 'sun' : 'moon'} size={16} />
                {isDark ? 'Light view' : 'Dark view'}
              </button>
            </div>

            <span className="developer-eyebrow">Web Development Studio</span>
            <h1>
              We build websites that <span>grow businesses</span>
            </h1>
            <p className="developer-title">
              Custom websites, web apps, e-commerce stores, CMS platforms,
              APIs, SEO optimization, hosting, maintenance, and analytics for
              businesses that want better digital results.
            </p>

            <div className="developer-typing" aria-label="Website service focus">
              <span>Built for</span>
              <span className="developer-typing-rotator">
                <span>more traffic</span>
                <span>better rankings</span>
                <span>stronger security</span>
                <span>higher conversions</span>
                <span>bigger results</span>
              </span>
            </div>

            <p className="developer-intro">
              Smarter websites. Stronger performance. Bigger results. From
              design to deployment, every layer is created to help your business
              look credible, load fast, stay protected, and convert more users.
            </p>

            <div className="developer-actions">
              <a className="btn btn-primary" href="#contact">
                Book a Free Consultation Today
                <Icon name="arrowRight" size={19} />
              </a>
              <a className="btn btn-outline developer-outline" href="#services">
                Explore Services
              </a>
            </div>
          </div>

          <div className="developer-hero-visual" aria-label="Website growth profile">
            <article className="developer-profile-card">
              <div className="developer-photo developer-growth-mark" aria-hidden="true">
                <span>Mukesh Kumar</span>
              </div>
              <div>
                <strong>Websites that work for business</strong>
                <span className="developer-profile-role">
                  Modern design, responsive build, secure backend, and growth
                  focused optimization.
                </span>
              </div>
              <div className="developer-brand-mark">
                <img src={logo} alt="Concepts & Crafts Academy logo" />
                <span>Website solutions for academies, startups, service brands, and online stores.</span>
              </div>
            </article>

            <article className="developer-code-card" aria-label="Website delivery values">
              <div className="developer-code-header" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="developer-code-lines">
                <span style={{ '--delay': '0ms' }}>strategy.plan("business growth");</span>
                <span style={{ '--delay': '180ms' }}>design.responsive().polish();</span>
                <span style={{ '--delay': '360ms' }}>deploy.secure().optimize();</span>
                <span style={{ '--delay': '540ms' }}>measure.analytics().improve();</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="developer-section developer-stats-section" aria-label="Website features">
        <div className="section-shell developer-stats-grid">
          {features.map((item) => (
            <article className="developer-stat-card developer-feature-card" key={item.title}>
              <Icon name={item.icon} size={25} />
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="developer-section" id="services">
        <div className="section-shell">
          <div className="developer-section-heading">
            <span className="developer-eyebrow">Our Services</span>
            <h2>Everything your website needs to launch, perform, and grow.</h2>
            <p>
              Choose one focused service or build a complete solution covering
              design, frontend, backend, CMS, hosting, security, SEO, and
              ongoing maintenance.
            </p>
          </div>

          <div className="developer-services-grid">
            {services.map((item) => (
              <article className="developer-project-card developer-service-card" key={item.title}>
                <Icon name={item.icon} size={26} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="developer-section developer-summary-section">
        <div className="section-shell developer-summary-layout">
          <article className="developer-summary-card">
            <span className="developer-eyebrow">Why Choose Us</span>
            <h2>More traffic, stronger rankings, safer websites, higher conversions.</h2>
            <div className="developer-outcome-grid">
              {outcomes.map((item) => (
                <div className="developer-outcome-pill" key={item}>
                  <Icon name="check" size={17} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="developer-summary-list">
              {heroMetrics.map((row) => (
                <div className="developer-summary-row" key={row.value}>
                  <span>{row.value}</span>
                  <div>
                    <strong>{row.value}</strong>
                    <p>{row.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <aside className="developer-stack-panel" aria-label="Why clients choose us">
            <div>
              <span className="developer-eyebrow">Why Clients Choose Us</span>
              <h2>Fast delivery with quality assured.</h2>
              <p>
                The process is built for businesses that need reliable work,
                clear communication, practical pricing, and support after launch.
              </p>
            </div>
            <div className="developer-chip-grid">
              {clientReasons.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="developer-section" aria-label="Business results">
        <div className="section-shell developer-results-panel">
          <span className="developer-eyebrow">Bigger Results</span>
          <h2>
            Smarter Websites. Stronger Performance. Bigger Results.
          </h2>
          <p>
            A website should do more than exist online. It should explain your
            offer clearly, earn trust quickly, load fast, protect users, and
            guide visitors toward action.
          </p>
        </div>
      </section>

      <section className="developer-section developer-contact-section" id="contact">
        <div className="section-shell developer-contact-panel">
          <div>
            <span className="developer-eyebrow">Let&apos;s Build Together</span>
            <h2>Let&apos;s build something amazing together.</h2>
            <p>
              Book a free consultation today and discuss the website, web app,
              e-commerce store, CMS, SEO, speed, security, or hosting support
              your business needs.
            </p>

            <div className="developer-contact-actions">
              <a className="btn btn-primary" href={`mailto:${developerEmail}`}>
                {developerEmail}
                <Icon name="mail" size={19} />
              </a>
              <a
                className="btn btn-secondary"
                href={`https://wa.me/${developerWhatsappNumber}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp +91 8052344204
                <Icon name="whatsapp" size={18} />
              </a>
            </div>
          </div>

          <form className="developer-query-form" onSubmit={handleQuerySubmit}>
            <h3>WhatsApp Query Form</h3>
            <label>
              <span>Name</span>
              <input
                name="name"
                type="text"
                value={queryForm.name}
                onChange={handleQueryChange}
                placeholder="Your name"
              />
            </label>
            <label>
              <span>Phone</span>
              <input
                name="phone"
                type="tel"
                value={queryForm.phone}
                onChange={handleQueryChange}
                placeholder="Your phone number"
              />
            </label>
            <label className="developer-query-message">
              <span>Query</span>
              <textarea
                name="query"
                value={queryForm.query}
                onChange={handleQueryChange}
                placeholder="Tell us what you need"
                rows="4"
                required
              />
            </label>
            <button className="btn btn-primary" type="submit">
              Send Query on WhatsApp
              <Icon name="whatsapp" size={19} />
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Developer
