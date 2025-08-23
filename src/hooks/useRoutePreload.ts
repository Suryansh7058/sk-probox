import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Preload routes based on current location
export const useRoutePreload = () => {
  const location = useLocation()

  useEffect(() => {
    // Preload adjacent routes for better UX
    const preloadAdjacentRoutes = () => {
      const routes = ['/services', '/resources', '/about', '/client-portal']
      
      routes.forEach(route => {
        if (route !== location.pathname) {
          // Create a link element for preloading
          const link = document.createElement('link')
          link.rel = 'prefetch'
          link.href = route
          document.head.appendChild(link)
        }
      })
    }

    // Small delay to avoid blocking initial render
    const timer = setTimeout(preloadAdjacentRoutes, 1000)
    
    return () => clearTimeout(timer)
  }, [location.pathname])
}

export default useRoutePreload
