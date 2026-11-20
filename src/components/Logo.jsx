export default function Logo({ big = false }) {
  return (
    <span className={`logo ${big ? 'is-big' : ''}`}>
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M32 56 C6 38 8 14 23 12 C28 11.5 31 14.5 32 18 C33 14.5 36 11.5 41 12 C56 14 58 38 32 56Z" fill="#e63a2e" stroke="#fff6ea" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M18 22 C20 18 24 18 26 20" stroke="#fff6ea" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity=".7" />
      </svg>
      <span>
        True Love
        <small>Tattoo Club</small>
      </span>
    </span>
  )
}
