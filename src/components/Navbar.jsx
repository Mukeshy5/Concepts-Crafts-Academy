import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'
import { academyInfo, navLinks } from '../data/academy'
import Icon from './Icon'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname, hash } = useLocation()

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="site-header">
      <nav className="navbar section-shell" aria-label="Primary navigation">
        <Link className="brand" to="/" onClick={closeMenu}>
          <img src={logo} alt="Concepts & Crafts Academy logo" />
          <span>
            <strong>{academyInfo.shortName}</strong>
            <small>Academy</small>
          </span>
        </Link>

        <button
          className={`nav-toggle ${isOpen ? 'is-open' : ''}`}
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-menu ${isOpen ? 'is-open' : ''}`}>
          {navLinks.map((link) =>
            link.to.includes('#') ? (
              <Link
                key={link.label}
                className={`nav-link ${
                  pathname === '/' && hash === '#programs' ? 'active' : ''
                }`}
                to={link.to}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ) : (
              <NavLink
                key={link.label}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
                to={link.to}
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            ),
          )}
          <Link className="btn btn-small btn-primary" to="/enroll" onClick={closeMenu}>
            Enroll Now
            <Icon name="arrowRight" size={18} />
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
