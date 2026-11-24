export default function Field({ name, label, error, textarea, ...props }) {
  const Tag = textarea ? 'textarea' : 'input'
  return (
    <div className={'fld' + (error ? ' bad' : '')}>
      <label htmlFor={name}>{label}</label>
      <Tag id={name} name={name} aria-invalid={!!error} {...props} />
      <span className="err">{error}</span>
    </div>
  )
}
