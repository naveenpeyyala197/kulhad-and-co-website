import { Link } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import CartItem from '../components/CartItem'
import Button from '../components/Button'
import { useCart } from '../context/CartContext'
export default function Cart() {
  const { lines, dispatch, count, subtotal } = useCart()
  return (
    <>
      <PageHeader title="Your cart" sub={count ? `${count} cup${count > 1 ? 's' : ''} waiting` : 'Nothing here yet.'} />
      <section style={{ paddingTop: 10 }}>
        {lines.length ? (
          <>
            <div className="rows"><AnimatePresence>{lines.map(l => <CartItem key={l.id} line={l} dispatch={dispatch} />)}</AnimatePresence></div>
            <div className="sum"><div><span>Subtotal</span><span>₹{subtotal}</span></div><div className="t"><span>Total</span><span>₹{subtotal}</span></div></div>
            <p className="flex gap-3 flex-wrap" style={{ marginTop: 20 }}><Button to="/chai-menu" variant="ghost">Continue shopping</Button><Button to="/order">Proceed to checkout</Button></p>
          </>
        ) : (
          <div className="empty"><div className="e">🫖</div><p>Your cart is empty.</p><Button to="/chai-menu">Browse the menu</Button></div>
        )}
      </section>
    </>
  )
}
