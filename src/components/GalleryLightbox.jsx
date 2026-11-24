import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { GALLERY } from '../data'
export default function GalleryLightbox({ index, setIndex }) {
  const open = index !== null
  const move = d => setIndex(i => (i + d + GALLERY.length) % GALLERY.length)
  useEffect(() => {
    if (!open) return
    const k = e => { if (e.key === 'Escape') setIndex(null); if (e.key === 'ArrowLeft') move(-1); if (e.key === 'ArrowRight') move(1) }
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [open]) // eslint-disable-line react-hooks/exhaustive-deps
  const g = GALLERY[index]
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="lb show" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={e => e.target === e.currentTarget && setIndex(null)} role="dialog" aria-modal="true" aria-label="Gallery viewer">
          <button className="x" onClick={() => setIndex(null)} aria-label="Close"><X size={18} /></button>
          <button className="lbn" style={{ left: 16 }} onClick={() => move(-1)} aria-label="Previous image"><ChevronLeft /></button>
          <div>
            <AnimatePresence mode="wait">
              <motion.div key={index} className="lbimg" style={{ background: g.bg }} initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.94 }} transition={{ duration: 0.2 }}>{g.icon}</motion.div>
            </AnimatePresence>
            <p>{g.label} · {index + 1}/{GALLERY.length}</p>
          </div>
          <button className="lbn" style={{ right: 16 }} onClick={() => move(1)} aria-label="Next image"><ChevronRight /></button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
