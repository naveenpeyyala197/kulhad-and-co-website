import { Link } from 'react-router-dom'
import { Coffee, Facebook, Instagram, Youtube } from 'lucide-react'
import Button from './Button'
import { BUSINESS } from '../data'
import { useToast } from '../context/ToastContext'
export default function Footer() {
  const toast = useToast()
  const submit = e => { e.preventDefault(); toast('Welcome to the chai club!'); e.target.reset() }
  return (
    <footer>
      <div className="fg">
        <div><div className="logo" style={{ color: 'var(--cream)' }}><Coffee size={26} /> {BUSINESS.name}</div><p>Small-batch chai, made slowly and served warm.</p></div>
        <div><h4>Quick links</h4><Link to="/our-story">Our Story</Link><Link to="/chai-menu">Chai Menu</Link><Link to="/gallery">Gallery</Link></div>
        <div><h4>Contact</h4><a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a><a href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`}>{BUSINESS.phone}</a><Link to="/contact">{BUSINESS.address}</Link></div>
        <div>
          <h4>Newsletter</h4>
          <form className="nl" onSubmit={submit}><input type="email" required placeholder="Your email" aria-label="Email" /><Button>Join</Button></form>
          <p className="flex gap-3 mt-4"><a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer"><Instagram size={20} /></a><a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer"><Facebook size={20} /></a><a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noreferrer"><Youtube size={20} /></a></p>
        </div>
      </div>
      <div className="copy">© {new Date().getFullYear()} {BUSINESS.name} All rights reserved.</div>
    </footer>
  )
}
