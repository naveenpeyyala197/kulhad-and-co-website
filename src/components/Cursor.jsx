import { useEffect, useRef } from 'react'
export default function Cursor() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const move = e => { el.style.left = e.clientX + 'px'; el.style.top = e.clientY + 'px' }
    const over = e => el.classList.toggle('big', !!e.target.closest('a,button,.card,.tile'))
    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    return () => { window.removeEventListener('mousemove', move); document.removeEventListener('mouseover', over) }
  }, [])
  return <div id="cur" ref={ref} aria-hidden="true" />
}
