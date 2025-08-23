import React, { useState, useEffect } from 'react'
import { measurePageLoad, measureComponentRender, preloadRoute } from '../../utils/performance'

const TestPerformance: React.FC = () => {
  const [renderCount, setRenderCount] = useState(0)
  const [performanceData, setPerformanceData] = useState<any>(null)
  const [isHeavyOperation, setIsHeavyOperation] = useState(false)
  const [heavyOperationResult, setHeavyOperationResult] = useState<string | null>(null)

  // Measure component render performance
  const logRenderTime = measureComponentRender('TestPerformance')
  
  useEffect(() => {
    logRenderTime()
    setRenderCount(prev => prev + 1)
  })

  // Measure page load performance
  useEffect(() => {
    measurePageLoad('TestPerformance')
    
    // Simulate performance data collection
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        if (navigation) {
          setPerformanceData({
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
            total: navigation.loadEventEnd - navigation.fetchStart,
            timestamp: new Date().toLocaleTimeString()
          })
        }
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Simulate heavy operation
  const runHeavyOperation = async () => {
    setIsHeavyOperation(true)
    const startTime = performance.now()
    
    // Simulate CPU-intensive work
    let result = 0
    for (let i = 0; i < 10000000; i++) {
      result += Math.sqrt(i) * Math.sin(i)
    }
    
    const endTime = performance.now()
    const duration = endTime - startTime
    
    setHeavyOperationResult(`Operation completed in ${duration.toFixed(2)}ms with result: ${result.toFixed(2)}`)
    setIsHeavyOperation(false)
  }

  // Test route preloading
  const testRoutePreloading = () => {
    preloadRoute('/test/slow-load')
    alert('Route /test/slow-load has been preloaded! Check Network tab in DevTools.')
  }

  // Generate large list for performance testing
  const generateLargeList = () => {
    const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`)
    return items.map((item, index) => (
      <div key={index} className="text-sm py-1 border-b border-gray-100">
        {item}
      </div>
    ))
  }

  return (
    <div className="container-default py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📊 Performance Testing & Monitoring
        </h1>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <p className="text-green-800">
            <strong>Note:</strong> This page demonstrates performance monitoring utilities, 
            heavy operations, and performance testing scenarios.
          </p>
        </div>

        {/* Performance Metrics */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
          <h2 className="text-xl font-semibold mb-4">Performance Metrics</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Component Render Info</h3>
              <p className="text-sm text-gray-600">Render count: {renderCount}</p>
              <p className="text-sm text-gray-600">Check console for render timing</p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Page Load Performance</h3>
              {performanceData ? (
                <div className="text-sm space-y-1">
                  <p>DOM Ready: {performanceData.domContentLoaded.toFixed(2)}ms</p>
                  <p>Load Complete: {performanceData.loadComplete.toFixed(2)}ms</p>
                  <p>Total: {performanceData.total.toFixed(2)}ms</p>
                  <p className="text-xs text-gray-500">Measured at: {performanceData.timestamp}</p>
                </div>
              ) : (
                <p className="text-sm text-gray-500">Collecting performance data...</p>
              )}
            </div>
          </div>
        </div>

        {/* Heavy Operation Testing */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
          <h2 className="text-xl font-semibold mb-4">Heavy Operation Testing</h2>
          <button
            onClick={runHeavyOperation}
            disabled={isHeavyOperation}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed mb-4"
          >
            {isHeavyOperation ? 'Running...' : 'Run Heavy Operation'}
          </button>
          
          {isHeavyOperation && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800">Running CPU-intensive operation... This may freeze the UI briefly.</p>
            </div>
          )}
          
          {heavyOperationResult && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
              <p className="text-green-800">{heavyOperationResult}</p>
            </div>
          )}
        </div>

        {/* Route Preloading Test */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
          <h2 className="text-xl font-semibold mb-4">Route Preloading Test</h2>
          <button
            onClick={testRoutePreloading}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mb-4"
          >
            Test Route Preloading
          </button>
          <p className="text-sm text-gray-600">
            Click the button above to preload the slow-load test route. 
            Check the Network tab in DevTools to see the prefetch request.
          </p>
        </div>

        {/* Large List Rendering */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
          <h2 className="text-xl font-semibold mb-4">Large List Rendering Test</h2>
          <p className="text-sm text-gray-600 mb-4">
            This section renders 10,000 items to test rendering performance. 
            Scroll to see how the browser handles large lists.
          </p>
          <div className="max-h-64 overflow-y-auto border border-gray-200 rounded-lg p-4 bg-gray-50">
            {generateLargeList()}
          </div>
        </div>

        {/* Performance Tips */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
          <h2 className="text-xl font-semibold mb-4">Performance Testing Tips</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Console Logs:</strong> Check browser console for render timing logs</li>
            <li><strong>Network Tab:</strong> Monitor route preloading in DevTools</li>
            <li><strong>Performance Tab:</strong> Use Chrome DevTools Performance tab for detailed analysis</li>
            <li><strong>Lighthouse:</strong> Run Lighthouse audits for overall performance score</li>
            <li><strong>React DevTools:</strong> Use React Profiler to identify slow components</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <a 
            href="/test/loading" 
            className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
          >
            ← Previous: Test Loading States
          </a>
          <a 
            href="/test/slow-load" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Next: Test Slow Loading →
          </a>
        </div>
      </div>
    </div>
  )
}

export default TestPerformance
