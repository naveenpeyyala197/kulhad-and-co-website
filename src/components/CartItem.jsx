import { Minus, Plus, Trash2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { PRODUCTS } from '../data'
export default function CartItem({ line, dispatch }) {
  const p = PRODUCTS[line.id]
  return (
    <motion.div layout className="crow" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 40 }}>
      <div className="e" style={{ background: p.bg }}>{p.icon}</div>
      <div><b>{p.name}</b><br />₹{p.price}</div>
      <div className="qty">
        <button aria-label="Decrease quantity" onClick={() => dispatch({ type: 'qty', id: p.id, qty: line.qty - 1 })}><Minus size={16} /></button>{line.qty}
        <button aria-label="Increase quantity" onClick={() => dispatch({ type: 'qty', id: p.id, qty: line.qty + 1 })}><Plus size={16} /></button>
      </div>
      <b>₹{p.price * line.qty}</b>
      <button className="rm" aria-label={`Remove ${p.name}`} onClick={() => dispatch({ type: 'remove', id: p.id })}><Trash2 size={20} /></button>
    </motion.div>
  )
}
