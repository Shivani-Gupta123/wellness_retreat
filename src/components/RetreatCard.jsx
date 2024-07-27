import React from 'react'

const RetreatCard = ({ retreat }) => {
  if ( !retreat || !retreat.image || !retreat.title || !retreat.description || !retreat.date || !retreat.location || !retreat.price){
    return null;
  }
  return (
    <div className='border p-4 rounded shadow-md'>
      <img src={retreat.image} alt={retreat.title} className='w-full h-48 object-cover rounded' />
      <h2 className='text-xl font-bold mt-2'>{retreat.title}</h2>
      <p className='text-gray-600'>{retreat.description}</p>
      <p className='text-gray-600'>{retreat.date}</p>
      <p className='text-gray-600'>{retreat.location}</p>
      <p className='text-gray-600'>${retreat.price}</p>
    </div>
  )
}

export default RetreatCard;
