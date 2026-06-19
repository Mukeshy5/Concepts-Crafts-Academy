import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (hash) {
      window.requestAnimationFrame(() => {
        const target = document.querySelector(hash)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      })
      return
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [hash, pathname])

  return null
}

export default ScrollToTop
