import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
export default function Loader() {
  const [show, setShow] = useState(true)
  useEffect(() => { const t = setTimeout(() => setShow(false), 1300); return () => clearTimeout(t) }, [])
  return (
    <AnimatePresence>
      {show && (
        <motion.div id="loader" exit={{ opacity: 0 }} transition={{ duration: 0.6 }} aria-label="Loading">
          <div className="cup"><i /></div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
