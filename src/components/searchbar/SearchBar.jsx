import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function SearchBar(props) {
  return (
    <div className='search-input'>
        <input placeholder='Search Team' onChange={(e)=>props?.debaunceSeach(props.handleSearchData,e.target.value)} /> 
        <SearchIcon className='search-icon'/>
    </div>
  )
}

export default SearchBar