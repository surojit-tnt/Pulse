
import { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [visible, setVisible] = useState(true)
  const previousScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 10) {
        setVisible(true)
      } else if (currentScrollY > previousScrollY.current) {
        setVisible(false)
      } else {
        setVisible(true)
      }

      previousScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
      isActive
        ? 'bg-white/20 text-white'
        : 'text-slate-200 hover:bg-white/10 hover:text-cyan-200'
    }`

  return (
    <nav
      className={`glass-navbar fixed left-1/2 top-5 z-50 flex -translate-x-1/2 items-center gap-5 whitespace-nowrap rounded-full px-4 py-3 transition-all duration-300 ease-in-out ${
        visible
          ? 'translate-y-0 opacity-100'
          : '-translate-y-24 pointer-events-none opacity-0'
      }`}
    >
      <NavLink to="/" className="mr-2 text-xl font-extrabold tracking-tight text-white">
        Pulse<span className="text-cyan-300">.</span>
      </NavLink>

      <div className="flex items-center gap-1">
        <NavLink to="/" end className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/create-post" className={linkClass}>
          Create Post
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
