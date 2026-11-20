import { business, images } from '../data/businessInfo.js'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <div className="about-media">
          <figure className="clay photo tilt-l reveal">
            <img src={images.front} alt="True Love Tattoo Club storefront with a hanging sign and open neon light on a brick building" loading="lazy" width="692" height="724" />
          </figure>
          <figure className="clay photo tilt-r reveal" style={{ '--d': '140ms' }}>
            <img src={images.wall} alt="Brick wall inside the shop with a True Love banner and counters covered in flash sheets" loading="lazy" width="633" height="678" />
          </figure>
        </div>
        <div className="about-copy">
          <p className="kicker reveal">About the shop</p>
          <h2 className="reveal" style={{ '--d': '60ms' }}>
            Brick, flash and a lot of <span className="accent">heart</span>
          </h2>
          <p className="reveal" style={{ '--d': '120ms' }}>
            {business.name} is a tattoo shop at {business.address.street} in {business.address.city}, Kansas. Inside you will find
            exposed brick, wall-to-wall flash sheets and bright hex lighting over clean work stations.
          </p>
          <p className="reveal" style={{ '--d': '180ms' }}>
            Browse the flash, bring your own idea, or start a sleeve. The best way to ask about a design or timing is to call
            or stop by.
          </p>
          <a className="btn btn-clay reveal" style={{ '--d': '240ms' }} href={business.phoneHref}>
            Talk to the shop
          </a>
        </div>
      </div>
    </section>
  )
}
