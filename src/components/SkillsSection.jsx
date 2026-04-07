import { skillGroups } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

function SkillsSection() {
  return (
    <section className="content-section section-block" id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="A practical stack centered around .NET backend development and delivery"
      />

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="panel" key={group.title}>
            <p className="panel-title">{group.title}</p>
            <div className="skill-list">
              {group.items.map((item) => (
                <span className="skill-chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
