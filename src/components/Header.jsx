import React from 'react'
import image from '../images/health_wellness_full_3.jpg'

const Header = () => {
  return (
    <>
    <header className='bg-blue-500 text-white p-4'>
      <h1 className='text-3x1 font-bold'>Wellness Retreats</h1>
    </header>
    <div className='bg-yellow-100 p-4 rounded hidden sm:block'>
      <img src={image} alt="" className='rounded' />
    </div>
    </>
  )
}

export default Header
