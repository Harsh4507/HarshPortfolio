import { timeline } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

function JourneySection() {
  return (
    <section className="content-section section-block" id="journey">
      <SectionHeading eyebrow="Journey" title="How I&apos;m growing as a developer" />

      <div className="timeline">
        {timeline.map((entry) => (
          <article className="timeline-item" key={entry.title}>
            <span className="timeline-year">{entry.year}</span>
            <div>
              <h3>{entry.title}</h3>
              <p>{entry.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default JourneySection
