import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'
import Cursor from './components/Cursor'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import OurStory from './pages/OurStory'
import ChaiMenu from './pages/ChaiMenu'
import Experience from './pages/Experience'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Order from './pages/Order'
import NotFound from './pages/NotFound'

const routes = [
  ['/', Home, 'Home'], ['/our-story', OurStory, 'Our Story'], ['/chai-menu', ChaiMenu, 'Chai Menu'],
  ['/experience', Experience, 'Experience'], ['/gallery', Gallery, 'Gallery'], ['/contact', Contact, 'Contact'],
  ['/cart', Cart, 'Your Cart'], ['/order', Order, 'Order']
]

export default function App() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    const r = routes.find(x => x[0] === location.pathname)
    document.title = (r ? r[2] + ' · ' : '') + 'Kulhad & Co.'
  }, [location.pathname])
  return (
    <>
      <Loader />
      <Cursor />
      <Navbar />
      <main id="app">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {routes.map(([path, Page]) => <Route key={path} path={path} element={<PageTransition><Page /></PageTransition>} />)}
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}
