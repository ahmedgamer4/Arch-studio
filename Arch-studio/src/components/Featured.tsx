import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../../assets/icons/icon-arrow-black.svg'
import data from '../../json/data.json'
import Card from './Card'

function Featured() {
  const { projects } = data.portfolio
  return (
    <section className='mt-20 px-2 sm:p-0'>
      <div className='flex justify-between w-full items-center'>
        <h2 className='text-5xl font-bold'>Featured</h2>
        <Link to='/portfolio' className='hidden md:flex mt-5 justify-between w-36 sm:w-40 items-center bg-gray-800 hover:bg-gray-600 py-4 px-5 sm:px-6 hover:pr-4 transition-[padding] duration-200'>
          <p className='font-semibold text-white'>See All</p>
          <img className='invert w-5' src={arrow} alt="" />
        </Link>
      </div>

      <div className='xl:flex gap-4'>
        {projects.filter(p => p.featured).map((p, i) => <Card
          featured={p.featured} image={p.image} link={p.link} index={i + 1} name={p.name} key={p.name} />)}
      </div>

      <Link to='/portfolio' className='md:hidden flex mt-20 justify-between w-full items-center bg-gray-800 hover:bg-gray-600 py-4 px-5 sm:px-6 hover:pr-4 transition-[padding] duration-200'>
        <p className='font-semibold text-white'>See All</p>
        <img className='invert w-5' src={arrow} alt="" />
      </Link>
    </section>
  )
}

export default Featured