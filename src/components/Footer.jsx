import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <Link className="brand brand-footer" to="/" aria-label="Kalki Business home">
            <img className="brand-logo" src="/images-logo/Kalki%20logo.png" alt="Kalki Business logo" />
          </Link>
          <p className="footer-intro">Wholesale, thoughtfully sourced.<br />Built for businesses across Singapore.</p>
        </div>
        <div className="footer-links">
          <span className="footer-label">Explore</span>
          <a href="/#categories">Product categories</a>
          <a href="/#about">Our approach</a>
          <a href="/#contact">Contact us</a>
        </div>
        <div className="footer-links">
          <span className="footer-label">Talk to us</span>
          <a href="mailto:pragyan.kalkibusiness@gmail.com">pragyan.kalkibusiness@gmail.com</a>
          <a href="https://wa.me/6582090884?text=Hello%20Kalki%20Business%2C%20I%20would%20like%20to%20enquire%20about%20your%20products.%20My%20contact%20number%20is%20%5Byour%20number%5D%20and%20my%20email%20is%20%5Byour%20email%5D." target="_blank" rel="noreferrer">WhatsApp us ↗</a>
        </div>
      </div>
      <div className="footer-bottom"><span>© 2026 Kalki Business</span><span>Singapore wholesale</span></div>
    </footer>
  )
}
