import { useEffect, useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'


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
            <Link
              to="#"
              className="text-xl font-bold text-[26px] cursor-pointer"
              spy={true} smooth={true} offset={50} duration={500}
            >
              <span className='text-yellow-400 hover:text-yellow-300'>BG</span>STRIP
            </Link>

            <ul className="flex items-center ">
              <li>
                <Link
                  to="#howToUse"
                  className="mr-4 text-[16px] cursor-pointer hover:text-yellow-300"
                  spy={true} smooth={true} offset={50} duration={500}
                >
                  How to Use
                </Link>
              </li>
              <li>
                <Link
                  to="#Demo"
                  className="mr-4 text-[16px] cursor-pointer hover:text-yellow-300"
                  spy={true} smooth={true} offset={50} duration={500}
                >
                  Demo
                </Link>
              </li>
              <li>
                <Link
                  to="#GetStarted"
                  className="mr-4 text-[16px] hover:text-yellow-300"
                  spy={true} smooth={true} offset={50} duration={500}
                >
                  Get Started
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
