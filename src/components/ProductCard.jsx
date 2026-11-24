import Reveal from './Reveal'
import Button from './Button'
export default function ProductCard({ product, onOpen, onAdd }) {
  return (
    <Reveal as="article" className="card" onClick={() => onOpen(product)}>
      <div className="pic" style={{ background: product.bg }}><span>{product.icon}</span></div>
      <span className="tag">{product.cat}</span>
      <h3>{product.name}</h3>
      <p>{product.desc}</p>
      <div className="price">₹{product.price}<Button onClick={e => { e.stopPropagation(); onAdd(product, 1) }}>Add to Cart</Button></div>
    </Reveal>
  )
}
