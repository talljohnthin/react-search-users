import React from 'react'
import { Search } from 'react-feather';

const SearchUser = ({ setTerm, setIsSearching, setNoResult, searchRef }) => {

    const handleSearch = (e) => {
        setTerm(e.target.value)
        setNoResult(false)
        setIsSearching(true)
    }
    return (
        <div className="user-search__group">
            <Search className="user-search__group__icon" size="20"/>
           <input ref={searchRef} name="search" className="user-search__field" placeholder="Search user" onChange={handleSearch}/>
        </div>
    )
}

export default SearchUser
