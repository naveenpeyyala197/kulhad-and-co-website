import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal'
import { REVIEWS } from '../data'
export default function Reviews() {
  const [i, setI] = useState(0)
  useEffect(() => { const t = setInterval(() => setI(x => (x + 1) % REVIEWS.length), 5500); return () => clearInterval(t) }, [i])
  const r = REVIEWS[i]
  return (
    <section className="reviews">
      <Reveal as="h2">Kind words over chai</Reveal>
      <div className="rev">
        <AnimatePresence mode="wait">
          <motion.div key={i} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.35 }}>
            <q>“{r.text}”</q><p>{r.name}</p>
            <div style={{ color: 'var(--caramel)', fontSize: 22 }} aria-label={`${r.stars} out of 5 stars`}>{'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}</div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="dots">{REVIEWS.map((_, n) => <button key={n} className={n === i ? 'on' : ''} onClick={() => setI(n)} aria-label={`Review ${n + 1}`} />)}</div>
    </section>
  )
}
