import { useState } from 'react'
import Reveal from '../components/Reveal'
import PageHeader from '../components/PageHeader'
import Field from '../components/Field'
import Button from '../components/Button'
import { BUSINESS } from '../data'
import { validate } from '../utils/validate'
import { useToast } from '../context/ToastContext'
const empty = { name: '', email: '', phone: '', message: '' }
export default function Contact() {
  const [v, setV] = useState(empty)
  const [errors, setErrors] = useState({})
  const toast = useToast()
  const on = e => setV({ ...v, [e.target.name]: e.target.value })
  const submit = e => {
    e.preventDefault()
    const er = validate(v); setErrors(er)
    if (Object.keys(er).length) return toast('Please fix the highlighted fields')
    toast('Message sent. We will reply soon!'); setV(empty)
  }
  const q = encodeURIComponent(BUSINESS.mapQuery)
  return (
    <>
      <PageHeader title="Contact us" sub="Questions, orders or just a hello." />
      <section style={{ paddingTop: 10 }}>
        <div className="cols">
          <Reveal as="form" className="f" onSubmit={submit} noValidate>
            <Field name="name" label="Name" autoComplete="name" value={v.name} onChange={on} error={errors.name} />
            <Field name="email" label="Email" type="email" autoComplete="email" value={v.email} onChange={on} error={errors.email} />
            <Field name="phone" label="Phone" type="tel" autoComplete="tel" value={v.phone} onChange={on} error={errors.phone} />
            <Field name="message" label="Message" textarea rows={4} value={v.message} onChange={on} error={errors.message} />
            <Button>Send message</Button>
          </Reveal>
          <Reveal>
            <div className="map">
              <h3 style={{ color: 'var(--milk)', fontSize: '1.8rem', marginBottom: 10 }}>{BUSINESS.name}</h3>
              <p>{BUSINESS.address}</p>
              <p>Open daily, 7 am to 11 pm<br />{BUSINESS.email} · {BUSINESS.phone}</p>
              <a className="btn" style={{ background: 'var(--caramel)' }} target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${q}`}>Open in Google Maps</a>
            </div>
            <iframe title="Map" className="mt-4" style={{ width: '100%', height: 260, border: 0, borderRadius: 30 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={`https://www.google.com/maps?q=${q}&output=embed`} />
          </Reveal>
        </div>
      </section>
    </>
  )
}
