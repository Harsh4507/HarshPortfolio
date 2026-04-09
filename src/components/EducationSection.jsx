import { education } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

function EducationSection() {
  return (
    <section className="content-section section-block" id="education">
      <SectionHeading
        eyebrow="Education"
        title="The foundation behind the engineering approach"
      />

      <div className="education-list">
        {education.map((item) => (
          <article className="panel education-card" key={item.title}>
            <div className="education-header">
              <div>
                <p className="panel-title">{item.period}</p>
                <h3>{item.title}</h3>
              </div>
            </div>
            {/* <p>{item.description}</p> */}
          </article>
        ))}
      </div>
    </section>
  )
}

export default EducationSection
