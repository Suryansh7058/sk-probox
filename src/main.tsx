
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles.css'
import ErrorBoundary from './components/ErrorBoundary'
import LoadingSpinner from './components/LoadingSpinner'
import routes from './config/routes'
import NotFound from './pages/NotFound'

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner size="lg" className="min-h-screen" />}>
        <RouterProvider 
          router={router} 
          fallbackElement={
            <ErrorBoundary>
              <NotFound />
            </ErrorBoundary>
          }
        />
      </Suspense>
    </ErrorBoundary>
  </React.StrictMode>
)
