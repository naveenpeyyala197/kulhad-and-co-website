import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Coffee, Menu, ShoppingCart, X } from 'lucide-react'
import Button from './Button'
import { useCart } from '../context/CartContext'
const items = [['Home', '/'], ['Our Story', '/our-story'], ['Chai Menu', '/chai-menu'], ['Experience', '/experience'], ['Gallery', '/gallery'], ['Contact', '/contact']]
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { count } = useCart()
  return (
    <nav>
      <Link to="/" className="logo" onClick={() => setOpen(false)}><Coffee size={26} /> Kulhad &amp; Co.</Link>
      <div className={'links' + (open ? ' open' : '')}>
        {items.map(([label, to]) => <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}>{label}</NavLink>)}
      </div>
      <div className="nr">
        <Link to="/cart" id="cartBtn" aria-label={`Cart, ${count} items`} onClick={() => setOpen(false)}>
          <ShoppingCart size={22} />
          <motion.span id="cartCount" key={count} initial={{ scale: 1.7 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 400, damping: 12 }}>{count}</motion.span>
        </Link>
        <Button to="/order">Order Now</Button>
        <button id="burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(o => !o)}>{open ? <X /> : <Menu />}</button>
      </div>
    </nav>
  )
}
