import React, { useState } from 'react'

    const Search = ({ onSearch }) => {
        const [query, setQuery] = useState('');

        const handleSearch = () => {
            onSearch(query);
        };
    
  return (
    <div className='search mb-4'>
        <input type='text' value={query} onChange={(e) => setQuery(e.target.value)}
        placeholder='Search by title'
        className='mr-2 p-2 border rounded '/>
        <button onClick={handleSearch} className='bg-blue-500 text-white px-4 py-2 rounded '>Search</button>
    </div>
  )
}

export default Search;
