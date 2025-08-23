import React, { useState } from 'react'
import { measureComponentRender } from '../../utils/performance'

const TestError: React.FC = () => {
  const [shouldThrow, setShouldThrow] = useState(false)
  const [errorType, setErrorType] = useState<'render' | 'event' | 'async'>('render')

  // Measure render performance
  const logRenderTime = measureComponentRender('TestError')
  React.useEffect(() => {
    logRenderTime()
  })

  // Intentional error during render
  if (shouldThrow && errorType === 'render') {
    throw new Error('🚨 Intentional render error for testing error boundaries!')
  }

  // Intentional error during event
  const handleEventError = () => {
    if (errorType === 'event') {
      throw new Error('🚨 Intentional event error for testing error boundaries!')
    }
  }

  // Intentional error during async operation
  const handleAsyncError = async () => {
    if (errorType === 'async') {
      await new Promise(resolve => setTimeout(resolve, 100))
      throw new Error('🚨 Intentional async error for testing error boundaries!')
    }
  }

  return (
    <div className="container-default py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          🧪 Error Boundary Testing
        </h1>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <p className="text-yellow-800">
            <strong>Note:</strong> This page is designed to test error boundaries. 
            Use the controls below to trigger different types of errors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Error Type Selection</h2>
            <div className="space-y-3">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="errorType"
                  value="render"
                  checked={errorType === 'render'}
                  onChange={(e) => setErrorType(e.target.value as any)}
                  className="mr-2"
                />
                Render Error (immediate crash)
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="errorType"
                  value="event"
                  checked={errorType === 'event'}
                  onChange={(e) => setErrorType(e.target.value as any)}
                  className="mr-2"
                />
                Event Handler Error
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="errorType"
                  value="async"
                  checked={errorType === 'async'}
                  onChange={(e) => setErrorType(e.target.value as any)}
                  className="mr-2"
                />
                Async Operation Error
              </label>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Trigger Errors</h2>
            <div className="space-y-3">
              <button
                onClick={() => setShouldThrow(!shouldThrow)}
                className={`w-full px-4 py-2 rounded-lg font-medium transition ${
                  shouldThrow 
                    ? 'bg-red-600 text-white hover:bg-red-700' 
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                {shouldThrow ? 'Disable' : 'Enable'} Render Error
              </button>
              
              <button
                onClick={handleEventError}
                className="w-full px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition"
              >
                Trigger Event Error
              </button>
              
              <button
                onClick={handleAsyncError}
                className="w-full px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition"
              >
                Trigger Async Error
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">What to Test</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Render Error:</strong> Toggle the switch to see immediate component crashes</li>
            <li><strong>Event Error:</strong> Click the button to see error boundary catch event errors</li>
            <li><strong>Async Error:</strong> Click to see error boundary catch async operation errors</li>
            <li><strong>Error Recovery:</strong> Use the error boundary's reload button to recover</li>
          </ul>
        </div>

        <div className="mt-6 text-center">
          <a 
            href="/test/loading" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Next: Test Loading States →
          </a>
        </div>
      </div>
    </div>
  )
}

export default TestError
