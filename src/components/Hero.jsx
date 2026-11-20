import { Phone, MapPin, Clock, ChevronDown } from 'lucide-react'
import { business, images } from '../data/businessInfo.js'
import Logo from './Logo.jsx'

export default function Hero() {
  return (
    <section id="top" className="hero" style={{ '--hero-img': `url(${images.hero})` }}>
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow reveal">
            <Clock size={14} aria-hidden="true" /> {business.openDays} · {business.openTime}
          </p>
          <h1 className="reveal" style={{ '--d': '80ms' }}>
            True <span className="accent">Love</span>
            <span className="h1-sub">Tattoo Club</span>
          </h1>
          <p className="lead reveal" style={{ '--d': '160ms' }}>
            Traditional, black and grey, colour and custom tattoos in Leavenworth, Kansas. Call the shop to talk about your idea.
          </p>
          <div className="hero-actions reveal" style={{ '--d': '240ms' }}>
            <a className="btn btn-clay" href={business.phoneHref}>
              <Phone size={18} aria-hidden="true" /> Call {business.phoneDisplay}
            </a>
            <a className="btn btn-ghost" href={business.mapsDirections} target="_blank" rel="noopener noreferrer">
              <MapPin size={18} aria-hidden="true" /> Get directions
            </a>
          </div>
        </div>

        <div className="hero-card clay reveal" style={{ '--d': '320ms' }}>
          <Logo big />
          <address>
            {business.address.street}
            <br />
            {business.address.city}, {business.address.region} {business.address.postal}
          </address>
        </div>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to About">
        <ChevronDown size={28} />
      </a>
    </section>
  )
}
