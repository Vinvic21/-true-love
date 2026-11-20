import hex from '../assets/shop-hex.webp'
import wall from '../assets/shop-wall.webp'
import front from '../assets/shop-front.webp'
import windowImg from '../assets/shop-window.webp'
import urn from '../assets/tattoo-urn.webp'
import skull from '../assets/tattoo-skull.webp'
import forearm from '../assets/tattoo-forearm.webp'
import linework from '../assets/tattoo-linework.webp'
import dragonBw from '../assets/tattoo-dragon-bw.webp'
import dog from '../assets/tattoo-dog.webp'
import patchwork from '../assets/tattoo-patchwork.webp'
import tiger from '../assets/tattoo-tiger.webp'
import dragonColor from '../assets/tattoo-dragon-color.webp'

// Single source of truth for every business fact shown on the site.
// Update details here only. Anything not listed here is intentionally NOT on the site.
export const business = {
  name: 'True Love Tattoo Club',
  category: 'Tattoo shop',
  phoneDisplay: '(913) 297-0063',
  phoneHref: 'tel:+19132970063',
  address: {
    street: '404 S 5th St',
    city: 'Leavenworth',
    region: 'KS',
    postal: '66048',
  },
  // NEEDS OWNER CHECK: Google listing says 12-6 pm; the window decal photo says 10 am-6 pm.
  openDays: 'Tue–Sat',
  openTime: '12 pm – 6 pm',
  hoursNote: 'Hours can differ on holidays. Please call to confirm.',
  hours: [
    ['Monday', null],
    ['Tuesday', '12 pm – 6 pm'],
    ['Wednesday', '12 pm – 6 pm'],
    ['Thursday', '12 pm – 6 pm'],
    ['Friday', '12 pm – 6 pm'],
    ['Saturday', '12 pm – 6 pm'],
    ['Sunday', null],
  ],
  instagram: 'https://www.instagram.com/truelovetat2club/',
  facebook: 'https://www.facebook.com/p/True-Love-Tattoo-Club-100087962709211/',
  mapsDirections:
    'https://www.google.com/maps/dir/?api=1&destination=' +
    encodeURIComponent('True Love Tattoo Club, 404 S 5th St, Leavenworth, KS 66048'),
}

export const images = { hero: hex, wall, front, window: windowImg }

export const services = [
  { icon: 'flame', title: 'Traditional', text: 'Bold lines, solid black and classic imagery: dragons, tigers, roses and flames, with flash sheets lining the shop counters.' },
  { icon: 'skull', title: 'Black & Grey', text: 'Smooth shading and fine detail for skulls, portraits, pets and florals.' },
  { icon: 'palette', title: 'Colour Work', text: 'Saturated colour pieces, like a full dragon wrapped around a forearm.' },
  { icon: 'layers', title: 'Patchwork & Sleeves', text: 'Build a leg or arm sleeve piece by piece, from traditional patchwork to themed collections.' },
  { icon: 'pen', title: 'Custom & Linework', text: 'Bring your own idea or drawing and work it into a clean custom design.' },
]

export const gallery = [
  { src: tiger, alt: 'Traditional tiger tattoo surrounded by flames on a lower leg', label: 'Tiger in flames', tall: true },
  { src: skull, alt: 'Black and grey skull with a sunflower tattoo on an upper arm', label: 'Skull & sunflower', tall: true },
  { src: dragonColor, alt: 'Colour traditional dragon tattoo wrapping around a forearm', label: 'Colour dragon', tall: true },
  { src: dragonBw, alt: 'Black traditional dragon and eagle tattoo on a calf', label: 'Dragon & eagle' },
  { src: forearm, alt: 'Traditional black and grey forearm tattoo with a rose', label: 'Traditional forearm' },
  { src: dog, alt: 'Black and grey dog portrait tattoo with daisies and name lettering', label: 'Dog portrait', tall: true },
  { src: patchwork, alt: 'Patchwork forearm sleeve with a sea turtle, rose and stars', label: 'Patchwork sleeve', tall: true },
  { src: urn, alt: 'Traditional black work flaming urn tattoo beside a spiked chain', label: 'Black work', tall: true },
  { src: linework, alt: 'Linework stage of a floral and sea turtle shoulder tattoo', label: 'Linework in progress' },
]
