import './App.css'

const metrics = [
  { value: '12+', label: 'Production-ready builds' },
  { value: '95%', label: 'Focus on responsive polish' },
  { value: '24/7', label: 'Learning and iterating' },
]

const skills = [
  'React',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Responsive UI',
  'REST APIs',
  'Git & GitHub',
  'Performance Basics',
]

const projects = [
  {
    title: 'Portfolio Platform',
    tag: 'Personal Brand',
    description:
      'A fast, scroll-friendly portfolio focused on storytelling, clarity, and polished frontend details.',
    stack: ['React', 'Vite', 'CSS'],
  },
  {
    title: 'UI Component Lab',
    tag: 'Design Systems',
    description:
      'A collection of reusable sections and interaction patterns built to speed up future landing pages and dashboards.',
    stack: ['React', 'Reusable Components', 'Accessibility'],
  },
  {
    title: 'Business Landing Page',
    tag: 'Frontend Delivery',
    description:
      'A conversion-minded website with responsive layouts, visual hierarchy, and clean handoff-ready code.',
    stack: ['Responsive Design', 'Modern Layouts', 'Deployment'],
  },
]

const timeline = [
  {
    year: '2026',
    title: 'Frontend Portfolio Refresh',
    description:
      'Built a personal site to present projects, capabilities, and a clear professional identity with modern visual direction.',
  },
  {
    year: '2025',
    title: 'React Practice Projects',
    description:
      'Created multiple interface experiments to strengthen component structure, layout systems, and state handling fundamentals.',
  },
  {
    year: 'Now',
    title: 'Growing as a Developer',
    description:
      'Continuing to sharpen problem solving, ship polished interfaces, and turn ideas into dependable user experiences.',
  },
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#home">
          Harsh<span>Portfolio</span>
        </a>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">React Developer Portfolio</p>
            <h1>
              I build clean, engaging web experiences that feel sharp on every
              screen.
            </h1>
            <p className="hero-text">
              I&apos;m Harsh, a frontend-focused developer creating responsive
              interfaces with React. I care about clarity, visual rhythm, and
              shipping websites that look confident instead of generic.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View projects
              </a>
              <a className="button button-secondary" href="#contact">
                Let&apos;s work together
              </a>
            </div>
          </div>

          <div className="hero-card">
            <p className="card-label">Current focus</p>
            <h2>Crafting portfolio-grade React interfaces</h2>
            <p>
              Building layouts with strong hierarchy, purposeful color, and
              responsive behavior that holds up in real-world use.
            </p>
            <div className="metric-grid">
              {metrics.map((item) => (
                <article className="metric-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">About me</p>
            <h2>Frontend work with a balance of code, layout, and storytelling</h2>
          </div>
          <div className="about-grid">
            <article className="panel panel-large">
              <p>
                I enjoy turning ideas into interfaces that are easy to use and
                memorable to look at. My approach combines React fundamentals,
                careful spacing, and strong section structure so the final
                product feels professional from the first scroll.
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

        <section className="content-section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Featured work</p>
            <h2>Selected projects that show how I design and build</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-topline">
                  <span>{project.tag}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="stack-list">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="journey">
          <div className="section-heading">
            <p className="eyebrow">Journey</p>
            <h2>How I&apos;m growing as a developer</h2>
          </div>
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

        <section className="contact-section" id="contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Ready to build something thoughtful together?</h2>
            <p>
              I&apos;m available for portfolio projects, landing pages, and
              frontend collaboration.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button button-primary" href="mailto:harsh@example.com">
              harsh@example.com
            </a>
            <a className="button button-secondary" href="https://github.com/">
              GitHub Profile
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
