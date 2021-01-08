import { useState, useEffect } from 'react'
import { toLowerCaseAndTrim } from '../modules/utils';
import useDebounce from './useDebounce';

const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [isSearching, setIsSearching] = useState(false)
    const [noResult, setNoResult] = useState(false)
    const [term, setTerm] = useState('')
    const debounceTerm = useDebounce(term, 300)

    useEffect(() => {
        fetchUsers()
    }, [])

    useEffect(() => {
        try { 
            const searchUser = async() => {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const json = await response.json()
                if(debounceTerm) {
                    const searchFiltered = json.filter( user => {
                        return  toLowerCaseAndTrim(user.name).includes(toLowerCaseAndTrim(debounceTerm)) ||
                        toLowerCaseAndTrim(user.email).includes(toLowerCaseAndTrim(debounceTerm)) ||
                        toLowerCaseAndTrim(user.username).includes(toLowerCaseAndTrim(debounceTerm))
                    })
                    searchFiltered.length <= 0 ?  setNoResult(true) :  setNoResult(false)
                    setUsers(searchFiltered)
                } else {
                    setUsers(json)
                    setNoResult(false)
                }
                setIsSearching(false)
            } 
            searchUser()
        } catch (error) {
            setIsSearching(false)
            console.log(error)
        }
    }, [debounceTerm])

    async function fetchUsers() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const json = await response.json()
            setUsers(json)
        } catch (error) {
            console.log(error)
        }
    }
    
    return { users, isSearching, setTerm, setIsSearching, noResult, setNoResult }
}

export default useUsers
