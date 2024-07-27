import React, {useEffect, useState} from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Filters from './components/Filters'
import RetreatCard from './components/RetreatCard'

const App = () => {
  const[retreats, setRetreats] = useState([]);
  const[filteredRetreats, setFilteredRetreats] = useState([]);
  const[currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    fetchRetreats();
  }, []);

 const fetchRetreats = async () => {
  try{
    const response = await fetch("https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats");
    const data = await response.json();
    setRetreats(data);
    setFilteredRetreats(data);
  } catch (error) {
    console.error('Error', error);
  }}

  const handleFilterChange = (filters) => {
    let filtered = retreats;
    if (filters.date) {
      filtered = filtered.filter(retreat => new Date(retreat.date) >= new Date(filters.date));
    }
    if (filters.type) {
      filtered = filtered.filter(retreat => retreat.type === filters.type);
    }
    setFilteredRetreats(filtered);
    setCurrentPage(1);
  };

  const handleSearch = (query) => {
    const filtered = retreats.filter(retreat => retreat.title.toLowerCase().includes(query.toLowerCase()));
    setFilteredRetreats(filtered);
    setCurrentPage(1);
  }

   const indexofLastItem = currentPage * itemsPerPage;
   const indexofFirstItem = indexofLastItem - itemsPerPage;
   const currentItems = filteredRetreats.slice(indexofFirstItem, indexofLastItem);

   const handleNextPage = () => {
    if(currentPage < Math.ceil(filteredRetreats.length / itemsPerPage)){
      setCurrentPage(currentPage + 1);
    }
   };

   const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
   }





  return (
    <div className='container mx-auto p-4'>
      <Header/>
      <Filters onFilterChange={handleFilterChange}/>
      <Search onSearch={handleSearch}/>
      <div className='grid grid-cols-1 md:drid-cols-2 lg:grid-cols-3 gap-4'>
        {currentItems.map(retreat => (
          <RetreatCard key={retreat.id} retreat={retreat}/>
        ))}
      </div>
      <div className='flex justify-between mt-4'>
        <button onClick={handlePrevPage} disabled={currentPage === 1} className='bg-blue-500 text-white px-4 py-2 rounded'>Previous</button>
        <button onClick={handleNextPage} disabled={currentPage >= Math.ceil(filteredRetreats.length / itemsPerPage)} className='bg-blue-500 text-white px-4 py-2 rounded'>Next</button>
      </div>
    </div>
  )
}

export default App
