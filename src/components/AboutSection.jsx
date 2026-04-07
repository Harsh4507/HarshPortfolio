import { skills } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

function AboutSection() {
  return (
    <section className="content-section section-block" id="about">
      <SectionHeading
        eyebrow="About me"
        title="Frontend work with a balance of code, layout, and storytelling"
      />

      <div className="about-grid">
        <article className="panel panel-large">
          <p>
            I enjoy turning ideas into interfaces that are easy to use and
            memorable to look at. My approach combines React fundamentals, careful
            spacing, and strong section structure so the final product feels
            professional from the first scroll.
          </p>
        </article>

        <article className="panel">
          <p className="panel-title">Core skills</p>
          <div className="skill-list">
            {skills.map((skill) => (
              <span className="skill-chip" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

export default AboutSection
