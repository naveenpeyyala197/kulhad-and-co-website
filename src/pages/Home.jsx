import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import Counter from '../components/Counter'
import Leaves from '../components/Leaves'
import CupSvg from '../components/CupSvg'
import ProductGrid from '../components/ProductGrid'
import Reviews from '../components/Reviews'
import FinalCta from '../components/FinalCta'
import { PRODUCTS } from '../data'

const feats = [['Fresh ingredients', 'Whole ginger, green cardamom and full-cream milk, bought every morning.'], ['Authentic flavours', "Recipes from Hyderabad's Irani cafés to Mumbai's cutting-chai stalls."], ['Quality leaves', 'Single-estate Assam CTC, picked for a strong, malty body.'], ['Traditional method', 'Boiled, pulled and strained by hand. Never from a premix.']]

export default function Home() {
  return (
    <>
      <header className="hero">
        <Leaves />
        <div>
          <h1><span><b>Every Sip</b></span><span><b>Tells a</b></span><span><b>Story.</b></span></h1>
          <p>A Little Chai, A Lot of Happiness.</p>
          <div className="cta"><Button to="/chai-menu">Explore Our Chai</Button><Button to="/order" variant="ghost">Order Your Chai</Button></div>
        </div>
        <div className="cupwrap"><div className="blob" /><motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.3 }} style={{ display: 'contents' }}><CupSvg /></motion.div></div>
      </header>

      <section className="story">
        <Reveal className="imgs"><div className="a">🍃</div><div className="b">🫖</div></Reveal>
        <Reveal>
          <h2>Born on a roadside, raised on conversation.</h2>
          <p>Every neighbourhood in India has a corner where chai simmers, strangers become friends and the day slows down. We started with one kulhad and one stove, boiling leaves with fresh milk and whole spices the slow way.</p>
          <p>Today we still hand-crush our ginger and cardamom, because some things should never be rushed.</p>
          <div className="counters"><div><Counter to={12000} />cups a month</div><div><Counter to={8} />signature blends</div><div><Counter to={4} />generations of recipes</div></div>
          <p className="mt-6"><Button to="/our-story" variant="ghost">Read our story</Button></p>
        </Reveal>
      </section>

      <section className="menu">
        <Reveal as="h2">Fresh from the pot</Reveal>
        <ProductGrid items={[PRODUCTS[0], PRODUCTS[1], PRODUCTS[6], PRODUCTS[7]]} />
        <Reveal as="p" style={{ marginTop: 30 }}><Button to="/chai-menu" variant="ghost">See the full menu</Button></Reveal>
      </section>

      <section className="why">
        <Reveal as="h2">Why our chai?</Reveal>
        <div className="feat">{feats.map(([t, d], i) => <Reveal key={t} delay={i * 0.1}><h3>{t}</h3><p>{d}</p></Reveal>)}</div>
      </section>

      <Reviews />
      <FinalCta />
    </>
  )
}
