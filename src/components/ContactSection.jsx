import { contactLinks } from '../data/portfolioData'

function ContactSection() {
  return (
    <section className="contact-section section-block" id="contact">
      <div>
        {/* <p className="eyebrow">Contact</p> */}
        <h3 >Let’s build something together.</h3>
        {/* <h4>Let’s build something together.</h4> */}
        <p>
          Available for backend, API, and full-stack opportunities.
        </p>
      </div>

      <div className="contact-links-grid">
        {contactLinks.map((link) => {
          const isExternal = !link.href.startsWith('mailto:') && !link.download
          const href = link.download
            ? `${import.meta.env.BASE_URL}${link.href}`
            : link.href

          return (
            <a
              key={link.label}
              className={`button button-${link.variant}`}
              href={href}
              download={link.download}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noreferrer' : undefined}
            >
              {link.label}
            </a>
          )
        })}
      </div>
    </section>
  )
}

export default ContactSection
