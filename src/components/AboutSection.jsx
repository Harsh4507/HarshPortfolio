import { aboutCards, aboutHighlights } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

function AboutSection() {
  return (
    <section className="content-section section-block" id="about">
      <SectionHeading
        eyebrow="About"
        title="Backend ownership with a practical full-stack perspective"
      />

      <div className="about-grid">
        <div className="about-story">
          {aboutCards.map((card) => (
            <article className="panel" key={card.title}>
              <p className="panel-title">{card.title}</p>
              <p>{card.description}</p>
            </article>
          ))}
        </div>

        <article className="panel about-highlight-panel">
          <p className="panel-title">Snapshot</p>
          <div className="about-highlight-list">
            {aboutHighlights.map((highlight) => (
              <div className="about-highlight-item" key={highlight}>
                <span className="about-highlight-dot" aria-hidden="true" />
                <p>{highlight}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

export default AboutSection
