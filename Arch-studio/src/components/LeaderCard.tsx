import React from 'react'

type LeaderCardProps = {
  name: string,
  role: string,
  image: {
    desktop: string,
    mobile: string,
    tablet: string,
  }
}

function LeaderCard({ name, role, image }: LeaderCardProps) {
  return (
    <div>
      <div className='w-full h-72 sm:h-auto'>
        <img src={image.desktop} className='w-full h-full object-cover' alt={`${name} picture`} />
      </div>
      <div className='font-bold text-gray-700 mt-3'>
        <h4 className='text-2xl text-black'>{name}</h4>
        <p>{role}</p>
      </div>
    </div>
  )
}

export default LeaderCard