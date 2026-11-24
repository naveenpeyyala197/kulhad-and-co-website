import { useState } from 'react'
import Reveal from '../components/Reveal'
import PageHeader from '../components/PageHeader'
import GalleryLightbox from '../components/GalleryLightbox'
import { GALLERY } from '../data'
export default function Gallery() {
  const [index, setIndex] = useState(null)
  return (
    <>
      <PageHeader title="Gallery" sub="A look inside our kitchen and cups." />
      <section style={{ paddingTop: 10 }}>
        <div className="masonry">
          {GALLERY.map((g, i) => (
            <Reveal key={g.label} className="tile" tabIndex={0} role="button" aria-label={`Open ${g.label}`} style={{ background: g.bg, height: g.h }} onClick={() => setIndex(i)} onKeyDown={e => e.key === 'Enter' && setIndex(i)}>
              {g.icon}<small>{g.label}</small>
            </Reveal>
          ))}
        </div>
      </section>
      <GalleryLightbox index={index} setIndex={setIndex} />
    </>
  )
}
