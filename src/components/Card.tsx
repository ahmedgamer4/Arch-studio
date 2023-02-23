import React from 'react'
import { Link } from 'react-router-dom'

type CardProps = {
  name: string,
  date?: string,
  featured: boolean,
  image: {
    desktop: string,
    tablet: string,
    mobile: string,
  },
  link: {
    href: string,
  },
  index?: number
}

function Card({ name, date, featured, image, link, index }: CardProps) {

  return (
    <Link to='/profile' className='relative mt-6 flex flex-row-reverse p-4 xl:p-0 bg-black/20 xl:flex-col justify-between overflow-hidden w-full xl:w-1/3 h-[15rem] xl:h-[34rem]'>
      <img className='z-[-1] top-0 left-0 opa opacity-90 absolute hover:scale-105 transition-transform duration-300 w-full h-[15rem] xl:h-[34rem] object-cover' src={image.desktop} alt="" />
      <div className='sm:flex justify-end w-full -mt-7 hidden'>
        <span className='text-[7rem] sm:text-[13rem] text-gray-100/80 font-bold'>{index}</span>
      </div>
      <div className='text-white mb-10 ml-2 xl:ml-7 w-full sm:w-auto'>
        <h2 className='font-bold text-3xl sm:text-4xl'>{name}</h2>
        <p>View All Projects</p>
      </div>
    </Link>
  )
}

export default Card