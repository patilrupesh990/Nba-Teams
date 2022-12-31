import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
  return (
    <div className='search-input'>
        <input placeholder='Search Team' /> 
        <SearchIcon className='search-icon'/>
    </div>
  )
}

export default SearchBar