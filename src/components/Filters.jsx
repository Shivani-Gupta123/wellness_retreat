import React from 'react'

const Filters = ({ onFilterChange }) => {
    const handleDateChange = (e) => {
        onFilterChange({ date: e.target.value });
    };

    const handleTypeChange =  (e) => {
        onFilterChange({ type: e.target.value });
    };
    


  return (
    <div className='filters mb-4 '>
        <input type="date" onChange={handleDateChange} className='mr-2 p-2 border rounded' />
        <select onChange={handleTypeChange} className='p-2 border rounded '>
            <option value=''>All Types</option>
            <option value='Yoga'>Yoga</option>
            <option value='Meditation'>Meditation</option>
            <option value='Detox'>Detox</option>
        </select>
    </div>
  )
}

export default Filters;
