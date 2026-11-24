import Reveal from './Reveal'
import Button from './Button'
export default function FinalCta() {
  return (
    <section className="final">
      <Reveal as="h2">Good Conversations Start With Great Chai.</Reveal>
      <Button to="/order">Order Now</Button>
    </section>
  )
}
