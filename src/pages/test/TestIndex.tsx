import React from 'react'
import { Link } from 'react-router-dom'

const TestIndex: React.FC = () => {
  const testFeatures = [
    {
      title: 'Error Boundaries',
      description: 'Test how the app handles different types of errors gracefully',
      path: '/test/error',
      icon: '🚨',
      color: 'bg-red-50 border-red-200 text-red-800'
    },
    {
      title: 'Loading States',
      description: 'Test loading spinners, Suspense boundaries, and different loading scenarios',
      path: '/test/loading',
      icon: '🌀',
      color: 'bg-blue-50 border-blue-200 text-blue-800'
    },
    {
      title: 'Performance Monitoring',
      description: 'Test performance utilities, heavy operations, and route preloading',
      path: '/test/performance',
      icon: '📊',
      color: 'bg-green-50 border-green-200 text-green-800'
    },
    {
      title: 'Slow Loading',
      description: 'Test how the app handles slow loading scenarios and multiple loading states',
      path: '/test/slow-load',
      icon: '🐌',
      color: 'bg-orange-50 border-orange-200 text-orange-800'
    }
  ]

  return (
    <div className="container-default py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          🧪 Testing Suite - React Router Features
        </h1>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <p className="text-blue-800">
            <strong>Welcome to the Testing Suite!</strong> This section allows you to test all the 
            features we've implemented: error boundaries, loading states, performance monitoring, 
            and slow loading scenarios. Use these pages to verify that everything works correctly.
          </p>
        </div>

        {/* Test Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {testFeatures.map((feature, index) => (
            <Link
              key={index}
              to={feature.path}
              className={`block p-6 rounded-lg border-2 transition-all hover:scale-105 hover:shadow-lg ${feature.color}`}
            >
              <div className="flex items-start space-x-4">
                <span className="text-3xl">{feature.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm opacity-80">{feature.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Test Actions */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
          <h2 className="text-xl font-semibold mb-4">Quick Test Actions</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
            >
              🔄 Reload Page
            </button>
            <button
              onClick={() => {
                const link = document.createElement('link')
                link.rel = 'prefetch'
                link.href = '/test/loading'
                document.head.appendChild(link)
                alert('Route /test/loading has been preloaded!')
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              ⚡ Preload Route
            </button>
            <button
              onClick={() => {
                console.log('Performance timing:', performance.timing)
                alert('Check console for performance data!')
              }}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              📊 Log Performance
            </button>
          </div>
        </div>

        {/* What to Test */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
          <h2 className="text-xl font-semibold mb-4">What to Test</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Error Handling</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Render errors trigger error boundaries</li>
                <li>• Event handler errors are caught</li>
                <li>• Async errors are handled gracefully</li>
                <li>• Error recovery works properly</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Loading States</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Loading spinners display correctly</li>
                <li>• Suspense boundaries work</li>
                <li>• Multiple loading states coexist</li>
                <li>• Loading transitions are smooth</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Performance</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Performance monitoring works</li>
                <li>• Route preloading functions</li>
                <li>• Heavy operations don't crash</li>
                <li>• Console logs provide insights</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-700 mb-2">User Experience</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• No blank screens during loading</li>
                <li>• Smooth transitions between states</li>
                <li>• Clear error messages</li>
                <li>• Intuitive navigation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="text-center">
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-lg font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TestIndex
