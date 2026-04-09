import { achievements } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

function AchievementsSection() {
  return (
    <section className="content-section section-block" id="achievements">
      <SectionHeading
        eyebrow="Achievements"
        title="Signals of consistency, ownership, and growth"
      />

      <div className="achievement-grid">
        {achievements.map((item) => (
          <article className="panel achievement-card" key={item.label}>
            <span className="achievement-value">{item.value}</span>
            <h3>{item.label}</h3>
            <p>{item.description}</p>

            {item.links ? (
              <div className="achievement-links">
                {item.links.map((link) => (
                  <a
                    key={link.title}
                    className="button button-secondary"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}

export default AchievementsSection
