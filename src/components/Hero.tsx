import React from 'react'

type HeroProps = {
  name: string,
  hero: {
    heading: string;
    paragraphs: string[];
    image: {
      desktop: string;
      tablet: string;
      mobile: string;
    };
  };
}

function Hero({ name, hero }: HeroProps) {
  return (
    <section className='relative h-[48rem]'>
      <div className='absolute bg-black/20 h-1/2 md:h-[48rem] xl:w-[60%] w-full'>
        <img
          className='absolute left-0 h-full object-cover w-full -z-10'
          src={hero.image.desktop} alt="hero image" />
      </div>
      <div className='w-[90%] h-[60%] bg-white absolute md:right-0 bottom-12 md:bottom-0 pt-10 pl-10 md:pt-44 md:pl-32 xl:w-[60%]'>
        <h2 className='text-3xl sm:text-5xl md:text-6xl max-w-[24rem] font-bold'>{hero.heading}</h2>
        <p className='text-sm font-semibold mt-8 max-w-[600px] leading-7'>{hero.paragraphs}</p>
        <div className='absolute text-gray-200 font-bold md:text-[150px] lg:text-[200px] hidden md:block -top-20 left-0 origin-left lg:-top-40 xl:-left-40 z-10 -tanslate-y-1/2'>{name}</div>
      </div>
    </section>
  )
}

export default Hero