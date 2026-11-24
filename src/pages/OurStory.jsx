import Reveal from '../components/Reveal'
import PageHeader from '../components/PageHeader'
import FinalCta from '../components/FinalCta'
import { BUSINESS, BREW } from '../data'
export default function OurStory() {
  return (
    <>
      <PageHeader title="Our story" sub="Born on a roadside, raised on conversation." />
      <section className="story" style={{ marginTop: 30 }}>
        <Reveal className="imgs"><div className="a">🍃</div><div className="b">🫖</div></Reveal>
        <Reveal><h2>One kulhad, one stove.</h2><p>{BUSINESS.name} began at a roadside stall where strangers became regulars. We kept the stove, the clay cups and the patience, and grew the menu one honest recipe at a time.</p></Reveal>
      </section>
      <section>
        <Reveal as="h2" style={{ fontSize: 'clamp(2.2rem,4.5vw,3.6rem)' }}>How our chai is prepared</Reveal>
        <div className="feat3">{BREW.map((s, i) => <Reveal key={s.t} className="pcard" delay={i * 0.08}><span className="n">{i + 1}</span><h3>{s.t}</h3><p>{s.d}</p></Reveal>)}</div>
      </section>
      <section style={{ paddingTop: 0 }}>
        <div className="two">
          <Reveal className="big"><h2>Our mission</h2><p>To make every cup a reason to pause, talk and feel at home.</p></Reveal>
          <Reveal className="big" style={{ borderRadius: '120px 40px 40px 40px' }}><h2>Our vision</h2><p>A chai corner in every neighbourhood, brewed the slow way and open to everyone.</p></Reveal>
        </div>
      </section>
      <FinalCta />
    </>
  )
}
