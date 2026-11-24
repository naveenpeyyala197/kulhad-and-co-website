import { Link } from 'react-router-dom'
import { motion, useMotionValue, useSpring } from 'framer-motion'
const MLink = motion.create(Link)
export default function Button({ to, variant = 'solid', className = '', children, ...props }) {
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 })
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 })
  const move = e => { const b = e.currentTarget.getBoundingClientRect(); x.set((e.clientX - b.left - b.width / 2) * 0.2); y.set((e.clientY - b.top - b.height / 2) * 0.3) }
  const leave = () => { x.set(0); y.set(0) }
  const cls = `btn ${variant === 'ghost' ? 'ghost' : ''} ${className}`
  const common = { className: cls, style: { x, y }, whileTap: { scale: 0.95 }, onMouseMove: move, onMouseLeave: leave, ...props }
  return to ? <MLink to={to} {...common}>{children}</MLink> : <motion.button {...common}>{children}</motion.button>
}
