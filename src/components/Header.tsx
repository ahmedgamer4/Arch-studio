import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo-dark.svg'

function Header() {
  const [visible, setVisible] = useState(false)

  return (
    <header className='w-11/12 sm:w-10/12 md:w-9/12 mx-auto py-10 sm:py-16 z-50 relative sm:static'>
      <div className='rotate-90 sm:flex gap-x-10 items-center text-gray-400 absolute hidden sm:-left-36 md:-left-28 lg:-left-20'>
        <div className='w-52 h-[1px] bg-gray-300'></div>
        <p className='tracking-[14px] '>HOME</p>
      </div>
      <div className='flex items-center sm:w-[500px] justify-between mb-8 sm:mb-0'>
        <Link to='/'>
          <img src={logo} className='w-24' alt="Arch logo" />
        </Link>
        <ul className='text-gray-500 sm:text-base font-semibold sm:flex sm:gap-10 hidden'>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
          <li>
            <Link to='/about'>About Us</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
        {
          visible ?
            <nav className='w-[90%] bg-gray-100 absolute top-[73%] p-10 -right-[4.5%] z-20'>
              <ul className='text-gray-900 text-2xl font-semibold flex flex-col gap-10'>
                <li className='cursor-pointer'>
                  <Link to='/profile'>Profile</Link>
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
        <div className='bg-black/70 w-[120%] left-0 h-full fixed z-10 sm:hidden' onClick={() => setVisible(false)}></div>
        : null
      }
    </header>
  )
}

export default Header