"use client"
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    document.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-8 sm:px-6 py-3">
        <div className="">
          <div className="flex items-center justify-between h-16">
          <Link className="text-xl font-bold text-[24px]" href="/" >
              BGRSTRIP
            </Link>
         
          <ul className='flex items-center'>
          
            <li>
            <Link className="mr-4 text-[16px]" href="/">
              Home
            </Link>
            </li>
            <li>
            <Link className="mr-4 text-[16px]" href="#footer">
            
              footer
            
            </Link>
            </li>
            <li>
            <Link className="mr-4 text-[16px]" href="#content">
              Contact
            </Link>
            </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
