import { navLinks } from '../data/portfolioData'

function DownloadIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="header-action-icon">
      <path d="M12 3.75a.75.75 0 0 1 .75.75v8.69l2.72-2.72a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06l2.72 2.72V4.5a.75.75 0 0 1 .75-.75Z" />
      <path d="M5.75 15.5a.75.75 0 0 1 .75.75v1.5c0 .41.34.75.75.75h9.5c.41 0 .75-.34.75-.75v-1.5a.75.75 0 0 1 1.5 0v1.5A2.25 2.25 0 0 1 16.75 20h-9.5A2.25 2.25 0 0 1 5 17.75v-1.5a.75.75 0 0 1 .75-.75Z" />
    </svg>
  )
}

function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="#home">
        Harsh<span> Rajput</span>
      </a>

      <div className="topbar-actions">
        <nav className="nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a
          className="header-action"
          href={`${import.meta.env.BASE_URL}HarshResume.pdf`}
          download="Harsh-Rajput-Resume.pdf"
          aria-label="Download resume"
          title="Download resume"
        >
          <DownloadIcon />
        </a>
      </div>
    </header>
  )
}

export default Header
