import React, { useState, Suspense } from 'react'
import LoadingSpinner from '../../components/LoadingSpinner'

// Component that loads slowly to demonstrate Suspense
const SlowComponent: React.FC<{ delay: number }> = ({ delay }) => {
  const [data, setData] = useState<string | null>(null)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setData(`Data loaded after ${delay}ms delay! 🎉`)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  if (!data) {
    return <LoadingSpinner size="md" className="py-8" />
  }

  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
      <p className="text-green-800">{data}</p>
    </div>
  )
}

// Component with artificial delay
const DelayedComponent: React.FC<{ delay: number; children: React.ReactNode }> = ({ delay, children }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  if (!isLoaded) {
    return (
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-center space-x-3">
          <LoadingSpinner size="sm" />
          <span className="text-blue-800">Loading component... ({delay}ms delay)</span>
        </div>
      </div>
    )
  }

  return <>{children}</>
}

const TestLoading: React.FC = () => {
  const [showSlowComponent, setShowSlowComponent] = useState(false)
  const [showDelayedComponents, setShowDelayedComponents] = useState(false)
  const [loadingStates, setLoadingStates] = useState({
    button1: false,
    button2: false,
    button3: false
  })

  const simulateLoading = (buttonKey: keyof typeof loadingStates, duration: number) => {
    setLoadingStates(prev => ({ ...prev, [buttonKey]: true }))
    
    setTimeout(() => {
      setLoadingStates(prev => ({ ...prev, [buttonKey]: false }))
    }, duration)
  }

  return (
    <div className="container-default py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          🌀 Loading States & Suspense Testing
        </h1>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-blue-800">
            <strong>Note:</strong> This page demonstrates different loading states, 
            Suspense boundaries, and loading spinners.
          </p>
        </div>

        {/* Basic Loading Spinners */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
          <h2 className="text-xl font-semibold mb-4">Loading Spinner Sizes</h2>
          <div className="flex items-center space-x-8">
            <div className="text-center">
              <LoadingSpinner size="sm" />
              <p className="text-sm text-gray-600 mt-2">Small</p>
            </div>
            <div className="text-center">
              <LoadingSpinner size="md" />
              <p className="text-sm text-gray-600 mt-2">Medium</p>
            </div>
            <div className="text-center">
              <LoadingSpinner size="lg" />
              <p className="text-sm text-gray-600 mt-2">Large</p>
            </div>
          </div>
        </div>

        {/* Button Loading States */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
          <h2 className="text-xl font-semibold mb-4">Button Loading States</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <button
              onClick={() => simulateLoading('button1', 2000)}
              disabled={loadingStates.button1}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loadingStates.button1 ? (
                <>
                  <LoadingSpinner size="sm" className="mr-2" />
                  Loading...
                </>
              ) : (
                '2s Loading'
              )}
            </button>

            <button
              onClick={() => simulateLoading('button2', 3000)}
              disabled={loadingStates.button2}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loadingStates.button2 ? (
                <>
                  <LoadingSpinner size="sm" className="mr-2" />
                  Loading...
                </>
              ) : (
                '3s Loading'
              )}
            </button>

            <button
              onClick={() => simulateLoading('button3', 5000)}
              disabled={loadingStates.button3}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loadingStates.button3 ? (
                <>
                  <LoadingSpinner size="sm" className="mr-2" />
                  Loading...
                </>
              ) : (
                '5s Loading'
              )}
            </button>
          </div>
        </div>

        {/* Suspense with Slow Component */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
          <h2 className="text-xl font-semibold mb-4">Suspense with Slow Component</h2>
          <button
            onClick={() => setShowSlowComponent(!showSlowComponent)}
            className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 mb-4"
          >
            {showSlowComponent ? 'Hide' : 'Show'} Slow Component
          </button>
          
          {showSlowComponent && (
            <Suspense fallback={<LoadingSpinner size="lg" className="py-8" />}>
              <SlowComponent delay={3000} />
            </Suspense>
          )}
        </div>

        {/* Multiple Delayed Components */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
          <h2 className="text-xl font-semibold mb-4">Multiple Delayed Components</h2>
          <button
            onClick={() => setShowDelayedComponents(!showDelayedComponents)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 mb-4"
          >
            {showDelayedComponents ? 'Hide' : 'Show'} Delayed Components
          </button>
          
          {showDelayedComponents && (
            <div className="space-y-4">
              <DelayedComponent delay={1000}>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800">Component 1 loaded after 1 second! 🚀</p>
                </div>
              </DelayedComponent>
              
              <DelayedComponent delay={2500}>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800">Component 2 loaded after 2.5 seconds! ⚡</p>
                </div>
              </DelayedComponent>
              
              <DelayedComponent delay={4000}>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <p className="text-purple-800">Component 3 loaded after 4 seconds! 🎯</p>
                </div>
              </DelayedComponent>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <a 
            href="/test/error" 
            className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
          >
            ← Previous: Test Error Boundaries
          </a>
          <a 
            href="/test/performance" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Next: Test Performance →
          </a>
        </div>
      </div>
    </div>
  )
}

export default TestLoading
