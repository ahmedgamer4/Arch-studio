import React from 'react'
import Hero from '../components/Hero'
import data from '../../json/data.json'

function Contact() {
  const { contact } = data
  return (
    <main className='sm:w-10/12 md:w-9/12 mx-auto'>
      <Hero name='Contact' hero={contact.hero} />
    </main>
  )
}

export default Contact