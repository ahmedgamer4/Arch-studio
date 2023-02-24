import React, { useEffect, useState } from 'react'
import data from '../../json/data.json'
import Slide from './Slide'

function Gallery() {
  const [currentImage, setCurrentImage] = useState(0)
  const { slides } = data.home.hero

  useEffect(() => {
    const interval = setInterval(() => {
      currentImage === 3 ?
        setCurrentImage(0) :
        setCurrentImage(prev => prev + 1)
    }, 5000)

    return () => clearInterval(interval) 
  }, [currentImage])

  return (
    <div>
      {slides.map((slide) => {
        if (slides.indexOf(slide) === currentImage) return <Slide key={slide.heading} slide={slide} />
      })}
      <div className='sm:relative -left-16'>
        {[0, 1, 2, 3].map(item => (
          <button key={item} className={`w-10 h-10 sm:w-16 sm:h-16 text-sm text-gray-500 sm:text-lg font-bold transition-colors
          ${currentImage === item ? 'bg-gray-700 text-white' : 'bg-white hover:bg-gray-100 '}`}
            onClick={() => setCurrentImage(item)}>
            0{item + 1}
          </button>
        ))}
      </div>
    </div>

  )
}

export default Gallery