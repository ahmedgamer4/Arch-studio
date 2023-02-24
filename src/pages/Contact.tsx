import React from 'react'
import Hero from '../components/Hero'
import data from '../../json/data.json'
import { Link } from 'react-router-dom'
import arrow from '/assets/icons/icon-arrow-black.svg'
import mapImg from '/assets/contact/desktop/image-map.png'
import { Variants, motion } from 'framer-motion'

const contactVariants: Variants = {
  offscreen: {
    y: 100
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
    }
  }
};

function Contact() {
  const { contact } = data
  return (
    <main className='sm:w-10/12 md:w-9/12 mx-auto'>
      <Hero name='Contact' hero={contact.hero} />

      <section className='xl:flex py-20 justify-between px-4 sm:px-0'>
        <h1 className='text-black text-5xl font-bold mb-4 xl:m-0'>{contact.details.heading}</h1>
        {contact.details.addresses.map(a => (
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            variants={contactVariants}
            key={a.name}
            className='font-medium text-gray-700 px-5 text-sm mt-12 xl:m-0 sm:flex xl:block items-center justify-between'>
            <div>
              <h5 className='font-bold text-lg text-black mb-5'>{a.name}</h5>
              <p>Mail: {a.mail}</p>
              <p>Address: {a.address}</p>
              <p>Phone: {a.phone}</p>
            </div>
            <Link to={a.link} className='flex gap-4 max-w-[16rem] mt-8 font-bold'>
              <p>View on Map</p>
              <img src={arrow} alt="arrow " className='max-w-[30px] max-h-[30px]' />
            </Link>
          </motion.div>
        ))}
      </section>
      <section>
        <img src={mapImg} alt="map" />
      </section>
      <section className="mt-14 px-4 xl:px-0 xl:gap-x-2 grid xl:grid-cols-3">
        <h2 className="lg:mb-6 text-5xl lg:heading-md font-bold max-w-[10rem] lg:max-w-full">Connect with us</h2>
        <form action="" className="grid xl:col-span-2 text-sm sm:text-base">
          <input type="text" placeholder="Name" name="name" className="outline-none border-b-black border-b pb-3 pl-8 pt-8" />
          <input type="email" placeholder="Email" name="email" className="outline-none border-b-black border-b pb-3 pl-8 pt-8" />
          <textarea name="message" placeholder="Message" className="outline-none border-b-black border-b pb-3 pl-8 pt-8 min-h-[6rem] max-h-[12rem]">
          </textarea>
          <button type="submit" className="justify-self-end p-6 aspect-square w-fit bg-gray-900 hover:bg-gray-700 active:bg-gray-500 text-white font-bold flex items-center justify-center transition-colors">
            <img src={arrow} alt="" className="max-w-[30px] max-h-[30px] invert" />
          </button>
        </form>
      </section>
    </main>
  )
}

export default Contact