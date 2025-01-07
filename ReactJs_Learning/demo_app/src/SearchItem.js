import React from 'react'

const SearchItem = ({search, setSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='search item'>Search</label>
        <input 
            id='search'
            type='text'
            aria-label='search-box'
            //role is not working - role = 'search-box'
            placeholder='Search Items'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
    </form>
  )
}

export default SearchItem