import Reveal from './Reveal'
export default function PageHeader({ title, sub }) {
  return <Reveal as="header" className="ph"><h1>{title}</h1><p>{sub}</p></Reveal>
}
