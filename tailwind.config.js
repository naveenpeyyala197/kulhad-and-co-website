/** Preflight is off so Tailwind never alters the existing design; utilities are still available. */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  corePlugins: { preflight: false },
  theme: { extend: { colors: { cream: '#F5EBD7', tea: '#8B5E3C', dark: '#4A2E1F', caramel: '#C58A45', milk: '#FFF9EF', accent: '#D99A55' } } },
  plugins: []
}
