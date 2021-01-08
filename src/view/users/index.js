import React, { useEffect, useRef } from 'react'
import useUsers from "./useUsers"
import SearchUser from './SearchUser'
import User from "./User"
import "./users.scss"

const Index = () => {
    const { users, isSearching, setIsSearching, setTerm, noResult, setNoResult } = useUsers()
    const searchRef =  useRef()

    useEffect(() => {
        searchRef.current.focus()
    }, [])

    return (
        <div>
            <div className="user-search">
                <SearchUser setTerm={ setTerm } setIsSearching={ setIsSearching } setNoResult={setNoResult} searchRef={searchRef}/>
            </div>
            <div className="user-list">
                { isSearching ? <span className="user-list__status">Please wait...</span> : users.map(user => <User key={user.id} data={user} />) }
                { noResult && <span className="user-list__status">No user found!</span> }
            </div>
        </div>
    )
}

export default Index
