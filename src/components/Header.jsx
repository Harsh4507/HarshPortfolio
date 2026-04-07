import { navLinks } from '../data/portfolioData'

function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="#home">
        Harsh<span> Rajput</span>
      </a>

      <nav className="nav" aria-label="Primary navigation">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header
