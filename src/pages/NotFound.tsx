import React from 'react'
import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner'

const NotFound: React.FC = () => {
  const error = useRouteError()
  let errorMessage = "Page not found"
  let errorDetails = "The page you're looking for doesn't exist or has been moved."

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      errorMessage = "Page not found"
      errorDetails = "The page you're looking for doesn't exist or has been moved."
    } else {
      errorMessage = `Error ${error.status}`
      errorDetails = error.data?.message || "Something went wrong"
    }
  } else if (error instanceof Error) {
    errorMessage = "Application Error"
    errorDetails = error.message
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Icon */}
        <div className="mb-8">
          <div className="relative">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-6xl font-bold text-white">404</span>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
              <span className="text-white text-sm">!</span>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {errorMessage}
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          {errorDetails}
        </p>

        {/* Helpful Suggestions */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-lg">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            🧭 Let's get you back on track
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="text-left">
              <h3 className="font-medium text-gray-700 mb-2">Popular Pages</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link to="/" className="hover:text-blue-600 transition">🏠 Home</Link></li>
                <li><Link to="/services" className="hover:text-blue-600 transition">⚡ Services</Link></li>
                <li><Link to="/about" className="hover:text-blue-600 transition">👥 About Us</Link></li>
                <li><Link to="/resources" className="hover:text-blue-600 transition">📚 Resources</Link></li>
              </ul>
            </div>
            
            <div className="text-left">
              <h3 className="font-medium text-gray-700 mb-2">Quick Actions</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link to="/client-portal" className="hover:text-blue-600 transition">🔐 Client Portal</Link></li>
                <li><Link to="/test" className="hover:text-blue-600 transition">🧪 Test Features</Link></li>
                <li><button onClick={() => window.history.back()} className="hover:text-blue-600 transition">⬅️ Go Back</button></li>
                <li><button onClick={() => window.location.reload()} className="hover:text-blue-600 transition">🔄 Refresh</button></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            🏠 Go Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="px-8 py-3 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            ⬅️ Go Back
          </button>
        </div>

        {/* Search Suggestion */}
        <div className="mt-8 p-4 bg-white/60 rounded-lg">
          <p className="text-sm text-gray-600 mb-2">
            💡 Can't find what you're looking for?
          </p>
          <p className="text-xs text-gray-500">
            Try using the navigation menu above or contact our support team for assistance.
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotFound
