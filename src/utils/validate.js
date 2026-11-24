export const rules = {
  name: v => (v.trim().length < 2 ? 'Enter your name' : ''),
  email: v => (/^\S+@\S+\.\S+$/.test(v.trim()) ? '' : 'Enter a valid email'),
  phone: v => (v.replace(/\D/g, '').length >= 10 ? '' : 'Enter a 10-digit phone number'),
  message: v => (v.trim().length < 10 ? 'Write at least 10 characters' : ''),
  addr: v => (v.trim().length < 6 ? 'Enter your full address' : ''),
  city: v => (v.trim() ? '' : 'Enter your city'),
  pin: v => (/^\d{6}$/.test(v.trim()) ? '' : 'Enter a 6-digit PIN code')
}
export function validate(values) {
  const errors = {}
  Object.keys(values).forEach(k => { const m = rules[k] && rules[k](values[k]); if (m) errors[k] = m })
  return errors
}
