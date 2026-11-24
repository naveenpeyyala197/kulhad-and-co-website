import { useCallback, useState } from 'react'
import ProductCard from './ProductCard'
import ProductModal from './ProductModal'
import { useCart } from '../context/CartContext'
import { useToast } from '../context/ToastContext'
export default function ProductGrid({ items }) {
  const [open, setOpen] = useState(null)
  const { dispatch } = useCart()
  const toast = useToast()
  const add = (p, qty) => { dispatch({ type: 'add', id: p.id, qty }); toast(`${qty} × ${p.name} added to your cart ☕`) }
  const close = useCallback(() => setOpen(null), [])
  return (
    <>
      <div className="grid">{items.map(p => <ProductCard key={p.id} product={p} onOpen={setOpen} onAdd={add} />)}</div>
      <ProductModal product={open} onClose={close} onAdd={add} />
    </>
  )
}
