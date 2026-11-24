import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import ProductGrid from '../components/ProductGrid'
import { CATEGORIES, PRODUCTS } from '../data'
export default function ChaiMenu() {
  const [cat, setCat] = useState('All')
  return (
    <>
      <PageHeader title="The chai menu" sub="Eight cups, brewed to order." />
      <section className="menu" style={{ paddingTop: 10 }}>
        <div className="filters">{CATEGORIES.map(c => <button key={c} className={'chip' + (c === cat ? ' on' : '')} onClick={() => setCat(c)} aria-pressed={c === cat}>{c}</button>)}</div>
        <ProductGrid key={cat} items={PRODUCTS.filter(p => cat === 'All' || p.cat === cat)} />
      </section>
    </>
  )
}
