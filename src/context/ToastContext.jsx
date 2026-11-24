import { createContext, useCallback, useContext, useRef, useState } from 'react'
const ToastContext = createContext(() => {})
export function ToastProvider({ children }) {
  const [msg, setMsg] = useState('')
  const [show, setShow] = useState(false)
  const t = useRef()
  const toast = useCallback(m => { setMsg(m); setShow(true); clearTimeout(t.current); t.current = setTimeout(() => setShow(false), 2200) }, [])
  return (
    <ToastContext.Provider value={toast}>
      {children}
      <div id="toast" role="status" className={show ? 'show' : ''}>{msg}</div>
    </ToastContext.Provider>
  )
}
export const useToast = () => useContext(ToastContext)
