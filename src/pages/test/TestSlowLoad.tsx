import React, { useState, Suspense } from 'react'
import LoadingSpinner from '../../components/LoadingSpinner'

// Simulate a very slow API call
const simulateSlowAPI = (delay: number): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Data loaded after ${delay}ms delay! 🎯`)
    }, delay)
  })
}

// Component that simulates slow data loading
const SlowDataComponent: React.FC<{ delay: number; title: string }> = ({ delay, title }) => {
  const [data, setData] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const loadData = async () => {
    setIsLoading(true)
    setError(null)
    
    try {
      const result = await simulateSlowAPI(delay)
      setData(result)
    } catch (err) {
      setError('Failed to load data')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      
      {!data && !isLoading && !error && (
        <button
          onClick={loadData}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Load Data ({delay}ms delay)
        </button>
      )}
      
      {isLoading && (
        <div className="flex items-center space-x-3">
          <LoadingSpinner size="md" />
          <span className="text-blue-600">Loading data... Please wait</span>
        </div>
      )}
      
      {data && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-green-800">{data}</p>
          <button
            onClick={() => setData(null)}
            className="mt-2 px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition"
          >
            Reset
          </button>
        </div>
      )}
      
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">{error}</p>
          <button
            onClick={() => setError(null)}
            className="mt-2 px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  )
}

// Component with artificial delay using Suspense
const SuspenseComponent: React.FC<{ delay: number }> = ({ delay }) => {
  const [shouldShow, setShouldShow] = useState(false)

  if (!shouldShow) {
    return (
      <button
        onClick={() => setShouldShow(true)}
        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
      >
        Show Suspense Component ({delay}ms delay)
      </button>
    )
  }

  return (
    <Suspense fallback={
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
        <div className="flex items-center space-x-3">
          <LoadingSpinner size="md" />
          <span className="text-purple-600">Loading with Suspense...</span>
        </div>
      </div>
    }>
      <SlowDataComponent delay={delay} title="Suspense Component" />
    </Suspense>
  )
}

const TestSlowLoad: React.FC = () => {
  const [showAllComponents, setShowAllComponents] = useState(false)

  return (
    <div className="container-default py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          🐌 Slow Loading & Suspense Testing
        </h1>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
          <p className="text-orange-800">
            <strong>Note:</strong> This page demonstrates how the app handles slow loading scenarios, 
            Suspense boundaries, and different loading states.
          </p>
        </div>

        {/* Individual Slow Components */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
          <h2 className="text-xl font-semibold mb-4">Individual Slow Components</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <SlowDataComponent delay={2000} title="Quick Load (2s)" />
            <SlowDataComponent delay={5000} title="Medium Load (5s)" />
            <SlowDataComponent delay={10000} title="Slow Load (10s)" />
            <SlowDataComponent delay={15000} title="Very Slow Load (15s)" />
          </div>
        </div>

        {/* Suspense Component Testing */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
          <h2 className="text-xl font-semibold mb-4">Suspense Component Testing</h2>
          <SuspenseComponent delay={8000} />
        </div>

        {/* Bulk Loading Test */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
          <h2 className="text-xl font-semibold mb-4">Bulk Loading Test</h2>
          <button
            onClick={() => setShowAllComponents(!showAllComponents)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition mb-4"
          >
            {showAllComponents ? 'Hide' : 'Show'} All Components at Once
          </button>
          
          {showAllComponents && (
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                This will load multiple slow components simultaneously to test how the app handles 
                multiple loading states and Suspense boundaries.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <SlowDataComponent delay={3000} title="Bulk Component 1 (3s)" />
                <SlowDataComponent delay={4000} title="Bulk Component 2 (4s)" />
                <SlowDataComponent delay={6000} title="Bulk Component 3 (6s)" />
                <SlowDataComponent delay={8000} title="Bulk Component 4 (8s)" />
              </div>
            </div>
          )}
        </div>

        {/* Loading State Variations */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
          <h2 className="text-xl font-semibold mb-4">Loading State Variations</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <LoadingSpinner size="sm" className="mb-2" />
              <p className="text-sm text-gray-600">Small Spinner</p>
            </div>
            <div className="text-center">
              <LoadingSpinner size="md" className="mb-2" />
              <p className="text-sm text-gray-600">Medium Spinner</p>
            </div>
            <div className="text-center">
              <LoadingSpinner size="lg" className="mb-2" />
              <p className="text-sm text-gray-600">Large Spinner</p>
            </div>
          </div>
        </div>

        {/* Testing Instructions */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
          <h2 className="text-xl font-semibold mb-4">Testing Instructions</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Individual Components:</strong> Test different loading delays to see loading states</li>
            <li><strong>Suspense Component:</strong> See how Suspense handles slow loading</li>
            <li><strong>Bulk Loading:</strong> Test multiple slow components simultaneously</li>
            <li><strong>Loading States:</strong> Observe different spinner sizes and loading behaviors</li>
            <li><strong>Error Handling:</strong> Some components may fail - test error recovery</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <a 
            href="/test/performance" 
            className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
          >
            ← Previous: Test Performance
          </a>
          <a 
            href="/" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Back to Home →
          </a>
        </div>
      </div>
    </div>
  )
}

export default TestSlowLoad
