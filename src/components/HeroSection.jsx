import { heroLinks, metrics } from '../data/portfolioData'

function HeroSection() {
  return (
    <section className="hero-section section-block" id="home">
      <div className="hero-copy">
        <h3>.NET Full Stack Developer</h3>
        <p className="hero-text">
          .NET Full Stack Developer with 2+ years of experience (including a 6-month internship) building enterprise-grade web applications using ASP.NET Core, MVC, Web API, SQL Server, and React.js. Strong in backend API development, microservices architecture, database optimization, CQRS, unit testing, and writing clean, maintainable code, with hands-on experience in JavaScript and jQuery.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#experience">
            View experience
          </a>
          <a className="button button-secondary" href="#projects">
            View projects
          </a>
        </div>
      </div>

      <div className="hero-copy">
        <h3>Core Strengths</h3>
        <p>✔ 2+ Years .NET Experience</p>
        <p>✔ Designed & Built REST APIs</p>
        <p>✔ Authentication & Authorization (JWT)</p>
        <p>✔ API Performance & Optimization</p>
        <p>✔ Experience with Microservices</p>
        <p>✔ SQL & Database Optimization</p>
        <p>✔ Clean Architecture & CQRS</p>
        <p>✔ Unit Testing & Maintainable Code</p>  
      </div>
    </section>
  )
}

export default HeroSection
