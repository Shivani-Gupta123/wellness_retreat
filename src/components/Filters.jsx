import React from 'react'

const Filters = ({ onFilterChange }) => {
    const handleDateChange = (e) => {
        onFilterChange({ date: e.target.value });
    };

    const handleTypeChange =  (e) => {
        onFilterChange({ type: e.target.value });
    };
    


  return (
    <div className='filters mb-4 p-2 max-w-full'>
        <input type="date" onChange={handleDateChange} className=' mb-2 md:mb-0 md:mr-2 p-2 border rounded w-full md:w-auto' />
        <select onChange={handleTypeChange} className='p-2 border rounded w-full md:w-auto'>
            <option value=''>All Types</option>
            <option value='Yoga'>Yoga</option>
            <option value='Meditation'>Meditation</option>
            <option value='Detox'>Detox</option>
        </select>
    </div>
  )
}

export default Filters;
