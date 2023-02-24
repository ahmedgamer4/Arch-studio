import { Variants, motion } from 'framer-motion';
import React from 'react'
import { Link } from 'react-router-dom'

type CardProps = {
  name: string,
  date?: string,
  featured?: boolean,
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

const cardVariants: Variants = {
  offscreen: {
    y: 200
  },
  onscreen: {
    y: 50,
    transition: {
      type: "spring",
      duration: 1,
    }
  }
};

function Card({ name, featured, date, image, link, index }: CardProps) {

  return (
    <motion.div
      className='mt-6 relative w-full'
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      variants={cardVariants}
      >
      <Link to={link.href} className='relative flex flex-row-reverse p-4 xl:p-0 bg-black/40
        xl:flex-col justify-between overflow-hidden w-full h-[15rem] xl:h-[34rem]'>
        <img className='z-[-1] top-0 left-0 opa opacity-90 absolute hover:scale-105 transition-transform duration-300 w-full h-[15rem] xl:h-[34rem] object-cover' src={image.desktop} alt="" />
        {featured && <div className='sm:flex justify-end w-full -mt-7 hidden'>
          <span className='text-[7rem] sm:text-[13rem] xl:mr-4 text-gray-100/40 font-bold'>{index}</span>
        </div>}
        <div className='flex items-end flex-grow'>
          <div className='text-white mb-10 ml-2 xl:ml-7 w-full sm:w-auto'>
            <h2 className='font-bold text-3xl sm:text-2xl lg:text-3xl'>{name}</h2>
            <p className='text-sm font-bold'>View All Projects</p>
            {featured ?
              null :
              <p className='text-sm font-bold'>{date}</p>
            }
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default Card