import React from 'react'
import { Link } from 'react-router-dom';
import arrow from '/assets/icons/icon-arrow-black.svg'

interface SlideProps {
  slide: {
    heading: string;
    paragraph?: string;
    image: {
      desktop: string;
      tablet: string;
      mobile: string;
    };
  }
}

function Slide({ slide }: SlideProps) {
  return (
    <section className='relative h-[40rem]'>
      <img src={slide.image.desktop} className='w-full z-10 absolute h-[40rem] object-cover opacity-90' alt="" />
      <div className='text-white absolute z-20 px-[10%] sm:px-40 lg:px-60 top-1/2 -translate-y-1/2 w-full'>
        <h1 className='text-6xl sm:text-[76px] font-bold text max-w-md'>{slide.heading}</h1>
        <p className='mt-5 max-w-[30rem]'>{slide.paragraph}</p>
        <Link to='/portfolio' className='mt-5 flex justify-between w-56 sm:w-64 items-center bg-gray-800 hover:bg-gray-600 py-6 px-5 sm:px-6 hover:pr-4 transition-[padding] duration-200'>
          <p className='sm:text-lg font-semibold'>See Our Portfolio</p>
          <img className='invert' src={arrow} alt="" />
        </Link>
      </div>
    </section>
  )
}

export default Slide