import { projects } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

function ProjectsSection() {
  return (
    <section className="content-section section-block" id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work that reflects backend ownership, real-world structure, and practical delivery"
      />

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-topline">
              <span>{project.tag}</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="project-highlights">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <div className="stack-list">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
