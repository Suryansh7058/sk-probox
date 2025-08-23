
import { Outlet, NavLink } from 'react-router-dom'
import useRoutePreload from '../hooks/useRoutePreload'

function NavItem({to, children}:{to:string; children:React.ReactNode}){
  return (
    <NavLink 
      to={to} 
      className={({isActive}) => 
        `px-3 py-2 rounded-lg text-sm font-medium transition ${isActive ? 'text-primary' : 'text-slate-700 hover:text-primary'}`}
      aria-current="page"
    >
      {children}
    </NavLink>
  )
}

export default function Layout(){
  // Enable route preloading for better UX
  useRoutePreload()

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="container-default flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2 font-semibold" aria-label="ProBox InfoTech Home">
            <img src="/assets/icons/logo-mark.svg" alt="ProBox InfoTech" className="h-6 w-6 rounded" />
            <span>ProBox InfoTech</span>
          </a>
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/services">Services</NavItem>
            <NavItem to="/case-studies">Case Studies</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/resources">Resources</NavItem>
            <NavItem to="/test">🧪 Test</NavItem>
          </nav>
          <div className="flex items-center gap-2">
            <a href="/contact" className="hidden sm:inline-flex btn border border-slate-200">Contact</a>
            <a href="/client-portal" className="btn bg-primary text-white">Client Portal</a>
          </div>
        </div>
      </header>
      <main className="flex-1" role="main">
        <Outlet />
      </main>
      <footer className="border-t border-slate-200" role="contentinfo">
        <div className="container-default py-12 grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <h3 className="text-slate-900 mb-2">ProBox InfoTech</h3>
            <p>Architecting digital futures through innovative technology solutions.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Services</h4>
            <ul className="space-y-1 text-slate-700">
              <li>Cloud Solutions</li>
              <li>AI & Automation</li>
              <li>Digital Infrastructure</li>
              <li>Cybersecurity</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-slate-700">
              <li><a href="/about">About Us</a></li>
              <li><a href="/case-studies">Case Studies</a></li>
              <li><a href="/resources">Resources</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
          © 2025 ProBox InfoTech. All Rights Reserved.
        </div>
      </footer>
    </div>
  )
}
