const words = ['Traditional', 'Black & Grey', 'Colour', 'Patchwork', 'Custom Art', 'Flash', 'Leavenworth, KS']

export default function Marquee() {
  const row = [...words, ...words]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((w, i) => (
          <span key={i}>
            {w}
            <i>✦</i>
          </span>
        ))}
      </div>
    </div>
  )
}
