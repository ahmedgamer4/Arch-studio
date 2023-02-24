import React from 'react'
import data from '../../json/data.json'
import Hero from '../components/Hero'
import LeaderCard from '../components/LeaderCard'

function About() {
  const { about } = data

  return (
    <main className='sm:w-10/12 md:w-9/12 mx-auto'>
      <Hero name='About' hero={about.hero} />
      <section className='xl:flex w-full justify-between mt-56 h-[34rem]'>
        <div className='xl:w-[45%] flex items-end'>
          <div className='font-bold px-6 sm:p-0'>
            <h1 className='text-4xl sm:text-6xl max-w-[20rem] text-gray-800'>{about.heritage.heading}</h1>
            <span className='mt-9 leading-7 text-sm'>{about.heritage.paragraphs.map(p => (
              <span key={p} className='mt-9 block'>{p}</span>
            ))}</span>
          </div>
        </div>
        <div className='w-[45%] hidden xl:block h-[34rem]'>
          <img src={about.heritage.image.desktop} className='w-full h-full object-cover' alt="heritage image" />
        </div>
      </section>

      <section className='xl:flex justify-between mt-56 p-4 sm:p-0'>
        <div className='text-6xl font-bold max-w-xs'>
          <div>{about.leaders.heading}</div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-9 '>{about.leaders.people.map(p => (
          <LeaderCard image={p.image} name={p.name} role={p.role} key={p.name} />
        ))}</div>
      </section>
    </main>
  )
}

export default About