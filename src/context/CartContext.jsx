import { createContext, useContext, useEffect, useMemo, useReducer } from 'react'
import { PRODUCTS } from '../data'
const KEY = 'kulhad-cart'
const CartContext = createContext(null)
const load = () => {
  try { return JSON.parse(localStorage.getItem(KEY) || '[]').filter(l => PRODUCTS[l.id] && l.qty > 0) } catch { return [] }
}
function reducer(state, a) {
  switch (a.type) {
    case 'add': return state.some(l => l.id === a.id) ? state.map(l => (l.id === a.id ? { ...l, qty: l.qty + a.qty } : l)) : [...state, { id: a.id, qty: a.qty }]
    case 'qty': return state.map(l => (l.id === a.id ? { ...l, qty: a.qty } : l)).filter(l => l.qty > 0)
    case 'remove': return state.filter(l => l.id !== a.id)
    case 'clear': return []
    default: return state
  }
}
export function CartProvider({ children }) {
  const [lines, dispatch] = useReducer(reducer, [], load)
  useEffect(() => { try { localStorage.setItem(KEY, JSON.stringify(lines)) } catch { /* storage unavailable */ } }, [lines])
  const value = useMemo(() => ({
    lines, dispatch,
    count: lines.reduce((n, l) => n + l.qty, 0),
    subtotal: lines.reduce((n, l) => n + PRODUCTS[l.id].price * l.qty, 0)
  }), [lines])
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
export const useCart = () => useContext(CartContext)
