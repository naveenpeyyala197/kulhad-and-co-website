import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Minus, Plus, X } from 'lucide-react'
import Button from './Button'
export default function ProductModal({ product, onClose, onAdd }) {
  const [qty, setQty] = useState(1)
  useEffect(() => { setQty(1) }, [product])
  useEffect(() => {
    const k = e => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [onClose])
  return (
    <AnimatePresence>
      {product && (
        <motion.div className="modal show" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={e => e.target === e.currentTarget && onClose()}>
          <motion.div className="mbox" role="dialog" aria-modal="true" aria-label={product.name} initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 30 }}>
            <button className="x" onClick={onClose} aria-label="Close"><X size={18} /></button>
            <div className="pic" style={{ background: product.bg }}><span>{product.icon}</span></div>
            <span className="tag">{product.cat}</span>
            <h3 style={{ fontSize: '1.8rem' }}>{product.name}</h3>
            <p>{product.desc} Brewed fresh with whole spices and full-cream milk.</p>
            <div className="price">
              <span className="qty"><button aria-label="Decrease" onClick={() => setQty(q => Math.max(1, q - 1))}><Minus size={16} /></button>{qty}<button aria-label="Increase" onClick={() => setQty(q => q + 1)}><Plus size={16} /></button></span>
              <Button onClick={() => { onAdd(product, qty); onClose() }}>Add · ₹{product.price * qty}</Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
