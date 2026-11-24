import Button from '../components/Button'
export default function NotFound() {
  return <section className="empty"><div className="e">🫖</div><h1 style={{ fontSize: '3rem' }}>Page not found</h1><p>This cup is empty. Let's get you back.</p><Button to="/">Back to home</Button></section>
}
