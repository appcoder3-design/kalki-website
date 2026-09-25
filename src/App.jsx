import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

function CursorGlow() {
  const [pointer, setPointer] = useState({ x: 0, y: 0, visible: false, clicked: false, color: '#10265f' })
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  const getContrastColor = (element) => {
    const style = element ? window.getComputedStyle(element) : null
    const backgroundColor = style?.backgroundColor || 'rgba(0, 0, 0, 0)'

    if (!backgroundColor || backgroundColor === 'rgba(0, 0, 0, 0)' || backgroundColor === 'transparent') {
      return '#10265f'
    }

    const match = backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i)

    if (!match) {
      return '#10265f'
    }

    const [, r, g, b] = match.map(Number)
    const luminance = (0.2126 * r) + (0.7152 * g) + (0.0722 * b)

    return luminance > 170 ? '#10265f' : '#f4f7ff'
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: none), (pointer: coarse)')
    const updateTouchState = () => setIsTouchDevice(mediaQuery.matches)

    updateTouchState()

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updateTouchState)
    } else {
      mediaQuery.addListener(updateTouchState)
    }

    if (mediaQuery.matches) {
      return () => {
        if (mediaQuery.removeEventListener) {
          mediaQuery.removeEventListener('change', updateTouchState)
        } else {
          mediaQuery.removeListener(updateTouchState)
        }
      }
    }

    const handlePointerMove = (event) => {
      const target = document.elementFromPoint(event.clientX, event.clientY)
      const color = getContrastColor(target)

      setPointer((current) => ({ ...current, x: event.clientX, y: event.clientY, visible: true, color }))
    }

    const handlePointerLeave = () => {
      setPointer((current) => ({ ...current, visible: false }))
    }

    const handlePointerDown = () => {
      setPointer((current) => ({ ...current, clicked: true }))
      window.clearTimeout(handlePointerDown.timeout)
      handlePointerDown.timeout = window.setTimeout(() => {
        setPointer((current) => ({ ...current, clicked: false }))
      }, 160)
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerleave', handlePointerLeave)
    window.addEventListener('pointerdown', handlePointerDown)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerleave', handlePointerLeave)
      window.removeEventListener('pointerdown', handlePointerDown)
      window.clearTimeout(handlePointerDown.timeout)

      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', updateTouchState)
      } else {
        mediaQuery.removeListener(updateTouchState)
      }
    }
  }, [])

  if (isTouchDevice) return null

  return (
    <div
      className={`cursor-glow ${pointer.visible ? 'visible' : ''} ${pointer.clicked ? 'clicked' : ''}`}
      style={{
        '--cursor-x': `${pointer.x}px`,
        '--cursor-y': `${pointer.y}px`,
        '--cursor-color': pointer.color,
      }}
      aria-hidden="true"
    />
  )
}

export default function App() {
  return (
    <div className="app-shell">
      <CursorGlow />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
      </Routes>
      <Footer />
    </div>
  )
}
