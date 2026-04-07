import { codingProfiles } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

function CodingProfilesSection() {
  return (
    <section className="content-section section-block" id="profiles">
      <SectionHeading
        eyebrow="Coding profiles"
        title="Problem-solving practice that supports interview readiness and core fundamentals"
      />

      <div className="profiles-grid">
        {codingProfiles.map((profile) => (
          <article className="profile-card" key={profile.title}>
            <p className="panel-title">{profile.title}</p>
            <p>{profile.description}</p>
            <a
              className="button button-secondary profile-link"
              href={profile.href}
              target="_blank"
              rel="noreferrer"
            >
              {profile.cta}
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CodingProfilesSection
