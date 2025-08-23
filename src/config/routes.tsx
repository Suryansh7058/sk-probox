import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import Layout from '../shared/Layout'

// Lazy load pages for code splitting
const Home = lazy(() => import('../pages/Home'))
const Services = lazy(() => import('../pages/Services'))
const Resources = lazy(() => import('../pages/Resources'))
const About = lazy(() => import('../pages/About'))
const ClientPortal = lazy(() => import('../pages/ClientPortal'))
const CaseStudies = lazy(() => import('../pages/CaseStudies'))
const Contact = lazy(() => import('../pages/Contact'))

// Test routes for demonstrating features
const TestIndex = lazy(() => import('../pages/test/TestIndex'))
const TestError = lazy(() => import('../pages/test/TestError'))
const TestLoading = lazy(() => import('../pages/test/TestLoading'))
const TestPerformance = lazy(() => import('../pages/test/TestPerformance'))
const TestSlowLoad = lazy(() => import('../pages/test/TestSlowLoad'))

// 404 page
const NotFound = lazy(() => import('../pages/NotFound'))

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'services', element: <Services /> },
      { path: 'case-studies', element: <CaseStudies /> },
      { path: 'resources', element: <Resources /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'client-portal', element: <ClientPortal /> },
      
      // Test routes for demonstrating features
      { path: 'test', children: [
        { index: true, element: <TestIndex /> },
        { path: 'error', element: <TestError /> },
        { path: 'loading', element: <TestLoading /> },
        { path: 'performance', element: <TestPerformance /> },
        { path: 'slow-load', element: <TestSlowLoad /> },
      ]},
      
      // Catch-all 404 route - must be last
      { path: '*', element: <NotFound /> },
    ],
  },
]

export default routes
