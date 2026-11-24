import Reveal from '../components/Reveal'
import PageHeader from '../components/PageHeader'
import BrewSteps from '../components/BrewSteps'
import Reviews from '../components/Reviews'
const cafe = [['🪔', 'Warm lights', 'Low amber lamps and clay walls make evenings slow down.'], ['🎶', 'Soft playlists', 'Old Hindi film songs, never too loud for conversation.'], ['📖', 'Corner shelves', 'Borrow a book, leave one behind.']]
export default function Experience() {
  return (
    <>
      <PageHeader title="The chai experience" sub="Come for the cup, stay for the company." />
      <BrewSteps />
      <section>
        <Reveal as="h2" style={{ fontSize: 'clamp(2.2rem,4.5vw,3.6rem)' }}>Inside the café</Reveal>
        <div className="feat3">{cafe.map(([e, t, d], i) => <Reveal key={t} className="pcard" delay={i * 0.1}><span className="n">{e}</span><h3>{t}</h3><p>{d}</p></Reveal>)}</div>
      </section>
      <Reviews />
    </>
  )
}
