import { motion } from 'framer-motion'
export default function Reveal({ as = 'div', delay = 0, ...props }) {
  const C = motion[as]
  return <C initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.8, delay }} {...props} />
}
