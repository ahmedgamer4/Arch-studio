import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../../assets/logo-dark.svg'

function Header() {
  const [visible, setVisible] = useState(false)
  const [pageName, setPageName] = useState('home')
  const pathName = useLocation().pathname

  useEffect(() => {
    setPageName(pathName === '/'
      ? 'home'
      : pathName === '/portfolio'
        ? 'portfolio'
        : pathName === '/about'
          ? 'about us'
          : pathName === '/contact'
            ? 'contact'
            : 'home')
  }, [pathName])

  useEffect(() => {
    const handleScroll = () => { if (window.innerWidth > 640) setVisible(false) }
    window.addEventListener('resize', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [window.innerWidth])

  useEffect(() => {
    const html = document.querySelector('html')
    if (visible) html?.classList.add('overflow-hidden')
    else html?.classList.remove('overflow-hidden')
  }, [visible])

  return (
    <header className='w-11/12 sm:w-10/12 md:w-9/12 mx-auto py-10 sm:py-16 z-50 relative sm:static'>
      <div className='md:flex gap-x-6 absolute rotate-90 origin-left left-[5vw] -top-10 items-center hidden'>
        <div className='w-36 h-[1px] bg-gray-300'></div>
        <p className='tracking-[14px] uppercase text-gray-300 '>{pageName}</p>
      </div>
      <div className='flex items-center sm:w-[500px] justify-between mb-8 sm:mb-0'>
        <Link to='/'>
          <img src={logo} className='w-24' alt="Arch logo" />
        </Link>
        <ul className='text-gray-400  sm:text-base font-semibold sm:flex sm:gap-10 hidden'>
          <li className={`hover:text-black transition-all ${pageName === 'portfolio'
            ? 'relative after:absolute after:left-1/2 after:-translate-x-1/2 after:top-4 after:w-6 after:h-[1px] after:bg-black after:mt-4 text-black'
            : ''}`}>
            <Link to='/portfolio'>Profile</Link>
          </li>
          <li className={`hover:text-black transition-all ${pageName === 'about us'
            ? 'relative after:absolute after:left-1/2 after:-translate-x-1/2 after:top-4 after:w-6 after:h-[1px] after:bg-black after:mt-4 text-black'
            : ''}`}>
            <Link to='/about'>About Us</Link>
          </li>
          <li className={`hover:text-black transition-all ${pageName === 'contact'
            ? 'relative after:absolute after:left-1/2 after:-translate-x-1/2 after:top-4 after:w-6 after:h-[1px] after:bg-black after:mt-4 text-black'
            : ''}`}>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
        {
          visible ?
            <nav className='w-[90%] bg-gray-100 absolute top-[73%] p-10 -right-[4.5%] z-20'>
              <ul className='text-gray-900 text-2xl font-semibold flex flex-col gap-10'>
                <li className='cursor-pointer'>
                  <Link to='/portfolio'>Profile</Link>
                </li>
                <li className='cursor-pointer'>
                  <Link to='/about'>About Us</Link>
                </li>
                <li className='cursor-pointer'>
                  <Link to='/contact'>Contact</Link>
                </li>
              </ul>
            </nav>
            : null
        }
        <button
          onClick={() => setVisible(!visible)}
          className='text-2xl sm:hidden'><i className="fa-solid fa-bars"></i></button>
      </div>
      {visible ?
        <div className='overflow-hidden bg-black/70 w-[120%] left-0 h-full fixed z-10 sm:hidden' onClick={() => setVisible(false)}></div>
        : null
      }
    </header>
  )
}

export default Header