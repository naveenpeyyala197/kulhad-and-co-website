import { useMemo } from 'react'
export default function Leaves({ n = 9 }) {
  const leaves = useMemo(() => Array.from({ length: n }, () => ({ left: Math.random() * 100, dur: 12 + Math.random() * 10, delay: Math.random() * 14 })), [n])
  return <div aria-hidden="true">{leaves.map((l, i) => <span key={i} className="leaf" style={{ left: l.left + '%', animationDuration: l.dur + 's', animationDelay: '-' + l.delay + 's' }}>🍃</span>)}</div>
}
