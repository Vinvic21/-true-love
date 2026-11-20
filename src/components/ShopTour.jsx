import { images } from '../data/businessInfo.js'

export default function ShopTour() {
  return (
    <section id="shop" className="shop" style={{ '--shop-img': `url(${images.wall})` }}>
      <div className="shop-bg" aria-hidden="true" />
      <div className="container shop-inner">
        <div className="shop-card clay reveal">
          <p className="kicker">Inside the shop</p>
          <h2>
            Flash on every <span className="accent">wall</span>.
          </h2>
          <p>
            Counters lined with traditional flash, a barn-door gate, leather seating and hex lights overhead. Come in and take
            a look around.
          </p>
        </div>
        <div className="shop-photos">
          <figure className="clay photo tilt-r reveal">
            <img src={images.window} alt="True Love Tattoo Club heart logo on the shop window" loading="lazy" width="420" height="430" />
          </figure>
        </div>
      </div>
    </section>
  )
}
