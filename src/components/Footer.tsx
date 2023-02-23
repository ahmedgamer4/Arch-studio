import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo-light.svg'
import arrow from '../../assets/icons/icon-arrow-black.svg'

function Footer() {
  return (
    <footer className='xl:w-9/12 mx-auto mt-72 '>
      <div className='bg-gray-300 md:w-[90%] flex flex-col items-center md:flex-row gap-20 relative'>
        <div className='bg-black px-3 min-w-[100px] min-h-[110px]  xl:w-52 py-8 flex justify-center items-center relative -top-12 md:top-0'>
          <Link to='/'>
            <img src={logo} alt="arch logo " className='w-20 xl:w-24 xl:h-24' />
          </Link>
        </div>
        <ul className='md:flex justify-center items-center gap-12 text-gray-800 font-bold'>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
          <li className='mt-5 md:m-0'>
            <Link to='/about'>About Us</Link>
          </li>
          <li className='mt-5 md:mt-0'>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
        <Link to='/profile' className='text-white mt-5 flex justify-between w-52 items-center bg-gray-800
         hover:bg-gray-600 py-6 px-5 sm:px-6 hover:pr-4 transition-[padding] duration-200 md:absolute -right-20'>
          <p className='text-sm font-semibold'>See Our Portfolio</p>
          <img className='invert w-6' src={arrow} alt="" />
        </Link>
      </div>
    </footer>
  )
}

export default Footer