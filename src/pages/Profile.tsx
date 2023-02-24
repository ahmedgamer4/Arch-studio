import React from 'react'
import data from '../../json/data.json'
import Card from '../components/Card'

function Profile() {
  const projects = data.portfolio.projects
  return (
    <div className='sm:w-10/12 md:w-9/12 mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 sm:p-0'>
      {projects.map(p => (
        <Card image={p.image} date={p.date} name={p.name} key={p.name} link={p.link}/>
      ))}
    </div>
  )
}

export default Profile