import { experience } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

function ExperienceSection() {
  return (
    <section className="content-section section-block" id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Professional experience building backend systems, APIs, and business features"
      />

      <div className="experience-list">
        {experience.map((item) => (
          <article className="experience-card" key={`${item.role}-${item.company}`}>
            <div className="experience-header">
              <div>
                <p className="panel-title">{item.company}</p>
                <h3>{item.role}</h3>
              </div>
              <span className="experience-period">{item.period}</span>
            </div>

            <p className="experience-context">{item.context}</p>

            <div className="stack-list">
              {item.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <ul className="experience-highlights">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
