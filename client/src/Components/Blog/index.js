import {useEffect, useState} from 'react'
import axios from 'axios'

export default function Blog(query, pageNumber) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(true)
    const [hasMore, setHasMore] = useState(false)
    const [users, setUsers] = useState([])

    useEffect(()=>{
        setUsers([])
    }, [query])

    useEffect(()=>{
        setLoading(true)
        setError(false)
        let cancel
        axios({
            method:'GET',
            // url:'https://api.github.com/users',
            url:'http://openlibrary.org/search.json',
            params: {q: query, page: pageNumber},
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res=>{
            // console.log(res.data)
            setUsers(prevUsers=>{
                return [...new Set([...prevUsers, ...res.data.docs.map(u => u.title)])]
            })
            setHasMore(res.data.docs.length > 0)
            setLoading(false)
        }).catch(err=>{
            if(axios.isCancel(err)) return
            setError(true)
        })
        return ()=>cancel()
    }, [query, pageNumber])
  return {loading, users, hasMore, error}
}
