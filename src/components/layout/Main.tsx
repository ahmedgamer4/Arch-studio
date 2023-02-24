import React from 'react'
import Gallery from '../Gallery'
import welcomeImage from '/assets/home/desktop/image-welcome.jpg'
import Slide from '../Slide'
import data from '../../../json/data.json'
import Featured from '../Featured'

function Main() {
  return (
    <main className='sm:w-10/12 md:w-9/12 mx-auto'>
      <Gallery />

      <section className='xl:relative mt-20 xl:mt-40 px-7'>
        <span className='left-1/2 -translate-x-[56%] hidden sm:inline sm:text-[100px] -translate-y-40 text-gray-200 md:text-[140px] xl:absolute xl:text-[13rem] gap-10 font-bold'>Welcome</span>
        <div className='xl:flex gap-8'>
          <div className='hidden xl:block w-40' />
          <div className='xl:flex items-end'>
            <div className='xl:max-w-[40rem]'>
              <span className='block text-[45px] font-[900] text-gray-900 xl:max-w-[18rem]'>Welcome to Arch Studio</span>
              <p className='font-semibold text-sm text-gray-500 mt-9'>
                <span>
                  We have a unique network and skillset to help bring your projects to life.
                  Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.
                </span>
                <span className='block mt-6'>
                  Over the past 10 years, we have worked on all kinds of projects.
                  From stations to high-rise buildings, we create spaces that inspire and delight.
                </span>
                <span className='block mt-6'>
                  We work closely with our clients so that we understand the intricacies of each project.
                  This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.
                </span>
              </p>
            </div>
          </div>
          <img src={welcomeImage} alt="" className='hidden xl:block mt-8 h-[30rem] w-[26rem]' />
        </div>
      </section>

      <section className='mt-40'>
        <Slide slide={ data.home.team } />
      </section>

      <Featured />
    </main>
  )
}

export default Main