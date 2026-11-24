import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Field from '../components/Field'
import Button from '../components/Button'
import { PRODUCTS, DELIVERY_FEE, FREE_DELIVERY_AT } from '../data'
import { validate } from '../utils/validate'
import { useCart } from '../context/CartContext'
import { useToast } from '../context/ToastContext'
const empty = { name: '', phone: '', email: '', addr: '', city: '', pin: '' }
export default function Order() {
  const { lines, subtotal, dispatch } = useCart()
  const [v, setV] = useState(empty)
  const [pay, setPay] = useState('UPI')
  const [errors, setErrors] = useState({})
  const [done, setDone] = useState(null)
  const toast = useToast()
  const delivery = subtotal >= FREE_DELIVERY_AT ? 0 : DELIVERY_FEE
  const on = e => setV({ ...v, [e.target.name]: e.target.value })
  const submit = e => {
    e.preventDefault()
    const er = validate(v); setErrors(er)
    if (Object.keys(er).length) return toast('Please fix the highlighted fields')
    setDone({ id: 'DEMO-' + Math.floor(1000 + Math.random() * 9000), name: v.name.trim().split(' ')[0], total: subtotal + delivery, pay })
    dispatch({ type: 'clear' }); window.scrollTo(0, 0)
  }
  if (done) return (
    <section className="ok">
      <div className="e">🎉</div><h1 style={{ fontSize: '3rem' }}>Thank you, {done.name}!</h1>
      <p>Demo order <b>{done.id}</b> · ₹{done.total} · {done.pay}</p>
      <p className="note" style={{ maxWidth: 480, margin: '20px auto' }}>This is a demo checkout. No payment was taken and no real order was placed.</p>
      <Button to="/">Back to home</Button>
    </section>
  )
  return (
    <>
      <PageHeader title="Place your order" sub="Demo checkout, nothing is charged." />
      <section style={{ paddingTop: 10 }}>
        {!lines.length ? (
          <div className="empty"><div className="e">🫖</div><p>Add a chai to your cart before checking out.</p><Button to="/chai-menu">Browse the menu</Button></div>
        ) : (
          <div className="cols">
            <form className="f" onSubmit={submit} noValidate>
              <div className="row2"><Field name="name" label="Full name" autoComplete="name" value={v.name} onChange={on} error={errors.name} /><Field name="phone" label="Phone" type="tel" value={v.phone} onChange={on} error={errors.phone} /></div>
              <Field name="email" label="Email" type="email" value={v.email} onChange={on} error={errors.email} />
              <Field name="addr" label="Delivery address" value={v.addr} onChange={on} error={errors.addr} />
              <div className="row2"><Field name="city" label="City" value={v.city} onChange={on} error={errors.city} /><Field name="pin" label="PIN code" inputMode="numeric" value={v.pin} onChange={on} error={errors.pin} /></div>
              <div className="fld"><label>Payment method</label><div className="pay">{['UPI', 'Card', 'Cash on delivery'].map(m => <label key={m}><input type="radio" name="pay" checked={pay === m} onChange={() => setPay(m)} /><span>{m}</span></label>)}</div></div>
              <p className="note">Demo only: no real payment gateway is connected.</p>
              <Button>Place order</Button>
            </form>
            <aside className="sum">
              <h3 style={{ marginBottom: 10 }}>Order summary</h3>
              {lines.map(l => <div key={l.id}><span>{l.qty} × {PRODUCTS[l.id].name}</span><span>₹{PRODUCTS[l.id].price * l.qty}</span></div>)}
              <div><span>Delivery</span><span>{delivery ? '₹' + delivery : 'Free'}</span></div>
              <div className="t"><span>Total</span><span>₹{subtotal + delivery}</span></div>
            </aside>
          </div>
        )}
      </section>
    </>
  )
}
