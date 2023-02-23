import React from 'react'

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
    <div className='relative mt-6 flex flex-row-reverse p-4 xl:p-0 bg-black/20 xl:flex-col justify-between overflow-hidden w-full xl:w-1/3 h-[15rem] xl:h-[34rem]'>
      <img className='z-[-1] top-0 left-0 opa opacity-90 absolute hover:scale-105 transition-transform duration-300 w-full h-[15rem] xl:h-[34rem] object-cover' src={image.desktop} alt="" />
      <div className='flex justify-end w-full -mt-7'>
        <span className='text-[13rem] text-gray-100/80 font-bold'>{index}</span>
      </div>
      <div className='text-white mb-10 ml-2 xl:ml-7'>
        <h2 className='font-bold text-4xl'>{name}</h2>
        <p>View All Projects</p>
      </div>
    </div>
  )
}

export default Card