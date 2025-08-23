// Performance monitoring utilities
export const measurePageLoad = (pageName: string) => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    if (navigation) {
      console.log(`${pageName} load time:`, {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        total: navigation.loadEventEnd - navigation.fetchStart
      })
    }
  }
}

export const measureComponentRender = (componentName: string) => {
  const start = performance.now()
  return () => {
    const end = performance.now()
    console.log(`${componentName} render time:`, `${(end - start).toFixed(2)}ms`)
  }
}

// Preload critical routes for better UX
export const preloadRoute = (routePath: string) => {
  const link = document.createElement('link')
  link.rel = 'prefetch'
  link.href = routePath
  document.head.appendChild(link)
}
