import { Phone, Facebook, Instagram } from 'lucide-react'
import { business } from '../data/businessInfo.js'
import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <Logo />
          <address style={{ marginTop: 14 }}>
            {business.address.street}, {business.address.city}, {business.address.region} {business.address.postal}
          </address>
        </div>
        <ul className="footer-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#visit">Visit</a></li>
        </ul>
        <div className="footer-contact">
          <a href={business.phoneHref}><Phone size={16} aria-hidden="true" /> {business.phoneDisplay}</a>
          <a href={business.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={16} aria-hidden="true" /> Instagram</a>
          <a href={business.facebook} target="_blank" rel="noopener noreferrer"><Facebook size={16} aria-hidden="true" /> Facebook</a>
        </div>
      </div>
      <p className="copyright">© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
    </footer>
  )
}
