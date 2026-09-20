import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Kalki Business home">
        <img className="brand-logo" src="/images-logo/Kalki%20logo.png" alt="Kalki Business logo" />
      </Link>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="/#categories">What we supply</a>
        <a href="/#about">Our approach</a>
        <a href="/#contact">Contact</a>
      </nav>
      <a className="header-cta" href="/#contact">Start a conversation <span aria-hidden="true">↗</span></a>
    </header>
  )
}
