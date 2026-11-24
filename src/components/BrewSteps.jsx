import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal'
import { BREW } from '../data'
export default function BrewSteps() {
  const [i, setI] = useState(0)
  return (
    <section className="exp">
      <Reveal>
        <h2>Watch your chai come alive.</h2>
        <div className="steps">{BREW.map((s, n) => <button key={s.t} className={'step' + (n === i ? ' on' : '')} onClick={() => setI(n)}>{s.t}</button>)}</div>
        <div id="stepTxt"><AnimatePresence mode="wait"><motion.p key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} style={{ margin: 0 }}>{BREW[i].d}</motion.p></AnimatePresence></div>
      </Reveal>
    </section>
  )
}
