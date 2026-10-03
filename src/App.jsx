import { useEffect } from 'react'
import Header from './components/Header'
import Calculator from './components/Calculator'
import Footer from './components/Footer'

export default function App() {
  // Prevent context menu (right click inspect), text selection, and inspect shortcuts
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault()
    }

    const handleSelectStart = (e) => {
      e.preventDefault()
    }

    const handleInspectShortcuts = (e) => {
      // F12
      if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault()
        return
      }

      // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C (DevTools inspect shortcuts)
      if (
        (e.ctrlKey || e.metaKey) &&
        e.shiftKey &&
        (e.key === 'I' ||
          e.key === 'i' ||
          e.key === 'J' ||
          e.key === 'j' ||
          e.key === 'C' ||
          e.key === 'c')
      ) {
        e.preventDefault()
        return
      }

      // Ctrl+U (view source)
      if ((e.ctrlKey || e.metaKey) && (e.key === 'u' || e.key === 'U')) {
        e.preventDefault()
        return
      }

      // Ctrl+S (save page)
      if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) {
        e.preventDefault()
        return
      }
    }

    window.addEventListener('contextmenu', handleContextMenu)
    window.addEventListener('selectstart', handleSelectStart)
    window.addEventListener('keydown', handleInspectShortcuts)

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu)
      window.removeEventListener('selectstart', handleSelectStart)
      window.removeEventListener('keydown', handleInspectShortcuts)
    }
  }, [])

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-white to-blue-100 flex flex-col items-center font-sans select-none"
      onContextMenu={(e) => e.preventDefault()}
    >
      <Header />

      <main className="flex-1 w-full px-4 py-6 flex flex-col items-center justify-center select-none">
        <Calculator />
      </main>

      <Footer />
    </div>
  )
}
